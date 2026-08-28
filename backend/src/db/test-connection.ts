import "dotenv/config";

import { sql } from "drizzle-orm";

import { db } from "./index.js";

const result = await db.execute(sql`SELECT NOW()`);

console.log("Database connection successful");

console.log(result);
