import { Request, Response } from "express";

import { createProductSchema } from "./product.schema.js";
import { createProductService } from "./product.service.js";

export const createProductController = async (req: Request, res: Response) => {
  const data = createProductSchema.parse(req.body);

  const product = await createProductService(data);

  return res.status(201).json(product);
};
