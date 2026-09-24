import { IconDiamond } from "../art/Icons";
import { CubeStack } from "../art/Props";
import { CONTACT_MAILTO, EVENT, HOST_CAP } from "../event";
import { Drift, Rise } from "../motion";

const TIERS: Array<{ tier: string; note: string; names: string[]; mod: string }> = [
  {
    tier: "Brought to you by",
    note: "Runs the day",
    names: [EVENT.host],
    mod: "pop-slot--xl",
  },
  {
    tier: "In partnership with",
    note: "Partners",
    names: [EVENT.partner, "Major League Hacking"],
    mod: "pop-slot--lg",
  },
  {
    tier: "Hacktoberfest",
    note: "Runs the programme",
    names: ["Major League Hacking", "DEV", "DigitalOcean"],
    mod: "pop-slot--lg",
  },
  {
    tier: "Supporters",
    note: "Open slots",
    names: ["", "", "", ""],
    mod: "",
  },
];

export default function Sponsors() {
  return (
    <section className="pop-band pop-band--pink pop-spon" id="sponsors">
      <div className="pop-wrap">
        <div className="pop-spon-head">
          <div>
            <Rise>
              <p className="pop-eyebrow">Partners</p>
            </Rise>
            <Rise i={1}>
              <h2 className="pop-h2">who's putting this together</h2>
            </Rise>
            <Rise i={2}>
              <p className="pop-body pop-spon-lead">
                {HOST_CAP} brings Hacktoberfest to the Price Center West Ballroom, in
                partnership with {EVENT.partner} and Major League Hacking. The supporter frames
                below are still open.
              </p>
            </Rise>
            <Rise i={3}>
              <p className="pop-spon-mail">
                Sponsor inquiries → <a href={CONTACT_MAILTO}>email the DS3 Hackathons team</a>
              </p>
            </Rise>
          </div>
          <Drift className="pop-spon-art" amount={30}>
            <CubeStack />
          </Drift>
        </div>

        <div className="pop-tiers">
          {TIERS.map((t, i) => (
            <Rise i={i} key={t.tier}>
              <div className="pop-tier">
                <div className="pop-tier-label">
                  <span>{t.tier}</span>
                  <span className="pop-tier-count">{t.note}</span>
                </div>
                <div className="pop-slots">
                  {t.names.map((name, s) => (
                    <div className={"pop-slot " + t.mod + (name ? " pop-slot--filled" : "")} key={s}>
                      {name ? (
                        <span className="pop-slot-name">{name}</span>
                      ) : (
                        <>
                          <IconDiamond className="pop-slot-glyph" />
                          <span>Available</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Rise>
          ))}
        </div>
      </div>
    </section>
  );
}
