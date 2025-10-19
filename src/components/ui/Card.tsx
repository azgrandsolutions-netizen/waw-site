import type { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
      }}
    >
      {children}
    </div>
  );
}
