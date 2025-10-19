// src/components/LeadFormMini.tsx
"use client";

import { useState } from "react";

export default function LeadFormMini() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: "necompletat@site.local",
          phone,
          message: "Cerere rapidă de ofertă",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok)
        throw new Error(data?.error ?? "Eroare la trimitere");
      setSent(true);
    } catch (err) {
      alert("Eroare la trimitere. Încearcă din nou.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="p-6 rounded-2xl bg-green-50 text-green-700">
        Mulțumim! Te vom contacta cât mai curând.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3 bg-gray-50 p-6 rounded-2xl">
      <h3 className="text-xl font-semibold">Cere ofertă rapidă</h3>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          required
          placeholder="Nume"
          className="flex-1 p-3 rounded-xl border"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          placeholder="Telefon"
          className="flex-1 p-3 rounded-xl border"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button disabled={loading} className="btn btn-primary w-full sm:w-auto">
        {loading ? "Se trimite..." : "Trimite"}
      </button>
    </form>
  );
}
