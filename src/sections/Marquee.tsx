import React, { useState } from "react";
import { Bat, CandyCorn, Drip } from "../art/Spooky";
import { EVENT } from "../event";

const ITEMS = [
  EVENT.name.toUpperCase(),
  EVENT.nameHost.toUpperCase(),
  "SUN OCT 25",
  "THE BASEMENT, DIB",
  `APPLY BY ${EVENT.applyBy.toUpperCase()}`,
  "AI BELONGS TO EVERYONE",
  "BUILD WITH OPEN-SOURCE AI",
  "MAKE IT LEGENDARY",
  "FREE TO ATTEND",
  "REGISTER ON ORGANIZERHQ",
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
  const [paused, setPaused] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <section
      className="pop-marquee"
      aria-label="Event highlights"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p className="pop-sr">
        {EVENT.name} {EVENT.nameHost} — Sunday October 25 — The Basement, DIB — apply by {EVENT.applyBy} — AI
        belongs to everyone — build with open-source AI — free to attend — register on
        OrganizerHQ.
      </p>
      <div className="pop-marquee-clip">
        <div
          className="pop-marquee-track"
          aria-hidden="true"
          style={paused || hover ? { animationPlayState: "paused" } : undefined}
        >
          <Sequence />
          <Sequence />
        </div>
      </div>
      <button
        type="button"
        className="pop-marquee-toggle"
        aria-pressed={paused}
        onClick={() => setPaused((p) => !p)}
      >
        {paused ? "Play" : "Pause"}
        <span className="pop-sr"> scrolling text</span>
      </button>
      <Drip />
    </section>
  );
}
