import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import multer from "multer";

import auth from "./middlewares/auth.js";
import authRoutes from "./routes/authRoute.js";
import config from "./config/config.js";
import connectCloudinary from "./config/cloudinary.js";
import connectDB from "./config/database.js";
import logger from "./middlewares/logger.js";
import orderRoutes from "./routes/orderRoute.js";
import productRoutes from "./routes/productRoute.js";
import todoRoutes from "./routes/todoRoute.js";
import userRoutes from "./routes/userRoute.js";

const app = express();

const upload = multer({ storage: multer.memoryStorage() });

connectDB();
connectCloudinary();

app.use(logger);
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({
    appUrl: config.appUrl,
    name: config.name,
    port: config.port,
    status: "OK",
    version: config.version,
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/products", upload.array("images", 5), productRoutes);
app.use("/api/orders", auth, orderRoutes);
app.use("/api/users", auth, upload.single("image"), userRoutes);
app.use("/todos", todoRoutes);

app.listen(config.port, () => {
  console.log(`Server running at port ${config.port}...`);
});
