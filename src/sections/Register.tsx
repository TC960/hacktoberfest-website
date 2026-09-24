import React from "react";
import { IconExternal } from "../art/Icons";
import { EVENT } from "../event";
import { Rise } from "../motion";

const STEPS = [
  {
    n: "01",
    title: "Register on OrganizerHQ",
    body: "Hacktoberfest runs every Fest through OrganizerHQ, Major League Hacking's event platform. Sign up there. It's free, and it's the only way in.",
  },
  {
    n: "02",
    title: "Check in at the door",
    body: "Bring the account you registered with. You're checked in on OrganizerHQ when you arrive at the ballroom.",
  },
  {
    n: "03",
    title: "Build, then submit",
    body: "One teammate submits the project on OrganizerHQ Challenges before the deadline: public GitHub repo, open-source licence, every challenge you're entering ticked.",
  },
];

export default function Register() {
  return (
    <section className="pop-band pop-band--teal pop-reg" id="register">
      <div className="pop-wrap">
        <div className="pop-reg-head">
          <Rise>
            <p className="pop-eyebrow">How to join</p>
          </Rise>
          <Rise i={1}>
            <h2 className="pop-h2">three steps to the launch pad</h2>
          </Rise>
        </div>

        <ol className="pop-reg-steps">
          {STEPS.map((s, i) => (
            <Rise as="li" i={i} key={s.n} className="pop-reg-step">
              <span className="pop-reg-n">{s.n}</span>
              <h3 className="pop-card-title">{s.title}</h3>
              <p className="pop-card-note">{s.body}</p>
            </Rise>
          ))}
        </ol>

        <Rise i={3}>
          <div className="pop-venue">
            <div className="pop-venue-main">
              <p className="pop-eyebrow">Venue</p>
              <p className="pop-venue-name">{EVENT.venue}</p>
              <p className="pop-venue-sub">
                Price Center, {EVENT.campus} · {EVENT.dateLong} · {EVENT.time === "TBD" ? "Time TBD" : EVENT.time}
              </p>
            </div>
            <div className="pop-venue-cta">
              <a className="pop-btn pop-btn--ink" href={EVENT.registerUrl} target="_blank" rel="noreferrer">
                Register now <IconExternal className="pop-btn-ico" />
              </a>
              <a className="pop-btn pop-btn--ghost" href={EVENT.mapUrl} target="_blank" rel="noreferrer">
                Open in Maps
              </a>
            </div>
          </div>
        </Rise>

        <Rise i={4}>
          <p className="pop-note pop-reg-online">
            Can't make it on the 19th? Hacktoberfest also runs online challenges all October at{" "}
            <a href={EVENT.hacktoberfestUrl} target="_blank" rel="noreferrer">hacktoberfest.com</a>.
          </p>
        </Rise>
      </div>
    </section>
  );
}
