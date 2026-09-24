import React, { useState } from "react";
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
  const [paused, setPaused] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <section
      className="pop-marquee"
      aria-label="Event highlights"
      style={{ position: "relative" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p className="pop-sr">
        Hacktoberfest 2026 — Monday October 19 — Price Center West Ballroom — AI belongs to
        everyone — build with open-source AI — free to attend — register on OrganizerHQ.
      </p>
      <div
        className="pop-marquee-track"
        aria-hidden="true"
        style={paused || hover ? { animationPlayState: "paused" } : undefined}
      >
        <Sequence />
        <Sequence />
      </div>
      <button
        type="button"
        className="pop-marquee-toggle"
        aria-pressed={paused}
        onClick={() => setPaused((p) => !p)}
        style={{
          position: "absolute",
          right: "0.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          background: "#000",
          color: "var(--cream)",
          border: "2px solid var(--cream)",
          borderRadius: "3px",
          padding: "0.3rem 0.55rem",
          fontSize: "0.6875rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          outlineColor: "var(--marigold)",
        }}
      >
        {paused ? "Play" : "Pause"}
        <span className="pop-sr"> scrolling text</span>
      </button>
    </section>
  );
}
