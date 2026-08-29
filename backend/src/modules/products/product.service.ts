import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "./product.repository.js";
import { CreateProductInput, UpdateProductInput } from "./product.schema.js";

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

export const updateProductService = async (
  id: number,
  data: UpdateProductInput,
) => {
  return updateProduct(id, data);
};
