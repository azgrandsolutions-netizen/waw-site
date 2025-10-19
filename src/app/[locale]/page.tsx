// Pagină simplă ca să existe conținut pe /ro și să nu mai dea 404
type Props = { params: Promise<{ locale: string }> };

export default async function LocaleHome(props: Props) {
  const { locale } = await props.params;
  return (
    <section style={{ padding: "2rem" }}>
      <h1>WAW — {locale.toUpperCase()}</h1>
      <p>Landing de test pentru {locale}. Dacă vezi asta, deploy-ul e OK.</p>
    </section>
  );
}
