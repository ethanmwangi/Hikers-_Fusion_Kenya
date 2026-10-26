# Hikers Fusion Kenya

Website for Hikers Fusion Kenya, an adventure and travel company offering hiking, safaris, camping, and travel experiences across Kenya and East Africa.

The website provides information about the company's services and hiking routes, with contact options for visitors interested in planning a trip.

## Features

- Responsive layouts for desktop and mobile devices.
- Dedicated pages for hiking, safaris, camping, and travel.
- Hiking route information and photography.
- WhatsApp and email contact links.
- Navigation between service pages and individual hiking routes.
- Deployment configured for Vercel.

## Technology Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **UI library:** React
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Version control:** Git and GitHub

## Project Structure

The Next.js application is located in the `hkf/` directory.

```text
Hikers-_Fusion_Kenya/
├── README.md
└── hkf/
    ├── public/
    │   └── images/
    ├── src/
    │   ├── app/
    │   │   ├── page.tsx
    │   │   ├── hiking/
    │   │   ├── safaris/
    │   │   ├── camping/
    │   │   ├── travel/
    │   │   └── contact/
    │   └── components/
    ├── package.json
    ├── next.config.ts
    └── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository and navigate to the application directory.

```bash
git clone https://github.com/ethanmwangi/Hikers-_Fusion_Kenya.git
cd Hikers-_Fusion_Kenya/hkf
```

Install the project dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The development server reloads the application when supported source files are changed.

## Available Scripts

Run these commands from the `hkf/` directory.

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server. |
| `npm run build` | Creates a production build. |
| `npm run start` | Starts the production server after a successful build. |
| `npm run lint` | Runs ESLint to check the codebase. |

## Deployment

The application is hosted on Vercel and connected to its GitHub repository.

Changes pushed to the configured production branch can trigger an automatic deployment.

For local production verification, run:

```bash
npm run build
npm run start
```

Custom domain configuration and environment variables should be managed through the Vercel project settings where applicable.

## Maintenance

Keep dependencies updated, verify production builds before significant releases, and test the main service pages, contact links, and responsive layouts after changes.

## License

This project was developed for Hikers Fusion Kenya. Reuse, redistribution, or modification should be subject to the agreement between the developer and the client.