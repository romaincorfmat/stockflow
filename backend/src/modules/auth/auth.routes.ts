import { Router } from "express";

import { createUserController } from "./auth.controller.js";

export const authRouter = Router();

authRouter.post("/register", createUserController);
