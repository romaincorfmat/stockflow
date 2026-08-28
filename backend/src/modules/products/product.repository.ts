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
