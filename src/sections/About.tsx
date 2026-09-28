import { useRef, useState } from "react";
import { useMotionValue, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
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

// The recipe the cauldron acts out as you scroll. Each step maps to a quarter of
// BrewScene's progress, and loosely to a challenge track.
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

export default function About() {
  const reduce = useReducedMotion();
  const stepsRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: stepsRef, offset: ["start 0.75", "end 0.95"] });
  // Reduced motion: skip the story and show the finished brew.
  const done = useMotionValue(1);
  const progress = reduce ? done : scrollYProgress;

  const [active, setActive] = useState(-1);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(v <= 0 ? -1 : Math.min(STEPS.length - 1, Math.floor(v * STEPS.length)));
  });

  return (
    <section className="pop-band pop-band--lavender pop-about" id="about">
      <span className="pop-web pop-web--tl" aria-hidden="true" />
      <div className="pop-fog" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="pop-wrap pop-brew">
        <div className="pop-about-copy pop-brew-intro">
          <Rise>
            <p className="pop-eyebrow">What it is</p>
          </Rise>
          <Rise i={1}>
            <h2 className="pop-h2">one day to brew something with open-source ai</h2>
          </Rise>
          <Rise i={2}>
            <p className="pop-body">
              Hacktoberfest is the month-long celebration of open source, run by Major League
              Hacking and DEV in partnership with DigitalOcean. This year's Fests are about hands-on building with open-source and
              open-weight AI, and prizes are judged on what you build, not pull-request counts.
            </p>
          </Rise>
          <Rise i={3}>
            <p className="pop-body">
              {EVENT.name} is a Hack Day brought to you by {EVENT.hostLong} at {EVENT.campus}, in
              partnership with MLH: show up, form a team, ship an open-source AI project, and demo
              it before the day is out. Here's the recipe.
            </p>
          </Rise>
        </div>

        <div className="pop-brew-stage">
          <div className="pop-brew-sticky">
            <BrewScene progress={progress} className="pop-machine" />
            <p className="pop-brew-caption" aria-hidden="true">
              <span>the recipe</span>
              <span className="pop-brew-dots">
                {STEPS.map((s, i) => (
                  <i key={s.title} className={reduce || i <= active ? "is-on" : ""} />
                ))}
              </span>
            </p>
          </div>
        </div>

        <ol className="pop-brew-steps" ref={stepsRef}>
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className={"pop-brew-step" + (reduce || i === active ? " is-active" : "")}
            >
              <span className="pop-brew-n">step {i + 1}</span>
              <h3 className="pop-brew-title">{s.title}</h3>
              <p className="pop-body">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="pop-brew-meta">
          <p className="pop-eyebrow">The details</p>
          <dl className="pop-meta">
            {META.map(([k, v]) => (
              <div className="pop-meta-row" key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <Drip />
    </section>
  );
}
