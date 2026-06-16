# discOwUrd

**Disc**ord text formatter with a little **OwU** — a free, open-source web app for writing and previewing Discord markdown.

**Vibe coded by** Mr.Muffin

**Live demo:** [mrmuffinkappa.github.io/discowurd](https://mrmuffinkappa.github.io/discowurd/)

![discOwUrd](src/favicon_discOwUrd/favicon.svg)

## Features

- **Discord markdown** — bold, italic, underline, strikethrough, spoiler, inline/code blocks, headers, quotes, multi-line quotes, lists, and links
- **Live preview** — see formatted output as you type
- **Toolbar & selection menu** — format from the header bar or the floating popup on text selection
- **Copy for Discord** — smart quote handling (`>>>` blocks convert to per-line `>` quotes on copy)
- **Custom emojis** — upload `.webp` files or save from a URL; stored locally in IndexedDB as `:name:` syntax
- **Glitch text generator** — zalgo-style text with adjustable intensity
- **11 languages** — Hungarian, English, German, Spanish, Russian, Polish, Japanese, Chinese, Korean, Turkish, Italian
- **Dark theme** — purple accent (`#BD58F2`), no backend required

## Quick start

```bash
git clone https://github.com/MrMuffinKappa/discowurd.git
cd discowurd
npm install
npm run dev
```

Open [http://localhost:PORT](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

Production files are output to `dist/`.

## Emoji workflow

1. Click **Emojis** in the editor panel
2. Enter a name (e.g. `monkas`) and upload a `.webp` file, or paste an image URL and click **Save**
3. Insert into your text with `:monkas:` — appears in preview and copies as Discord syntax

Emojis are stored in your browser only (IndexedDB); they are not uploaded to any server.

## Tech stack

- [Vite](https://vitejs.dev/) — build tool
- Vanilla HTML, CSS, JavaScript — no framework
- IndexedDB — local emoji storage

## Deploy to GitHub Pages

Every push to `main` builds the app and updates the `docs/` folder (via GitHub Actions).

**Pages settings:** Source = **Deploy from a branch** → Branch **`main`** → Folder **`/docs`** (not `/root`).

Live at [mrmuffinkappa.github.io/discowurd](https://mrmuffinkappa.github.io/discowurd/)

## Contributing

Issues and pull requests are welcome on [GitHub](https://github.com/MrMuffinKappa/discowurd).

## License

Open source — feel free to use, fork, and improve.
