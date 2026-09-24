import React from "react";
import { Coffee, Laptop, Server } from "../art/Props";
import { EVENT } from "../event";
import { Drift, Rise } from "../motion";

type Row = { time: string; title: string; note?: string };

// Offsets from kickoff (T+0:00). Swap for clock times once the start time is set.
const DAY: Row[] = [
  { time: "T−0:30", title: "Check-in opens", note: "Check in on OrganizerHQ at the door" },
  { time: "T+0:00", title: "Opening ceremony", note: "Code of conduct, challenges, how submissions work" },
  { time: "T+0:20", title: "Team formation", note: "Come solo, leave with a team" },
  { time: "T+0:30", title: "Hacking starts", note: "Submissions open on OrganizerHQ" },
  { time: "T+2:30", title: "Food + workshops", note: "Lineup TBA" },
  { time: "T+5:00", title: "Submissions close", note: "Hard stop. Really." },
  { time: "T+5:15", title: "Demos", note: "Every team gets the same shot" },
  { time: "T+6:00", title: "Winners + closing" },
];

const PREP: Row[] = [
  { time: "01", title: "Register on OrganizerHQ", note: "You need it to check in and to submit" },
  { time: "02", title: "Make a GitHub account", note: "Projects go in a public repo" },
  { time: "03", title: "Skim the challenge", note: "Agent skills, open-weight models, harnesses" },
  { time: "04", title: "Charge everything", note: "Laptop, charger, phone, ID" },
];

function Column({
  label,
  date,
  rows,
  foot,
}: {
  label: string;
  date: string;
  rows: Row[];
  foot: string;
}) {
  return (
    <div className="pop-day">
      <div className="pop-day-head">
        <span className="pop-day-label">{label}</span>
        <span className="pop-day-date">{date}</span>
      </div>
      <ul className="pop-day-rows">
        {rows.map((r, i) => (
          <Rise as="li" i={Math.min(i, 4)} y={16} key={r.title} className="pop-row">
            <span className="pop-row-time">{r.time}</span>
            <span className="pop-row-body">
              <span className="pop-row-title">{r.title}</span>
              {r.note && <span className="pop-row-note">{r.note}</span>}
            </span>
          </Rise>
        ))}
      </ul>
      <p className="pop-day-foot">{foot}</p>
    </div>
  );
}

export default function Schedule() {
  return (
    <section className="pop-band pop-band--cream pop-sched" id="schedule">
      <div className="pop-wrap">
        <div className="pop-sched-head">
          <Rise>
            <p className="pop-eyebrow">Schedule</p>
          </Rise>
          <Rise i={1}>
            <h2 className="pop-h2">countdown to demo day</h2>
          </Rise>
        </div>

        <div className="pop-sched-grid">
          <Column
            label="Monday"
            date={`${EVENT.dateShort} · ${EVENT.time === "TBD" ? "Start time TBD" : EVENT.time}`}
            rows={DAY}
            foot="Times count from kickoff and are indicative. Clock times land once the start time is confirmed."
          />
          <Column
            label="Before"
            date="Checklist"
            rows={PREP}
            foot="No prep work on the project itself: building starts at the event."
          />
        </div>

        <div className="pop-sched-props" aria-hidden="true">
          <Drift amount={26} className="pop-prop pop-prop--laptop">
            <Laptop />
          </Drift>
          <Drift amount={-20} className="pop-prop pop-prop--coffee">
            <Coffee />
          </Drift>
          <Drift amount={32} className="pop-prop pop-prop--server">
            <Server />
          </Drift>
        </div>
      </div>
    </section>
  );
}
