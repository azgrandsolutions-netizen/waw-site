export default function Footer({ locale }: { locale: string }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container py-6 text-sm text-gray-600">
        © {year} WAW — {locale.toUpperCase()}
      </div>
    </footer>
  );
}
