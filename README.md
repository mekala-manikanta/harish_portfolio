# Ukkisala Harish - Portfolio

Single-page portfolio built with React + Vite. Light and dark themes.

## Run locally

```bash
npm install
npm run dev      # live dev server, usually http://localhost:5173
```

## Build for hosting

```bash
npm run build    # outputs static files to dist/
npm run preview  # serves dist/ locally to check it
```

Deploy the project to Vercel or Netlify (build command `npm run build`, output `dist`).

## Edit content

- All text lives in `src/data.js`. Wrap words in `**double asterisks**` to bold them in bullets.
- Photo: put an image in `public/` and set `profile.photo` (e.g. `'harish.jpg'`). It replaces the
  pipeline card in the hero and the initials in the contact card.
- Resume: `public/resume.pdf`. Set `profile.resume` to `''` to hide all resume buttons.
- Colors and layout: `src/index.css` (tokens at the top).
