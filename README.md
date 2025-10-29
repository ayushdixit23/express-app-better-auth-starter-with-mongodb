# 🚀 Express TypeScript API Server with Better Auth

A **production-ready**, **secure**, and **scalable** Express.js REST API starter template built with TypeScript, MongoDB, and Better Auth authentication. This template follows industry best practices for building modern web applications with enterprise-grade security and authentication features.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Authentication System](#-authentication-system-better-auth)
- [Security Practices](#-security-practices)
- [API Response System](#-api-response-system)
- [API Endpoints](#-api-endpoints)
- [Configuration](#-configuration)
- [Usage Examples](#-usage-examples)
- [Deployment](#-deployment)
- [Best Practices](#-best-practices)

---

## 🎯 Overview

This Express.js application is designed to be a **complete backend solution** that you can use as a starting point for building scalable REST APIs. It comes with:

- ✅ **Pre-configured authentication** using Better Auth
- ✅ **MongoDB integration** with Mongoose ODM
- ✅ **Security-first approach** with multiple layers of protection
- ✅ **TypeScript** for type safety and better developer experience
- ✅ **Class-based response system** for consistent API responses
- ✅ **Production-ready** with graceful shutdown and error handling
- ✅ **Express v5** - Latest version with improved performance

### What Makes This Different?

- **Better Auth Integration**: Modern, flexible authentication with 2FA support
- **Security Hardened**: Multiple security middleware layers (Helmet, Rate Limiting, CORS)
- **Type-Safe**: Full TypeScript coverage with proper type definitions
- **Clean Architecture**: Modular structure with separation of concerns
- **Developer Friendly**: Hot-reload development, detailed error messages

---

## ✨ Key Features

### 🔐 Authentication & Authorization
- **Better Auth** integration with MongoDB
- Email/Password authentication
- **Social OAuth Login** (GitHub & Google)
- Email verification with custom templates
- Password reset functionality
- Two-Factor Authentication (2FA) with OTP
- Session management with cookie caching
- Authentication middleware
- Secure cookie-based sessions (7-day expiry)
- Automatic session refresh

### 🛡️ Security Features
- **Helmet.js**: Secure HTTP headers
- **CORS**: Cross-Origin Resource Sharing configuration
- **Rate Limiting**: Protection against brute-force attacks
- **Input Validation**: Type-safe request handling
- **Error Sanitization**: Prevents information leakage
- **Environment Variables**: Sensitive data protection
- **Session Security**: Secure session management
- **Email Verification Enforcement**: Protected routes require verified emails
- **Security Logging**: Authentication attempts tracking
- **Detailed Error Messages**: User-friendly without exposing sensitive info

### 🏗️ Architecture & Code Quality
- **TypeScript**: Full type safety
- **Class-Based Responses**: Consistent API responses
- **Error Handling**: Centralized error middleware
- **Async Handler**: Automatic error catching
- **Modular Routes**: Clean route organization
- **MongoDB Integration**: Mongoose ODM with connection handling
- **Graceful Shutdown**: Proper cleanup on termination

### 📊 Performance & Monitoring
- **Compression**: HTTP response compression
- **Cookie Caching**: Reduced database queries for sessions
- **Request Logging**: Morgan logger with environment-based formats
- **Health Checks**: Kubernetes/Docker ready endpoints
- **Connection Pooling**: Optimized database connections
- **Session Optimization**: Smart session refresh mechanism

---

## 🔧 Technology Stack

### Core
- **Node.js** - JavaScript runtime
- **Express.js** v5.1+ - Web framework
- **TypeScript** v5.7+ - Type safety
- **MongoDB** - NoSQL database
- **Mongoose** v8.10+ - MongoDB ODM

### Authentication & Security
- **Better Auth** v1.3+ (latest) - Modern authentication ([Express Integration Guide](https://www.better-auth.com/docs/integrations/express))
- **Helmet** v8.0+ - Security headers
- **CORS** v2.8+ - Cross-origin resource sharing
- **Express Rate Limit** v7.5+ - Rate limiting
- **Nodemailer** v6.9+ - Email sending

### Development & Build
- **tsx** - TypeScript execution
- **nodemon** - Hot-reload development
- **dotenv** - Environment variables

### Utilities
- **Morgan** - HTTP request logger
- **Compression** - Response compression

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** or **pnpm**
- **MongoDB** (local installation or cloud instance like MongoDB Atlas)
- **Gmail Account** or SMTP server (for email features)

### Installation

1. **Clone the repository**
    ```bash
   git clone https://github.com/yourusername/express-app.git
    cd express-app
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Set up environment variables**
   
   Copy the example environment file:
   ```bash
   cp env.example .env
   ```
   
   Update `.env` with your configuration:
    ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   
   # MongoDB Configuration
   MONGO_URI=mongodb://localhost:27017/express-app
   
   # CORS Configuration (comma-separated)
   ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001
   
   # Rate Limiting
   RATE_LIMIT_WINDOW_MS=900000      # 15 minutes
   RATE_LIMIT_MAX_REQUESTS=400       # Max requests per window
   
   # Email Configuration (Gmail example)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password       # Use Gmail App Password
   SMTP_FROM=noreply@yourapp.com
   
   # Better Auth Configuration
   BETTER_AUTH_SECRET=your-super-secret-key-at-least-32-characters-long-change-this
   BETTER_AUTH_URL=http://localhost:5000
   FRONTEND_URL=http://localhost:3000
   ```

4. **Start MongoDB**
   
   If using local MongoDB:
   ```bash
   mongod
   ```
   
   Or use MongoDB Atlas (cloud) - update `MONGO_URI` accordingly.

5. **Run the application**
   
   Development mode (with hot-reload):
   ```bash
   npm run dev
   ```
   
   Production mode:
   ```bash
   npm run build
   npm start
   ```

6. **Verify the server is running**
   ```bash
   curl http://localhost:5000
   ```
   
   You should see:
   ```json
   {
     "message": "🚀 Express API Server",
     "version": "1.0.0",
     "environment": "development",
     "timestamp": "2024-01-01T00:00:00.000Z"
   }
    ```

---

## 📁 Project Structure

```
express-app/
├── src/
│   ├── helpers/                    # Helper functions and utilities
│   │   └── connectDb.ts            # MongoDB connection handler
│   │
│   ├── lib/                        # Library utilities
│   │   ├── auth.ts                 # Better Auth configuration
│   │   └── send-mail.ts            # Email sending service (Nodemailer)
│   │
│   ├── middlewares/                # Express middleware
│   │   ├── authMiddleware.ts       # Authentication middleware
│   │   ├── errorMiddleware.ts      # Centralized error handling
│   │   ├── responseHandler.ts      # Success & Error response classes
│   │   └── tryCatch.ts             # Async error wrapper
│   │
│   ├── routes/                     # Route definitions
│   │   ├── index.ts                # Main router (mounts all routes)
│   │   ├── api.routes.ts           # Public API routes
│   │   └── health.routes.ts        # Health check endpoints
│   │
│   ├── utils/                      # Utility functions
│   │   ├── envConfig.ts            # Environment variable validation
│   │   └── gracefulShutdown.ts     # Graceful shutdown handler
│   │
│   └── index.ts                    # Application entry point
│
├── dist/                           # Compiled JavaScript (generated)
├── node_modules/                   # Dependencies
├── .env                            # Environment variables (not in git)
├── env.example                     # Environment template
├── .gitignore                      # Git ignore rules
├── package.json                    # Project dependencies
├── tsconfig.json                   # TypeScript configuration
└── README.md                       # This file
```

### Key Files Explained

| File | Purpose |
|------|---------|
| `src/index.ts` | Main application entry point, middleware setup |
| `src/lib/auth.ts` | Better Auth configuration with 2FA, OAuth, email verification |
| `src/lib/send-mail.ts` | Nodemailer email service for authentication emails |
| `src/middlewares/authMiddleware.ts` | Protects routes, validates sessions, user authentication |
| `src/middlewares/responseHandler.ts` | Standard API response classes |
| `src/utils/envConfig.ts` | Environment variable validation and exports |
| `src/helpers/connectDb.ts` | MongoDB connection handler with retry logic |

---

## 🔐 Authentication System (Better Auth)

This application uses **Better Auth** - a modern, flexible authentication library that provides everything you need for secure user authentication.

### What is Better Auth?

Better Auth is a comprehensive authentication solution that provides:
- 🔑 Multiple authentication strategies (email/password, social logins)
- 📧 Email verification
- 🔄 Password reset
- 🔐 Two-Factor Authentication (2FA)
- 🍪 Secure session management
- 📱 Mobile-friendly
- 🎨 Customizable email templates

### Authentication Features

#### 1. **Email & Password Authentication**

Users can sign up and sign in using email and password.

**Sign Up:**
```bash
POST /api/auth/sign-up/email
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePassword123!",
  "name": "John Doe"
}
```

**Sign In:**
```bash
POST /api/auth/sign-in/email
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePassword123!"
}
```

#### 2. **Social Authentication (OAuth)** *(Optional)*

Users can sign in using their GitHub or Google accounts.

> **Note:** OAuth providers are optional. If you don't configure GitHub/Google credentials, email/password authentication will still work perfectly.

**GitHub Sign In:**
```bash
GET /api/auth/sign-in/github
```

**Google Sign In:**
```bash
GET /api/auth/sign-in/google
```

**Callback URLs:**
- GitHub: `http://localhost:5000/api/auth/callback/github`
- Google: `http://localhost:5000/api/auth/callback/google`

**Setup Instructions:**

**GitHub OAuth Setup:**
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Set **Authorization callback URL** to: `http://localhost:5000/api/auth/callback/github`
4. Copy **Client ID** and **Client Secret** to your `.env` file

**Google OAuth Setup:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create a new OAuth 2.0 Client ID
3. Add **Authorized redirect URI**: `http://localhost:5000/api/auth/callback/google`
4. Copy **Client ID** and **Client Secret** to your `.env` file

#### 3. **Email Verification**

Upon sign-up, users receive a verification email with a custom-styled template. The email includes:
- Professional HTML design
- Verification button
- Fallback verification link
- Security notice

**Configuration:**
```typescript
emailVerification: {
  enabled: true,
  autoSignInAfterVerification: true,
  sendOnSignUp: true,
  sendVerificationEmail: async ({ user, url }) => {
    // Custom email template
    await sendEmail({
      sendTo: user.email,
      subject: "Verify your email address",
      html: `<!-- Beautiful HTML template -->`
    });
  }
}
```

#### 3. **Password Reset**

Forgot password? Users can request a password reset link.

**Request Reset:**
```bash
POST /api/auth/forget-password
Content-Type: application/json

{
  "email": "user@example.com"
}
```

**Reset Password:**
```bash
POST /api/auth/reset-password
Content-Type: application/json

{
  "token": "reset-token-from-email",
  "newPassword": "NewSecurePassword123!"
}
```

#### 4. **Two-Factor Authentication (2FA)**

Enhanced security with OTP-based 2FA.

**Enable 2FA:**
```bash
POST /api/auth/two-factor/enable
Cookie: better-auth.session_token=<session-token>
```

**Verify OTP:**
```bash
POST /api/auth/two-factor/verify
Content-Type: application/json

{
  "code": "123456"
}
```

Users receive a styled email with the 6-digit OTP code.

#### 5. **Session Management**

Better Auth uses secure, HTTP-only cookies for session management.

**Get Session:**
```bash
GET /api/auth/get-session
Cookie: better-auth.session_token=<session-token>
```

**Sign Out:**
```bash
POST /api/auth/sign-out
Cookie: better-auth.session_token=<session-token>
```

### Authentication Middleware

The `authMiddleware.ts` provides robust route protection with detailed error messages:

```typescript
import { authenticateUser } from "./middlewares/authMiddleware.js";

// Protect a route - requires authentication
router.get("/profile", authenticateUser, async (req, res) => {
  // req.user is now available with user data
  const user = req.user;
  
  return new SuccessResponse("Profile retrieved", {
    id: user.id,
    email: user.email,
    name: user.name
  }).send(res);
});
```

**Features:**
- ✅ **Email Verification Check** - Ensures users verify their email before accessing protected routes
- ✅ **Detailed Error Messages** - User-friendly error responses for different scenarios
- ✅ **Security Logging** - Tracks all authentication attempts with IP and path
- ✅ **Multiple Error Scenarios** - Handles expired sessions, invalid tokens, missing credentials, etc.
- ✅ **Smart Error Detection** - Specific messages for JWT errors, expired sessions, etc.

**Error Messages:**
- `"Authentication required. Please provide valid credentials."` (401)
- `"Your session has expired or is invalid. Please sign in again."` (401)
- `"Please verify your email address before accessing this resource."` (403)
- `"Invalid authentication token. Please sign in again."` (401)
- `"Session is invalid. Please sign in again."` (401)

### Session & Cookie Configuration

The application uses advanced cookie caching and session management for optimal performance and security:

**Cookie Caching:**
```typescript
session: {
  cookieCache: {
    enabled: true,
    maxAge: 5 * 60, // Cache for 5 minutes
  },
  expiresIn: 60 * 60 * 24 * 7, // Sessions last 7 days
  updateAge: 60 * 60 * 24, // Update session every 24 hours
}
```

**Security Features:**
- ✅ **Cookie Caching** - Reduces database queries by caching session data
- ✅ **Automatic Expiration** - Sessions expire after 7 days
- ✅ **Session Refresh** - Sessions update every 24 hours for security
- ✅ **Secure Cookies** - HTTPS-only in production
- ✅ **HTTP-Only Cookies** - Not accessible via JavaScript (XSS protection)
- ✅ **SameSite Protection** - CSRF attack prevention

**Benefits:**
1. **Performance** - Cookie caching reduces database load
2. **Security** - Multiple layers of cookie protection
3. **User Experience** - Users stay logged in for 7 days
4. **Auto-refresh** - Sessions automatically renew

### Email Templates

All authentication emails use custom HTML templates with:
- Modern, responsive design
- Consistent branding
- Clear call-to-action buttons
- Security notices
- Fallback plain text links

**Email Types:**
1. **Email Verification** - Sent on sign-up
2. **Password Reset** - Sent when password reset requested
3. **2FA OTP** - Sent when 2FA is enabled

### Security Configuration

```typescript
// Password requirements
minPasswordLength: 8,
maxPasswordLength: 128,

// Email verification
requireEmailVerification: true,

// Rate limiting (per endpoint)
rateLimit: {
  window: 10,  // 10 seconds
  max: 100     // 100 requests max
},

// Session & Cookie Security
session: {
  cookieCache: {
    enabled: true,
    maxAge: 5 * 60, // 5 minutes cache
  },
  expiresIn: 60 * 60 * 24 * 7, // 7 days
  updateAge: 60 * 60 * 24, // Refresh every 24 hours
},

// Cookie Settings
advanced: {
  useSecureCookies: true, // HTTPS only in production
  cookiePrefix: "better-auth",
},

// Trusted origins for CORS
trustedOrigins: [
  "http://localhost:3000",
  "http://localhost:3001"
]
```

### Better Auth Endpoints

All Better Auth endpoints are automatically available at `/api/auth/*` (mounted at `/api/auth/*splat` for Express v5):

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/sign-up/email` | POST | Register new user |
| `/api/auth/sign-in/email` | POST | Sign in with credentials |
| `/api/auth/sign-in/github` | GET | Sign in with GitHub |
| `/api/auth/sign-in/google` | GET | Sign in with Google |
| `/api/auth/callback/github` | GET | GitHub OAuth callback |
| `/api/auth/callback/google` | GET | Google OAuth callback |
| `/api/auth/sign-out` | POST | Sign out user |
| `/api/auth/get-session` | GET | Get current session |
| `/api/auth/verify-email` | GET | Verify email address |
| `/api/auth/forget-password` | POST | Request password reset |
| `/api/auth/reset-password` | POST | Reset password |
| `/api/auth/two-factor/enable` | POST | Enable 2FA |
| `/api/auth/two-factor/verify` | POST | Verify 2FA code |
| `/api/auth/two-factor/disable` | POST | Disable 2FA |

---

## 🛡️ Security Practices

This application implements **multiple layers of security** to protect against common web vulnerabilities.

### 1. **Helmet.js - Security Headers**

Helmet sets various HTTP headers to protect against well-known web vulnerabilities:

```typescript
app.use(helmet());
```

**Headers Set:**
- `Content-Security-Policy`: Prevents XSS attacks
- `X-Frame-Options`: Prevents clickjacking
- `X-Content-Type-Options`: Prevents MIME sniffing
- `Strict-Transport-Security`: Enforces HTTPS
- `X-DNS-Prefetch-Control`: Controls DNS prefetching

### 2. **Rate Limiting**

Protects against brute-force attacks and DDoS:

```typescript
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 400,                   // Max 400 requests per window
  message: "Too many requests, please try again later."
});
```

**Benefits:**
- Prevents brute-force login attempts
- Protects against DDoS attacks
- Reduces server load from malicious actors

### 3. **CORS (Cross-Origin Resource Sharing)**

Controlled access from specific domains:

```typescript
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || ALLOWED_ORIGINS.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,  // Allow cookies
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"]
}));
```

**Configuration:**
- Whitelist specific origins in `.env`
- Supports credentials (cookies)
- Configurable HTTP methods

### 4. **Input Validation & Type Safety**

TypeScript provides compile-time type checking:

```typescript
interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

router.post("/users", async (req: Request, res: Response) => {
  const { name, email, password } = req.body as CreateUserRequest;
  // Type-safe handling
});
```

### 5. **Environment Variables**

Sensitive data is stored in environment variables:

```typescript
// Never hardcode secrets
const secret = process.env.BETTER_AUTH_SECRET;
const dbUri = process.env.MONGO_URI;
```

**Best Practices:**
- Use `.env` file (not committed to git)
- Validate required variables on startup
- Use different values for dev/prod

### 6. **Secure Session Management**

Better Auth uses HTTP-only, secure cookies:

```typescript
// Cookies are:
// - HTTP-only (not accessible via JavaScript)
// - Secure (HTTPS only in production)
// - SameSite (CSRF protection)
```

### 7. **Error Sanitization**

Prevents information leakage:

```typescript
// Don't expose stack traces in production
if (NODE_ENV === "production") {
  res.status(500).json({
    success: false,
    message: "Internal server error"
  });
} else {
  // Show details only in development
  console.error(error.stack);
}
```

### 8. **MongoDB Security**

```typescript
// Connection string should include credentials
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname

// Use connection pooling
mongoose.connect(MONGO_URI, {
  // Mongoose handles pooling automatically
});
```

### 9. **Password Security**

Better Auth automatically:
- Hashes passwords using bcrypt
- Enforces minimum password length (8 characters)
- Never stores passwords in plain text
- Supports password strength requirements

### 10. **Trust Proxy**

For applications behind a reverse proxy (Nginx, Load Balancer):

```typescript
if (NODE_ENV === "production") {
  app.set("trust proxy", 1);
}
```

**Why?**
- Accurate client IP addresses for rate limiting
- Proper HTTPS detection
- Correct forwarded headers

### Security Checklist

- ✅ All secrets in environment variables
- ✅ Rate limiting enabled
- ✅ CORS configured with whitelist
- ✅ Helmet.js security headers
- ✅ HTTPS in production
- ✅ Secure session cookies
- ✅ Password hashing
- ✅ Email verification
- ✅ Input validation
- ✅ Error sanitization
- ✅ MongoDB authentication
- ✅ 2FA support

---

## 🎯 API Response System

This application uses a **class-based response system** for consistent API responses.

### Response Classes

#### 1. **SuccessResponse**

Used for successful operations:

```typescript
import { SuccessResponse } from "../middlewares/responseHandler.js";

router.get("/users/:id", asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  
  return new SuccessResponse(
    "User retrieved successfully",  // Message
    user,                            // Data
    200                              // Status code (optional, default: 200)
  ).send(res);
}));
```

**Response Format:**
```json
{
  "success": true,
  "message": "User retrieved successfully",
  "statusCode": 200,
  "data": {
    "id": "123",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### 2. **ErrorResponse**

Used for error handling:

```typescript
import { ErrorResponse } from "../middlewares/responseHandler.js";

if (!user) {
  throw new ErrorResponse("User not found", 404);
}

// Or with additional data
throw new ErrorResponse(
  "Validation failed",
  400,
  { fields: ["email", "password"] }
);
```

**Response Format:**
```json
{
  "success": false,
  "message": "User not found",
  "statusCode": 404
}
```

### Status Codes

| Code | Status | Usage |
|------|--------|-------|
| 200 | OK | Successful GET, PUT, PATCH |
| 201 | Created | Successful POST |
| 204 | No Content | Successful DELETE |
| 400 | Bad Request | Invalid input |
| 401 | Unauthorized | Authentication required |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource not found |
| 500 | Internal Error | Server error |

### Async Handler

Automatically catches errors in async routes:

```typescript
import asyncHandler from "../middlewares/tryCatch.js";

router.get("/users", asyncHandler(async (req, res) => {
  // Any error thrown here is automatically caught
  const users = await User.find();
  return new SuccessResponse("Users retrieved", users).send(res);
}));
```

**Without asyncHandler (don't do this):**
```typescript
router.get("/users", async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);  // Manual error handling
  }
});
```

---

## 📡 API Endpoints

### Root Endpoint

```
GET /
```

Returns API information and status.

**Response:**
```json
{
  "message": "🚀 Express API Server",
  "version": "1.0.0",
  "environment": "development",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Health Check Endpoints

| Endpoint | Method | Description | Use Case |
|----------|--------|-------------|----------|
| `/health` | GET | Full health check | Monitoring dashboard |
| `/health/live` | GET | Liveness probe | Kubernetes liveness |
| `/health/ready` | GET | Readiness check | Kubernetes readiness |

**Example:**
```bash
curl http://localhost:5000/health
```

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123.456,
  "environment": "development",
  "services": {
    "database": "connected",
    "server": "running"
  }
}
```

### Authentication Endpoints

All auth endpoints are under `/api/auth/*` (provided by Better Auth).

See [Authentication System](#-authentication-system-better-auth) section for details.

### API Routes (Examples)

| Endpoint | Method | Description | Auth Required |
|----------|--------|-------------|---------------|
| `/api/me` | GET | Get current user session | Yes |
| `/api/profile` | GET | Get authenticated user profile | Yes |
| `/api/data` | GET | Get sample data | No |
| `/api/query` | GET | Database query example | No |
| `/api/users` | POST | Create user | No |
| `/api/users/:id` | GET | Get user by ID | No |
| `/api/users/:id` | PUT | Update user | No |
| `/api/users/:id` | DELETE | Delete user | No |
| `/api/posts` | GET | Get paginated posts | No |
| `/api/stats` | GET | Get statistics | No |
| `/api/error` | GET | Error handling demo | No |

**Note:** These are example routes. Implement your own routes based on your application needs.

#### Getting User Session

As per [Better Auth Express Integration](https://www.better-auth.com/docs/integrations/express), you can retrieve the current user session using `fromNodeHeaders`:

```typescript
import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../lib/auth.js";

router.get("/api/me", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });
  return res.json(session);
});
```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# ===================================
# SERVER CONFIGURATION
# ===================================
PORT=5000
NODE_ENV=development

# ===================================
# DATABASE CONFIGURATION
# ===================================
# Local MongoDB
MONGO_URI=mongodb://localhost:27017/express-app

# Or MongoDB Atlas (Cloud)
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority

# ===================================
# CORS CONFIGURATION
# ===================================
# Comma-separated list of allowed origins
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001,http://localhost:8080

# ===================================
# RATE LIMITING
# ===================================
RATE_LIMIT_WINDOW_MS=900000        # 15 minutes in milliseconds
RATE_LIMIT_MAX_REQUESTS=400         # Max requests per window per IP

# ===================================
# EMAIL CONFIGURATION (SMTP)
# ===================================
# Gmail Example (Use App Password, not regular password)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-app-password
SMTP_FROM=noreply@yourapp.com

# Other SMTP providers:
# SendGrid: smtp.sendgrid.net
# Mailgun: smtp.mailgun.org
# AWS SES: email-smtp.region.amazonaws.com

# ===================================
# BETTER AUTH CONFIGURATION
# ===================================
# Generate a secure random string (at least 32 characters)
# You can use: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
BETTER_AUTH_SECRET=your-super-secret-key-at-least-32-characters-long-change-this-in-production

# Backend URL (where your Express server runs)
BETTER_AUTH_URL=http://localhost:5000

# Frontend URL (where your React/Vue/Next.js app runs)
FRONTEND_URL=http://localhost:3000

# ===================================
# OAUTH PROVIDERS (GitHub & Google)
# ===================================
# OPTIONAL - Leave empty if you don't want to use OAuth
# GitHub OAuth - Get from: https://github.com/settings/developers
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# Google OAuth - Get from: https://console.cloud.google.com/apis/credentials
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### Gmail Setup for SMTP

To use Gmail for sending emails:

1. **Enable 2-Step Verification**
   - Go to Google Account → Security
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to Google Account → Security → App passwords
   - Select "Mail" and "Other"
   - Copy the 16-character password
   - Use this as `SMTP_PASS` in `.env`

3. **Update `.env`**
   ```env
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=abcd efgh ijkl mnop  # 16-character app password
   ```

### Environment Validation

The application validates required environment variables on startup:

```typescript
// src/utils/envConfig.ts
function getEnvVariable(key: string): string {
  const value = process.env[key];
  if (!value) {
    console.error(`❌ Missing required environment variable: ${key}`);
    process.exit(1);
  }
  return value;
}

// Required variables
export const MONGO_URI = getEnvVariable('MONGO_URI');
export const BETTER_AUTH_SECRET = getEnvVariable('BETTER_AUTH_SECRET');
```

---

## 💻 Usage Examples

### Creating a Protected Route

```typescript
import { Router } from "express";
import asyncHandler from "../middlewares/tryCatch.js";
import { SuccessResponse, ErrorResponse } from "../middlewares/responseHandler.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const router = Router();

// Protected route - requires authentication
router.get(
  "/profile",
  authenticateUser,
  asyncHandler(async (req, res) => {
    // req.user is available after authentication
    const userId = req.user.id;
    const user = await User.findById(userId);
    
    if (!user) {
      throw new ErrorResponse("User not found", 404);
    }
    
    return new SuccessResponse("Profile retrieved", {
      id: user.id,
      name: user.name,
      email: user.email
    }).send(res);
  })
);

export default router;
```

### Creating a Public Route

```typescript
router.get(
  "/posts",
  asyncHandler(async (req, res) => {
    const posts = await Post.find().limit(10);
    
    return new SuccessResponse(
      "Posts retrieved successfully",
      { posts, count: posts.length }
    ).send(res);
  })
);
```

### Pagination Example

```typescript
router.get(
  "/posts",
  asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    
    const [posts, total] = await Promise.all([
      Post.find().skip(skip).limit(limit),
      Post.countDocuments()
    ]);
    
    return new SuccessResponse("Posts retrieved", {
      posts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasNext: page < Math.ceil(total / limit),
        hasPrevious: page > 1
      }
    }).send(res);
  })
);
```

### Error Handling Example

```typescript
router.post(
  "/users",
  asyncHandler(async (req, res) => {
    const { email, name, password } = req.body;
    
    // Validation
    if (!email || !name || !password) {
      throw new ErrorResponse(
        "Missing required fields",
        400,
        { required: ["email", "name", "password"] }
      );
    }
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new ErrorResponse("User already exists", 409);
    }
    
    // Create user
    const user = await User.create({ email, name, password });
    
    return new SuccessResponse(
      "User created successfully",
      { id: user.id, email: user.email },
      201
    ).send(res);
  })
);
```

---

## 🚀 Deployment

### Production Build

```bash
# Build TypeScript to JavaScript
npm run build

# Start production server
npm start
```

### Environment Setup

1. Set `NODE_ENV=production`
2. Use production MongoDB URI
3. Generate a secure `BETTER_AUTH_SECRET`
4. Configure SMTP for production
5. Set correct `BETTER_AUTH_URL` and `FRONTEND_URL`

### Docker Deployment

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build TypeScript
RUN npm run build

# Expose port
EXPOSE 5000

# Start application
CMD ["npm", "start"]
```

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - MONGO_URI=mongodb://mongo:27017/express-app
      - BETTER_AUTH_SECRET=${BETTER_AUTH_SECRET}
    depends_on:
      - mongo

  mongo:
    image: mongo:7
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
```

Build and run:
```bash
docker-compose up -d
```

### Cloud Deployment

#### Vercel / Railway / Render

1. Connect your GitHub repository
2. Set environment variables in dashboard
3. Deploy

#### AWS / Google Cloud / Azure

1. Use Docker image
2. Configure load balancer
3. Set up MongoDB (MongoDB Atlas recommended)
4. Configure environment variables
5. Deploy

### Health Checks

Use the health endpoints for monitoring:

```bash
# Kubernetes liveness probe
livenessProbe:
  httpGet:
    path: /health/live
    port: 5000
  initialDelaySeconds: 30
  periodSeconds: 10

# Kubernetes readiness probe
readinessProbe:
  httpGet:
    path: /health/ready
    port: 5000
  initialDelaySeconds: 5
  periodSeconds: 5
```

---

## 📝 Best Practices

### 1. **Always Use asyncHandler**

```typescript
✅ router.get("/", asyncHandler(async (req, res) => { ... }));
❌ router.get("/", async (req, res) => { ... });
```

### 2. **Use Response Classes**

```typescript
✅ return new SuccessResponse("Success", data).send(res);
✅ throw new ErrorResponse("Error", 400);
❌ res.json({ success: true, data });
❌ res.status(400).json({ error: "Error" });
```

### 3. **Validate Input**

```typescript
if (!email || !password) {
  throw new ErrorResponse("Missing required fields", 400);
}
```

### 4. **Protect Sensitive Routes**

```typescript
router.get("/profile", authenticateUser, handler);
```

### 5. **Use Environment Variables**

```typescript
✅ const secret = process.env.SECRET;
❌ const secret = "hardcoded-secret";
```

### 6. **Handle Errors Gracefully**

```typescript
try {
  // Operation
} catch (error) {
  throw new ErrorResponse("Operation failed", 500);
}
```

### 7. **Use TypeScript Types**

```typescript
interface CreateUserDTO {
  email: string;
  name: string;
  password: string;
}
```

### 8. **Log Important Events**

```typescript
console.log("✅ User created:", user.email);
console.error("❌ Database error:", error);
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot-reload |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Run production server (requires build) |
| `npm run clean` | Remove build artifacts |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License.

---

## 🙏 Acknowledgments

- **Express.js** - Web framework
- **Better Auth** - Authentication library
- **MongoDB** - Database
- **TypeScript** - Type safety
- Node.js community for best practices

---

## 📞 Support & Documentation

### Resources

- [Better Auth Documentation](https://www.better-auth.com/docs)
- [Express.js Documentation](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

### Troubleshooting

**Server won't start:**
- Check if MongoDB is running
- Verify `.env` file exists and is configured
- Check port 5000 is not in use

**Authentication not working:**
- Verify `BETTER_AUTH_SECRET` is set (minimum 32 characters)
- Check cookies are enabled in your client
- Verify `BETTER_AUTH_URL` matches your server URL

**Emails not sending:**
- Verify SMTP credentials are correct
- For Gmail, use App Password not regular password
- Check SMTP port and host are correct

**CORS errors:**
- Add your frontend URL to `ALLOWED_ORIGINS` in `.env`
- Ensure credentials are included in fetch requests

---

## 🎯 What's Next?

After setting up this template, you can:

1. **Add More Authentication Methods**
   - Social logins (Google, GitHub, etc.)
   - Magic link authentication
   - Phone number authentication

2. **Implement Authorization**
   - Role-based access control (RBAC)
   - Permission system
   - Resource ownership checks

3. **Add More Features**
   - File upload (images, documents)
   - Real-time features (WebSockets)
   - Caching (Redis)
   - Background jobs (Bull Queue)

4. **Improve Monitoring**
   - APM (New Relic, DataDog)
   - Error tracking (Sentry)
   - Logging service (Loggly, Papertrail)

5. **Testing**
   - Unit tests (Jest)
   - Integration tests (Supertest)
   - E2E tests (Cypress)

---

**Happy Coding! 🚀**

Built with ❤️ using Express.js, TypeScript, and Better Auth
