# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal portfolio site (rajkumar's) built with React 18, react-router-dom v6, framer-motion for animations, and Font Awesome for icons. Plain CSS files co-located with each component — no CSS framework or preprocessor.

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
- **Dead (Vite):** root-level `vite.config.js`, root `index.html`, and root `main.jsx` (which imports `@fontsource/poppins` and `./App.jsx` — neither exists). `vite` and `@vitejs/plugin-react` are not in `package.json`, so these files cannot run. `src/index.jsx` is also an unused duplicate entry.

When changing the entry point, HTML shell, fonts, or meta tags, edit `public/index.html` and `src/index.js`.

## Architecture

### Routing and the inverted layout pattern

`src/index.js` renders `<BrowserRouter><Routerdefinition /></BrowserRouter>`. `src/Router.jsx` defines lazy-loaded routes: `/` → `Dashboard`, `/about` → `About`, `/contact` → `Contact` (Contact exists but is not linked from the navbar).

The shared layout is **inverted**: `src/App.js` is not the root of the tree — it is a layout component (Navbar + footer + `{children}`) that **each page wraps itself in**:

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

- `src/pages/` — route-level pages (`Dashboard.jsx`, `About_page/`, `Contact_page/`)
- `src/component/` — shared components: `navbar/`, `skills/`, `chatbot_screen/`, `projectlietcard/` (directory name typo is existing convention — do not "fix" imports casually)
- `src/utility/skillData.js` — the skills list rendered on the Dashboard (name + Font Awesome icon)
- `src/assets/` — images imported by components; `public/images/` — images referenced by absolute URL (e.g. the Dashboard rocket uses `/images/rocket-spaceship.png`)

### Content lives in code

There is no CMS or API for site content. The projects list is a hardcoded array inside `Dashboard.jsx`; skills come from `src/utility/skillData.js`; About/Contact copy is inline JSX. Content edits mean editing those files.

### Chatbot (currently disabled)

`src/component/chatbot_screen/ChatbotScreen.jsx` is a chat UI that POSTs to an external Rasa bot at `https://zara-chatbot.onrender.com/webhooks/rest/webhook` via axios. It is commented out in `App.js` but kept intentionally.

## Conventions

- Component styles live in a CSS file next to the component (`Navbar.jsx` + `navbar.css`) and are plain global-scope CSS — class names must be unique site-wide.
- Global styles and shared classes (`main`, `flex`, footer, etc.) are in `src/App.css`.
- Icons come from `@fortawesome/react-fontawesome` with the free solid/brands icon packs.
- Page-enter and scroll animations use framer-motion (`motion.div` with `initial`/`animate` or `whileInView`).
