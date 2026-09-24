import type { AnchorHTMLAttributes } from "react";

/** Screen-reader cue for links that open a new tab. */
export function NewTab() {
  return <span className="pop-sr"> (opens in new tab)</span>;
}

/** A link that opens in a new tab and says so to assistive tech. */
export default function ExtLink({ children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a target="_blank" rel="noreferrer" {...rest}>
      {children}
      <NewTab />
    </a>
  );
}
