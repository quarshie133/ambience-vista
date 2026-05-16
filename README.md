# Ambience Vista

A full-stack company website and admin management system for Ambience Vista — a premium Ghanaian painting company.

## Tech Stack

- **Frontend**: React + Vite + Tailwind CSS + Framer Motion + React Router
- **Backend**: Node.js + Express + MongoDB + AdminJS
- **Auth**: JWT
- **Uploads**: Multer (local, structured for Cloudinary migration)

## Structure

```
ambience-vista/
├── client/    ← React frontend (Vite)
└── server/    ← Express API + AdminJS
```

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB running locally or MongoDB Atlas URI

### Backend Setup

```bash
cd server
cp .env.example .env       # fill in your values
npm install
node seed.js               # seed initial data + admin user
npm run dev                # starts on port 5000
```

Admin panel: http://localhost:5000/admin

### Frontend Setup

```bash
cd client
cp .env.example .env       # set VITE_API_URL
npm install
npm run dev                # starts on port 5173
```

## Deployment

### Frontend → Vercel
- Connect GitHub repo, set root to `client/`
- Add env var: `VITE_API_URL=https://your-backend.onrender.com/api`

### Backend → Render / Railway
- Set root to `server/`
- Start command: `node index.js`
- Add all env vars from `.env.example`
- Set `NODE_ENV=production`

## Admin Dashboard

Access at `/admin` on the backend URL.

Default credentials (from seed):
- Email: `admin@ambiencevista.com`
- Password: `AdminVista2024!`

> ⚠️ Change these immediately in production via the `.env` file.

## Sections

1. Hero — headline, stats, dual CTAs
2. About — story, mission, values
3. Why Us — 6 numbered reason cards
4. Services — 6 expandable service cards
5. Process — animated 6-step timeline
6. Impact — SDGs, Women in Colour, IDDG
7. Partners — marquee carousel
8. Gallery — masonry grid with lightbox
9. CTA — full-width action section
10. Contact — form with backend submission
11. Footer — dark with full links
