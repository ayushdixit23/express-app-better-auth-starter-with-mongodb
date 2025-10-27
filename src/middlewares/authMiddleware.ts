import { Request, Response, NextFunction } from "express";
import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../helpers/auth/auth.js";
import { ErrorResponse } from "./responseHandler.js";

/**
 * Middleware to authenticate user using Better Auth session
 * Attaches user data to req.user if authenticated
 */
export const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });

    if (!session || !session.user) {
      throw new ErrorResponse("Unauthorized access", 401);
    }

    (req as any).user = {
      id: session.user.id,
      email: session.user.email,
      name: session.user.name,
    };

    next();
  } catch (error) {
    if (error instanceof ErrorResponse) {
      next(error);
    } else {
      next(new ErrorResponse("Unauthorized access", 401));
    }
  }
};

