import { eq, sql } from "drizzle-orm";

import { CreateProductInput, UpdateProductInput } from "./product.schema.js";
import { db } from "../../db/index.js";
import { products } from "../../db/schema.js";

export const createProduct = async (data: CreateProductInput) => {
  const [product] = await db
    .insert(products)
    .values({
      name: data.name,
      reference: data.reference,
      price: data.price.toString(),
    })
    .returning();

  return product;
};

export const getProducts = () => {
  return db.select().from(products);
};

export const getProductById = async (id: number) => {
  const [product] = await db.select().from(products).where(eq(products.id, id));

  return product;
};

export const deleteProduct = async (id: number) => {
  const [deletedProduct] = await db
    .delete(products)
    .where(eq(products.id, id))
    .returning();

  return deletedProduct;
};

export const updateProduct = async (id: number, data: UpdateProductInput) => {
  const [updatedProduct] = await db
    .update(products)
    .set({
      ...data,
      price: data.price?.toString(),
      updatedAt: new Date(),
    })
    .where(eq(products.id, id))
    .returning();

  return updatedProduct;
};

export const receiveProduct = async (id: number, quantity: number) => {
  const [updatedProduct] = await db
    .update(products)
    .set({
      quantity: sql`${products.quantity} + ${quantity}`,
      updatedAt: new Date(),
    })
    .where(eq(products.id, id))
    .returning();

  return updatedProduct;
};
