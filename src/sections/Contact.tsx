import { CONTACT_MAILTO, EVENT } from "../event";

/** The contact address as a mailto link. */
export default function ContactEmails() {
  return <a href={CONTACT_MAILTO}>{EVENT.contactEmail}</a>;
}
