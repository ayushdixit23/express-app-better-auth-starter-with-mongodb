import { Router } from "express";
import { auth } from "../helpers/auth.js";

const router = Router();

/**
 * Mount all Better Auth routes
 * Handles:
 * - POST /auth/sign-up/email - Email sign up
 * - POST /auth/sign-in/email - Email sign in
 * - POST /auth/sign-out - Sign out
 * - POST /auth/forgot-password - Request password reset
 * - POST /auth/reset-password - Reset password
 * - POST /auth/verify-email - Verify email
 * - GET /auth/get-session - Get current session
 * - POST /auth/two-factor/enable - Enable 2FA
 * - POST /auth/two-factor/verify - Verify 2FA
 * - POST /auth/two-factor/disable - Disable 2FA
 * And many more...
 */
router.all("/*", async (req, res) => {
  return auth.handler(req, res);
});

export default router;

