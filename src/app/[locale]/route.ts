// src/app/[locale]/route.ts
export async function GET() {
  return new Response("OK — [locale] route handler", {
    status: 200,
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
