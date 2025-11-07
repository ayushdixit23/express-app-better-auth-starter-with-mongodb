import dotenv from 'dotenv';

dotenv.config();

/**
 * Validates that required environment variables are present
 * @param key - The environment variable key
 * @param defaultValue - Optional default value
 * @returns The environment variable value or default
 */
const getEnvVariable = (key: string, defaultValue: string = ""): string => {
  const value = process.env[key] || defaultValue;
  
  if (!value) {
    throw new Error(`Environment variable ${key} is required but not defined`);
  }
  
  return value;
};

// Environment Configuration
export const PORT = getEnvVariable('PORT','5000');
export const NODE_ENV = getEnvVariable('NODE_ENV','development');
export const MONGO_URI = getEnvVariable('MONGO_URI','mongodb://localhost:27017/your-database-name');

// CORS Configuration
export const ALLOWED_ORIGINS = getEnvVariable('ALLOWED_ORIGINS','http://localhost:3000,http://localhost:3001').split(',');

// Rate Limiting Configuration
export const RATE_LIMIT_WINDOW_MS = parseInt(getEnvVariable('RATE_LIMIT_WINDOW_MS','900000'), 10); // 15 minutes
export const RATE_LIMIT_MAX_REQUESTS = parseInt(getEnvVariable('RATE_LIMIT_MAX_REQUESTS','400'), 10);

// Email Configuration (SMTP)
export const SMTP_HOST = getEnvVariable('SMTP_HOST', 'smtp.gmail.com');
export const SMTP_PORT = parseInt(getEnvVariable('SMTP_PORT', '587'), 10);
export const SMTP_SECURE = getEnvVariable('SMTP_SECURE', 'false') === 'true';
export const SMTP_USER = getEnvVariable('SMTP_USER');
export const SMTP_PASS = getEnvVariable('SMTP_PASS');
export const SMTP_FROM = getEnvVariable('SMTP_FROM', 'noreply@yourapp.com');

// Better Auth Configuration
export const BETTER_AUTH_SECRET = getEnvVariable('BETTER_AUTH_SECRET');
export const BETTER_AUTH_URL = getEnvVariable('BETTER_AUTH_URL', 'http://localhost:5000');
export const FRONTEND_URL = getEnvVariable('FRONTEND_URL', 'http://localhost:3000');

// OAuth Providers (GitHub & Google)
export const GITHUB_CLIENT_ID = getEnvVariable('GITHUB_CLIENT_ID', '');
export const GITHUB_CLIENT_SECRET = getEnvVariable('GITHUB_CLIENT_SECRET', '');
export const GOOGLE_CLIENT_ID = getEnvVariable('GOOGLE_CLIENT_ID', '');
export const GOOGLE_CLIENT_SECRET = getEnvVariable('GOOGLE_CLIENT_SECRET', '');

