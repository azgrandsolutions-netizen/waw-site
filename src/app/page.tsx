﻿// Redirect server-side: /  ->  /ro
import { redirect } from "next/navigation";

export default function RootRedirect() {
  redirect("/ro");
}
