# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal portfolio site (rajkumar's) built with React 18, react-router-dom v6, framer-motion for animations, and Font Awesome for icons. Plain CSS files co-located with each component — no CSS framework or preprocessor.

The visual identity is a deep-space **"mission control"** theme: a fixed interactive constellation canvas behind every page, warm rocket-amber as the primary accent with cyan signal lines, and a Poppins/sans + monospace type pairing (mission labels, coordinates, status readouts, and buttons are monospace). Design tokens live as CSS custom properties in `src/App.css` (`--void`, `--amber`, `--cyan`, `--violet`, `--panel`, `--mono`, …) — reuse those variables rather than hardcoding colors.

## Commands

The project builds with Create React App (`react-scripts`), not Vite — see the caveat below.

- `npm install` — install dependencies
- `npm start` — dev server at http://localhost:3000
- `npm run build` — production build to `build/`
- `npm test` — Jest in watch mode
- `npm test -- App.test` — run a single test file (or `CI=true npm test` for a one-shot non-interactive run)

Note: the existing `src/App.test.js` is the stale CRA default ("learn react link") and does not match the current `App` component, so it fails.

## Toolchain caveat: CRA is active, Vite files are dead

The repo contains leftovers from an abandoned Vite migration. Do not be misled by them:

- **Active (CRA):** `package.json` scripts use `react-scripts`; entry is `public/index.html` → `src/index.js`.
- **Dead (Vite):** root-level `vite.config.js`, root `index.html`, and root `main.jsx` (which imports `@fontsource/poppins` and `./App.jsx` — neither exists). `vite` and `@vitejs/plugin-react` are not in `package.json`, so these files cannot run. `src/index.jsx` is also an unused duplicate entry. (`public/index.html` previously carried a stray `<script src="/src/main.jsx">` from this migration that 404'd on every load — it has been removed.)

When changing the entry point, HTML shell, fonts, or meta tags, edit `public/index.html` and `src/index.js`.

## Deployment (Vercel)

`vercel.json` pins the build explicitly so the dead root Vite files can't cause a framework misdetection: `framework: create-react-app`, `outputDirectory: build`. It also adds the SPA rewrite `/(.*) → /index.html` — this is **required** because the app uses `BrowserRouter` (real paths `/about`, `/contact`), so without it a direct hit or refresh on a sub-route 404s. Vercel serves real static files before applying the rewrite, so hashed assets under `/static` are unaffected. Do not set a `homepage` field in `package.json` — assets are referenced root-absolute (`/static/...`) and a subpath prefix would break them on Vercel.

## Architecture

### Routing and the inverted layout pattern

`src/index.js` renders `<BrowserRouter><Routerdefinition /></BrowserRouter>`. `src/Router.jsx` defines lazy-loaded routes: `/` → `Dashboard`, `/about` → `About`, `/contact` → `Contact` (Contact exists but is not linked from the navbar).

The shared layout is **inverted**: `src/App.js` is not the root of the tree — it is a layout component (Starfield + Navbar + footer + `{children}`) that **each page wraps itself in**:

```jsx
function Dashboard() {
  return (
    <App>
      <main>...</main>
    </App>
  );
}
```

A new page must (1) get a `<Route>` in `src/Router.jsx` with a lazy import, and (2) wrap its own content in `<App>`, or it will render without the navbar and footer.

### Directory layout

- `src/content/site.json` — **all site copy** (see "Content lives in JSON" below)
- `src/pages/` — route-level pages (`Dashboard.jsx`, `About_page/`, `Contact_page/`)
- `src/component/` — shared components: `navbar/`, `skills/`, `starfield/`, `chatbot_screen/`, `projectlietcard/` (directory name typo is existing convention — do not "fix" imports casually)
- `src/utility/iconMap.js` — maps the string icon keys in `site.json` (e.g. `"react"`, `"linkedin"`) to Font Awesome icon objects, which cannot live in JSON
- `src/utility/skillData.js` — resolves `site.json`'s skills into `{ name, status, icon }` by attaching the Font Awesome icon via `iconMap`
- `src/assets/` — images imported by components; `public/images/` — images referenced by absolute URL (e.g. the Dashboard rocket uses `/images/rocket-spaceship.png`)

### Content lives in JSON

There is no CMS or API. **All editable copy lives in `src/content/site.json`** — nav links, hero text, the skills list, the projects list, footer/transmission text, and the About/Contact page copy. Components import this file and render from it, so most content edits mean editing only `site.json`, not JSX.

The one indirection: Font Awesome icon objects can't be serialized to JSON, so `site.json` stores a string `icon` key and `src/utility/iconMap.js` resolves it to the actual icon. To add a new icon, import it in `iconMap.js` and add a key; then reference that key from `site.json`.

### Interactive elements

- **`src/component/starfield/Starfield.jsx`** — a fixed full-viewport `<canvas>` (mounted once in `App.js`) that drifts stars, links nearby ones, and wires a live constellation to the cursor. Sets up/tears down its own `requestAnimationFrame` loop and listeners in a `useEffect`; freezes when `prefers-reduced-motion` is set.
- **Dashboard hero "INITIATE LAUNCH"** — toggles a `launching` class that plays the rocket liftoff CSS animation, then navigates to `hero.cta.path` (from `site.json`).
- The Navbar shows a live UTC mission clock and collapses to a burger dropdown at ≤768px.

### Chatbot (currently disabled)

`src/component/chatbot_screen/ChatbotScreen.jsx` is a chat UI that POSTs to an external Rasa bot at `https://zara-chatbot.onrender.com/webhooks/rest/webhook` via axios. It is no longer imported anywhere (`App.js` was rewritten for the mission-control theme) but the file is kept intentionally.

## Conventions

- Component styles live in a CSS file next to the component (`Navbar.jsx` + `navbar.css`) and are plain global-scope CSS — class names must be unique site-wide.
- Global styles, the design tokens (CSS custom properties), and shared classes (`main`, `panel`, `mono`, `eyebrow`, `block_head`, transmission footer) are in `src/App.css`. Use the token variables (`--amber`, `--cyan`, `--panel`, …) instead of hardcoding colors.
- Icons come from `@fortawesome/react-fontawesome` with the free solid/brands icon packs, resolved from `site.json` via `src/utility/iconMap.js`.
- Page-enter and scroll animations use framer-motion (`motion.div` with `initial`/`animate` or `whileInView`). Note: `whileInView` elements start at `opacity: 0` and reveal on scroll — expected for real users, but they photograph blank in a no-scroll full-page screenshot.
- Responsive breakpoints are roughly: ≤1024px (tablet — 2-col grids), ≤820px (stack hero/cards), ≤768px (burger nav), ≤560/480px (mobile — single column). Each component's CSS carries its own media queries.
