import { Router } from "express";

import { createProductController } from "./product.controller.js";

export const productRouter = Router();

productRouter.post("/", createProductController);
