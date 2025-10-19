export function Alert(props: {
  title?: string;
  children?: React.ReactNode;
  tone?: "success" | "warning" | "danger" | "info";
}) {
  const tone = props.tone ?? "info";
  const map: Record<string, string> = {
    info: "border-blue-200 bg-blue-50 text-blue-800",
    success: "border-green-200 bg-green-50 text-green-800",
    warning: "border-amber-200 bg-amber-50 text-amber-800",
    danger: "border-red-200 bg-red-50 text-red-800",
  };
  return (
    <div className={`rounded-xl border p-4 ${map[tone]}`}>
      {props.title ? <div className="font-semibold">{props.title}</div> : null}
      {props.children ? (
        <div className="mt-1 text-sm">{props.children}</div>
      ) : null}
    </div>
  );
}
