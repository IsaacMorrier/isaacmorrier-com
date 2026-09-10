# isaacmorrier.com

Personal site and portfolio, built with [Astro](https://astro.build) and structured content from [Sanity](https://www.sanity.io), deployed on [Netlify](https://netlify.com).

## What's here

This is an npm workspaces monorepo with two packages:

- `web/` — the Astro site (isaacmorrier.com)
- `studio/` — the Sanity Studio CMS

## Quick start

1. Clone this repository
2. `npm install` in the project root
3. `npm run dev` to start the studio and frontend locally
   - Studio: [http://localhost:3333](http://localhost:3333)
   - Frontend: [http://localhost:4321](http://localhost:4321)
4. `npm run build` to build both locally

Requires Node 24+ (see `.nvmrc`).

## Content

Frontend fetches from Sanity's production dataset at build/dev time via GROQ. Local Studio edits the live dataset.

## Deploy changes

Netlify automatically deploys new changes pushed to `main`. `web/` and `studio/` deploy as separate Netlify sites, built via the root `build-web` / `build-studio` scripts. Studio also has a dashboard widget that can trigger new deploys from within the CMS.
