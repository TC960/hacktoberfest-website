/**
 * Hand-drawn Halloween art kit — cartoon shapes with thick rounded ink outlines,
 * drawn to sit next to DS3's dino sticker (public/mascot.png).
 *
 * These are placeholders: each piece can be swapped for a raster sticker later
 * (see docs/design-prompts.md for matching image prompts).
 */
import React from "react";

export const INK = "#1f1030";
export const P = {
  orange: "#ff8a2b",
  orangeLight: "#ffac5f",
  orangeDark: "#d9621a",
  candle: "#ffd166",
  bone: "#fff4e6",
  grape: "#5b2a86",
  violet: "#9b6bd6",
  lilac: "#d9c4f5",
  teal: "#3cc7d6",
  stem: "#4f8a3a",
  blush: "#f7a8c8",
};

type Art = { className?: string; style?: React.CSSProperties };

const line = {
  stroke: INK,
  strokeWidth: 4,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
};

function svgProps(viewBox: string, { className, style }: Art, label?: string) {
  return {
    className,
    style,
    viewBox,
    xmlns: "http://www.w3.org/2000/svg",
    ...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true }),
  };
}

/* ------------------------------------------------------------------------ */

/** Pumpkin shapes, reused by the jack-o'-lantern, the planet and the bucket. */
function PumpkinBody({ face = true }: { face?: boolean }) {
  return (
    <g {...line}>
      <path d="M55 28C54 18 57 10 64 5L70 10C65 14 63 20 64 28Z" fill={P.stem} />
      <ellipse cx="38" cy="66" rx="30" ry="36" fill={P.orange} />
      <ellipse cx="82" cy="66" rx="30" ry="36" fill={P.orange} />
      <ellipse cx="60" cy="66" rx="24" ry="38" fill={P.orangeLight} />
      <path d="M28 44c-4 6-5 14-4 22" fill="none" stroke={P.bone} strokeWidth={3} opacity={0.7} />
      {face && (
        <g fill={P.candle}>
          <path d="M36 58 46 44 54 58Z" />
          <path d="M66 58 74 44 84 58Z" />
          <path d="M34 74Q60 100 86 74L78 80 72 74 66 82 60 76 54 82 48 74 42 80Z" />
        </g>
      )}
    </g>
  );
}

export function Pumpkin({ face = true, ...art }: Art & { face?: boolean }) {
  return (
    <svg {...svgProps("0 0 120 106", art)}>
      <PumpkinBody face={face} />
    </svg>
  );
}

/** A jack-o'-lantern with a ring round it: the "space" in SpaceXAI. */
export function PumpkinPlanet(art: Art) {
  return (
    <svg {...svgProps("-40 -10 200 130", art)}>
      <g transform="rotate(-14 60 66)" fill="none" strokeLinecap="round">
        <path d="M-28 70A88 22 0 0 1 148 70" stroke={INK} strokeWidth={14} />
        <path d="M-28 70A88 22 0 0 1 148 70" stroke={P.violet} strokeWidth={7} />
      </g>
      <PumpkinBody />
      <g transform="rotate(-14 60 66)" fill="none" strokeLinecap="round">
        <path d="M-28 70A88 22 0 0 0 148 70" stroke={INK} strokeWidth={14} />
        <path d="M-28 70A88 22 0 0 0 148 70" stroke={P.violet} strokeWidth={7} />
      </g>
    </svg>
  );
}

