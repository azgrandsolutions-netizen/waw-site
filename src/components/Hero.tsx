"use client";
import React from "react";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 18,
        padding: "28px 24px",
        background:
          "radial-gradient(800px 300px at 20% 0%, rgba(0,0,0,0.9), rgba(0,0,0,0.65)), linear-gradient(135deg, #0f172a, #111827)",
        color: "white",
        marginBottom: "24px"
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.18,
          background:
            "radial-gradient(400px 180px at 80% 10%, rgba(255,255,255,0.6), transparent)"
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <span
          style={{
            display: "inline-block",
            fontSize: 12,
            letterSpacing: 1,
            padding: "6px 10px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.06)"
          }}
        >
          WAW • Echipe certificate • 24/7
        </span>
        <h1
          style={{
            fontSize: "2.2rem",
            lineHeight: 1.2,
            margin: "12px 0 8px",
            fontWeight: 700
          }}
        >
          Servicii tehnice integrate pentru clădiri și spații comerciale
        </h1>
        <p style={{ opacity: 0.9, fontSize: "1.05rem", marginBottom: 14 }}>
          Intervenții rapide, mentenanță părți comune, renovări interioare —
          execuție la timp, la buget, fără surprize.
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 12 }}>
          <a href="/ro/oferta"
            style={{
              textDecoration: "none",
              fontWeight: 600,
              padding: "10px 14px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.22)",
              background: "white",
              color: "#0f172a",
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              display: "inline-block"
            }}
          >
            Cere ofertă
          </a>
          <a href="/ro/servicii"
            style={{
              textDecoration: "none",
              fontWeight: 600,
              padding: "10px 14px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.22)",
              color: "white",
              background: "transparent",
              display: "inline-block"
            }}
          >
            Vezi servicii →
          </a>
        </div>
        <ul
          style={{
            marginTop: 8,
            paddingLeft: 18,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.85)",
            fontSize: 14
          }}
        >
          <li>Răspuns în &lt; 2 ore în zile lucrătoare</li>
          <li>Ofertare transparentă și garanție la lucrare</li>
          <li>Echipă completă: instalații, electric, finisaje, management</li>
        </ul>
      </div>
    </section>
  );
}