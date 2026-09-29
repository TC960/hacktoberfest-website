/**
 * Every event fact the site shows lives here, so updates are one-line edits.
 * Anything still "TBD" renders as TBD on the page.
 */

export const EVENT = {
  /** The event's full name, as it should read everywhere. */
  name: "Hacktoberfest × SpaceXAI HackDay",
  /** Where; shown right after the name. */
  nameHost: "@ UC San Diego",
  /** Who puts the event on. */
  host: "DS3 Hackathons",
  hostLong: "the Hackathons team at DS3",
  /** Organisation name exactly as approved on OrganizerHQ. */
  hostOrg: "Data Science Students Society @ UCSD",
  hostUrl: "https://ds3atucsd.com",
  format: "Hack Day",

  dateLong: "Monday, October 19, 2026",
  dateShort: "Oct 19",
  time: "3:45 – 9:00 PM PT",
  doorsOpen: "3:45 PM",
  /** UC San Diego students only; minors (13–17) not admitted (OrganizerHQ). */
  eligibility: "UC San Diego students, 18+",

  venue: "Price Center West Ballroom",
  campus: "UC San Diego",
  venueInfoUrl: "https://uctech.ucsd.edu/campus/venue.html",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Price+Center+West+Ballroom+UC+San+Diego",

  /**
   * Registration and check-in happen on MLH's OrganizerHQ, which Hacktoberfest requires.
   */
  /** Applications close on this date; accepted hackers then get the Discord invite. */
  appsClose: "Thursday, October 15",
  appsCloseShort: "Oct 15",

  registerUrl: "https://events.mlh.com/events/15194-hacktoberfest-x-spacexai-hack-day-uc-san-diego",

  /** Organiser inboxes; the backup is DS3's shared inbox. */
  contactEmails: ["mprakash@ucsd.edu", "tchhabra@ucsd.edu"],
  backupEmail: "info@ds3.club",
  hacktoberfestEmail: "hacktoberfest@mlh.io",

  /** MLH Code of Conduct incident line for North America (pol/code-of-conduct.md). */
  incidentEmail: "incidents@mlh.io",
  incidentPhone: "+1 409 202 6060",

  hacktoberfestUrl: "https://hacktoberfest.com/",
  codeOfConductUrl: "https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md",
  hackathonRulesUrl: "https://github.com/MLH/mlh-policies/blob/main/standard-hackathon-rules.md",
  agentSkillsUrl: "https://agentskills.io/",
  osiLicensesUrl: "https://opensource.org/licenses",
};

/** hostLong at the start of a sentence. */
export const HOST_CAP = EVENT.hostLong[0].toUpperCase() + EVENT.hostLong.slice(1);

/** One mailto that reaches both organisers and CCs the DS3 inbox. */
export const CONTACT_MAILTO = `mailto:${EVENT.contactEmails.join(",")}?cc=${EVENT.backupEmail}`;
export const INCIDENT_TEL = `tel:${EVENT.incidentPhone.replace(/[^+\d]/g, "")}`;
