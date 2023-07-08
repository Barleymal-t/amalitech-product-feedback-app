import { z } from "zod";

export const suggestionSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title is too short" })
    .max(100, { message: "Title is too long" }),
  category: z.string(),
  status: z.string(),
  description: z
    .string()
    .min(5, { message: "Description is too short" })
    .max(255, { message: "Description is too long" }),
});
