import { Router } from "express";

import {
  createProductController,
  deleteProductController,
  getProductByIdController,
  getProductsController,
} from "./product.controller.js";

export const productRouter = Router();

productRouter.get("/", getProductsController);
productRouter.get("/:id", getProductByIdController);
productRouter.post("/", createProductController);
productRouter.delete("/:id", deleteProductController);