export function Bat(art: Art) {
  return (
    <svg {...svgProps("0 0 100 50", art)}>
      <g fill={INK}>
        <path
          className="pop-bat-wing pop-bat-wing--l"
          d="M42 22C34 12 18 8 2 12 8 16 10 22 9 28 14 25 19 26 22 31 26 27 31 27 34 32 37 29 40 30 42 32Z"
        />
        <path
          className="pop-bat-wing pop-bat-wing--r"
          d="M58 22C66 12 82 8 98 12 92 16 90 22 91 28 86 25 81 26 78 31 74 27 69 27 66 32 63 29 60 30 58 32Z"
        />
        <ellipse cx="50" cy="26" rx="9" ry="11" />
        <path d="M43 19 44 8 48 16ZM57 19 56 8 52 16Z" />
      </g>
      <circle cx="46.5" cy="24" r="2" fill={P.orange} />
      <circle cx="53.5" cy="24" r="2" fill={P.orange} />
    </svg>
  );
}

export function Ghost(art: Art) {
  return (
    <svg {...svgProps("0 0 80 100", art)}>
      <path
        {...line}
        fill={P.bone}
        d="M10 88V40C10 18 24 6 40 6s30 12 30 34v48q-5-8-12 0t-12 0q-6-8-12 0t-12 0q-6-8-12 0Z"
      />
      <ellipse cx="30" cy="40" rx="4.5" ry="6.5" fill={INK} />
      <ellipse cx="50" cy="40" rx="4.5" ry="6.5" fill={INK} />
      <ellipse cx="40" cy="57" rx="5" ry="7" fill={INK} />
      <ellipse cx="22" cy="52" rx="5" ry="3" fill={P.blush} />
      <ellipse cx="58" cy="52" rx="5" ry="3" fill={P.blush} />
    </svg>
  );
}

export function Spider(art: Art) {
  const legs = [
    "M20 28Q10 18 5 26",
    "M19 33Q8 29 3 37",
    "M19 38Q8 40 5 49",
    "M22 42Q15 49 13 57",
  ];
  return (
    <svg {...svgProps("0 0 60 60", art)}>
      <g fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round">
        {legs.map((d) => (
          <React.Fragment key={d}>
            <path d={d} />
            <path d={d} transform="translate(60 0) scale(-1 1)" />
          </React.Fragment>
        ))}
      </g>
      <ellipse cx="30" cy="36" rx="12" ry="13" fill={INK} />
      <circle cx="30" cy="21" r="8" fill={INK} />
      <circle cx="26.5" cy="20" r="3" fill={P.bone} />
      <circle cx="33.5" cy="20" r="3" fill={P.bone} />
      <circle cx="27" cy="21" r="1.4" fill={INK} />
      <circle cx="34" cy="21" r="1.4" fill={INK} />
    </svg>
  );
}

export function Moon(art: Art) {
  return (
    <svg {...svgProps("0 0 200 200", art)}>
      <circle cx="100" cy="100" r="92" fill={P.candle} />
      <circle cx="100" cy="100" r="92" fill="#ffe29a" opacity={0.6} />
      <g fill="#f2bf55" opacity={0.75}>
        <circle cx="66" cy="70" r="16" />
        <circle cx="128" cy="124" r="22" />
        <circle cx="130" cy="58" r="9" />
        <circle cx="72" cy="136" r="10" />
      </g>
    </svg>
  );
}

