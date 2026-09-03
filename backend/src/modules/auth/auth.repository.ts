import { CreateUserInput } from "./auth.schema.js";
import { db } from "../../db/index.js";
import { users } from "../../db/schema.js";

export const createUser = async (data: CreateUserInput) => {
  const [user] = await db
    .insert(users)
    .values({
      name: data.name,
      email: data.email,
      password: data.password,
    })
    .returning({
      id: users.id,
      name: users.name,
      email: users.email,
      role: users.role,
      createdAt: users.createdAt,
      updatedAt: users.updatedAt,
    });

  return user;
};
