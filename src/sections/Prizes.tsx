import React from "react";
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
    detail: "Prize announced with the prompt",
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

const EXTRAS = ["Participation badge", "Stickers", "Postcards", "T-shirts (limited)"];

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
              <p className="pop-pool">ship it, win it</p>
            </Rise>
          </div>
          <Rise i={2}>
            <p className="pop-note pop-prize-note">
              One team takes Best Open-Source AI Project, and every member gets a DEV Badge.
              {" "}{EVENT.presenter} prizes are on the way. Winners are chosen from live demos, not
              pull-request counts.
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
            <span className="pop-eyebrow">For everyone in the room</span>
            <ul>
              {EXTRAS.map((t) => (
                <li className="pop-chip" key={t}>
                  {t}
                </li>
              ))}
            </ul>
            <p className="pop-note pop-extras-note">Swag is subject to availability; T-shirt numbers are limited.</p>
          </div>
        </Rise>
      </div>
    </section>
  );
}
