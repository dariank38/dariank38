# Personal Website

A clean, modern, and animated personal website built with **Next.js 15**, **TypeScript**, **Tailwind CSS v4**, and **Lucide icons**.

## Pages

- `/` — Home with hero, skills, experience preview, and blog cards
- `/story` — Full personal story
- `/resume` — Resume / CV with timeline and skills
- `/blog` — Blog listing
- `/contact` — Contact links

## Customize

1. Update `lib/constants.ts` with your name, title, contact links, and repository name.
2. Replace the placeholder content in `lib/data.ts` with your own story, experience, and skills.
3. Add a profile photo by passing `src` to the `Avatar` component in `app/page.tsx`.
4. Update the `basePath` in `lib/constants.ts` if your GitHub repo name is different.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000/me/](http://localhost:3000/me/) (the `basePath` is `/me` by default).

## Build for production

```bash
npm run build
```

This generates a static export in the `out` folder.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Choose **Source: GitHub Actions**.
4. Or use a workflow that runs `npm run build` and deploys the `out` folder.

Make sure `basePath` in `lib/constants.ts` matches your repository name (e.g., `/me` for `username.github.io/me`).
