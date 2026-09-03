import { Request, Response } from "express";

import { createUserSchema } from "./auth.schema.js";
import { createUserService } from "./auth.service.js";

export const createUserController = async (req: Request, res: Response) => {
  const data = createUserSchema.parse(req.body);

  const user = await createUserService(data);

  if (!user) {
    return res.status(400).json({ message: "User creation failed" });
  }

  return res.status(201).json(user);
};
