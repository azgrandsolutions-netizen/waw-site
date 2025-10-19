// src/app/page.tsx
import { redirect } from "next/navigation";

export default function RootRedirect() {
  // dacă vrei autodetect ulterior, îl mutăm în middleware.
  redirect("/ro");
}
