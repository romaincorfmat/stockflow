import { Request, Response } from "express";

import { createProductSchema } from "./product.schema.js";
import {
  createProductService,
  getProductByIdService,
  getProductsService,
} from "./product.service.js";

export const createProductController = async (req: Request, res: Response) => {
  const data = createProductSchema.parse(req.body);

  const product = await createProductService(data);

  return res.status(201).json(product);
};

export const getProductsController = async (_req: Request, res: Response) => {
  const products = await getProductsService();

  return res.status(200).json(products);
};

export const getProductByIdController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: "Invalid product ID",
    });
  }

  const product = await getProductByIdService(id);

  if (!product) return res.status(404).json({ message: "Product not found" });

  return res.status(200).json(product);
};
