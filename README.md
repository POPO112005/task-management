### Task Management (React + Vite)

### Overview

This is a lightweight task (to‑do) app. You can add tasks, edit them, and delete them. Tasks are saved in the browser using `localStorage`, so they persist across page reloads. A light/dark theme toggle is available and persisted as well.

### Features

- Add a task with a title and timestamp
- Edit a task title in a modal dialog
- Delete a task with confirmation
- Local persistence via `localStorage`
- Light/Dark theme toggle (saved as `mode`)
- Toast notifications for user feedback

### Architecture

- `src/main.jsx`: App entry, mounts React to `#root`.
- `src/App.jsx`: Configures routes (`/` → `Home`, fallback → `Notfoundpage`).
- `src/layouts/Mainlayout.jsx`: Layout wrapper with `Navbar`, `Footer`, and `ToastContainer`; manages theme and exposes it via `Outlet` context.
- `src/pages/Home.jsx`: Core to‑do logic (state, add/edit/delete, persistence, loading spinner).
- `src/components/Newtask.jsx`: Form to create tasks (uncontrolled input via refs).
- `src/components/Todoitem.jsx`: Renders each task with edit/delete actions and a modal dialog.
- `src/components/Navbar.jsx`: Theme toggle button.
- `src/components/Footer.jsx`: Footer bar.
- `src/components/Spinner.jsx`: Loading indicator.

### Theming

The current theme class (`light` or `dark`) is applied to the `<body>` element and also stored in `localStorage` under the `mode` key. Tailwind utility classes in `src/index.css` style both themes.


### Run locally

```bash
npm install
npm run dev
```

Open the URL from the terminal (for example `http://localhost:5173`) to view the app.

### Common Scripts

- **Develop (dev)**: `npm run dev`
- **Build for production**: `npm run build`
- **Preview production**: `npm run preview`
- **Lint**: `npm run lint`

### Project Structure (brief)

```
src/
  components/    // UI components, e.g., Navbar, Footer, Todoitem
  pages/         // Screens/pages, e.g., Home, Notfoundpage
  layouts/       // App-level layouts
```

### Tech Stack

- **React 19**, **React Router**, **Vite**
- **TailwindCSS v4**

---













