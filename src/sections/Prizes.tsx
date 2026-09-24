import { C } from "../art/iso";
import { Person, Trophy } from "../art/Props";
import { EVENT } from "../event";
import { Rise } from "../motion";

const STEPS = [
  {
    title: "Partner category",
    detail: "If MLH assigns one to this Fest",
    mod: "pop-step--3",
    shirt: C.pink,
    tag: "TBA",
  },
  {
    title: `${EVENT.presenter} challenge`,
    detail: `Local, not MLH-run · prize from ${EVENT.presenter}`,
    mod: "pop-step--2",
    shirt: C.teal,
    tag: "TBA",
  },
  {
    title: "Best Open-Source AI Project",
    detail: "A DEV Badge for every teammate",
    mod: "pop-step--1",
    shirt: C.cream,
    tag: "Confirmed",
  },
];

const EXTRAS = ["Stickers", "Postcards"];

export default function Prizes() {
  return (
    <section className="pop-band pop-band--marigold pop-prizes" id="prizes">
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
              One team takes Best Open-Source AI Project, and every member gets a DEV Badge.
              {" "}{EVENT.presenter}'s local challenge prize is TBA. Winners are judged on what you
              build, not pull-request counts.
            </p>
          </Rise>
        </div>

        <Rise i={3}>
          <div className="pop-ladder">
            {STEPS.map((s) => (
              <div className={"pop-step " + s.mod} key={s.title}>
                <span className="pop-step-fig">
                  {s.mod === "pop-step--1" ? (
                    <Trophy className="pop-step-trophy" />
                  ) : (
                    <Person shirt={s.shirt} variant={s.mod === "pop-step--2" ? 1 : 2} />
                  )}
                </span>
                <div className="pop-step-body">
                  <span className="pop-step-place pop-step-place--sm">{s.title}</span>
                  <span className="pop-step-amt">{s.detail}</span>
                  <span className="pop-step-tbd">{s.tag}</span>
                </div>
              </div>
            ))}
          </div>
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
    </section>
  );
}
