/**
 * Every event fact the site shows lives here, so updates are one-line edits.
 * Anything still "TBD" renders as TBD on the page.
 */

export const EVENT = {
  name: "Hacktoberfest",
  edition: "SD",
  presenter: "SpaceXAI",
  format: "Hack Day",

  dateLong: "Monday, October 19, 2026",
  dateShort: "Oct 19",
  dateIso: "2026-10-19",
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

  hacktoberfestUrl: "https://hacktoberfest.com/",
  codeOfConductUrl: "https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md",
  hackathonRulesUrl: "https://github.com/MLH/mlh-policies/blob/main/standard-hackathon-rules.md",
  agentSkillsUrl: "https://agentskills.io/",
  osiLicensesUrl: "https://opensource.org/licenses",
};

export const QUESTIONS_EMAIL = EVENT.contactEmail || EVENT.hacktoberfestEmail;
