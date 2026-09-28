import { useRef, useState } from "react";
import {
  m as motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import BrewScene from "../art/BrewScene";
import { Drip } from "../art/Spooky";
import { EVENT } from "../event";
import { Rise } from "../motion";

const META: Array<[string, string]> = [
  ["Event", `${EVENT.name} ${EVENT.nameHost}`],
  ["Format", `${EVENT.format}, in person`],
  ["Date", EVENT.dateLong],
  ["Time", EVENT.time],
  ["Venue", `${EVENT.venue}, ${EVENT.campus}`],
  ["Who", EVENT.eligibility],
  ["Cost", "Free"],
  ["Level", "All of them, including none"],
];

// The recipe the cauldron acts out as you scroll, loosely one step per challenge track.
const STEPS = [
  {
    title: "Pick a model",
    body: "Start with open-weight AI: a big LLM or a small SLM, anything whose weights you can download and run. Into the cauldron it goes.",
  },
  {
    title: "Teach it a spell",
    body: "Give it an agent skill: reusable instructions and files an agent can pick up and use, following the Agent Skills open standard.",
  },
  {
    title: "Stir in a harness",
    body: "Prompts, tools, memory, actions. Write the software around the model from scratch, or make an open-source harness meaningfully better.",
  },
  {
    title: "Ship it before the candles burn out",
    body: "Push it to a public GitHub repo under an open-source licence and demo it the same day. Every teammate on a winning team gets a DEV Badge.",
  },
];

/*
 * Scroll timeline across the pinned section (0 → 1):
 *   0 … LEAD          the frame locks with a cold cauldron and a "scroll" hint
 *   LEAD + i·STEP     card i slides onto the stack, then its ingredient drops in
 *   END … 1           the finished brew holds for a moment before the pin lets go
 */
const LEAD = 0.1;
const END = 0.95;
const STEP = (END - LEAD) / STEPS.length;
const ENTER = 0.035; // how long a card takes to slide in

const stepStart = (i: number) => LEAD + i * STEP;

/** One card in the stack: slides up on its turn, then steps back as newer cards land on top. */
function StackCard({ i, p, active }: { i: number; p: MotionValue<number>; active: boolean }) {
  const at: number[] = [stepStart(i), stepStart(i) + ENTER];
  const y: number[] = [90, 0];
  const scale: number[] = [1, 1];
  const opacity: number[] = [0, 1];
  // Each later card pushes this one further back.
  for (let k = 1; k <= 2 && i + k < STEPS.length; k++) {
    at.push(stepStart(i + k), stepStart(i + k) + ENTER);
    y.push(y[y.length - 1], -22 * k);
    scale.push(scale[scale.length - 1], 1 - 0.05 * k);
    opacity.push(opacity[opacity.length - 1], k === 1 ? 0.7 : 0.4);
  }
  const s = STEPS[i];
  return (
    <motion.li
      className={"pop-brew-card" + (active ? " is-active" : "")}
      style={{
        y: useTransform(p, at, y),
        scale: useTransform(p, at, scale),
        opacity: useTransform(p, at, opacity),
        zIndex: i + 1,
      }}
      aria-current={active ? "step" : undefined}
    >
      <span className="pop-brew-n">
        step {i + 1} of {STEPS.length}
      </span>
      <h3 className="pop-brew-title">{s.title}</h3>
      <p className="pop-body">{s.body}</p>
    </motion.li>
  );
}

export default function About() {
  const reduce = useReducedMotion();
  const pinRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: raw } = useScroll({ target: pinRef, offset: ["start start", "end end"] });
  // Pass through a JS function so framer drives these values itself. Handed straight
  // to opacity, it offloads them to native scroll timelines, which mis-map the
  // multi-keyframe fades and leave cards half-faded out of step with the scroll.
  const scrollYProgress = useTransform(raw, (v) => v);
  const sceneProgress = useTransform(scrollYProgress, [LEAD, END], [0, 1]);
  const hintOpacity = useTransform(scrollYProgress, [LEAD * 0.6, LEAD], [1, 0]);
  // Reduced motion: no pin, just the finished brew and the steps as a list.
  const done = useMotionValue(1);

  const [active, setActive] = useState(-1);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(v < LEAD ? -1 : Math.min(STEPS.length - 1, Math.floor((v - LEAD) / STEP)));
  });

  return (
    <section className="pop-band pop-band--lavender pop-about" id="about">
      <span className="pop-web pop-web--tl" aria-hidden="true" />
      <div className="pop-fog" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="pop-wrap pop-brew-intro">
        <div>
          <Rise>
            <p className="pop-eyebrow">About</p>
          </Rise>
          <Rise i={1}>
            <h2 className="pop-h2">what is hacktoberfest?</h2>
          </Rise>
        </div>
        <div className="pop-about-copy">
          <Rise i={2}>
            <p className="pop-body">
              A month-long celebration of open source, run by Major League Hacking and DEV in
              partnership with DigitalOcean. This year is all about building with open-source and
              open-weight AI.
            </p>
          </Rise>
          <Rise i={3}>
            <p className="pop-brew-lead">Here's the recipe.</p>
          </Rise>
        </div>
      </div>

      <div className={"pop-brew-pin" + (reduce ? " is-static" : "")} ref={pinRef}>
        <div className="pop-brew-frame">
          <div className="pop-wrap pop-brew-grid">
            <div className="pop-brew-scene">
              <BrewScene progress={reduce ? done : sceneProgress} className="pop-machine" />
              <p className="pop-brew-caption" aria-hidden="true">
                <span>the recipe</span>
                <span className="pop-brew-dots">
                  {STEPS.map((s, i) => (
                    <i key={s.title} className={reduce || i <= active ? "is-on" : ""} />
                  ))}
                </span>
              </p>
            </div>

            <div className="pop-brew-stackwrap">
              {!reduce && (
                <motion.p className="pop-brew-hint" style={{ opacity: hintOpacity }} aria-hidden="true">
                  Scroll to start brewing
                  <span className="pop-brew-arrow">↓</span>
                </motion.p>
              )}
              <ol className="pop-brew-stack">
                {STEPS.map((s, i) =>
                  reduce ? (
                    <li key={s.title} className="pop-brew-card is-active">
                      <span className="pop-brew-n">
                        step {i + 1} of {STEPS.length}
                      </span>
                      <h3 className="pop-brew-title">{s.title}</h3>
                      <p className="pop-body">{s.body}</p>
                    </li>
                  ) : (
                    <StackCard key={s.title} i={i} p={scrollYProgress} active={i === active} />
                  ),
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="pop-wrap pop-brew-meta">
        <div>
          <p className="pop-eyebrow">The details</p>
          <p className="pop-note">Everything you need to know before you show up.</p>
        </div>
        <dl className="pop-meta">
          {META.map(([k, v]) => (
            <div className="pop-meta-row" key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
      <Drip />
    </section>
  );
}
