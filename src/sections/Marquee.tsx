import React, { useState } from "react";
import { Bat, CandyCorn, Drip } from "../art/Spooky";
import { EVENT } from "../event";

const ITEMS = [
  EVENT.name.toUpperCase(),
  EVENT.nameHost.toUpperCase(),
  "SUN OCT 25",
  "THE BASEMENT, DIB",
  "AI BELONGS TO EVERYONE",
  "BUILD WITH OPEN-SOURCE AI",
  "FREE TO ATTEND",
  `APPLY BY ${EVENT.appsCloseShort.toUpperCase()}`,
];

function Sequence() {
  return (
    <div className="pop-marquee-seq">
      {ITEMS.map((item, i) => (
        <React.Fragment key={item}>
          <span className="pop-marquee-item">{item}</span>
          {i % 2 ? (
            <Bat className="pop-marquee-star pop-marquee-star--bat" />
          ) : (
            <CandyCorn className="pop-marquee-star" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default function Marquee() {
  const [hover, setHover] = useState(false);

  return (
    <section
      className="pop-marquee"
      aria-label="Event highlights"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p className="pop-sr">
        {EVENT.name} at UC San Diego — {EVENT.dateLong} — {EVENT.venueShort} — AI belongs to
        everyone — build with open-source AI — free to attend — apply on OrganizerHQ by{" "}
        {EVENT.appsClose}.
      </p>
      <div className="pop-marquee-clip">
        <div
          className="pop-marquee-track"
          aria-hidden="true"
          style={hover ? { animationPlayState: "paused" } : undefined}
        >
          <Sequence />
          <Sequence />
        </div>
      </div>
      <Drip />
    </section>
  );
}
