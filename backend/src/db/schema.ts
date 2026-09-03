import {
  integer,
  numeric,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  reference: varchar("reference", { length: 100 }).notNull().unique(),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  quantity: integer("quantity").notNull().default(0),
  reservedQuantity: integer("reserved_quantity").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const stockMovements = pgTable("stock_movements", {
  id: serial("id").primaryKey(),
  productId: integer("product_id")
    .notNull()
    .references(() => products.id),
  quantityChange: integer("quantity_change").notNull(),
  movementType: varchar("movement_type").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  role: varchar("role").default("user").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
