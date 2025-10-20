"use client";

import { useState } from "react";

type State = "idle" | "loading" | "success" | "error";

export default function LeadFormMini() {
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // ✅ Salvăm referința la formular înainte de orice 'await'
    const formEl = e.currentTarget;

    setState("loading");
    setErrorMsg("");

    const form = new FormData(formEl);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      message: String(form.get("message") ?? ""),
      source: "website",
      consent: form.get("consent") === "on",
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let body: any = null;
      try {
        body = await res.json();
        console.log("LEAD RES", res.status, body);
      } catch {
        console.log("LEAD RES no-json", res.status);
      }

      if (res.ok && body?.ok === true) {
        setState("success");
        formEl.reset(); // ✅ folosim referința salvată
        return;
      }

      setState("error");
      setErrorMsg(
        body?.error === "VALIDATION_ERROR"
          ? "Verifică câmpurile (nume și mesaj sunt obligatorii)."
          : "A apărut o problemă. Te rugăm să încerci din nou sau să ne suni."
      );
    } catch (err) {
      console.error("LEAD fetch error", err);
      setState("error");
      setErrorMsg(
        "A apărut o problemă. Te rugăm să încerci din nou sau să ne suni."
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <input
        name="name"
        placeholder="Nume"
        className="w-full rounded-xl border p-3"
        required
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="rounded-xl border p-3"
        />
        <input
          name="phone"
          placeholder="Telefon"
          className="rounded-xl border p-3"
        />
      </div>
      <textarea
        name="message"
        placeholder="Mesaj"
        className="w-full rounded-xl border p-3"
        rows={4}
        required
      />
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="consent" className="h-4 w-4" />
        Sunt de acord să fiu contactat(ă)
      </label>

      <button
        type="submit"
        disabled={state === "loading"}
        className="rounded-2xl border px-5 py-3 font-medium shadow"
      >
        {state === "loading" ? "Trimit..." : "Trimite"}
      </button>

      {state === "error" && <p className="text-sm text-red-600">{errorMsg}</p>}
      {state === "success" && (
        <p className="text-sm text-green-600">
          Mulțumim! Te contactăm în curând.
        </p>
      )}
    </form>
  );
}
