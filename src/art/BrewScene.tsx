import { m as motion, MotionValue, useTransform } from "framer-motion";
import { INK, line, P } from "./Spooky";

/**
 * The scrollytelling cauldron in the About band. `progress` runs 0 → 1 across
 * the four recipe steps; each quarter drops one ingredient in, and the last
 * quarter has a ghost rise out with the finished project.
 *
 *   0.00–0.25  light the fire, drop in an open-weight model (crystal ball)
 *   0.25–0.50  add an agent skill (spellbook)
 *   0.50–0.75  stir in a harness (potion + spoon)
 *   0.75–1.00  ship it: the ghost rises with </> and a DEV badge
 *
 * Framer sets CSS transforms on the motion groups, which override any SVG
 * `transform` attribute, so static offsets always live on a nested <g>.
 */

const fillBox = { transformBox: "fill-box" as const };

/** An ingredient falling from above the pot into the brew. */
function useDrop(p: MotionValue<number>, start: number, end: number) {
  const y = useTransform(p, [start, end], [-190, 40]);
  const opacity = useTransform(p, [start - 0.02, start, end, end + 0.03], [0, 1, 1, 0]);
  const rotate = useTransform(p, [start, end], [-35, 20]);
  return { y, opacity, rotate, ...fillBox };
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
  const fire = useTransform(p, [0, 0.1], [0.15, 1]);
  const heat = useTransform(p, [0, 0.12, 0.35], [0, 0.6, 1]);
  const potion = useTransform(p, [0.06, 0.16, 0.4, 0.62], ["#7d6b93", P.teal, "#5fe0c8", "#b58cff"]);
  const glow = useTransform(p, [0.1, 0.4, 0.7, 0.92], [0, 0.35, 0.65, 1]);

  const ball = useDrop(p, 0.02, 0.14);
  const book = useDrop(p, 0.27, 0.39);
  const bottle = useDrop(p, 0.51, 0.61);

  const spoonOpacity = useTransform(p, [0.55, 0.6, 0.76, 0.8], [0, 1, 1, 0]);
  const spoonRotate = useTransform(p, [0.6, 0.65, 0.7, 0.75], [-18, 16, -14, 10]);

  const ghostY = useTransform(p, [0.77, 0.9], [150, 0]);
  const reveal = useTransform(p, [0.86, 0.95], [0, 1]);
  const revealScale = useTransform(p, [0.86, 0.95], [0.4, 1]);

  return (
    <svg
      className={className}
      viewBox="0 -170 320 470"
      role="img"
      aria-label="A cauldron that fills up as you scroll: a crystal ball, a spellbook and a potion drop in, then a ghost rises out holding a DEV badge"
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
        <g transform="translate(140 104)" {...line} strokeWidth={3.5}>
          <circle cx="0" cy="-6" r="18" fill={P.lilac} />
          <path d="M-7-12a8 8 0 0 1 6-6" fill="none" stroke={P.bone} strokeWidth={3} />
          <path d="M-14 16h28l-4-10h-20Z" fill={P.grape} />
        </g>
      </motion.g>
      <motion.g style={book}>
        <g transform="translate(176 100)" {...line} strokeWidth={3.5}>
          <rect x="-18" y="-22" width="36" height="42" rx="4" fill={P.grape} />
          <rect x="-12" y="-22" width="30" height="42" rx="3" fill={P.bone} />
          <path d="M3-9l2.5 5 5 2.5-5 2.5-2.5 5-2.5-5-5-2.5 5-2.5Z" fill={P.candle} strokeWidth={2} />
        </g>
      </motion.g>
      <motion.g style={bottle}>
        <g transform="translate(196 100)" {...line} strokeWidth={3.5}>
          <path d="M-5-26h10v12l12 18a13 13 0 0 1-11 20h-12a13 13 0 0 1-11-20l12-18Z" fill={P.bone} />
          <path d="M-15 8h30a12 12 0 0 1-9 16h-12a12 12 0 0 1-9-16Z" fill="#b58cff" />
          <rect x="-7" y="-32" width="14" height="7" rx="2" fill={P.orange} />
        </g>
      </motion.g>

      {/* spoon, stirring during the harness step */}
      <motion.g style={{ opacity: spoonOpacity, rotate: spoonRotate, originX: 0.1, originY: 1, ...fillBox }}>
        <path d="M150 128 238 20" {...line} strokeWidth={9} />
        <path d="M150 128 238 20" stroke="#a7784a" strokeWidth={4} strokeLinecap="round" />
      </motion.g>

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
        <motion.ellipse cx="160" cy="140" rx="98" ry="16" style={{ fill: potion }} />
      </g>

      {/* bubbles */}
      <motion.g style={{ opacity: heat }} {...line} strokeWidth={3} fill={P.bone} fillOpacity={0.35}>
        <circle className="pop-bubble" cx="120" cy="134" r="9" />
        <circle className="pop-bubble pop-bubble--2" cx="196" cy="132" r="7" />
        <circle className="pop-bubble pop-bubble--3" cx="160" cy="138" r="6" />
        <circle className="pop-bubble pop-bubble--4" cx="226" cy="138" r="5" />
      </motion.g>

      <Splash p={p} at={0.14} x={140} />
      <Splash p={p} at={0.39} x={176} />
      <Splash p={p} at={0.61} x={196} />

      {/* finished: code and sparkles */}
      <motion.g style={{ opacity: reveal, scale: revealScale, ...fillBox }}>
        <text
          x="222"
          y="-120"
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
          <path d="M60-120c.9 6.6 4.5 10.4 12 12-7.5 1.6-11.1 5.4-12 12-.9-6.6-4.5-10.4-12-12 7.5-1.6 11.1-5.4 12-12Z" />
          <path d="M270-40c.6 4.4 3 7 8 8-5 1-7.4 3.6-8 8-.6-4.4-3-7-8-8 5-1 7.4-3.6 8-8Z" />
          <path d="M40-10c.6 4.4 3 7 8 8-5 1-7.4 3.6-8 8-.6-4.4-3-7-8-8 5-1 7.4-3.6 8-8Z" />
        </g>
      </motion.g>
    </svg>
  );
}
