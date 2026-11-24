# NIMS development setup

NIMS is a blank web app scaffold. The React frontend mounts an empty root, and the Express backend accepts JSON request bodies. Application pages, API routes, and MySQL integration can be added to the existing folders.

| Folder | Purpose |
| --- | --- |
| `frontend/public/` | Static assets |
| `frontend/src/` | React entry point, components, pages, API clients, and styles |
| `backend/src/` | Express app and server, configuration, database access, routes, controllers, services, repositories, and middleware |
| `backend/tests/` | Backend tests |
| `database/` | MySQL migrations and seed data |
| `docs/` | Project documentation |

## Install and run

Use Node.js 22.12+ on the 22.x release line, or Node.js 24+. From the NIMS project folder, install dependencies using the committed npm lockfiles.

```sh
npm --prefix frontend ci
npm --prefix backend ci
```

Start the frontend in one terminal.

```sh
npm --prefix frontend run dev
```

Open the URL Vite prints. It usually uses `http://localhost:5173` and chooses another port if that one is busy. A blank page is expected.

Start the backend in a second terminal.

```sh
npm --prefix backend run dev
```

Express listens at `http://127.0.0.1:3000` by default. Watch mode restarts the server when source files change. An HTTP 404 at the root is expected while the route folders are empty.

The backend can start without `.env`. To change the port, copy `backend/.env.example` to `backend/.env`, set `PORT`, and restart the backend. The template includes placeholders for future MySQL credentials. Git ignores the local `.env` file.

## Build the frontend

```sh
npm --prefix frontend run build
```

The production build is generated in `frontend/dist/`.
