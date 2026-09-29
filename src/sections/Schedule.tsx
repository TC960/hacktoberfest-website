import { useRef, type RefObject } from "react";
import { m as motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Candle, Drip, Ghost, Pumpkin } from "../art/Spooky";
import { EVENT } from "../event";
import { Drift, Rise } from "../motion";

type Row = { time: string; title: string; note?: string };

const DAY: Row[] = [
  { time: "3:45 PM", title: "Check-in", note: "Doors open; check in on OrganizerHQ until 4:15" },
  { time: "4:15 PM", title: "Challenge intro", note: "Code of conduct, tracks, how submissions work" },
  { time: "4:30 PM", title: "Hacking begins", note: "No project work before this" },
  { time: "8:00 PM", title: "Submissions due", note: "On OrganizerHQ Challenges. Hard stop." },
  { time: "8:00 PM", title: "Judging + dinner", note: "Until 9:00 PM" },
  { time: "8:45 PM", title: "Winners announced" },
];

const PREP: Row[] = [
  { time: "01", title: "Apply on OrganizerHQ", note: `By ${EVENT.appsCloseShort}. You need it to check in and to submit` },
  { time: "02", title: "Join the Discord", note: "Invites go to accepted hackers. Find a team there" },
  { time: "03", title: "Set up GitHub and DEV", note: "Projects go in a public repo; badges go to your dev.to account" },
  { time: "04", title: "Skim the tracks", note: "Agent skill, open-weight LLM or SLM, model harness" },
  { time: "05", title: "Pack the bag", note: "Laptop, charger, phone, photo ID, refillable water bottle" },
];

/** A wick down the side of the day's timeline that burns as you scroll through it. */
function Rail({ target }: { target: RefObject<HTMLUListElement> }) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target, offset: ["start 0.65", "end 0.65"] });
  const top = useTransform(scrollYProgress, (v) => `${v * 100}%`);
  return (
    <div className="pop-rail" aria-hidden="true">
      <motion.div className="pop-rail-fill" style={{ scaleY: reduce ? 1 : scrollYProgress }} />
      <motion.span className="pop-rail-mark" style={{ top: reduce ? "100%" : top }}>
        <Pumpkin />
      </motion.span>
    </div>
  );
}

function Column({
  label,
  date,
  rows,
  foot,
  rail = false,
}: {
  label: string;
  date: string;
  rows: Row[];
  foot: string;
  rail?: boolean;
}) {
  const listRef = useRef<HTMLUListElement>(null);
  return (
    <div className="pop-day">
      <div className="pop-day-head">
        <span className="pop-day-label">{label}</span>
        <span className="pop-day-date">{date}</span>
      </div>
      <div className={"pop-day-track" + (rail ? " pop-day-track--rail" : "")}>
        {rail && <Rail target={listRef} />}
        <ul className="pop-day-rows" ref={listRef}>
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
      </div>
      <p className="pop-day-foot">{foot}</p>
    </div>
  );
}

export default function Schedule() {
  return (
    <section className="pop-band pop-band--lavender pop-sched" id="schedule">
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
            rail
            foot={`Doors open at ${EVENT.doorsOpen}. No project work before hacking begins at 4:30 PM.`}
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
            <Ghost />
          </Drift>
          <Drift amount={-20} className="pop-prop pop-prop--coffee">
            <Candle />
          </Drift>
          <Drift amount={32} className="pop-prop pop-prop--server">
            <Pumpkin />
          </Drift>
        </div>
      </div>
      <Drip />
    </section>
  );
}
