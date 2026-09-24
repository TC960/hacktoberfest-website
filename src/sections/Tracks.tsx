import { IconBot, IconNet, IconRocket, IconStack, IconStar } from "../art/Icons";
import { EVENT } from "../event";
import { Rise } from "../motion";
import ExtLink from "./ExtLink";

const TRACKS = [
  {
    title: "Agent skills",
    big: "skill",
    tile: "pop-tile--marigold",
    Icon: IconBot,
    note: "Package reusable instructions and files an agent can pick up, following the Agent Skills open standard.",
  },
  {
    title: "Open-weight models",
    big: "LLM/SLM",
    tile: "pop-tile--teal",
    Icon: IconNet,
    note: "Build on a model whose weights you can download and run. Small is 10B parameters or fewer; large is anything above.",
  },
  {
    title: "Model harnesses",
    big: "harness",
    tile: "pop-tile--orange",
    Icon: IconStack,
    note: "Write the software around a model (prompts, tools, memory, actions) from scratch, or meaningfully improve an open-source one.",
  },
  {
    title: `${EVENT.partner} challenge`,
    big: "TBD",
    tile: "pop-tile--pink",
    Icon: IconRocket,
    note: "A separate local challenge from our presenting partner, not run by MLH. Prompt, prize and judging criteria announced closer to the day.",
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
            <h2 className="pop-h2">open-source AI, three ways in. plus one from {EVENT.partner.toLowerCase()}.</h2>
          </Rise>
          <Rise i={2}>
            <p className="pop-note pop-tracks-note">
              Every project can enter Hacktoberfest's Best Open-Source AI Project challenge: tick it
              when you submit. The first three cards are ways in to that one challenge, not separate
              prizes; mix them however you like. Open-source or open-weight AI has to do real work
              in your project, and the code goes in a public GitHub repo under an{" "}
              <ExtLink href={EVENT.osiLicensesUrl}>open-source licence</ExtLink>. The{" "}
              {EVENT.partner} challenge is a separate local challenge.
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
