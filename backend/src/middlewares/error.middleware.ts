import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";

type PostgresError = {
  code?: string;
  constraint_name?: string;
};

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  if (error instanceof ZodError) {
    return res.status(400).json({
      message: "Invalid request data. Validation Failed",
      errors: error.issues,
    });
  }

  const cause =
    error instanceof Error
      ? (error.cause as PostgresError | undefined)
      : undefined;

  if (
    cause?.code === "23505" &&
    cause.constraint_name === "products_reference_unique"
  ) {
    return res.status(409).json({
      message: "Product reference already exists",
    });
  }

  //       console.log("ERROR HANDLER CALLED");
  //   console.dir(error, { depth: null });

  return res.status(500).json({
    message: "Internal server error",
  });
};
