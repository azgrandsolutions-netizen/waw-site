// src/lib/validators.ts
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Numele e prea scurt"),
  phone: z.string().min(5, "Telefon invalid"),
  email: z.string().email().optional().or(z.literal("")),
  message: z.string().min(5, "Mesajul e prea scurt"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const leadSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(5),
  email: z.string().email().optional().or(z.literal("")),
  address: z.string().optional().or(z.literal("")),
  details: z.string().min(5),
});

export type LeadInput = z.infer<typeof leadSchema>;
