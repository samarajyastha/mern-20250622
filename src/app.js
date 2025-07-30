import bodyParser from "body-parser";
import express from "express";

import config from "./config/config.js";
import authRoutes from "./routes/authRoute.js";
import productRoutes from "./routes/productRoute.js";
import orderRoutes from "./routes/orderRoute.js";
import userRoutes from "./routes/userRoute.js";
import todoRoutes from "./routes/todoRoute.js";
import connectDB from "./config/database.js";
import logger from "./middlewares/logger.js";
import auth from "./middlewares/auth.js";
import roleBasedAuth from "./middlewares/roleBasedAuth.js";
import { ADMIN } from "./constants/roles.js";

const app = express();

connectDB();

app.use(bodyParser.json());
app.use(logger);

app.get("/", (req, res) => {
  res.json({
    name: config.name,
    port: config.port,
    status: "OK",
    version: config.version,
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", auth, roleBasedAuth(ADMIN), userRoutes);
app.use("/todos", todoRoutes);

app.listen(config.port, () => {
  console.log(`Server running at port ${config.port}...`);
});
