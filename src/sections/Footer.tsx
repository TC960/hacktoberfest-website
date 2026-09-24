import { IconStar } from "../art/Icons";
import { CONTACT_MAILTO, EVENT, HOST_CAP, INCIDENT_TEL } from "../event";
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
      ["Become a sponsor", CONTACT_MAILTO],
      ["Hacktoberfest.com", EVENT.hacktoberfestUrl],
      ["DS3 website", EVENT.hostUrl],
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
              <h3>Brought to you by</h3>
              <p>
                {HOST_CAP} ({EVENT.hostOrg}), in partnership with Major League Hacking, as
                an official Hacktoberfest 2026 Fest. Hacktoberfest is run by MLH and DEV in partnership
                with DigitalOcean.
              </p>
              {EVENT.contactEmails.map((e) => (
                <a className="pop-foot-mail" href={`mailto:${e}`} key={e}>
                  {e}
                </a>
              ))}
              <a className="pop-foot-mail" href={`mailto:${EVENT.backupEmail}`}>
                {EVENT.backupEmail}
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
            Schedule and tracks are provisional and subject to change. This Fest is open to
            UC San Diego students aged 18 and older. We take
            photos on the day and share them with MLH; tell an organiser if you'd rather not be in
            them.
          </p>
        </div>
      </div>
    </footer>
  );
}
