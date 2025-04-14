# KPI Library

A modern and responsive library interface for exploring KPIs, dashboards, layouts, and storyboards.

## 🔧 Tech Stack

This project was bootstrapped using [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app), and is built with the following technologies:

- [**Next.js**](https://nextjs.org/) – React-based framework for building server-side rendered and statically generated applications
- [**Tailwind CSS**](https://tailwindcss.com/) – Utility-first CSS framework for building custom designs quickly and responsively
- [**Zustand**](https://github.com/pmndrs/zustand) – Lightweight and scalable state management library
- [**TypeScript**](https://www.typescriptlang.org/) – Strongly typed JavaScript for better tooling, safety, and maintainability

## 🧰 Utility Libraries

- [**clsx**](https://github.com/lukeed/clsx) — Conditional classNames helper
- [**lodash.debounce**](https://lodash.com/docs/#debounce) — Debounce function used for the search input

## 📁 Folder Structure

The project is organized using the following structure:

```
kpi-library/
├── public/                    # Static assets (e.g., images, icons)
├── src/                       # Source code
│   ├── app/                   # Application routes and pages (Next.js App Router)
|   |   ├── api/               # Simulated API
│   ├── components/            # UI components
|   |   ├── icons/             # React SVG icon components
|   |   ├── illustrations/     # React SVG illustration components (used for asset placeholders)
|   |   ├── library/           # UI components that are specific for this project (not generic)
|   |   ├── ui/                # Generic UI components
|   |   ├── utils/             # Utils components
│   ├── data/                  # Data used in the application
│   ├── lib/                   # Utility functions and libraries
|   |   ├── endpoints/         # Util methods used to call the simulated API endpoints 
│   ├── stores/                # Zustand stores
│   ├── types/                 # TypeScript type definitions
│   └── ...                    # Additional directories as needed
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
