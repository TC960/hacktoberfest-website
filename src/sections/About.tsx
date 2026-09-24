import React from "react";
import Machine from "../art/Machine";
import { EVENT } from "../event";
import { Drift, Rise } from "../motion";

const META: Array<[string, string]> = [
  ["Format", `${EVENT.format}, in person`],
  ["Date", EVENT.dateLong],
  ["Time", EVENT.time],
  ["Venue", `${EVENT.venue}, ${EVENT.campus}`],
  ["Cost", "Free"],
  ["Level", "All of them, including none"],
];

export default function About() {
  return (
    <section className="pop-band pop-band--marigold pop-about" id="about">
      <div className="pop-wrap pop-about-grid">
        <Drift className="pop-about-art" amount={46}>
          <Machine className="pop-machine" />
        </Drift>

        <div className="pop-about-copy">
          <Rise>
            <p className="pop-eyebrow">What it is</p>
          </Rise>
          <Rise i={1}>
            <h2 className="pop-h2">one day to build something with open AI</h2>
          </Rise>
          <Rise i={2}>
            <p className="pop-body">
              Hacktoberfest is the month-long celebration of open source, run by Major League
              Hacking and DEV in partnership with DigitalOcean. In 2026 it trades pull-request
              counts for hands-on building with open-source and open-weight AI.
            </p>
          </Rise>
          <Rise i={3}>
            <p className="pop-body">
              This Fest is a Hack Day presented by {EVENT.presenter} and MLH: show up, form a
              team, ship an open-source AI project, and demo it before the day is out. Come solo
              or bring friends.
            </p>
          </Rise>
          <Rise i={4}>
            <dl className="pop-meta">
              {META.map(([k, v]) => (
                <div className="pop-meta-row" key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </Rise>
        </div>
      </div>
    </section>
  );
}
