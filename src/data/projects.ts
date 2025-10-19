// src/data/projects.ts
export const TAGS = [
  { value: "rezidential", label: "Rezidențial" },
  { value: "office", label: "Office" },
  { value: "condominiu", label: "Condominiu" },
  { value: "rapid", label: "Intervenții rapide" },
] as const;

export type Project = {
  title: string;
  tag: string;
  note: string;
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    title: "Reabilitare instalații (părți comune)",
    tag: "Condominiu",
    note: "Revizie + înlocuiri, 3 săptămâni",
    tags: ["condominiu", "instalatii"],
  },
  {
    title: "Renovare apartament complet",
    tag: "Rezidențial",
    note: "Finisaje pereți + pardoseli",
    tags: ["rezidential", "finisaje"],
  },
  {
    title: "Reamenajare open-space birouri",
    tag: "Office",
    note: "Separatoare fonice, 200 mp",
    tags: ["office", "amenajari"],
  },
  {
    title: "Intervenție infiltrații etaj 4",
    tag: "Rapid",
    note: "Închidere provizorie și remediere",
    tags: ["rapid", "infiltratii"],
  },
  {
    title: "Modernizare spații comune",
    tag: "Condominiu",
    note: "Iluminat, semnalistică, vopsitorie",
    tags: ["condominiu", "finisaje", "electrice"],
  },
  {
    title: "Amenajare bucătărie",
    tag: "Rezidențial",
    note: "Mobilare + instalații",
    tags: ["rezidential", "amenajari"],
  },
];
