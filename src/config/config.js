import dotenv from "dotenv";

dotenv.config();

const config = {
  appUrl: process.env.APP_URL || "",
  mongoDBUrl: process.env.MONGODB_URL || "",
  name: process.env.NAME || "",
  port: process.env.PORT || 5000,
  version: process.env.VERSION || "0.0.1",
  jwtSecret: process.env.JWT_SECRET || "",
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME || "",
    apiKey: process.env.CLOUDINARY_API_KEY || "",
    apiSecret: process.env.CLOUDINARY_API_SECRET || "",
  },
  khalti: {
    apiKey: process.env.KHALTI_API_KEY || "",
    apiUrl: process.env.KHALTI_API_URL || "",
  },
  emailApiKey: process.env.EMAIL_API_KEY || "",
  gemini: {
    url: process.env.GEMINI_URL || "",
    apiKey: process.env.GEMINI_API_KEY || "",
  },
  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY,
  },
};

export default config;
