import React, { useState } from "react";
import { IconToggle } from "../art/Icons";
import { EVENT, QUESTIONS_EMAIL } from "../event";
import { Rise } from "../motion";

const ext = { target: "_blank", rel: "noreferrer" };

const QA: Array<[string, React.ReactNode]> = [
  [
    "What is Hacktoberfest?",
    <>
      A month-long celebration of open source every October, run by Major League Hacking and DEV
      in partnership with DigitalOcean. The 2026 theme is "AI belongs to everyone": hundreds of
      in-person Fests and online events about learning and building with open-source AI.
    </>,
  ],
  [
    "Who can come?",
    <>
      Hacktoberfest is open to anyone aged 13 or older, at any skill level. First hackathon?
      You're exactly who this is for.
    </>,
  ],
  [
    "How much does it cost?",
    <>Nothing. Hack Days are free to attend.</>,
  ],
  [
    "How do I register?",
    <>
      On OrganizerHQ, MLH's event platform. Every Hacktoberfest Fest uses it for registration,
      check-in and project submissions.{" "}
      <a href={EVENT.registerUrl} {...ext}>Register here</a>.
    </>,
  ],
  [
    "When does it start?",
    <>
      {EVENT.dateLong}, at the {EVENT.venue}. Start and end times are TBD and will be posted
      here and sent to everyone who registers.
    </>,
  ],
  [
    "Do I need a team?",
    <>
      No. Come solo and find one at team formation, or show up with friends. You can also hack
      alone.
    </>,
  ],
  [
    "What counts as open-source AI?",
    <>
      Open-source or open-weight AI has to be an important part of how your project works: an{" "}
      <a href={EVENT.agentSkillsUrl} {...ext}>agent skill</a>, an app built on an open-weight
      language model, or a model harness you wrote or meaningfully improved. Name your model and
      link its licence in the README.
    </>,
  ],
  [
    "Can I start my project early?",
    <>
      Bring ideas, not code. Project work starts at the event, per the{" "}
      <a href={EVENT.hackathonRulesUrl} {...ext}>MLH Standard Hackathon Rules</a>. AI coding tools
      are fine; just say which ones you used.
    </>,
  ],
  [
    "What should I bring?",
    <>Laptop, charger, a GitHub account, and the OrganizerHQ account you registered with.</>,
  ],
  [
    "Will there be swag?",
    <>
      Hacktoberfest sends stickers, postcards and a limited number of T-shirts, subject to
      availability. We can't promise everyone a shirt.
    </>,
  ],
  [
    "Is there a code of conduct?",
    <>
      Yes. Everyone at the event follows the{" "}
      <a href={EVENT.codeOfConductUrl} {...ext}>MLH Code of Conduct</a>. If something's wrong,
      find an organiser.
    </>,
  ],
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="pop-band pop-band--cream pop-faq" id="faq">
      <div className="pop-wrap pop-faq-grid">
        <div className="pop-faq-side">
          <Rise>
            <p className="pop-eyebrow">Questions</p>
          </Rise>
          <Rise i={1}>
            <h2 className="pop-h2">before you register</h2>
          </Rise>
          <Rise i={2}>
            <p className="pop-note">
              Anything still unanswered goes to{" "}
              <a href={`mailto:${QUESTIONS_EMAIL}`}>{QUESTIONS_EMAIL}</a>.
            </p>
          </Rise>
          <Rise i={3}>
            <a className="pop-btn" href={EVENT.registerUrl} {...ext}>
              Register on OrganizerHQ
            </a>
          </Rise>
        </div>

        <Rise i={1} className="pop-faq-listwrap">
          <ul className="pop-faq-list">
            {QA.map(([q, a], i) => {
              const isOpen = open === i;
              const id = `faq-${i}`;
              return (
                <li className="pop-faq-row" key={q}>
                  <button
                    className="pop-faq-q"
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{q}</span>
                    <IconToggle open={isOpen} className="pop-faq-icon" />
                  </button>
                  <div id={id} className={"pop-faq-a" + (isOpen ? " is-open" : "")}>
                    <div className="pop-faq-a-in">
                      <p>{a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Rise>
      </div>
    </section>
  );
}
