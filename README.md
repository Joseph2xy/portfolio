# Joseph's portfolio

A static portfolio built with Astro, React, and TypeScript. The repository is self-contained. No career documents or parent-directory files are needed to build it.

## Develop

Use Node.js 22.23.4 or newer, as required by Astro. Install dependencies with `npm ci`, then run `npm run dev` and open http://localhost:5175/. Keep the terminal open while previewing. On Windows, `open-website.cmd` starts the same development server and opens your browser.

Public profile details, employment dates, and project descriptions are in `src/data/profile.ts`. Page composition is in `src/pages/index.astro`, and styles are in `src/styles/global.css`. Fonts and their licenses are in `public/assets/`.

## Validate and build

Run the complete validation before publishing:

```sh
npm run validate
```

This checks types, builds the static site in `dist/`, and verifies built links, local assets, navigation anchors, and project status wording. It does not test external sites or visual layout. Run `npm run preview` to serve the production build locally.

## Cloudflare Pages

For a repository containing this directory's contents at its root, use:

- Production branch: `main`
- Build command: `npm run validate`
- Build output directory: `dist`
- Root directory: leave blank

Connect the repository through Cloudflare Pages Git integration for automatic deployments and branch previews. Only `dist/` is published. No server adapter, application secrets, or career files are required. Hosting has not yet been configured.
