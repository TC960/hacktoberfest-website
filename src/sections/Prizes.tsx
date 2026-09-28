import { CandyBucket, Drip } from "../art/Spooky";
import { LEGENDARY, TRACKS } from "./Tracks";
import { Rise } from "../motion";

const COLOURS = ["pop-step--candle", "pop-step--lilac", "pop-step--teal", "pop-step--orange"];

const EXTRAS = ["Stickers", "Postcards"];

export default function Prizes() {
  return (
    <section className="pop-band pop-band--grape pop-prizes" id="prizes">
      <div className="pop-wrap">
        <div className="pop-prize-top">
          <div>
            <Rise>
              <p className="pop-eyebrow">Prizes</p>
            </Rise>
            <Rise i={1}>
              <h2 className="pop-pool">ship it, win it</h2>
            </Rise>
          </div>
          <Rise i={2}>
            <p className="pop-note pop-prize-note">
              Four open-source AI tracks, four winning teams: every member of each winning team gets
              a DEV Badge on their DEV profile. The Make it Legendary space challenge has its own
              prize, still to be announced. Winners are judged on what you build, not pull-request
              counts.
            </p>
          </Rise>
        </div>

        <Rise i={3}>
          <div className="pop-ladder pop-ladder--four">
            {TRACKS.map((t, i) => (
              <div className={"pop-step pop-step--even " + COLOURS[i]} key={t.title}>
                <span className="pop-step-fig">
                  <CandyBucket className="pop-step-trophy" />
                </span>
                <div className="pop-step-body">
                  <span className="pop-step-place pop-step-place--sm">{t.title}</span>
                  <span className="pop-step-amt">DEV Badge for every teammate</span>
                </div>
              </div>
            ))}
          </div>
        </Rise>

        <Rise i={4}>
          <a className="pop-legend-prizecard" href="#legendary">
            <span className="pop-legend-prizecard-name">
              <span className="pop-eyebrow">Space challenge</span>
              <span className="pop-step-place">{LEGENDARY.title}</span>
            </span>
            <span className="pop-legend-prize">{LEGENDARY.prize}</span>
          </a>
        </Rise>

        <Rise i={4}>
          <div className="pop-track-prizes">
            <h3 className="pop-eyebrow">Hacktoberfest swag, while it lasts</h3>
            <ul>
              {EXTRAS.map((t) => (
                <li className="pop-chip" key={t}>
                  {t}
                </li>
              ))}
            </ul>
            <p className="pop-note pop-extras-note">
              Plus a limited number of T-shirts, handed out by the organisers. Not everyone will get
              one. All swag depends on the Hacktoberfest event pack arriving in time.
            </p>
          </div>
        </Rise>
      </div>
      <Drip />
    </section>
  );
}
