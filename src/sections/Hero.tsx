import { Bat, Ghost, Graveyard, Moon, PumpkinPlanet, Sparkle } from "../art/Spooky";
import { EVENT } from "../event";
import { Rise } from "../motion";
import { NewTab } from "./ExtLink";

// Twinkling sparkles scattered over the night sky: [left, top, size in px, delay in s]
const STARS: Array<[string, string, number, number]> = [
  ["4%", "12%", 14, 0],
  ["18%", "6%", 9, 1.2],
  ["33%", "18%", 11, 0.6],
  ["47%", "8%", 8, 2],
  ["58%", "22%", 12, 1.6],
  ["71%", "5%", 10, 0.3],
  ["88%", "14%", 13, 2.4],
  ["94%", "40%", 9, 1],
  ["8%", "46%", 8, 1.8],
  ["52%", "52%", 10, 0.9],
];

export default function Hero() {
  return (
    <section className="pop-band pop-band--night pop-hero" id="top">
      <div className="pop-sky" aria-hidden="true">
        {STARS.map(([left, top, size, delay]) => (
          <Sparkle
            key={left + top}
            className="pop-star"
            style={{ left, top, width: size, height: size, animationDelay: `${delay}s` }}
          />
        ))}
        <Bat className="pop-bat pop-bat--1" />
        <Bat className="pop-bat pop-bat--2" />
        <Bat className="pop-bat pop-bat--3" />
      </div>

      <div className="pop-wrap pop-hero-grid">
        <div className="pop-hero-copy">
          <Rise>
            <p className="pop-eyebrow">
              {EVENT.host} × Major League Hacking · an official Hacktoberfest 2026 Fest
            </p>
          </Rise>

          <Rise i={1}>
            <h1 className="pop-hero-type">
              <span className="pop-hero-lg">Hacktoberfest</span>{" "}
              <span className="pop-hero-md">
                <span className="pop-hero-x">×</span> SpaceXAI HackDay
              </span>{" "}
              <span className="pop-hero-host">{EVENT.nameHost}</span>
            </h1>
          </Rise>

          <Rise i={2}>
            <p className="pop-hero-lead">
              {EVENT.dateLong} · {EVENT.venue}
            </p>
          </Rise>
          <Rise i={3}>
            <p className="pop-hero-sub">
              A one-day, in-person hackathon for building with open-source and open-weight AI.
              Free for UC San Diego students (18+), open to every skill level. Start time{" "}
              {EVENT.time === "TBD" ? "to be announced" : EVENT.time}.
            </p>
          </Rise>
          <Rise i={4}>
            <div className="pop-hero-cta">
              <a className="pop-btn" href={EVENT.registerUrl} target="_blank" rel="noreferrer">
                Register on OrganizerHQ
                <NewTab />
              </a>
              <a className="pop-btn pop-btn--ghost" href="#register">
                How it works
              </a>
            </div>
          </Rise>
        </div>

        {/* The dino lives in its own column so it can never sit on top of the title. */}
        <div className="pop-hero-scene">
          <Moon className="pop-moon" />
          <PumpkinPlanet className="pop-planet" />
          <Ghost className="pop-hero-ghost" />
          {/* DS3's dino. Swap public/mascot.png for new art; keep it a transparent PNG. */}
          <img
            className="pop-mascot"
            src="./mascot.png"
            width={486}
            height={576}
            alt="DS3's orange dinosaur mascot in a witch hat, hugging a DS3 pumpkin"
          />
        </div>
      </div>

      <Graveyard className="pop-graveyard" color="#120a20" />
    </section>
  );
}
