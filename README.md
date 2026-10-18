# MMC-Print-Packaging
MMC Print and Packaging is a marketing and printing company that specializes in providing high-quality print solutions that include custom packaging, promotional materials, and branded merchandise.

## Deployment

- Frontend: [Netlify](https://netlify.com) — configured via `netlify.toml`
- Backend: [Railway](https://railway.app) — configured via `server/railway.json`

### Required Environment Variables

**Frontend** — set in Netlify under Site Settings → Environment Variables:

| Variable | Description |
|---|---|
| `VITE_API_URL` | Full URL of the Railway backend (e.g. `https://your-app.up.railway.app`) |

See `client/.env.example` for reference.

**Backend** — set in Railway under your service's Variables tab:

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `EMAIL_USER` | Sender email address |
| `EMAIL_PASS` | Sender email password or app password |
| `PORT` | Port the server listens on (Railway sets this automatically) |
| `NODE_ENV` | Set to `production` |

See `server/.env.example` for reference.

## Local Development

**Frontend:**
```bash
cd client
npm install
npm run dev
```

**Backend:**
```bash
cd server
npm install
npm run dev
```

Create `client/.env` and `server/.env` from their respective `.env.example` files before running locally.
