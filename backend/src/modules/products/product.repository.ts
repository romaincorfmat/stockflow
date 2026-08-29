import { eq } from "drizzle-orm";

import { CreateProductInput } from "./product.schema.js";
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
