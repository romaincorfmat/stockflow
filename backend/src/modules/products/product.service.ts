import { createProduct } from "./product.repository.js";
import { CreateProductInput } from "./product.schema.js";

export const createProductService = (data: CreateProductInput) => {
  return createProduct(data);
};
