import express from "express";

import { errorHandler } from "./middlewares/error.middleware.js";
import { productRouter } from "./modules/products/product.routes.js";

const app = express();

app.use(express.json());

app.use("/api/products", productRouter);

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});
