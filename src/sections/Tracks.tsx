import { IconBot, IconNet, IconRocket, IconStack, IconStar } from "../art/Icons";
import { EVENT } from "../event";
import { Rise } from "../motion";
import ExtLink from "./ExtLink";

// The four DEV Badge tracks approved on OrganizerHQ.
export const TRACKS = [
  {
    title: "Best Agent Skill",
    big: "skill",
    tile: "pop-tile--marigold",
    Icon: IconBot,
    note: "Package reusable instructions and files an agent can pick up, following the Agent Skills open standard.",
  },
  {
    title: "Best Use of an Open-Weight LLM",
    big: "LLM",
    tile: "pop-tile--teal",
    Icon: IconNet,
    note: "Build on a large open-weight language model, over 10B parameters, whose weights you can download and run.",
  },
  {
    title: "Best Use of an Open-Weight SLM",
    big: "SLM",
    tile: "pop-tile--pink",
    Icon: IconRocket,
    note: "Go small: build on an open-weight model with 10B parameters or fewer.",
  },
  {
    title: "Best Use of an Open-Source Model Harness",
    big: "harness",
    tile: "pop-tile--orange",
    Icon: IconStack,
    note: "Write the software around a model (prompts, tools, memory, actions) from scratch, or meaningfully improve an open-source one.",
  },
];

export default function Tracks() {
  return (
    <section className="pop-band pop-band--pink pop-tracks" id="tracks">
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
            </p>
          </Rise>
        </div>

        <div className="pop-card-grid">
          {TRACKS.map((t, i) => (
            <Rise i={i} key={t.title}>
              <article className="pop-card">
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
      </div>

      <div className="pop-badge" aria-hidden="true">
        <IconStar className="pop-badge-star" />
        <span>
          one
          <br />
          day
        </span>
      </div>
    </section>
  );
}
