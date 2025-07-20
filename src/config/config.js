import dotenv from "dotenv";

dotenv.config();

const config = {
  mongoDBUrl: process.env.MONGODB_URL || "",
  name: process.env.NAME || "",
  port: process.env.PORT || 5000,
  version: process.env.VERSION || "0.0.1",
};

export default config;
