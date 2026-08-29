import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
} from "./product.repository.js";
import { CreateProductInput } from "./product.schema.js";

export const createProductService = (data: CreateProductInput) => {
  return createProduct(data);
};

export const getProductsService = async () => {
  return getProducts();
};

export const getProductByIdService = async (id: number) => {
  return getProductById(id);
};

export const deleteProductService = async (id: number) => {
  return deleteProduct(id);
};
