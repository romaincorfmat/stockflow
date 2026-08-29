import { Request, Response } from "express";

import { createProductSchema } from "./product.schema.js";
import { createProductService, getProductsService } from "./product.service.js";

export const createProductController = async (req: Request, res: Response) => {
  const data = createProductSchema.parse(req.body);

  const product = await createProductService(data);

  return res.status(201).json(product);
};

export const getProductsController = async (_req: Request, res: Response) => {
  const products = await getProductsService();

  return res.status(200).json(products);
};
