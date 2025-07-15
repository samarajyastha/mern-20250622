import express from "express";
import config from "./config/config.js";
import productRoutes from "./routes/productRoute.js";
import todoRoutes from "./routes/todoRoute.js";

const app = express();

app.get("/", (req, res) => {
  res.json({
    name: config.name,
    port: config.port,
    status: "OK",
    version: config.version,
  });
});

app.use("/products", productRoutes);
app.use("/todos", todoRoutes);

app.listen(config.port, () => {
  console.log(`Server running at port ${config.port}...`);
});
