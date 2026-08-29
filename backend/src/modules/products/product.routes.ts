import { Router } from "express";

import {
  createProductController,
  getProductsController,
} from "./product.controller.js";

export const productRouter = Router();

productRouter.get("/", getProductsController);
productRouter.post("/", createProductController);
