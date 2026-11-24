# NIMS

NIMS uses React and JavaScript on the frontend and Node.js with Express on the backend. The frontend opens to a blank page. The backend starts with JSON request parsing and an empty route structure. MySQL configuration fields, migrations, and seeds are reserved for future database work.

## Local development

Use Node.js 22.12 or newer within the 22.x line, or Node.js 24 or newer. Run each block in its own terminal from this project folder.

Frontend

```sh
cd frontend
npm install
npm run dev
```

Vite prints the local URL, usually http://localhost:5173. Run `npm run build` in `frontend/` to produce the static build in `frontend/dist/`.

Backend

```sh
cd backend
npm install
npm run dev
```

Express listens on http://127.0.0.1:3000 by default. Copy `.env.example` to `.env` to configure the port. Requests return 404 until routes are added.
