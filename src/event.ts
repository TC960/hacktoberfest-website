/**
 * Every event fact the site shows lives here, so updates are one-line edits.
 * Anything still "TBD" renders as TBD on the page.
 */

export const EVENT = {
  presenter: "SpaceXAI",
  format: "Hack Day",

  dateLong: "Monday, October 19, 2026",
  dateShort: "Oct 19",
  /** Replace with e.g. "10:00 AM – 4:00 PM" once confirmed. */
  time: "TBD",

  venue: "Price Center West Ballroom",
  campus: "UC San Diego",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Price+Center+West+Ballroom+UC+San+Diego",

  /**
   * Registration and check-in happen on MLH's OrganizerHQ, which Hacktoberfest requires.
   * TODO: swap in this event's OrganizerHQ page once MLH approves the Fest.
   */
  registerUrl: "https://hacktoberfest.com/events/",

  /**
   * TODO: the local organizing team's inbox. While empty, the sponsor link is hidden
   * and general questions point at MLH's Hacktoberfest inbox instead.
   */
  contactEmail: "",
  hacktoberfestEmail: "hacktoberfest@mlh.io",

  /**
   * TODO: the local organising team's name (e.g. a UCSD club). Fests are run on site by
   * local hosts, not MLH staff; while empty the site says "the local organising team".
   */
  organiser: "",

  /** MLH Code of Conduct incident line for North America (pol/code-of-conduct.md). */
  incidentEmail: "incidents@mlh.io",
  incidentPhone: "+1 409 202 6060",

  hacktoberfestUrl: "https://hacktoberfest.com/",
  codeOfConductUrl: "https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md",
  hackathonRulesUrl: "https://github.com/MLH/mlh-policies/blob/main/standard-hackathon-rules.md",
  agentSkillsUrl: "https://agentskills.io/",
  osiLicensesUrl: "https://opensource.org/licenses",
};

export const QUESTIONS_EMAIL = EVENT.contactEmail || EVENT.hacktoberfestEmail;
export const ORGANISER = EVENT.organiser || "the local organising team";
export const INCIDENT_TEL = `tel:${EVENT.incidentPhone.replace(/[^+\d]/g, "")}`;
