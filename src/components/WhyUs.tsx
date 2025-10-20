"use client";
import React from "react";

export default function WhyUs() {
  const items = [
    "Intervenții în aceeași zi pe Amsterdam & NL Nord-Holland",
    "Ofertare rapidă, comunicare directă pe WhatsApp",
    "Echipă completă: instalații, electric, finisaje, management"
  ];

  return (
    <section
      style={{
        marginTop: 24,
        border: "1px solid #e5e7eb",
        borderRadius: 16,
        padding: "18px 18px",
        background: "white"
      }}
    >
      <h2 style={{ marginTop: 0, marginBottom: 12, fontSize: "1.25rem" }}>
        De ce noi?
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 12
        }}
      >
        {items.map((text) => (
          <div
            key={text}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 14,
              padding: "14px 16px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
              background: "linear-gradient(180deg, #ffffff, #fafafa)"
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#0f172a",
                display: "inline-block",
                marginRight: 8
              }}
            />
            <span style={{ lineHeight: 1.5 }}>{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}