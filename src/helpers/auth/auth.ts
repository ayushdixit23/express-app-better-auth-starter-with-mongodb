import { betterAuth } from "better-auth";
import { Pool } from "pg";
import { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT, DB_SSL } from "../../utils/envConfig.js";
import { sendEmail } from "./lib/send-mail.js";
import { twoFactor } from "better-auth/plugins";

// Create PostgreSQL connection pool
const pool = new Pool({
  host: DB_HOST,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASSWORD,
  port: parseInt(DB_PORT || '5432'),
  ssl: DB_SSL === 'true' ? { rejectUnauthorized: false } : false
});

export const auth = betterAuth({
  appName: "Pharmacy Management System",
  database: pool,
  secret: process.env.BETTER_AUTH_SECRET as string,
  baseURL: process.env.BETTER_AUTH_URL as string,

  plugins: [
    twoFactor({
      otpOptions: {
        async sendOTP({ user, otp }) {
          try {
            await sendEmail({
              sendTo: user.email,
              subject: "Your Two-Factor Authentication Code",
              text: `Your verification code is: ${otp}`,
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                  <div style="background-color: #f8f9fa; border-radius: 8px; padding: 30px; text-align: center;">
                    <h2 style="color: #333; margin-bottom: 20px;">Two-Factor Authentication</h2>
                    <p style="color: #666; margin-bottom: 20px;">Hello ${user.name || 'User'},</p>
                    <p style="color: #666; margin-bottom: 30px;">Use the following code to complete your two-factor authentication:</p>
                    <div style="background-color: #0f766e; color: white; font-size: 32px; font-weight: bold; padding: 20px; border-radius: 8px; letter-spacing: 4px; margin: 20px 0;">
                      ${otp}
                    </div>
                    <p style="color: #666; font-size: 14px; margin-top: 20px;">
                      This code will expire in 10 minutes for security reasons.
                    </p>
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                      <p style="color: #999; font-size: 12px;">
                        If you didn't request this code, please ignore this email or contact support.
                      </p>
                    </div>
                  </div>
                </div>
              `,
            });
          } catch (error) {
            console.error("❌ Failed to send OTP email:", error);
            throw error;
          }
        },
      },
    }),
  ],

  trustedOrigins: [
    "http://localhost:3000",
    "http://localhost:8080",
    "https://pharmy.sodio.tech",
    "https://pharmacy-backend.sodio.tech",
  ],
  user: {
    additionalFields: {
      role: { type: "string", required: true, defaultValue: "PHARMACIST" },
      phoneNumber: { type: "string", required: true },
      pharmacyName: { type: "string", required: true },
      drugLicenseNumber: { type: "string", required: true },
    },
  },

  rateLimit: {
    window: 10,
    max: 100,
  },

  emailVerification: {
    autoSignInAfterVerification: true,
    enabled: true,
    sendVerificationEmail: async ({ user, url }) => {
      const verificationUrl = new URL(url);
      verificationUrl.searchParams.set("callbackURL", `${process.env.FRONTEND_URL}/email-verification`);
      await sendEmail({
        sendTo: user.email,
        subject: "Verify your email",
        text: `Click here to verify your email: ${verificationUrl.toString()}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Verify Your Email</h2>
            <p>Hello ${user.name || "User"},</p>
            <p>Please click the link below to verify your email address:</p>
            <a href="${verificationUrl.toString()}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Verify Email</a>
            <p>If the button doesn't work, copy and paste this link:</p>
            <p style="word-break: break-all; color: #666;">${verificationUrl.toString()}</p>
          </div>
        `,
      });
    },
    sendOnSignUp: true,
  },

  emailAndPassword: {
    enabled: true,
    disableSignUp: false,
    requireEmailVerification: true,
    minPasswordLength: 8,
    maxPasswordLength: 128,
    autoSignIn: true,
    sendResetPassword: async ({ user, url }) => {
      const resetUrl = new URL(url);
      resetUrl.searchParams.set("callbackURL", `${process.env.FRONTEND_URL}/reset-password`);
      await sendEmail({
        sendTo: user.email,
        subject: "Reset your password",
        text: `Click the link to reset your password: ${resetUrl.toString()}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Reset Your Password</h2>
            <p>Hello ${user.name || "User"},</p>
            <p>You requested to reset your password. Click below:</p>
            <a href="${resetUrl.toString()}" style="background-color: #dc3545; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Reset Password</a>
            <p>If the button doesn't work, copy and paste this link:</p>
            <p style="word-break: break-all; color: #666;">${resetUrl.toString()}</p>
          </div>
        `,
      });
    },
  },
});

export type User = typeof auth.$Infer.Session.user;
