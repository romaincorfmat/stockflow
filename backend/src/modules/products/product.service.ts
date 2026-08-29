import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  receiveProduct,
  updateProduct,
} from "./product.repository.js";
import {
  CreateProductInput,
  ReceiveProductInput,
  UpdateProductInput,
} from "./product.schema.js";

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

export const receiveProductService = async (
  id: number,
  data: ReceiveProductInput,
) => {
  return receiveProduct(id, data.quantity);
};
