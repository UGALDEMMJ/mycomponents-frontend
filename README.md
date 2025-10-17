# mycomponents-frontend

[![Language: TypeScript](https://img.shields.io/badge/language-TypeScript-blue)]()
[![License: Unspecified](https://img.shields.io/badge/license-Unspecified-lightgrey)]()
[![Repository](https://img.shields.io/badge/repo-mycomponents--frontend-9cf)]()

Frontend for the My Components application — a TypeScript-based single-page application (SPA) that provides the user interface for browsing, creating, and managing components. This project pairs with the mycomponents-backend API (https://github.com/UGALDEMMJ/mycomponents-backend).

## Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment variables](#environment-variables)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact / Author](#contact--author)
- [Badges & Extras](#badges--extras)

## Description

mycomponents-frontend is the client application for the My Components project. It provides:

- A responsive UI to display, search, create, update and delete components.
- JSON-based communication with the backend API.
- Client-side routing and state management for a smooth user experience.
- Ready-to-deploy build output for static hosting or modern frontend hosts (Vercel, Netlify, Cloudflare Pages, etc).

This repository focuses on the frontend experience and expects a running backend API (see mycomponents-backend) for persistent data.

## Tech Stack

Note: This project is primarily TypeScript (97.7%). The exact framework (React / Preact / Vue / Svelte / Solid) is framework-agnostic in this README — adjust commands below to match the framework used in your codebase.

Common technologies used in this repository:
- Language: TypeScript
- Bundler / dev server: Vite, Webpack, or framework CLI (adjust to actual repo setup)
- UI: Component-based architecture (React / Vue / Svelte-style components)
- Styling: CSS / SCSS / CSS-in-JS (project-specific)
- Linter / Formatter: ESLint, Prettier (recommended)
- Testing: Vitest / Jest / Testing Library (recommended)
- Deployment: Vercel, Netlify, GitHub Pages, or static hosting

This project is intended to work together with:
- Backend: UGALDEMMJ/mycomponents-backend (Deno + oak)

## Getting Started

### Prerequisites

- Node.js (LTS recommended) and a package manager: npm, Yarn, or pnpm
- A running instance of the backend API (or a mock API) — see UGALDEMMJ/mycomponents-backend
- Recommended: Git installed if you plan to clone and contribute

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/UGALDEMMJ/mycomponents-frontend.git
   cd mycomponents-frontend
   ```

2. Install dependencies
   Use the package manager your project is configured for:

   npm:
   ```bash
   npm install
   ```

   Yarn:
   ```bash
   yarn
   ```

   pnpm:
   ```bash
   pnpm install
   ```

3. Create environment configuration
   - Copy or create a `.env` file at the project root. Example variables commonly used:

   ```env
   # .env
   VITE_API_URL=http://localhost:8000/api
   VITE_APP_TITLE="myComponents"
   # If authentication is used:
   # VITE_AUTH_CLIENT_ID=...
   ```

   - If your project uses a different variable prefix (e.g., REACT_APP_), adapt accordingly.

4. Lint/format (optional but recommended)
   ```bash
   npm run lint
   npm run format
   # or
   yarn lint
   yarn format
   ```

### Environment variables

Common environment variables to configure:
- VITE_API_URL (or REACT_APP_API_URL) — base URL for the backend API
- VITE_SOME_FEATURE_FLAG — feature toggles or runtime config
- PUBLIC_BASE_PATH — when deploying to a subpath (if applicable)

Add a `.env.example` file to the repo with safe defaults (do not commit secrets).

## Usage

Adjust the commands below if your project uses a different framework or script names. Check package.json for exact scripts.

- Start dev server (hot reload)
  ```bash
  npm run dev
  # or
  yarn dev
  # or
  pnpm dev
  ```

  Then open:
  - http://localhost:5173 (Vite default)
  - or the port printed in terminal

- Build for production
  ```bash
  npm run build
  # or
  yarn build
  ```

  Output will typically be in `dist/` or `build/`.

- Preview production build locally
  ```bash
  npm run preview
  # or
  yarn preview
  ```

- Run tests (if present)
  ```bash
  npm run test
  # or
  yarn test
  ```

- Formatting and linting
  ```bash
  npm run format
  npm run lint
  ```

If the app is configured with another tool (Next.js / Create React App), replace the commands above with the appropriate ones found in package.json (e.g., next dev / react-scripts start).

## Folder Structure

This is a suggested / typical structure for a TypeScript frontend app. If your repository differs, use the actual layout in your `src/`:

- public/                 — Static assets (favicon, index.html template)
- src/
  - assets/               — Images, fonts, icons
  - components/           — Reusable UI components
  - pages/                — Page-level components / routes
  - routes/               — Router setup and route definitions
  - services/             — API client and services (e.g., api.ts)
  - stores/ / state/      — State management (Context, Redux, Zustand, etc.)
  - styles/               — Global styles, theme, variables
  - utils/                — Utility functions and helpers
  - hooks/                — Custom hooks (if using React)
  - main.tsx / index.tsx  — App entry point
- tests/                  — Unit / integration tests
- package.json            — Scripts and dependencies
- tsconfig.json           — TypeScript configuration
- .eslintrc / .prettierrc — Linting and formatting config
- .env.example            — Example environment variables

## Contributing

Thanks for your interest in contributing! A few guidelines to streamline collaboration:

- Fork the repository and create a branch for your work
  ```bash
  git checkout -b feat/your-feature
  ```

- Commit messages: Use clear, concise messages. Use conventional commits if you prefer:
  - feat: add new feature
  - fix: bug fix
  - docs: documentation only changes
  - chore: build process or auxiliary tools

- Code style:
  - Follow existing TypeScript patterns in the repo.
  - Run formatters and linters before committing:
    ```bash
    npm run format
    npm run lint
    ```

- Tests:
  - Add tests for new features and bug fixes when applicable.
  - Ensure all tests pass locally.

- Pull Request:
  - Open a PR against `main` (or the repository's default branch).
  - Describe what you changed and why, include screenshots or GIFs for UI changes.
  - Link any related issues.

If you want, open an issue first to discuss larger changes or design decisions.

## License

No license file was detected in the repository metadata. If you are the project owner and want others to use or contribute, add a license file (for example, MIT):

Example to add MIT:
```text
MIT License
...
```

Add a LICENSE file to the repository root to make the license explicit.

## Contact / Author

Author: UGALDEMMJ  
GitHub: https://github.com/UGALDEMMJ

If you'd like to add an email, LinkedIn, or portfolio link, include them in this section of the README.

## Badges 
- CI (GitHub Actions): https://img.shields.io/github/workflow/status/UGALDEMMJ/mycomponents-frontend/CI
- Deno / Node version: https://img.shields.io/badge/node-%3E%3D16-brightgreen
- License: https://img.shields.io/badge/license-MIT-green (after adding LICENSE)
- Version: https://img.shields.io/github/v/release/UGALDEMMJ/mycomponents-frontend
