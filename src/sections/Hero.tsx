import React from "react";
import Rocket from "../art/Rocket";
import { EVENT } from "../event";
import { Drift, Rise } from "../motion";

export default function Hero() {
  return (
    <section className="pop-band pop-band--pink pop-hero" id="top">
      <div className="pop-wrap">
        <Rise>
          <p className="pop-eyebrow">
            {EVENT.presenter} × Major League Hacking — an official Hacktoberfest 2026 Fest
          </p>
        </Rise>

        <Rise i={1}>
          <h1 className="pop-hero-type">
            <span className="pop-hero-sm">ai belongs to everyone.</span>
            <span className="pop-hero-lg">
              hacktoberfest<em>2026</em>
            </span>
          </h1>
        </Rise>

        <div className="pop-hero-lower">
          <div className="pop-hero-copy">
            <Rise i={2}>
              <p className="pop-hero-lead">
                {EVENT.dateLong} · {EVENT.venue}.
              </p>
            </Rise>
            <Rise i={3}>
              <p className="pop-hero-sub">
                A one-day, in-person hackathon for building with open-source and open-weight AI.
                Free to attend, open to every skill level. Start time {EVENT.time === "TBD" ? "to be announced" : EVENT.time}.
              </p>
            </Rise>
            <Rise i={4}>
              <div className="pop-hero-cta">
                <a className="pop-btn" href={EVENT.registerUrl} target="_blank" rel="noreferrer">
                  Register on OrganizerHQ
                </a>
                <a className="pop-btn pop-btn--ghost" href="#register">
                  How it works
                </a>
              </div>
            </Rise>
          </div>

          <Drift className="pop-hero-art" amount={30}>
            <Rocket className="pop-saur" />
          </Drift>
        </div>
      </div>
    </section>
  );
}
