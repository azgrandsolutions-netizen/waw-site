// src/components/LeadFormUrgente.tsx
"use client";

import { useState } from "react";

export default function LeadFormUrgente() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    message: "",
  });
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
          name: form.name,
          email: "urgent@site.local",
          phone: form.phone,
          message:
            `URGENȚĂ:\nAdresă: ${form.address || "-"}\n` +
            `Descriere: ${form.message || "-"}\n` +
            `(lead generat din pagina /urgente)`,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok)
        throw new Error(data?.error ?? "Eroare la trimitere");
      setSent(true);
      setForm({ name: "", phone: "", address: "", message: "" });
    } catch (err) {
      alert("Eroare la trimitere. Încearcă din nou.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="p-6 rounded-2xl bg-green-50 text-green-700">
        Mulțumim! Am primit urgența și revenim cât mai rapid.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 bg-gray-50 p-6 rounded-2xl">
      <h3 className="text-xl font-semibold">Raportează urgența</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="label" htmlFor="name">
            Nume
          </label>
          <input
            id="name"
            className="input"
            required
            minLength={2}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label className="label" htmlFor="phone">
            Telefon
          </label>
          <input
            id="phone"
            className="input"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+31 ..."
          />
        </div>
      </div>

      <div>
        <label className="label" htmlFor="address">
          Adresă (opțional)
        </label>
        <input
          id="address"
          className="input"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          placeholder="Stradă, nr., oraș"
        />
      </div>

      <div>
        <label className="label" htmlFor="message">
          Ce s-a întâmplat?
        </label>
        <textarea
          id="message"
          className="textarea"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Ex: țeavă spartă, infiltrații la etaj, întrerupere curent pe scară etc."
        />
      </div>

      <button className="btn btn-primary" type="submit" disabled={loading}>
        {loading ? "Se trimite..." : "Trimit urgența"}
      </button>
    </form>
  );
}
