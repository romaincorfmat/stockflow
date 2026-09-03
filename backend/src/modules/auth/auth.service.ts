import bcrypt from "bcrypt";

import { createUser } from "./auth.repository.js";
import { CreateUserInput } from "./auth.schema.js";

export const createUserService = async (data: CreateUserInput) => {
  const hashPassword = await bcrypt.hash(data.password, 10);

  return createUser({
    ...data,
    password: hashPassword,
  });
};
