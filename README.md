# Sixtap

**6 taps and the price is ready.**

A phone-first estimator for kitchens, bathrooms and installation. For people who price renovation work on site, with the client standing right there.

![Sixtap](docs/banner.png)

## What it does

Open it, answer one question per screen, get a price. A kitchen takes six taps: tier, length, wall units, tall units, worktop, installation. A bathroom takes three.

- **Kitchen, bathroom, installation.** Kitchen is priced per linear metre by tier (Basic, Standard, Extended) with a live elevation drawing. Bathroom is per m² of floor plus fixtures. Installation is a pick-and-count list.
- **Your prices first.** On first launch you enter your own rates, or skip and fix them later. The defaults are rough guide numbers, not market truth.
- **A message for the client.** Name, phone, one price, and a note that it is approximate. Send it to WhatsApp or copy it. Written in Russian, Ukrainian, English or Portuguese.
- **Saved estimates.** Reopen, edit, delete.
- **Four languages in the UI.** It picks the language from your phone and remembers your choice.
- **Light and dark.** Same design, two brightness levels.

## How accurate is it

Roughly 15–20 %. It is a conversation tool, not a quote. The kitchen range shows ±15 % by default, and the message to the client says the price is approximate. The tier prices come from public Portuguese guide figures (Habitissimo, Zaask), so check them against your own jobs before you rely on them.

## Try it

No build, no dependencies, no account. It is a single `index.html`.

- Live: https://davydmedvedchuk.github.io/sixtap/
- Or download the repo and open `index.html` in a browser. On a phone it feels best added to the home screen.

Your prices and saved estimates stay in the browser (`localStorage`). Nothing is sent anywhere.

## Built with

Plain HTML, CSS and JavaScript in one file. Fonts from Google Fonts (Barlow Condensed, IBM Plex).

## License

MIT. See [LICENSE](LICENSE).

Made by Davyd Medvedchuk.
