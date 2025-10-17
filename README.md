# mycomponents-frontend

[![Repo language](https://img.shields.io/badge/language-TypeScript-3178C6.svg)](https://www.typescriptlang.org/)
[![Built with Vite](https://img.shields.io/badge/bundler-Vite-646CFF.svg)](https://vitejs.dev/)
[![Framework](https://img.shields.io/badge/framework-React-61DAFB.svg)](https://reactjs.org/)
[![Status](https://img.shields.io/badge/status-active-success.svg)]

A frontend application for the "My Components" project. This repository contains a TypeScript + React frontend scaffolded with Vite and enhanced with TailwindCSS, GSAP, and common UI icon libraries. It provides the user interface, components, pages, API client code, and app layout for the My Components system.

---

## Table of contents

- [Description](#description)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment variables](#environment-variables)
- [Usage](#usage)
- [Folder structure](#folder-structure)
- [Contributing](#contributing)
- [Testing & Linting](#testing--linting)
- [License](#license)
- [Contact](#contact)

---

## Description

mycomponents-frontend is the front-end codebase for the My Components project. It provides:

- A typed React application using TypeScript for improved DX and maintainability.
- Client-side routing and page structure for the application.
- Prebuilt UI components (in `src/components`) and layout primitives (in `src/layout`).
- An HTTP client layer for talking to backend services (likely under `src/api`).
- Styling via TailwindCSS and global styles in `src/index.css`.
- Animations via GSAP and small UI libraries (Heroicons, Lucide).
- Build and dev tooling using Vite for fast local development.

This project focuses on a modular component-based frontend that can easily integrate with a backend API.

---

## Tech stack

Primary technologies and libraries used in this repository:

- Frontend
  - TypeScript
  - React (v19)
  - Vite
  - TailwindCSS
  - GSAP (GreenSock animation platform)
  - Axios (HTTP client)
  - React Router (routing)
  - lucide-react, @heroicons/react (icons)
  - react-select (select/input components)
- Tooling
  - ESLint (linting)
  - TypeScript compiler
  - vite plugin for React (SWC)
- Static / assets
  - public/ (images and static assets)

(See `package.json` for exact versions and full dependency lists.)

---

## Getting started

These instructions will get you a copy of the project running locally for development and testing purposes.

### Prerequisites

- Node.js (recommended LTS version, Node 18+)
- npm (or yarn / pnpm)
- A code editor such as VS Code

### Installation

1. Clone the repository

   git clone https://github.com/UGALDEMMJ/mycomponents-frontend.git
   cd mycomponents-frontend

2. Install dependencies

   Using npm:
   npm install

   Using pnpm:
   pnpm install

   Using yarn:
   yarn install

3. Create environment variables

   The app expects Vite-style environment variables (prefixed with VITE_). Create a `.env` file in the project root or `.env.local` and add variables such as:

   VITE_API_BASE_URL=https://api.example.com
   VITE_OTHER_FLAG=true

   (Adjust names to match variables used in `src/config`.)

4. Start the dev server

   npm run dev

   The dev script uses Vite and will typically start at http://localhost:5173 (Vite will print the actual address in your terminal).

### Available scripts

- npm run dev — start development server (Vite)
- npm run build — build for production (runs TypeScript build then Vite build)
- npm run preview — locally preview a production build
- npm run lint — run ESLint across the codebase

---

## Usage

- Start the dev server: npm run dev
- Open http://localhost:5173 (or the URL printed by Vite) in your browser.
- The app entry point is `src/main.tsx` and the top-level application component is `src/App.tsx`.
- Components are under `src/components`, pages under `src/pages`. Configuration and API client code live in `src/config` and `src/api` respectively.
- To build a production bundle: npm run build
- To preview the build locally: npm run preview

---

## Folder structure

A high-level overview of the main folders and files in this repository:

- public/
  - Static assets and images (e.g. MCts.svg, bgCustom.jpg)
- src/
  - api/ — API client modules and services
  - components/ — Reusable UI components
  - config/ — App configuration (base URLs, constants)
  - context/ — React context providers
  - hooks/ — Custom React hooks
  - layout/ — Layout components (header, footer, navigation)
  - pages/ — Top-level route pages
  - assets/ (if present) — images, icons used inside src
  - App.tsx — Root application component
  - main.tsx — App bootstrap / ReactDOM render
  - index.css — Global styles (Tailwind entry)
  - vite-env.d.ts — Vite TypeScript environment types

This structure is intentionally modular to keep components isolated and easy to reuse.

---

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository and create a feature branch:

   git checkout -b feat/your-feature

2. Keep changes focused — one topic per PR. Provide clear commit messages.

3. Follow the existing code style:
   - TypeScript types where applicable
   - Prefer functional components and hooks
   - Use Tailwind utility classes for styling and keep styles modular

4. Run the linter and fix issues before opening a PR:

   npm run lint

5. Open a Pull Request against the `main` branch with a clear description of the change.

Suggested branch naming:
- feat/<short-description>
- fix/<short-description>
- chore/<short-description>

If you plan larger or breaking changes, open an issue first to discuss design and impact.

---

## Testing & Linting

- Lint: npm run lint (ESLint is configured — extend or update `.eslintrc` if required)
- Tests: This repository does not currently include a test runner configuration (e.g., Jest, Vitest). Consider adding Vitest for lightweight unit tests integrated with Vite.

---

## Contact / Author

- Author: UGALDEMMJ
- GitHub: https://github.com/UGALDEMMJ

---
