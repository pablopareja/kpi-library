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

## 🧭 URLs and Routing

The application is structured around a single page located at the root (`/`). All interactions related to filtering, searching, and viewing asset details are managed through URL parameters. This approach enables state persistence, deep linking, and improved user experience when sharing or bookmarking specific views.

### 🔁 Filter and Search State in the URL

Both the asset type filter and search input are managed using [Zustand](https://github.com/pmndrs/zustand). These values are kept in sync with the URL using a custom `FilterSync` component. The component is responsible for:

- Reflecting any change in the filter or search input as query parameters (e.g., `?type=Kpi&search=retention`)
- Restoring filter and search values from the URL when the application loads

This design ensures that the state is preserved across reloads and shareable URLs accurately represent the current view of the application.

### 💬 Modal Dialog Routing with `id`

The presence of the `id` query parameter (e.g., `?id=k1`) is used to control the visibility of an asset detail dialog:

- When an asset card is clicked, the URL is updated with `id=<assetId>`
- The dialog component reads this value to fetch and display asset details
- Closing the dialog removes the `id` from the URL while retaining the rest of the query parameters

This routing strategy allows asset details to be accessed and shared directly via URL without requiring navigation to a separate page.


