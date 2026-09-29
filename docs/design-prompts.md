# Design prompts

Prompts for generating Halloween art and layouts with other models: a whole-site prompt,
then one image prompt per placeholder SVG in `src/art/Spooky.tsx`, then layered prompts for the
scrollytelling cauldron in `src/art/BrewScene.tsx`. They all describe the same
style, so the art should match DS3's dino sticker (`public/mascot.png`).

## Whole-site prompt

Paste this into a website/UI generator (v0, Lovable, Claude, etc.), and attach
`public/mascot.png` if the tool takes images.

```text
Design a one-page event website for "Hacktoberfest Hack Day San Diego × SpaceXAI".
Always write the event name out in full like that.

EVENT FACTS
- Official Hacktoberfest 2026 Fest (Hack Day format), brought to you by DS3 Hackathons
  (Data Science Students Society @ UCSD) in partnership with Major League Hacking (MLH).
- Monday, October 19, 2026 · Price Center West Ballroom, UC San Diego · start time TBD.
- Free. UC San Diego students 18+, every skill level. Registration and check-in happen on
  MLH's OrganizerHQ.
- Theme: "AI belongs to everyone": build with open-source and open-weight AI.
- Four DEV Badge tracks: Best Agent Skill; Best Use of an Open-Weight LLM (>10B params);
  Best Use of an Open-Weight SLM (≤10B params); Best Use of an Open-Source Model Harness.
- Swag while it lasts: stickers, postcards, a limited number of T-shirts.

SECTIONS (in order)
Top bar with Register button → Hero → scrolling marquee → About + event facts → Stats
(300+ events worldwide, 1 day, $0, 18+) → Challenge tracks → Prizes → Schedule (day-of
timeline plus a "before you come" checklist) → How to join (3 steps + venue card) →
Partners (tiers plus open supporter slots) → FAQ accordion → Footer (code of conduct,
MLH incident contacts).

LOOK AND FEEL
- Cute-spooky, not gory. Think a Halloween sticker sheet: thick rounded dark-purple
  outlines (#1f1030), flat fills, one soft highlight per shape, and a slight hand-drawn
  wobble.
- The hero mascot is DS3's orange dinosaur in a purple witch hat hugging a jack-o'-lantern
  with "DS3" on it. It bobs gently. Give it its own space: it must never cover the event
  name.
- Palette: night purple #1b0f2e, plum #2c1748, grape #5b2a86, violet #9b6bd6,
  lavender #efe4ff, pumpkin orange #ff8a2b, candlelight #ffd166, bone #fff4e6, and cyan
  #3cc7d6 as a small accent (it matches the dino's circuit lines).
- Alternate dark (night/plum/grape) and light (lavender/orange) full-width bands. Join
  bands with dripping candle-wax edges instead of straight lines.
- Type: a chunky rounded display face (e.g. Lilita One) for the "Hacktoberfest" wordmark and
  one or two big headlines; a rounded bold sans (e.g. Fredoka) for headings; a friendly rounded
  body font (e.g. Nunito).
- Cards and buttons are rounded "stickers": 3px outline, a large radius, and a hard offset
  shadow with no blur. Buttons are pill-shaped.
- Spooky details, used sparingly: a big glowing moon behind the mascot, twinkling
  sparkles, a few bats flapping across the hero, a graveyard hill silhouette at the bottom
  of the hero, a spider dangling on a thread, cobwebs in card corners, floating ghosts,
  candy corn as bullet or separator icons, and a jack-o'-lantern planet with a ring (a nod to
  SpaceXAI).
- Track icons as magic objects: spellbook (agent skill), crystal ball (LLM), potion bottle
  (SLM), cauldron (model harness). Prizes shown as jack-o'-lantern candy buckets.
- NO isometric or blocky 3D art, no hard rectangles, no realistic horror imagery.

ACCESSIBILITY
Text contrast of at least 4.5:1, visible focus rings, a pause button on the marquee, and
every animation disabled under prefers-reduced-motion. Responsive down to 360px wide with
no horizontal scroll.
```

## Image prompts for the placeholder SVGs

Shared style line (put it at the start of every prompt):

