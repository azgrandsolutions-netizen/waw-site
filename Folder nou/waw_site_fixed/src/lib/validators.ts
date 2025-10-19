// src/lib/validation.ts
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Introdu un nume valid").max(100),
  email: z.string().email("Email invalid").max(200),
  phone: z.string().max(50).optional().or(z.literal("")),
  message: z.string().min(10, "Mesajul e prea scurt").max(5000),
  // lăsăm câmpul pentru când reactivăm verificarea, dar nu e obligatoriu
  token: z.string().optional(),
});

export type ContactPayload = z.infer<typeof contactSchema>;
