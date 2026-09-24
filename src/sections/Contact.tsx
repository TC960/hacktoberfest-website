import { EVENT } from "../event";

/** "a@x or b@y (backup: c@z)" as individual mailto links. */
export default function ContactEmails({ backup = true }: { backup?: boolean }) {
  return (
    <>
      {EVENT.contactEmails.map((e, i) => (
        <span key={e}>
          {i > 0 && " or "}
          <a href={`mailto:${e}`}>{e}</a>
        </span>
      ))}
      {backup && (
        <>
          {" "}(backup: <a href={`mailto:${EVENT.backupEmail}`}>{EVENT.backupEmail}</a>)
        </>
      )}
    </>
  );
}
