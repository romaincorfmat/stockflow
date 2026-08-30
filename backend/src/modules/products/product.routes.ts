import { Router } from "express";

import {
  createProductController,
  deleteProductController,
  getProductByIdController,
  getProductsController,
  receiveProductController,
  searchProductsController,
  updateProductController,
} from "./product.controller.js";

export const productRouter = Router();

productRouter.get("/", getProductsController);

productRouter.get("/search", searchProductsController);

productRouter.get("/:id", getProductByIdController);

productRouter.post("/", createProductController);

productRouter.delete("/:id", deleteProductController);

productRouter.patch("/:id", updateProductController);

productRouter.post("/:id/receive", receiveProductController);
