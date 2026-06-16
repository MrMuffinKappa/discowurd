# discOwUrd

**Disc**ord text formatter with a little **OwU** — a free, open-source web app for writing and previewing Discord markdown.

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

Open [http://localhost:5173](http://localhost:5173) in your browser.

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

On every push to `main`, GitHub Actions builds the app and publishes the `dist/` folder to the `gh-pages` branch.

**One-time setup:**

1. Open **Settings → Pages**
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Set **Branch** to `gh-pages` and folder to `/ (root)`
4. Save — the site will be live at `https://<username>.github.io/discowurd/`

If the page looks unstyled, the Pages source is likely pointing at `main` instead of `gh-pages`. Switch it as above and wait ~1 minute.

The production build uses `base: '/discowurd/'` for project-page hosting.

## Contributing

Issues and pull requests are welcome on [GitHub](https://github.com/MrMuffinKappa/discowurd).

## License

Open source — feel free to use, fork, and improve.
