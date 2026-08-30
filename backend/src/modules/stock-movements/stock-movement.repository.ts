import { db } from "../../db/index.js";
import { stockMovements } from "../../db/schema.js";
import { Database } from "../../db/types.js";

type StockMovementType = "reception" | "oreder" | "adjustment";

export const createStockMovement = async (
  productId: number,
  quantityChange: number,
  movementType: StockMovementType,
  database: Database = db,
) => {
  const [stockMovement] = await database
    .insert(stockMovements)
    .values({
      productId,
      quantityChange,
      movementType,
    })
    .returning();

  return stockMovement;
};
