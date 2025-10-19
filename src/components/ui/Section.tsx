import type { ReactNode } from "react";

export default function Section({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <section style={{ padding: "16px 0" }}>
      {title ? (
        <h2 style={{ margin: "0 0 10px", fontSize: "1.25rem" }}>{title}</h2>
      ) : null}
      {children}
    </section>
  );
}
