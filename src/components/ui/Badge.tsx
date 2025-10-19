export function Badge(props: {
  children: React.ReactNode;
  tone?: "brand" | "accent" | "success" | "warning" | "danger" | "neutral";
}) {
  const tone = props.tone ?? "neutral";
  const map: Record<string, string> = {
    brand: "border-brand/30 text-brand",
    accent: "border-accent/30 text-accent",
    success: "border-green-600/30 text-green-700",
    warning: "border-amber-600/30 text-amber-700",
    danger: "border-red-600/30 text-red-700",
    neutral: "border-gray-300 text-gray-700",
  };
  return <span className={`badge ${map[tone]}`}>{props.children}</span>;
}