/** Four-point sparkle. Takes currentColor. */
export function Sparkle(art: Art) {
  return (
    <svg {...svgProps("0 0 24 24", art)}>
      <path
        d="M12 0c.9 6.6 4.5 10.4 12 12-7.5 1.6-11.1 5.4-12 12-.9-6.6-4.5-10.4-12-12C7.5 10.4 11.1 6.6 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CandyCorn(art: Art) {
  return (
    <svg {...svgProps("0 0 24 24", art)}>
      <g stroke={INK} strokeWidth={1.6} strokeLinejoin="round">
        <path d="M4.6 16h14.8c1.1 2.5 1.6 4 .6 5-2 1-14 1-16 0-1-1-.5-2.5.6-5Z" fill={P.candle} />
        <path d="M7.4 9.5h9.2l2.8 6.5H4.6Z" fill={P.orange} />
        <path d="M12 2c1 0 3.5 5 4.6 7.5H7.4C8.5 7 11 2 12 2Z" fill={P.bone} />
      </g>
    </svg>
  );
}

/** Bubbling cauldron with a ghost drifting out — the About band. */
export function Cauldron(art: Art & { label?: string }) {
  return (
    <svg {...svgProps("0 0 320 300", art, art.label)}>
      {/* fire */}
      <g {...line} strokeWidth={3.5}>
        <path d="M110 286c-14-10-10-30 4-40 0 12 8 12 10 4 8 10 12 30-14 36Z" fill={P.orange} />
        <path d="M160 290c-22-12-16-44 4-56 2 16 12 18 14 6 14 16 16 44-18 50Z" fill={P.orange} />
        <path d="M212 286c-14-10-10-30 4-40 0 12 8 12 10 4 8 10 12 30-14 36Z" fill={P.orange} />
        <path d="M162 284c-8-6-6-18 2-24 2 8 6 8 8 2 4 8 4 20-10 22Z" fill={P.candle} strokeWidth={2.5} />
      </g>
      {/* legs + pot */}
      <g {...line}>
        <path d="M92 236 82 262M228 236l10 26" strokeWidth={8} />
        <path d="M50 140c-10 70 30 116 110 116s120-46 110-116Z" fill="#2e1a47" />
        <path d="M74 170c0 30 14 52 36 64" fill="none" stroke={P.violet} strokeWidth={5} opacity={0.7} />
        <ellipse cx="160" cy="140" rx="118" ry="26" fill="#3d2560" />
        <ellipse cx="160" cy="140" rx="98" ry="16" fill={P.teal} />
      </g>
      {/* bubbles */}
      <g {...line} strokeWidth={3} fill={P.teal}>
        <circle cx="120" cy="126" r="12" />
        <circle cx="198" cy="122" r="9" />
        <circle cx="174" cy="96" r="7" />
        <circle cx="136" cy="84" r="5" />
      </g>
      <circle cx="116" cy="122" r="3.5" fill={P.bone} />
      {/* code rising out of the brew */}
      <text
        x="214"
        y="70"
        fontFamily="Fredoka, sans-serif"
        fontWeight={700}
        fontSize="40"
        fill={P.orange}
        stroke={INK}
        strokeWidth={2.5}
        paintOrder="stroke"
      >
        {"</>"}
      </text>
      <path
        d="M70 52c.6 4.4 3 7 8 8-5 1-7.4 3.6-8 8-.6-4.4-3-7-8-8 5-1 7.4-3.6 8-8Z"
        fill={P.candle}
      />
      <path
        d="M250 150c.6 4.4 3 7 8 8-5 1-7.4 3.6-8 8-.6-4.4-3-7-8-8 5-1 7.4-3.6 8-8Z"
        fill={P.candle}
      />
      {/* ghost */}
      <g transform="translate(96 10) rotate(-8 40 50) scale(0.95)">
        <path
          {...line}
          fill={P.bone}
          d="M10 88V40C10 18 24 6 40 6s30 12 30 34v48q-5-8-12 0t-12 0q-6-8-12 0t-12 0q-6-8-12 0Z"
        />
        <ellipse cx="30" cy="40" rx="4.5" ry="6.5" fill={INK} />
        <ellipse cx="50" cy="40" rx="4.5" ry="6.5" fill={INK} />
        <path d="M33 55q7 6 14 0" fill="none" stroke={INK} strokeWidth={3.5} strokeLinecap="round" />
        <ellipse cx="22" cy="52" rx="5" ry="3" fill={P.blush} />
        <ellipse cx="58" cy="52" rx="5" ry="3" fill={P.blush} />
      </g>
    </svg>
  );
}

/** Jack-o'-lantern candy bucket — one per prize track. */
export function CandyBucket(art: Art) {
  return (
    <svg {...svgProps("0 -20 120 126", art)}>
      <path d="M14 46C14 6 106 6 106 46" fill="none" {...line} strokeWidth={5} />
      <g {...line} strokeWidth={3}>
        <path d="M34 34 46 16 56 36Z" fill={P.candle} />
        <path d="M34 34 38 28 52 30 50 36Z" fill={P.orange} />
        <rect x="58" y="16" width="22" height="14" rx="6" fill={P.violet} transform="rotate(18 69 23)" />
        <circle cx="86" cy="32" r="9" fill={P.teal} />
      </g>
      <PumpkinBody />
    </svg>
  );
}

export function Candle(art: Art) {
  return (
    <svg {...svgProps("0 0 60 120", art)}>
      <g {...line} strokeWidth={3.5}>
        <path d="M30 6c-8 10-8 18 0 22 8-4 8-12 0-22Z" fill={P.candle} />
        <path d="M30 28v8" />
        <path d="M14 36h32v74H14Z" fill={P.bone} />
        <path d="M14 36h32v10c0 6-6 6-6 14 0 4-6 4-6 0v-8c0-4-4-4-4 0v4c0 4-6 4-6 0V36Z" fill="#f3e3cc" />
        <ellipse cx="30" cy="112" rx="24" ry="5" fill={P.violet} />
      </g>
    </svg>
  );
}

/** A little rocket in a witch hat, for the "launch pad" band. */
export function WitchRocket(art: Art) {
  return (
    <svg {...svgProps("0 0 140 220", art)}>
      <g {...line}>
        <path d="M44 150 22 184l30-6ZM96 150l22 34-30-6Z" fill={P.orange} />
        <path d="M70 196c-10 10-8 20 0 22 8-2 10-12 0-22Z" fill={P.candle} />
        <path d="M46 70c0-20 10-30 24-30s24 10 24 30v110H46Z" fill={P.bone} />
        <path d="M46 150h48v30H46Z" fill={P.grape} />
        <circle cx="70" cy="104" r="15" fill={P.teal} />
        <path d="M63 99a8 8 0 0 1 8-6" fill="none" stroke={P.bone} strokeWidth={3} />
        <path d="M24 56c30-10 62-10 92 0-26 6-66 6-92 0Z" fill={P.grape} />
        <path d="M50 52c6-18 14-36 34-48-6 16-6 32-2 48" fill={P.grape} />
        <path d="M52 44c10 3 20 3 30 0" fill="none" stroke={P.orange} strokeWidth={6} />
      </g>
    </svg>
  );
}

/**
 * Wax drips hanging off the bottom of a band into the next one.
 * Colour comes from the band's --bg (see .pop-drip in pop.css).
 */
export function Drip() {
  return <div className="pop-drip" aria-hidden="true" />;
}

/** Graveyard silhouette along the bottom of the hero. */
export function Graveyard({ className, color }: { className?: string; color: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color}
        d="M0 70C160 40 300 44 460 66s320 26 500-6 340-28 480 6V120H0Z"
      />
      <g fill={color}>
        <path d="M120 70V38a18 18 0 0 1 36 0v32Z" />
        <path d="M176 70V52a12 12 0 0 1 24 0v18Z" />
        <path d="M590 76V40h8V28h10v12h8v36Z" />
        <path d="M1010 64V34a16 16 0 0 1 32 0v30Z" />
        <path d="M1300 60V44a10 10 0 0 1 20 0v16Z" />
        {/* dead tree */}
        <path d="M800 66c4-20 2-36-6-52l6 2c4 8 6 14 7 20 4-10 10-16 18-20l2 4c-10 8-14 16-14 26 0 8 1 14 3 20Z" />
        {/* fence */}
        <path d="M1150 58h120v4h-120Z" />
        {[1150, 1172, 1194, 1216, 1238, 1260].map((x) => (
          <path key={x} d={`M${x} 70V44l4-6 4 6v26Z`} />
        ))}
      </g>
    </svg>
  );
}
