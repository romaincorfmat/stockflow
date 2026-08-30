import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  receiveProduct,
  searchProducts,
  updateProduct,
} from "./product.repository.js";
import {
  CreateProductInput,
  ReceiveProductInput,
  SearchProductInput,
  UpdateProductInput,
} from "./product.schema.js";
import { db } from "../../db/index.js";
import { createStockMovement } from "../stock-movements/stock-movement.repository.js";

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
  return db.transaction(async (tx) => {
    const updatedProduct = await receiveProduct(id, data.quantity, tx);

    if (!updatedProduct) {
      return undefined;
    }

    await createStockMovement(id, data.quantity, "reception", tx);

    return updatedProduct;
  });
};

export const searchProductsService = async (data: SearchProductInput) => {
  return searchProducts(data.q);
};
