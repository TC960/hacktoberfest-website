import { useState } from "react";
import { IconCauldron, IconCrystalBall, IconPotion, IconSpellbook } from "../art/Icons";
import { Bat, CandyCorn, Drip, PumpkinPlanet, Spider } from "../art/Spooky";
import { EVENT } from "../event";
import { Rise } from "../motion";
import ExtLink from "./ExtLink";

// The four DEV Badge tracks approved on OrganizerHQ.
const TRACKS = [
  {
    title: "Best Agent Skill",
    tile: "pop-tile--candle",
    Icon: IconSpellbook,
    note: "Package reusable instructions and files an agent can pick up, following the Agent Skills open standard.",
  },
  {
    title: "Best Use of an Open-Weight LLM",
    tile: "pop-tile--lilac",
    Icon: IconCrystalBall,
    note: "Build on a large open-weight language model, over 10B parameters, whose weights you can download and run.",
  },
  {
    title: "Best Use of an Open-Weight SLM",
    tile: "pop-tile--teal",
    Icon: IconPotion,
    note: "Go small: build on an open-weight model with 10B parameters or fewer.",
  },
  {
    title: "Best Use of an Open-Source Model Harness",
    tile: "pop-tile--orange",
    Icon: IconCauldron,
    note: "Write the software around a model (prompts, tools, memory, actions) from scratch, or meaningfully improve an open-source one.",
  },
];
const TRACK_PRIZE = "DEV Badge for every teammate";

// The space challenge, judged separately from the four DEV Badge tracks.
const LEGENDARY = {
  title: "Make it Legendary",
  prize: "3 months of Cursor Pro Plus",
  pitch:
    "Space gives you more to work with than almost any other field: enormous public datasets, decades of missions, and a literature no human can read all of. Real space data goes in and a legendary project comes out.",
  rules: [
    "Build it with Cursor. The more you use Cursor, the more likely you are to win.",
    "Use the Grok Imagine or Grok Voice API in your project.",
    "Bonus points for using Grok Bot for project planning and team collaboration.",
  ],
};

/** A track card: the name on the front, the brief and the prize on the back. */
function TrackCard({ t }: { t: (typeof TRACKS)[number] }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      type="button"
      className={"pop-flip" + (flipped ? " is-flipped" : "")}
      aria-pressed={flipped}
      onClick={() => setFlipped((f) => !f)}
    >
      <span className="pop-flip-inner">
        <span className="pop-flip-face pop-flip-front pop-card pop-card--web" aria-hidden={flipped}>
          <span className={"pop-card-tile " + t.tile}>
            <t.Icon className="pop-card-icon" />
          </span>
          <span className="pop-flip-title">{t.title}</span>
          <span className="pop-flip-hint">Tap for the brief ↻</span>
        </span>
        <span className="pop-flip-face pop-flip-back pop-card" aria-hidden={!flipped}>
          <span className="pop-flip-label">{t.title}</span>
          <span className="pop-flip-note">{t.note}</span>
          <span className="pop-flip-prize">
            <span className="pop-flip-label">Prize</span>
            <span className="pop-legend-prize">{TRACK_PRIZE}</span>
          </span>
        </span>
      </span>
    </button>
  );
}

export default function Tracks() {
  return (
    <section className="pop-band pop-band--orange pop-tracks" id="tracks">
      <span className="pop-spider" aria-hidden="true">
        <span className="pop-spider-in">
          <Spider />
        </span>
      </span>
      <div className="pop-wrap">
        <div className="pop-tracks-head">
          <Rise>
            <p className="pop-eyebrow">The challenge</p>
          </Rise>
          <Rise i={1}>
            <h2 className="pop-h2">four tracks. build with open-source AI.</h2>
          </Rise>
          <Rise i={2}>
            <p className="pop-note pop-tracks-note">
              Tap a card for the brief and the prize, and enter every track your project fits.
              Open-source or open-weight AI has to do real work in your project, and the code goes
              in a public GitHub repo under an{" "}
              <ExtLink href={EVENT.osiLicensesUrl}>open-source licence</ExtLink>.
            </p>
          </Rise>
        </div>

        <div className="pop-card-grid">
          {TRACKS.map((t, i) => (
            <Rise i={i} key={t.title}>
              <TrackCard t={t} />
            </Rise>
          ))}
        </div>

        <Rise>
          <article className="pop-legend" id="legendary">
            <PumpkinPlanet className="pop-legend-art" />
            <div className="pop-legend-copy">
              <p className="pop-legend-tags">
                <span className="pop-legend-extra">Extra</span>
                <span className="pop-legend-label">SpaceXAI Challenge</span>
              </p>
              <h3 className="pop-legend-title">{LEGENDARY.title}</h3>
              <p className="pop-legend-pitch">{LEGENDARY.pitch}</p>
            </div>
            <div className="pop-legend-side">
              <p className="pop-legend-label">To be eligible</p>
              <ul className="pop-legend-rules">
                {LEGENDARY.rules.map((rule) => (
                  <li key={rule}>
                    <CandyCorn className="pop-legend-bullet" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
              <p className="pop-flip-prize">
                <span className="pop-legend-label">Prize</span>
                <span className="pop-legend-prize">{LEGENDARY.prize}</span>
              </p>
            </div>
          </article>
        </Rise>
      </div>

      <div className="pop-badge" aria-hidden="true">
        <Bat className="pop-badge-star" />
        <span>
          one
          <br />
          day
        </span>
      </div>
      <Drip />
    </section>
  );
}
