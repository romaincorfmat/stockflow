import { Router } from "express";

import {
  createProductController,
  deleteProductController,
  getProductByIdController,
  getProductsController,
  updateProductController,
} from "./product.controller.js";

export const productRouter = Router();

productRouter.get("/", getProductsController);
productRouter.get("/:id", getProductByIdController);
productRouter.post("/", createProductController);
productRouter.delete("/:id", deleteProductController);
productRouter.patch("/:id", updateProductController);
