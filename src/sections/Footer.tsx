import { IconStar } from "../art/Icons";
import { EVENT, INCIDENT_TEL, ORGANISER, QUESTIONS_EMAIL } from "../event";
import { Rise } from "../motion";
import { NewTab } from "./ExtLink";

const ext = { target: "_blank", rel: "noreferrer" };
// Fine-print links need a visible cue; .pop-root a strips decoration.
const fineLink = { color: "#fff", textDecoration: "underline", textUnderlineOffset: "2px" };

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
                        {href.startsWith("http") && <NewTab />}
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
                {EVENT.presenter} and Major League Hacking, as an official Hacktoberfest 2026 Fest,
                run on site by {ORGANISER}. Hacktoberfest is run by MLH and DEV in partnership with DigitalOcean.
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
            anything to an organiser on site, or to MLH's incident team at{" "}
            <a style={fineLink} href={`mailto:${EVENT.incidentEmail}`}>{EVENT.incidentEmail}</a> /{" "}
            <a style={fineLink} href={INCIDENT_TEL}>{EVENT.incidentPhone}</a>. Anonymous reports are accepted.
          </p>
          <p>
            Schedule, tracks and partner prizes are provisional and subject to change. Hacktoberfest is open to ages 13+; under 18?
            You'll need a parent or guardian's permission, including for prizes and photos. We take
            photos on the day and share them with MLH; tell an organiser if you'd rather not be in
            them.
          </p>
        </div>
      </div>
    </footer>
  );
}
