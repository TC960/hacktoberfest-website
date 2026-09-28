const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#1f1030",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  xmlns: "http://www.w3.org/2000/svg",
};

/** spellbook: agent skills are spells an agent can learn */
export function IconSpellbook({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 5.5C4 4 5 3 6.5 3H19v15H6.5C5 18 4 19 4 20.5Z" fill="#fff4e6" />
      <path d="M4 20.5C4 22 5 22 6.5 22H19v-4" />
      <path d="m11.5 7 .9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9Z" fill="#ffd166" />
    </svg>
  );
}

/** crystal ball: a big model that sees a lot */
export function IconCrystalBall({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="10.5" r="7.5" fill="#d9c4f5" />
      <path d="M8.5 8.5a4 4 0 0 1 3-2.5" stroke="#fff4e6" />
      <path d="M6 20.5h12l-1.5-3.5h-9Z" fill="#5b2a86" />
    </svg>
  );
}

/** potion bottle: small but strong */
export function IconPotion({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M10 3h4M10.5 3v5L6 15a5 5 0 0 0 4.5 7h3A5 5 0 0 0 18 15l-4.5-7V3" fill="#fff4e6" />
      <path d="M7.4 15h9.2a4 4 0 0 1-3.6 5h-2a4 4 0 0 1-3.6-5Z" fill="#3cc7d6" />
    </svg>
  );
}

/** cauldron: the harness everything gets brewed in */
export function IconCauldron({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="4.5" r="1.5" />
      <circle cx="14" cy="3" r="1" />
      <path d="M4 10c-1 6 2.5 10 8 10s9-4 8-10Z" fill="#2e1a47" />
      <path d="M2.5 9.5h19" />
      <path d="M7 20.5 6 22M17 20.5l1 1.5" />
    </svg>
  );
}

/** outlined ghost, for open sponsor frames */
export function IconGhost({ className }: { className?: string }) {
  return (
    <svg {...base} stroke="currentColor" className={className}>
      <path d="M5 21V10a7 7 0 0 1 14 0v11l-2.3-1.8-2.4 1.8-2.3-1.8-2.3 1.8-2.4-1.8Z" />
      <path d="M9.5 10v1M14.5 10v1" />
    </svg>
  );
}

/** plus / minus toggle for the FAQ rows */
export function IconToggle({ open, className }: { open: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="10.5" width="20" height="3" rx="1.5" fill="currentColor" />
      {!open && <rect x="10.5" y="2" width="3" height="20" rx="1.5" fill="currentColor" />}
    </svg>
  );
}

/** arrow out of a box, for external links */
export function IconExternal({ className }: { className?: string }) {
  return (
    <svg {...base} stroke="currentColor" className={className}>
      <path d="M14 4h6v6M20 4l-9 9" />
      <path d="M18 14v6H4V6h6" />
    </svg>
  );
}
