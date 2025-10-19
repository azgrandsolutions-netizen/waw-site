// src/lib/validation.ts
import { ZodSchema } from "zod";

export function parseBody<T>(schema: ZodSchema<T>, data: unknown): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const msg = result.error.issues
      .map((i) => `${i.path.join(".")}: ${i.message}`)
      .join("; ");
    throw new Error(msg || "Invalid payload");
  }
  return result.data;
}
