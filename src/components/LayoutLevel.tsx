// src/components/LayoutLevel.tsx
"use client";
import { createContext, useContext } from "react";

type Level = "layout" | "page";
const Ctx = createContext<Level>("page");

export function useLayoutLevel() {
  return useContext(Ctx);
}

export const LayoutLevelProvider = Ctx.Provider;
