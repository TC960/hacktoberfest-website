import { CandyCorn, Drip, Ghost, Pumpkin } from "../art/Spooky";
import { Rise } from "../motion";

const STATS: Array<{ n: string; label: string }> = [
  { n: "300+", label: "events worldwide" },
  { n: "1", label: "day, in person" },
  { n: "$0", label: "to attend" },
  { n: "18+", label: "UCSD students only" },
];

// Little critters sitting on the bottom rule.
const CROWD = [
  { left: "6%", Art: Pumpkin, cls: "" },
  { left: "29%", Art: Ghost, cls: " pop-crowd-fig--float" },
  { left: "54%", Art: CandyCorn, cls: " pop-crowd-fig--sm" },
  { left: "61%", Art: Pumpkin, cls: " pop-crowd-fig--sm" },
  { left: "86%", Art: Ghost, cls: " pop-crowd-fig--float" },
];

export default function Stats() {
  return (
    <section className="pop-band pop-band--night pop-stats" id="stats">
      <div className="pop-wrap">
        <div className="pop-stats-head">
          <Rise>
            <h2 className="pop-h2">Hacktoberfest, in numbers</h2>
          </Rise>
          <Rise i={1}>
            <p className="pop-note">
              One of 300+ in-person and online Hacktoberfest events happening around the world this October.
            </p>
          </Rise>
        </div>
      </div>

      <Rise i={2}>
        <div className="pop-stats-rail">
          <div className="pop-wrap pop-stats-inner">
            <div className="pop-stats-grid">
              {STATS.map((s) => (
                <div className="pop-stat" key={s.label}>
                  <span className="pop-stat-num">{s.n}</span>
                  <span className="pop-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <div className="pop-crowd" aria-hidden="true">
              {CROWD.map(({ left, Art, cls }, i) => (
                <span className={"pop-crowd-fig" + cls} style={{ left }} key={i}>
                  <Art />
                </span>
              ))}
            </div>
          </div>
        </div>
      </Rise>
      <Drip />
    </section>
  );
}
