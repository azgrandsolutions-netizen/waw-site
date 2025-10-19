export default function Section(props: {
  title?: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container py-10">
      {props.title ? <h1 className="prose-title">{props.title}</h1> : null}
      {props.lead ? <p className="prose-lead mt-2">{props.lead}</p> : null}
      <div className={props.title || props.lead ? "mt-6" : ""}>
        {props.children}
      </div>
    </section>
  );
}
