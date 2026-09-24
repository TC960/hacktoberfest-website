# Hacktoberfest 2026 × DS3

Event site for an official **Hacktoberfest 2026 Fest** (Hack Day format), brought to you by the
Hackathons team at DS3 (Data Science Students Society @ UCSD) with Major League Hacking.
Open to UC San Diego students, 18+.

- **When:** Monday, October 19, 2026 · time TBD
- **Where:** Price Center West Ballroom, UC San Diego
- **Registration:** MLH OrganizerHQ (Hacktoberfest requires it for every Fest's registration, check-in and project submissions)

The design is a port of the DataHacks **pop** theme (`ucsdds3/datahacks` → `src/themes/pop`):
flat colour bands, compressed Archivo type, 2px black rules, isometric SVG art.

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run preview  # serve dist/
```

`vite.config.ts` uses a relative `base`, so `dist/` can be hosted from any path (GitHub Pages,
Vercel, Netlify…).

## Deploy

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the site with Node 22
(`npm ci && npm run build`) and publishes `dist/` to GitHub Pages on every push to `main`. You can
also run it by hand from the Actions tab (**Run workflow**). Pull requests run the build only, so a
broken build shows up before merge, but they never deploy.

One-time setup: in the repo go to **Settings → Pages → Build and deployment** and set
**Source** to **GitHub Actions**. Until that's done the deploy job fails. Keep
`package-lock.json` committed and in sync with `package.json` (run `npm install` after changing
dependencies), because `npm ci` refuses to install from a stale lockfile.

### Custom domain

The site lives at **https://hacktoberfest.ds3atucsd.com/**:

- DNS (on ds3atucsd.com): `CNAME` record `hacktoberfest` → `tc960.github.io`
- Repo **Settings → Pages → Custom domain**: `hacktoberfest.ds3atucsd.com`, with **Enforce HTTPS** on

With Actions-based deploys the domain is set in Settings, not by a `CNAME` file. `index.html`
uses this domain for `og:url`, `canonical` and the share image, so change it there too if the
domain ever moves.

## Editing event details

Every fact the page shows (date, time, venue, links, emails) is in [`src/event.ts`](src/event.ts).
Before launch:

- [ ] `registerUrl`: swap in this Fest's OrganizerHQ page once MLH approves the event (it currently points at hacktoberfest.com/events)
- [ ] `time`: set the start/end time (it shows "TBD" everywhere until then)
- [ ] `contactEmail`: add the organizers' inbox (the sponsor link stays hidden until it's set)
- [ ] Schedule offsets in `src/sections/Schedule.tsx`: switch to clock times once the start time is known
- [ ] Supporter names in `src/sections/Sponsors.tsx`

## Mascot

The bobbing dino in the hero is `public/mascot.png` (DS3's mascot, transparent PNG, about
486×576). To swap in new art, replace that file with another transparent PNG of a similar
shape; size and animation are set in `src/pop.css` under `.pop-mascot`.

## Sections

Top bar · Hero · Marquee · About · Stats · Challenge tracks · Prizes · Schedule ·
How to join + venue · Partners · FAQ · Footer (code of conduct, rules)

## Sources

Hacktoberfest details come from [hacktoberfest.com](https://hacktoberfest.com/) and MLH's
[Hacktoberfest Host Handbook](https://github.com/MLH/hacktoberfest-handbook): Fest formats,
the Best Open-Source AI Project challenge, OrganizerHQ, swag, and the
[MLH Code of Conduct](https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md).
