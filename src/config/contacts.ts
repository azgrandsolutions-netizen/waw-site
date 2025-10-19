// src/config/contacts.ts
export const PHONE_E164 = "+31613636925"; // ← numărul tău cu +
export const PHONE_TEL = `tel:${PHONE_E164}`;
export const WHATSAPP_URL = `https://wa.me/${PHONE_E164.replace("+", "")}`;
