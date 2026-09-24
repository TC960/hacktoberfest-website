import React from "react";
import { IconStar } from "../art/Icons";

const ITEMS = [
  "HACKTOBERFEST 2026",
  "MON OCT 19",
  "PC WEST BALLROOM",
  "AI BELONGS TO EVERYONE",
  "BUILD WITH OPEN-SOURCE AI",
  "FREE TO ATTEND",
  "REGISTER ON ORGANIZERHQ",
];

function Sequence() {
  return (
    <div className="pop-marquee-seq">
      {ITEMS.map((item) => (
        <React.Fragment key={item}>
          <span className="pop-marquee-item">{item}</span>
          <IconStar className="pop-marquee-star" />
        </React.Fragment>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="pop-marquee" aria-label="Event highlights">
      <p className="pop-sr">
        Hacktoberfest 2026 — Monday October 19 — Price Center West Ballroom — AI belongs to
        everyone — build with open-source AI — free to attend — register on OrganizerHQ.
      </p>
      <div className="pop-marquee-track" aria-hidden="true">
        <Sequence />
        <Sequence />
      </div>
    </section>
  );
}
