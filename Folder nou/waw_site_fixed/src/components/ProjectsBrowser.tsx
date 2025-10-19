// src/components/ProjectsBrowser.tsx
"use client";

import { useMemo, useState } from "react";
import { PROJECTS, TAGS } from "@/data/projects";

export default function ProjectsBrowser() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string>("all");

  const items = useMemo(() => {
    return PROJECTS.filter((p) => {
      const byTag = tag === "all" ? true : p.tags.includes(tag);
      const byQuery =
        q.trim().length === 0
          ? true
          : (p.title + " " + p.note + " " + p.tag)
              .toLowerCase()
              .includes(q.toLowerCase());
      return byTag && byQuery;
    });
  }, [q, tag]);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2 flex-wrap">
          <FilterChip
            label="Toate"
            value="all"
            current={tag}
            onChange={setTag}
          />
          {TAGS.map((t) => (
            <FilterChip
              key={t.value}
              label={t.label}
              value={t.value}
              current={tag}
              onChange={setTag}
            />
          ))}
        </div>

        <input
          className="input w-full sm:w-72"
          placeholder="Caută (ex. renovare, infiltrații)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border bg-white overflow-hidden"
          >
            <div className="aspect-[4/3] bg-gray-100 grid place-items-center text-gray-500">
              Foto proiect
            </div>
            <div className="p-4">
              <div className="text-sm text-gray-500">{p.tag}</div>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{p.note}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 border rounded-full text-xs bg-gray-50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function FilterChip({
  label,
  value,
  current,
  onChange,
}: {
  label: string;
  value: string;
  current: string;
  onChange: (v: string) => void;
}) {
  const active = current === value;
  return (
    <button
      className={`px-3 py-1.5 rounded-full border text-sm ${
        active ? "bg-black text-white" : "bg-white"
      }`}
      onClick={() => onChange(value)}
      type="button"
    >
      {label}
    </button>
  );
}