> Cute Halloween sticker illustration, thick rounded dark-purple (#1f1030) outline, flat
> colours with one soft highlight, slight hand-drawn wobble, white die-cut sticker border,
> transparent background, same style as a cartoon orange dinosaur in a purple witch hat.
> Palette: pumpkin orange #ff8a2b, grape #5b2a86, violet #9b6bd6, candlelight #ffd166,
> bone #fff4e6, cyan #3cc7d6.

| Component in `Spooky.tsx` | Where it shows | Prompt |
| --- | --- | --- |
| `PumpkinPlanet` | Hero, top left | A grinning jack-o'-lantern floating in space as a planet, with a violet Saturn-style ring tilted around it, a few tiny stars. |
| `Moon` | Hero, behind the dino | A big, soft, glowing full moon in candlelight yellow with a few pale craters, no face. |
| `Ghost` | Hero, stats, schedule, sponsors | A small friendly bedsheet ghost with oval black eyes, a little "oo" mouth and pink blush, wavy bottom edge. |
| `Bat` | Hero sky, marquee, badge | A tiny chubby bat, wings spread, dark purple with orange dot eyes. |
| `CandyBucket` | Prizes (one per track) | A jack-o'-lantern trick-or-treat bucket with a handle, overflowing with candy corn and wrapped sweets. |
| `WitchRocket` | How to join | A cartoon rocket wearing a purple witch hat, with a round cyan porthole and orange fins, taking off with a small flame. |
| `Spider` | Tracks band | A round, cute black spider with big white eyes, hanging from a single thread. |
| `Candle` | Schedule gutter | A short dripping wax candle with a flame, on a violet dish. |
| `Pumpkin` | Stats, schedule, sponsors | A classic jack-o'-lantern with triangle eyes and a zigzag grin, glowing yellow inside. |

To swap one in: export a transparent PNG or WebP into `public/art/`, then replace that
component's `<svg>` with an `<img>` that has the same `className` so the CSS keeps its size and
position.

## Scrollytelling cauldron (`BrewScene.tsx`)

The About band pins a cauldron in place and scrolling animates it: the fire lights, a
crystal ball, a spellbook and a potion drop in one at a time, a spoon stirs, and a ghost
rises out holding a DEV badge. To replace the drawn pieces with generated art, each
piece has to be a **separate transparent PNG** so it can still move on its own. Ask for
them one at a time, using the shared style line above, plus:

> Isolated single object, centred, no background, no shadow, no text unless asked,
> front-on three-quarter view, consistent with the other pieces in the set.

| Layer | Prompt |
| --- | --- |
| Pot (back) | An empty round witch's cauldron seen slightly from above, dark purple iron with a violet shine, three short legs, the rim drawn as a thick oval with the inside visible and empty. |
| Brew surface | Just the flat oval surface of a glowing liquid, cyan, seen from slightly above, to sit inside a cauldron rim. |
| Fire | Three cartoon flames in a row, pumpkin orange with a candlelight-yellow core, for under a cauldron. |
| Crystal ball | A lilac crystal ball on a small grape-purple stand. |
| Spellbook | A closed grape-purple spellbook with a cream page edge and a small yellow star on the cover. |
| Potion | A small round potion bottle with a cork, filled with glowing violet liquid. |
| Spoon | A long wooden witch's stirring spoon, diagonal. |
| Ghost | The friendly bedsheet ghost from the set, smiling, one arm holding out a round yellow medal on a purple ribbon that says "DEV". |
| Steam | Three soft wavy wisps of cream-coloured steam, separate from each other. |

For a one-shot mood image instead (for example a poster or a social post), use this
with GPT's image model:

```text
Cute Halloween sticker-style illustration, thick rounded dark-purple outlines, flat colours,
hand-drawn wobble. A bubbling witch's cauldron on a small fire under a full yellow moon.
An orange cartoon dinosaur in a purple witch hat (DS3's mascot, reference attached) stirs
it with a wooden spoon. A crystal ball, a spellbook and a potion bottle float down into the
glowing cyan brew, and a friendly ghost rises out holding a "DEV" medal and a "</>" symbol.
Bats, sparkles, a ringed jack-o'-lantern planet in the night-purple sky. Palette: #1b0f2e,
#5b2a86, #9b6bd6, #ff8a2b, #ffd166, #fff4e6, #3cc7d6. No realistic horror.
```
