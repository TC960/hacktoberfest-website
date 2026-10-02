import { Drip } from "../art/Spooky";
import { Rise } from "../motion";

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
              Every member of each winning team gets a DEV Badge
              on their DEV profile. Winners are judged on what you build, not pull-request counts.
            </p>
          </Rise>
        </div>

        <Rise i={3}>
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
