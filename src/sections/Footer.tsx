import React from "react";
import { IconStar } from "../art/Icons";
import { EVENT, QUESTIONS_EMAIL } from "../event";
import { Rise } from "../motion";

const ext = { target: "_blank", rel: "noreferrer" };

const COLS: Array<{ head: string; links: Array<[string, string]> }> = [
  {
    head: "Event",
    links: [
      ["About", "#about"],
      ["Tracks", "#tracks"],
      ["Prizes", "#prizes"],
      ["Schedule", "#schedule"],
      ["FAQ", "#faq"],
    ],
  },
  {
    head: "Get involved",
    links: [
      ["Register", EVENT.registerUrl],
      ...(EVENT.contactEmail
        ? ([["Become a sponsor", `mailto:${EVENT.contactEmail}`]] as Array<[string, string]>)
        : []),
      ["Hacktoberfest.com", EVENT.hacktoberfestUrl],
    ],
  },
  {
    head: "Rules",
    links: [
      ["Code of Conduct", EVENT.codeOfConductUrl],
      ["Hackathon rules", EVENT.hackathonRulesUrl],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="pop-foot">
      <div className="pop-wrap">
        <div className="pop-foot-top">
          <Rise>
            <p className="pop-foot-mark">
              hacktoberfest<em>2026</em>
            </p>
          </Rise>
          <Rise i={1}>
            <p className="pop-foot-dates">
              {EVENT.dateLong.replace(/^\w+, /, "")}
              <IconStar className="pop-foot-star" />
              PC West Ballroom
            </p>
          </Rise>
        </div>

        <div className="pop-foot-cols">
          {COLS.map((c, i) => (
            <Rise i={i} key={c.head}>
              <div className="pop-foot-col">
                <h3>{c.head}</h3>
                <ul>
                  {c.links.map(([label, href]) => (
                    <li key={label}>
                      <a href={href} {...(href.startsWith("http") ? ext : {})}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Rise>
          ))}
          <Rise i={3}>
            <div className="pop-foot-col pop-foot-col--org">
              <h3>Presented by</h3>
              <p>
                {EVENT.presenter} and Major League Hacking, as an official Hacktoberfest 2026 Fest.
                Hacktoberfest is run by MLH and DEV in partnership with DigitalOcean.
              </p>
              <a className="pop-foot-mail" href={`mailto:${QUESTIONS_EMAIL}`}>
                {QUESTIONS_EMAIL}
              </a>
            </div>
          </Rise>
        </div>

        <div className="pop-foot-fine">
          <p>
            All attendees, sponsors, mentors and volunteers follow the MLH Code of Conduct. Report
            anything to an organiser on site, or by email.
          </p>
          <p>
            Schedule, tracks and partner prizes are provisional and subject to change. Hacktoberfest
            is open to participants aged 13 and older.
          </p>
        </div>
      </div>
    </footer>
  );
}
