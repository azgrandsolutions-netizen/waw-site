export function Card(props: {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="card p-5">
      {props.title ? (
        <div className="mb-2 font-semibold">{props.title}</div>
      ) : null}
      <div>{props.children}</div>
      {props.footer ? (
        <div className="mt-4 border-t pt-3 text-sm text-gray-600">
          {props.footer}
        </div>
      ) : null}
    </div>
  );
}
