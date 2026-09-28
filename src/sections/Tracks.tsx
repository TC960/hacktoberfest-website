import { IconCauldron, IconCrystalBall, IconPotion, IconSpellbook } from "../art/Icons";
import { Bat, CandyCorn, Drip, PumpkinPlanet, Spider } from "../art/Spooky";
import { EVENT } from "../event";
import { Rise } from "../motion";
import ExtLink from "./ExtLink";

// The four DEV Badge tracks approved on OrganizerHQ.
export const TRACKS = [
  {
    title: "Best Agent Skill",
    big: "skill",
    tile: "pop-tile--candle",
    Icon: IconSpellbook,
    note: "Package reusable instructions and files an agent can pick up, following the Agent Skills open standard.",
  },
  {
    title: "Best Use of an Open-Weight LLM",
    big: "LLM",
    tile: "pop-tile--lilac",
    Icon: IconCrystalBall,
    note: "Build on a large open-weight language model, over 10B parameters, whose weights you can download and run.",
  },
  {
    title: "Best Use of an Open-Weight SLM",
    big: "SLM",
    tile: "pop-tile--teal",
    Icon: IconPotion,
    note: "Go small: build on an open-weight model with 10B parameters or fewer.",
  },
  {
    title: "Best Use of an Open-Source Model Harness",
    big: "harness",
    tile: "pop-tile--orange",
    Icon: IconCauldron,
    note: "Write the software around a model (prompts, tools, memory, actions) from scratch, or meaningfully improve an open-source one.",
  },
];

// The space challenge, judged separately from the four DEV Badge tracks.
export const LEGENDARY = {
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
              Each track has its own winner, and every member of each winning team gets a DEV
              Badge. Enter every track your project fits when you submit. Open-source or
              open-weight AI has to do real work in your project, and the code goes in a public
              GitHub repo under an <ExtLink href={EVENT.osiLicensesUrl}>open-source licence</ExtLink>.
              There's also a space challenge, Make it Legendary, with its own prize.
            </p>
          </Rise>
        </div>

        <div className="pop-card-grid">
          {TRACKS.map((t, i) => (
            <Rise i={i} key={t.title}>
              <article className="pop-card pop-card--web">
                <span className={"pop-card-tile " + t.tile}>
                  <t.Icon className="pop-card-icon" />
                </span>
                <h3 className="pop-card-title">{t.title}</h3>
                <p className="pop-card-tbd">{t.big}</p>
                <p className="pop-card-note">{t.note}</p>
              </article>
            </Rise>
          ))}
        </div>

        <Rise>
          <article className="pop-legend" id="legendary">
            <PumpkinPlanet className="pop-legend-art" />
            <div className="pop-legend-copy">
              <p className="pop-eyebrow">Plus a space challenge</p>
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
              <p className="pop-legend-prize">{LEGENDARY.prize}</p>
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
