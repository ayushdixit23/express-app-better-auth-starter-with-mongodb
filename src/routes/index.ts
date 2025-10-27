import { Router } from "express";
import healthRoutes from "./health.routes.js";
import apiRoutes from "./api.routes.js";
import authRoutes from "./auth.routes.js";

const router = Router();

// Mount routes
router.use("/health", healthRoutes);
router.use("/api", apiRoutes);
router.use("/auth", authRoutes);

export default router;

