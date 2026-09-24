# Hacktoberfest 2026 × SpaceXAI

Event site for an official **Hacktoberfest 2026 Fest** (Hack Day format), presented by SpaceXAI and
Major League Hacking.

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

## Editing event details

Every fact the page shows (date, time, venue, links, emails) is in [`src/event.ts`](src/event.ts).
Before launch:

- [ ] `registerUrl`: swap in this Fest's OrganizerHQ page once MLH approves the event (it currently points at hacktoberfest.com/events)
- [ ] `time`: set the start/end time (it shows "TBD" everywhere until then)
- [ ] `contactEmail`: add the organizers' inbox (the sponsor link stays hidden until it's set)
- [ ] Schedule offsets in `src/sections/Schedule.tsx`: switch to clock times once the start time is known
- [ ] SpaceXAI challenge and prize copy in `src/sections/Tracks.tsx` / `src/sections/Prizes.tsx`
- [ ] Supporter names in `src/sections/Sponsors.tsx`

## Sections

Top bar · Hero · Marquee · About · Stats · Challenge tracks · Prizes · Schedule ·
How to join + venue · Partners · FAQ · Footer (code of conduct, rules)

## Sources

Hacktoberfest details come from [hacktoberfest.com](https://hacktoberfest.com/) and MLH's
[Hacktoberfest Host Handbook](https://github.com/MLH/hacktoberfest-handbook): Fest formats,
the Best Open-Source AI Project challenge, OrganizerHQ, swag, and the
[MLH Code of Conduct](https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md).
