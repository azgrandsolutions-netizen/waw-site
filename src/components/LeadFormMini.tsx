"use client";

export default function LeadFormMini() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{ display: "grid", gap: 8, maxWidth: 420 }}
    >
      <input
        placeholder="Nume"
        style={{ padding: 10, border: "1px solid #ddd", borderRadius: 8 }}
      />
      <input
        placeholder="Telefon"
        style={{ padding: 10, border: "1px solid #ddd", borderRadius: 8 }}
      />
      <textarea
        placeholder="Descriere scurtă"
        style={{ padding: 10, border: "1px solid #ddd", borderRadius: 8 }}
      />
      <button
        type="submit"
        style={{ padding: 10, borderRadius: 8, fontWeight: 600 }}
      >
        Trimite
      </button>
    </form>
  );
}
