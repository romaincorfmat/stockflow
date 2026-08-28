import z from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1),
  reference: z.string().min(1),
  price: z.number().min(0),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;
