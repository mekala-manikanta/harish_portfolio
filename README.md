# Ukkisala Harish - Portfolio

Single-page portfolio built with React + Vite. Light and dark themes.

## Run locally

```bash
npm install
npm run dev      # live dev server, usually http://localhost:5173
```

## Build

```bash
npm run build    # outputs static files to dist/
npm run preview  # serves dist/ locally to check it
```

## Deploy on Vercel

The repo includes `vercel.json`, so Vercel picks up the right settings automatically.

1. Go to https://vercel.com/new and sign in with GitHub.
2. Import the `harish_portfolio` repository.
3. Leave the detected settings as they are (Framework: Vite, Build: `npm run build`, Output: `dist`).
4. Click **Deploy**. The site goes live at `https://<project-name>.vercel.app`.

Every push to `main` redeploys automatically. Add a custom domain under Project > Settings > Domains.

## Deploy on Render

The repo includes `render.yaml`, so Render can set everything up for you.

**Option A: Blueprint (recommended)**
1. In the Render dashboard, click **New > Blueprint**.
2. Connect GitHub and pick this repo.
3. Click **Apply**. Render creates a static site named `harish-portfolio`.

**Option B: Manual static site**
1. Click **New > Static Site** and pick this repo.
2. Build command: `npm ci && npm run build`
3. Publish directory: `dist`
4. Add environment variable `NODE_VERSION` = `22`.

Every push to `main` redeploys the site automatically.

## Edit content

- All text lives in `src/data.js`. Wrap words in `**double asterisks**` to bold them in bullets.
- Photo: put an image in `public/` and set `profile.photo` (e.g. `'harish.jpg'`). It replaces the
  pipeline card in the hero and the initials in the contact card.
- Resume: `public/resume.pdf`. Set `profile.resume` to `''` to hide all resume buttons.
- LaTeX source for the resume: `resume/Harish_Resume.tex` (open it in Overleaf).
- Colors and layout: `src/index.css` (tokens at the top).
