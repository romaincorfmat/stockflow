import { Router } from "express";

import {
  createProductController,
  getProductByIdController,
  getProductsController,
} from "./product.controller.js";

export const productRouter = Router();

productRouter.get("/", getProductsController);
productRouter.get("/:id", getProductByIdController);
productRouter.post("/", createProductController);
