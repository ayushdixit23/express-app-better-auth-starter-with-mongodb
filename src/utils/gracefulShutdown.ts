import { Server } from "http";
import { disconnectDb } from "../config/database.js";

/**
 * Gracefully shutdown the application
 * @param server - HTTP server instance
 */
export const setupGracefulShutdown = (server: Server): void => {
  const shutdown = async (signal: string) => {
    

    // Stop accepting new connections
    server.close(async () => {
      try {
        // Close database connection
        await disconnectDb();
        console.log("✅ All connections closed. Exiting process.");
        process.exit(0);
      } catch (error) {
        console.error("❌ Error during shutdown:", error);
        process.exit(1);
      }
    });

    // Force shutdown after timeout
    setTimeout(() => {
      console.error("⚠️  Forced shutdown due to timeout");
      process.exit(1);
    }, 10000); // 10 seconds timeout
  };

  // Listen for termination signals
  process.on("SIGTERM", () => shutdown("SIGTERM"));
  process.on("SIGINT", () => shutdown("SIGINT"));

  // Handle uncaught exceptions
  process.on("uncaughtException", (error: Error) => {
    console.error("❌ Uncaught Exception:", error);
    shutdown("UNCAUGHT_EXCEPTION");
  });

  // Handle unhandled promise rejections
  process.on("unhandledRejection", (reason: unknown, promise: Promise<unknown>) => {
    console.error("❌ Unhandled Rejection at:", promise, "reason:", reason);
    shutdown("UNHANDLED_REJECTION");
  });
};

