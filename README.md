# Hacktoberfest × SpaceXAI HackDay @ UC San Diego

Event site for **Hacktoberfest × SpaceXAI HackDay**, an official **Hacktoberfest 2026 Fest**
(Hack Day format), brought to you by the
Hackathons team at DS3 (Data Science Students Society @ UCSD) with Major League Hacking.
Open to UC San Diego students, 18+.

- **When:** Monday, October 19, 2026 · 3:45 – 9:00 PM PT
- **Where:** Price Center West Ballroom, UC San Diego
- **Registration:** MLH OrganizerHQ (Hacktoberfest requires it for every Fest's registration, check-in and project submissions). Applications close Thursday, October 15; accepted hackers get the Discord invite, and teams form there.

The design is a cute-spooky Halloween theme built to match DS3's dino sticker: night-purple and
pumpkin-orange bands joined by wax drips, rounded "sticker" cards with thick ink outlines,
Lilita One / Fredoka / Nunito type, and hand-drawn SVG art (moon, bats, ghosts, pumpkins, a
cauldron) in [`src/art/Spooky.tsx`](src/art/Spooky.tsx). Styles live in `src/pop.css`.

The SVGs are placeholders. [`docs/design-prompts.md`](docs/design-prompts.md) has a whole-site
prompt for other design models, plus a matching image prompt for each SVG.

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

The site is served at **https://hacktoberfest.ds3atucsd.com/**. DNS: a `CNAME` record
`hacktoberfest` → `tc960.github.io` on `ds3atucsd.com` (DNS only, no proxy). The domain is set in
**Settings → Pages → Custom domain** (exactly `hacktoberfest.ds3atucsd.com`, no `www.`), with
**Enforce HTTPS** on once GitHub has issued the certificate. If the domain ever changes, update
`og:url`, `canonical` and the share-image URLs in `index.html` to match.

## Editing event details

Every fact the page shows (date, time, venue, links, emails) is in [`src/event.ts`](src/event.ts).
Before launch:

- [x] `registerUrl`: points at this Fest's OrganizerHQ page
- [x] `time`: 3:45 – 9:00 PM PT
- [ ] `contactEmail`: add the organizers' inbox (the sponsor link stays hidden until it's set)
- [ ] Schedule offsets in `src/sections/Schedule.tsx`: switch to clock times once the start time is known
- [ ] Supporter names in `src/sections/Sponsors.tsx`

## Mascot

The bobbing dino in the hero is `public/mascot.png` (DS3's mascot, transparent PNG, about
486×576). It sits in its own column of the hero (in front of the moon), so it never covers the
event name. To swap in new art, replace that file with another transparent PNG of a similar
shape; size and animation are set in `src/pop.css` under `.pop-mascot`.

The event name is set once in `src/event.ts` (`name` and `nameHost`).

## Sections

Top bar · Hero · Marquee · About · Stats · Challenge tracks · Prizes · Schedule ·
How to join + venue · Partners · FAQ · Footer (code of conduct, rules)

## Sources

Hacktoberfest details come from [hacktoberfest.com](https://hacktoberfest.com/) and MLH's
[Hacktoberfest Host Handbook](https://github.com/MLH/hacktoberfest-handbook): Fest formats,
the Best Open-Source AI Project challenge, OrganizerHQ, swag, and the
[MLH Code of Conduct](https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md).
