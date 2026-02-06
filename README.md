# node — AI-Powered Logistics Safety

Marketing website for node, an AI vision platform for warehouse and logistics safety.

## Features

- 🎯 Near-miss prevention and detection
- 📏 Proximity intelligence with depth-aware zone detection
- ✅ ISO 45001 & GDPR compliance automation
- 📊 Task timing and workflow analytics
- ⚡ Real-time safety alerts (<100ms)

## Tech Stack

- **Vite** — Build tool & dev server
- **React 18** — UI framework
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling
- **shadcn/ui** — Component library (Radix UI)
- **Vitest** — Testing

## Getting Started

### Prerequisites

- Node.js 18+ (or Bun)

### Installation

```sh
# Install dependencies
npm install
# or with bun
bun install

# Start development server
npm run dev
# or
bun dev
```

The site will be available at `http://localhost:5173`

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests |

## Project Structure

```
src/
├── components/     # React components
│   ├── ui/         # shadcn/ui components
│   └── *.tsx       # Page sections
├── pages/          # Route pages
├── hooks/          # Custom React hooks
├── lib/            # Utilities
└── assets/         # Images & static files
```
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Option 1: Deploy to nodehub.uk or any static host

1. Build the project: `npm run build`
2. Upload the `dist/` folder to your hosting platform
3. See [PUBLISHING_GUIDE.md](./PUBLISHING_GUIDE.md) for detailed instructions
4. Quick reference: [docs/INDEX_FILES.md](./docs/INDEX_FILES.md)

### Option 2: Deploy via Lovable

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
