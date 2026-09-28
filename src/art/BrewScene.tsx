import { useState } from "react";
import { m as motion, MotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import { INK, line, P } from "./Spooky";

/**
 * The scrollytelling cauldron in the About band, with DS3's dino brewing.
 * `progress` runs 0 → 1 across the four recipe steps:
 *
 *   0.00–0.25  the dino casts: a crystal ball flies off the wand into the pot
 *   0.25–0.50  casts again: a spellbook
 *   0.50–0.75  casts a potion, then stomps (leg up, smash down) and each
 *              stomp shakes the pot and churns the brew
 *   0.75–1.00  a ghost pops out with a DEV badge; the dino is confused
 *
 * Poses are the four PNGs in public/art/, cropped to one shared frame so they
 * swap in place. Framer sets CSS transforms on the motion groups, which
 * override any SVG `transform` attribute, so static offsets live on a nested <g>.
 */

const fillBox = { transformBox: "fill-box" as const };

// Where the dino stands, in scene units; the pose images are 560×617.
const DINO = { x: 262, y: 29, width: 250, height: 275 };
// The tip of the wand in the casting pose.
const TIP = { x: 280, y: 108 };

const CASTS = {
  ball: { start: 0.04, end: 0.19, x: 140, y: 104 },
  book: { start: 0.29, end: 0.44, x: 176, y: 100 },
  bottle: { start: 0.53, end: 0.63, x: 196, y: 100 },
};
const STOMP_FROM = 0.635;
const STOMP_TO = 0.775;
const CONFUSED_AT = 0.79;

/** An ingredient conjured at the wand tip, arcing up and over into the brew. */
function useCast(p: MotionValue<number>, c: { start: number; end: number; x: number; y: number }) {
  const mid = c.start + (c.end - c.start) * 0.4;
  const dx = TIP.x - c.x;
  const dy = TIP.y - c.y;
  return {
    x: useTransform(p, [c.start, mid, c.end], [dx, dx * 0.45, 0]),
    y: useTransform(p, [c.start, mid, c.end], [dy, -70, 40]),
    scale: useTransform(p, [c.start, c.start + 0.03], [0.3, 1]),
    rotate: useTransform(p, [c.start, c.end], [-35, 20]),
    opacity: useTransform(p, [c.start - 0.005, c.start, c.end, c.end + 0.03], [0, 1, 1, 0]),
    ...fillBox,
  };
}

/** A sparkle burst at the wand tip as each spell goes off. */
function Burst({ p, at }: { p: MotionValue<number>; at: number }) {
  const opacity = useTransform(p, [at - 0.01, at, at + 0.05], [0, 1, 0]);
  const scale = useTransform(p, [at - 0.01, at + 0.05], [0.4, 1.4]);
  return (
    <motion.g style={{ opacity, scale, ...fillBox }}>
      <g fill={P.candle} stroke={INK} strokeWidth={1.5}>
        <path d={`M${TIP.x} ${TIP.y - 26}c.8 6 4 9 10 10-6 1-9.2 4-10 10-.8-6-4-9-10-10 6-1 9.2-4 10-10Z`} />
        <path d={`M${TIP.x - 24} ${TIP.y - 6}c.5 4 2.6 6 6.5 6.5-3.9.5-6 2.5-6.5 6.5-.5-4-2.6-6-6.5-6.5 3.9-.5 6-2.5 6.5-6.5Z`} fill={P.teal} />
        <path d={`M${TIP.x + 8} ${TIP.y + 8}c.5 4 2.6 6 6.5 6.5-3.9.5-6 2.5-6.5 6.5-.5-4-2.6-6-6.5-6.5 3.9-.5 6-2.5 6.5-6.5Z`} fill={P.teal} />
      </g>
    </motion.g>
  );
}

function Splash({ p, at, x }: { p: MotionValue<number>; at: number; x: number }) {
  const opacity = useTransform(p, [at - 0.01, at, at + 0.06], [0, 1, 0]);
  const y = useTransform(p, [at, at + 0.06], [0, -22]);
  return (
    <motion.g style={{ opacity, y }}>
      <g fill={P.teal} stroke={INK} strokeWidth={2.5}>
        <circle cx={x - 22} cy={122} r={6} />
        <circle cx={x} cy={112} r={7} />
        <circle cx={x + 24} cy={120} r={5} />
      </g>
    </motion.g>
  );
}

export default function BrewScene({
  progress: p,
  className,
}: {
  progress: MotionValue<number>;
  className?: string;
}) {
  const fire = useTransform(p, [0.01, 0.08], [0.15, 1]);
  const heat = useTransform(p, [0.02, 0.12, 0.4], [0, 0.6, 1]);
  const potion = useTransform(p, [0.15, 0.22, 0.44, 0.63], ["#7d6b93", P.teal, "#5fe0c8", "#b58cff"]);
  const glow = useTransform(p, [0.14, 0.44, 0.7, 0.95], [0, 0.35, 0.65, 1]);

  const ball = useCast(p, CASTS.ball);
  const book = useCast(p, CASTS.book);
  const bottle = useCast(p, CASTS.bottle);

  // Casting pose until the stomping starts, confused once the ghost is up.
  // The leg-up / stomp poses loop in CSS (.is-stomping) so the dino keeps
  // stomping and the pot keeps rattling even if you pause mid-scroll.
  const castPose = useTransform(p, (v) => (v < STOMP_FROM || (v >= STOMP_TO && v < CONFUSED_AT) ? 1 : 0));
  const confusedPose = useTransform(p, (v) => (v >= CONFUSED_AT ? 1 : 0));
  const huh = useTransform(p, [CONFUSED_AT + 0.02, CONFUSED_AT + 0.06], [0, 1]);
  const [stomping, setStomping] = useState(false);
  useMotionValueEvent(p, "change", (v) => setStomping(v >= STOMP_FROM && v < STOMP_TO));

  const ghostY = useTransform(p, [0.79, 0.94], [150, 0]);
  const reveal = useTransform(p, [0.9, 0.98], [0, 1]);
  const revealScale = useTransform(p, [0.9, 0.98], [0.4, 1]);

  return (
    <svg
      className={(className ?? "") + (stomping ? " is-stomping" : "")}
      viewBox="-10 -140 530 445"
      role="img"
      aria-label="DS3's dino brews in a cauldron as you scroll: it casts a crystal ball, a spellbook and a potion into the pot, stomps to stir it, and looks confused when a ghost pops out holding a DEV badge"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="brew-glow">
          <stop offset="0" stopColor={P.teal} stopOpacity={0.75} />
          <stop offset="0.5" stopColor={P.violet} stopOpacity={0.3} />
          <stop offset="1" stopColor={P.violet} stopOpacity={0} />
        </radialGradient>
      </defs>

      {/* glow above the brew */}
      <motion.ellipse cx={160} cy={70} rx={170} ry={150} fill="url(#brew-glow)" style={{ opacity: glow }} />

      {/* steam */}
      <motion.g style={{ opacity: heat }} fill="none" stroke={P.bone} strokeWidth={5} strokeLinecap="round" opacity={0.7}>
        <path className="pop-steam" d="M118 104c-10-16 10-24 0-40s8-24 0-38" />
        <path className="pop-steam pop-steam--2" d="M166 100c-10-16 10-24 0-40s8-24 0-38" />
        <path className="pop-steam pop-steam--3" d="M210 104c-10-16 10-24 0-40s8-24 0-38" />
      </motion.g>

      {/* ghost: drawn before the pot so the pot hides it until it rises */}
      <motion.g style={{ y: ghostY }}>
        <g transform="translate(118 -10)">
          <path
            {...line}
            fill={P.bone}
            d="M10 88V40C10 18 24 6 40 6s30 12 30 34v48q-5-8-12 0t-12 0q-6-8-12 0t-12 0q-6-8-12 0Z"
          />
          <g className="pop-blink">
            <ellipse cx="30" cy="40" rx="4.5" ry="6.5" fill={INK} />
            <ellipse cx="50" cy="40" rx="4.5" ry="6.5" fill={INK} />
          </g>
          <path d="M33 55q7 6 14 0" fill="none" stroke={INK} strokeWidth={3.5} strokeLinecap="round" />
          <ellipse cx="22" cy="52" rx="5" ry="3" fill={P.blush} />
          <ellipse cx="58" cy="52" rx="5" ry="3" fill={P.blush} />
          {/* DEV badge held out to the side */}
          <path d="M68 58q10-2 16 6" fill="none" {...line} strokeWidth={3.5} />
          <g {...line} strokeWidth={3}>
            <path d="M84 60l-6 18M96 60l6 18" stroke={P.grape} strokeWidth={5} />
            <circle cx="90" cy="58" r="15" fill={P.candle} />
          </g>
          <text x="90" y="63" textAnchor="middle" fontFamily="Fredoka, sans-serif" fontWeight={700} fontSize="13" fill={INK}>
            DEV
          </text>
        </g>
      </motion.g>

      {/* ingredients: also behind the pot, so they "sink" into the brew */}
      <motion.g style={ball}>
        <g transform={`translate(${CASTS.ball.x} ${CASTS.ball.y})`} {...line} strokeWidth={3.5}>
          <circle cx="0" cy="-6" r="18" fill={P.lilac} />
          <path d="M-7-12a8 8 0 0 1 6-6" fill="none" stroke={P.bone} strokeWidth={3} />
          <path d="M-14 16h28l-4-10h-20Z" fill={P.grape} />
        </g>
      </motion.g>
      <motion.g style={book}>
        <g transform={`translate(${CASTS.book.x} ${CASTS.book.y})`} {...line} strokeWidth={3.5}>
          <rect x="-18" y="-22" width="36" height="42" rx="4" fill={P.grape} />
          <rect x="-12" y="-22" width="30" height="42" rx="3" fill={P.bone} />
          <path d="M3-9l2.5 5 5 2.5-5 2.5-2.5 5-2.5-5-5-2.5 5-2.5Z" fill={P.candle} strokeWidth={2} />
        </g>
      </motion.g>
      <motion.g style={bottle}>
        <g transform={`translate(${CASTS.bottle.x} ${CASTS.bottle.y})`} {...line} strokeWidth={3.5}>
          <path d="M-5-26h10v12l12 18a13 13 0 0 1-11 20h-12a13 13 0 0 1-11-20l12-18Z" fill={P.bone} />
          <path d="M-15 8h30a12 12 0 0 1-9 16h-12a12 12 0 0 1-9-16Z" fill="#b58cff" />
          <rect x="-7" y="-32" width="14" height="7" rx="2" fill={P.orange} />
        </g>
      </motion.g>

      {/* the pot rattles on every stomp */}
      <g className="pop-pot-shake">
        {/* fire */}
        <motion.g style={{ scale: fire, originY: 1, ...fillBox }}>
          <g className="pop-flicker" {...line} strokeWidth={3.5}>
            <path d="M110 286c-14-10-10-30 4-40 0 12 8 12 10 4 8 10 12 30-14 36Z" fill={P.orange} />
            <path d="M160 290c-22-12-16-44 4-56 2 16 12 18 14 6 14 16 16 44-18 50Z" fill={P.orange} />
            <path d="M212 286c-14-10-10-30 4-40 0 12 8 12 10 4 8 10 12 30-14 36Z" fill={P.orange} />
            <path d="M162 284c-8-6-6-18 2-24 2 8 6 8 8 2 4 8 4 20-10 22Z" fill={P.candle} strokeWidth={2.5} />
          </g>
        </motion.g>

        {/* pot */}
        <g {...line}>
          <path d="M92 236 82 262M228 236l10 26" strokeWidth={8} />
          <path d="M50 140c-10 70 30 116 110 116s120-46 110-116Z" fill="#2e1a47" />
          <path d="M74 170c0 30 14 52 36 64" fill="none" stroke={P.violet} strokeWidth={5} opacity={0.7} />
          <ellipse cx="160" cy="140" rx="118" ry="26" fill="#3d2560" />
          <g className="pop-churn">
            <motion.ellipse cx="160" cy="140" rx="98" ry="16" style={{ fill: potion }} />
          </g>
        </g>

        {/* bubbles */}
        <motion.g style={{ opacity: heat }} {...line} strokeWidth={3} fill={P.bone} fillOpacity={0.35}>
          <circle className="pop-bubble" cx="120" cy="134" r="9" />
          <circle className="pop-bubble pop-bubble--2" cx="196" cy="132" r="7" />
          <circle className="pop-bubble pop-bubble--3" cx="160" cy="138" r="6" />
          <circle className="pop-bubble pop-bubble--4" cx="226" cy="138" r="5" />
        </motion.g>

        {/* turmoil: brew sloshing over the rim while the dino stomps */}
        <g className="pop-slosh" fill="#b58cff" stroke={INK} strokeWidth={2.5}>
          <circle className="pop-slosh-drop" cx="104" cy="120" r="7" />
          <circle className="pop-slosh-drop pop-slosh-drop--2" cx="160" cy="112" r="9" />
          <circle className="pop-slosh-drop pop-slosh-drop--3" cx="214" cy="118" r="6" />
          <circle className="pop-slosh-drop pop-slosh-drop--4" cx="136" cy="116" r="5" />
        </g>
      </g>

      <Splash p={p} at={CASTS.ball.end} x={CASTS.ball.x} />
      <Splash p={p} at={CASTS.book.end} x={CASTS.book.x} />
      <Splash p={p} at={CASTS.bottle.end} x={CASTS.bottle.x} />

      {/* the dino, one image per pose */}
      <g className="pop-dino">
        <motion.image href="./art/dino-cast.webp" {...DINO} style={{ opacity: castPose }} />
        <image className="pop-dino-windup" href="./art/dino-windup.webp" {...DINO} />
        <image className="pop-dino-stomp" href="./art/dino-stomp.webp" {...DINO} />
        <motion.image href="./art/dino-confused.webp" {...DINO} style={{ opacity: confusedPose }} />
      </g>
      <Burst p={p} at={CASTS.ball.start} />
      <Burst p={p} at={CASTS.book.start} />
      <Burst p={p} at={CASTS.bottle.start} />
      <g transform="rotate(-12 356 40)">
        <motion.text
          x="344"
          y="56"
          fontFamily="'Lilita One', Fredoka, sans-serif"
          fontSize="46"
          fill={P.grape}
          stroke={P.bone}
          strokeWidth={4}
          paintOrder="stroke"
          style={{ opacity: huh }}
        >
          ?
        </motion.text>
      </g>

      {/* finished: code and sparkles */}
      <motion.g style={{ opacity: reveal, scale: revealScale, ...fillBox }}>
        <text
          x="200"
          y="-86"
          fontFamily="'Lilita One', Fredoka, sans-serif"
          fontSize="44"
          fill={P.orange}
          stroke={INK}
          strokeWidth={3}
          paintOrder="stroke"
        >
          {"</>"}
        </text>
        <g fill={P.candle}>
          <path d="M60-100c.9 6.6 4.5 10.4 12 12-7.5 1.6-11.1 5.4-12 12-.9-6.6-4.5-10.4-12-12 7.5-1.6 11.1-5.4 12-12Z" />
          <path d="M40-10c.6 4.4 3 7 8 8-5 1-7.4 3.6-8 8-.6-4.4-3-7-8-8 5-1 7.4-3.6 8-8Z" />
        </g>
      </motion.g>
    </svg>
  );
}
