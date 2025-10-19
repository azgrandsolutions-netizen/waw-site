// src/config/business.ts
export const BUSINESS = {
  name: "AZGS",
  legalName: "AZ Grand Solutions BV", // ajustează dacă e altă formă
  phoneE164: "+31612345678",
  email: "contact@example.com",
  whatsapp: "https://wa.me/31612345678",
  address: {
    street: "Straat 1",
    city: "Amsterdam",
    postalCode: "1011AA",
    country: "NL",
  },
  geo: { lat: 52.3676, lng: 4.9041 }, // coordonate Amsterdam; ajustează
  openingHours: [
    { day: "Mo-Fr", hours: "08:00-18:00" },
    { day: "Sa", hours: "10:00-14:00" },
  ],
};
