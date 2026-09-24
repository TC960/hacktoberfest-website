import React, { useState } from "react";
import { IconToggle } from "../art/Icons";
import { EVENT, INCIDENT_TEL, ORGANISER, QUESTIONS_EMAIL } from "../event";
import { Rise } from "../motion";
import ExtLink, { NewTab } from "./ExtLink";

const QA: Array<[string, React.ReactNode]> = [
  [
    "What is Hacktoberfest?",
    <>
      A month-long celebration of open source every October, run by Major League Hacking and DEV
      in partnership with DigitalOcean. The 2026 theme is "AI belongs to everyone": it's about learning and building with open-source AI, at in-person Fests and
      online.
    </>,
  ],
  [
    "Who can come?",
    <>
      Anyone aged 13 or older, at any skill level. First hackathon? You're exactly who this is
      for. Under 18? Check the registration page first: you'll need a parent or
      guardian's permission, including to win prizes and to be photographed.
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
      <ExtLink href={EVENT.registerUrl}>Register here</ExtLink>.
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
    "Who runs the day?",
    <>
      {EVENT.presenter} and Major League Hacking present it; {ORGANISER} runs it on site. MLH
      staff may not be on site, so for anything on the day, find an organiser at check-in.
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
      <ExtLink href={EVENT.agentSkillsUrl}>agent skill</ExtLink>, an app built on an open-weight
      language model, or a model harness you wrote or meaningfully improved. Name your model and
      link its licence in the README.
    </>,
  ],
  [
    "Can I start my project early?",
    <>
      Bring ideas, not code. Project work starts at the event, per the{" "}
      <ExtLink href={EVENT.hackathonRulesUrl}>MLH Standard Hackathon Rules</ExtLink>. AI coding
      tools are fine; list the ones you used in your submission.
    </>,
  ],
  [
    "What should I bring?",
    <>
      Laptop, charger, phone and photo ID; a GitHub account; the OrganizerHQ account you
      registered with; and a DEV (dev.to) account so badges can be awarded. Bring a refillable
      water bottle too. Food details are TBA; dietary needs? Email{" "}
      <a href={`mailto:${QUESTIONS_EMAIL}`}>{QUESTIONS_EMAIL}</a>.
    </>,
  ],
  [
    "Is the venue accessible? Need an accommodation?",
    <>
      Accessibility details for the {EVENT.venue} will be posted here and on the OrganizerHQ
      page. To request an accommodation, email{" "}
      <a href={`mailto:${QUESTIONS_EMAIL}`}>{QUESTIONS_EMAIL}</a> before the event, or tell an
      organiser at check-in.
    </>,
  ],
  [
    "Will there be swag?",
    <>
      Hacktoberfest event packs normally include stickers, postcards and a limited number of
      T-shirts, subject to availability. Not everyone will get a shirt.
    </>,
  ],
  [
    "Will there be photos?",
    <>
      Yes. We take photos during the event and share them with MLH and Hacktoberfest. Tell an
      organiser at check-in if you'd rather not be photographed.
    </>,
  ],
  [
    "Is there a code of conduct?",
    <>
      Yes. Everyone at the event follows the{" "}
      <ExtLink href={EVENT.codeOfConductUrl}>MLH Code of Conduct</ExtLink>. If something's wrong,
      tell an organiser on site, or contact MLH's incident team at{" "}
      <a href={`mailto:${EVENT.incidentEmail}`}>{EVENT.incidentEmail}</a> or{" "}
      <a href={INCIDENT_TEL}>{EVENT.incidentPhone}</a>. Anonymous reports are accepted.
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
            <a className="pop-btn" href={EVENT.registerUrl} target="_blank" rel="noreferrer">
              Register on OrganizerHQ
              <NewTab />
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
                      <p className="pop-note">{a}</p>
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
