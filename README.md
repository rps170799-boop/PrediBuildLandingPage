# prediBuild – Landing Page

Landing page for **prediBuild**, a web-native BIM coordination platform.

Built with [Vite](https://vitejs.dev/).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

The output is generated in the `dist/` folder.

### Preview the production build

```bash
npm run preview
```

## Deployment

This project is configured for [Vercel](https://vercel.com/).

### Deploy to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
3. Click **Add New… → Project**.
4. Import the **PrediBuildLandingPage** repository.
5. Vercel will auto-detect the Vite framework — click **Deploy**.
6. Share the generated `.vercel.app` URL with your team.

Every push to the `main` branch will trigger an automatic redeployment.
