import { EVENT } from "../event";
import { NewTab } from "./ExtLink";

const LINKS = [
  ["about", "#about"],
  ["tracks", "#tracks"],
  ["prizes", "#prizes"],
  ["schedule", "#schedule"],
  ["venue", "#register"],
  ["sponsors", "#sponsors"],
  ["faq", "#faq"],
];

export default function TopBar() {
  return (
    <header className="pop-bar">
      {/* .pop-sr keeps it hidden until pop.css gives .pop-skip:focus a visible style */}
      <a className="pop-skip pop-sr" href="#main">
        Skip to content
      </a>
      <div className="pop-bar-in">
        <a className="pop-bar-mark" href="#top">
          HACKTOBERFEST <span>× {EVENT.presenter.toUpperCase()}</span>
        </a>
        <nav className="pop-bar-nav" aria-label="Sections">
          {LINKS.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="pop-bar-cta" href={EVENT.registerUrl} target="_blank" rel="noreferrer">
          Register
          <NewTab />
        </a>
      </div>
    </header>
  );
}
