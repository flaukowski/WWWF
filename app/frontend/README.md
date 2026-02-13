# WWWF Frontend Application

Next.js web application for the World Wide Wrestling Festival global coordination platform.

## Features

- **Landing Page** — Hero section, principles, cultural styles, call-to-action
- **Peace Charter** — Digital signing interface for participants
- **Events Map** — Global map of participating cities
- **Event Registration** — Form for cities to register events
- **Organizer Resources** — Toolkit and guides for local chapters
- **Livestream Aggregation** — "Follow the Earth" global stream viewer

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Maps:** React Leaflet (for global event map)
- **Deployment:** Vercel / Cloudflare Pages

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
frontend/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles and WWWF custom styles
│   ├── vision/              # Vision & mission page
│   ├── peace-charter/       # Peace Charter signing page
│   ├── events/              # Global events map
│   └── organize/            # Organizer resources
├── components/
│   ├── Navigation.tsx       # Top navigation bar
│   ├── Footer.tsx           # Footer
│   ├── Hero.tsx             # Homepage hero section
│   ├── PrinciplesSection.tsx
│   ├── CulturalStylesSection.tsx
│   └── CallToAction.tsx
└── public/
    └── (static assets)
```

## Brand Colors

The WWWF uses earth tones and peace-themed colors:

- **Earth** (#8B4513) — Grounding, tradition
- **Clay** (#D4A574) — Warmth, connection
- **Stone** (#A8A8A8) — Stability, neutrality
- **Olive** (#556B2F) — Peace, growth
- **Peace Blue** (#4A90E2) — Harmony, hope
- **Unity** (#E8DCC4) — Togetherness, light

## Development Guidelines

### Code Style

- Use TypeScript for all new files
- Follow Next.js App Router conventions
- Use Tailwind utility classes over custom CSS
- Prefer server components unless client interactivity is needed

### Accessibility

- Maintain semantic HTML structure
- Ensure keyboard navigation works
- Use ARIA labels where appropriate
- Test with screen readers

### Performance

- Optimize images with Next.js Image component
- Lazy load heavy components
- Minimize JavaScript bundle size
- Use server-side rendering where possible

## Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for contribution guidelines.

## License

MIT License - See [LICENSE](../../LICENSE) for details.

---

**Together, we wrestle for peace. 🕊️**
