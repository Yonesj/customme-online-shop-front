# Customme — Online Shop (Frontend)

Customme — a Persian (RTL), React + TypeScript storefront for a custom-products shop (phone cases, greeting cards, accessories, and more), built by designers for the community.

This repository is a frontend implementation of most pages from the **[Customme Online Shop (Community) Figma file](https://www.figma.com/design/vHRWzzeJACbi8prKClb8zu/Customme-Online-Shop--Community-?node-id=1-8&p=f)**.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-Apache_2.0-blue)

## Overview

Customme is an online shop where independent designers publish designs (phone cases, greeting cards, gifts, and other custom items) that customers can browse and purchase. This repo covers the customer-facing storefront: browsing, product detail and reviews, cart and checkout, authentication, and account management.

<img width="1920" height="1080" alt="File Cover" src="https://github.com/user-attachments/assets/50eb8bb9-c4d1-4443-b5c7-7bbeaf1446b3" />

## Features

- 🛍️ **Product catalog** — categories, sorting tabs (most viewed / newest / best-selling / price), a filter panel, and pagination
- 🧾 **Product detail** page with customer reviews/comments, like/dislike, and a comment form
- 🛒 **Cart & multi-step checkout** — cart → address → payment, visualized with a step indicator
- 👤 **Authentication** — login and a two-step sign-up flow (account info, then Iranian contact/address info with phone, province, city, and postal-code validation)
- 🔐 **Protected routes** for the profile dashboard, order history, and account info pages, gated by a JWT-based auth context with automatic access-token refresh
- 🎨 **Community/designer elements** on the home page — designer profile cards, a showcase section, gift banners, discount sections, and call-to-action banners
- 🌐 Fully **RTL, Persian-localized** UI with a bundled Iranyekan font family
- 🔔 Toast notifications for user feedback (via `react-toastify`)

## Tech Stack

| Category           | Tools                              |
| ------------------ | ---------------------------------- |
| Framework          | React 19, TypeScript               |
| Build tool         | Vite 6                             |
| Routing            | React Router v7                    |
| Styling            | Tailwind CSS v4, CSS Modules       |
| Forms & validation | React Hook Form, Zod               |
| HTTP client        | Axios (with JWT auth interceptor)  |
| Notifications      | React Toastify                     |
| Tooling            | ESLint, Prettier, vite-plugin-svgr |

## Pages & Routes

| Route                      | Page            | Notes                                                                   |
| -------------------------- | --------------- | ----------------------------------------------------------------------- |
| `/`                        | Home            | Hero, categories, popular products, designer showcase, gifts, discounts |
| `/products`                | OtherProducts   | Product listing with filters, sorting, and pagination                   |
| `/products/:id`            | SelectedProduct | Product detail, reviews, and comments                                   |
| `/cart`                    | Cart            | Cart items and invoice summary                                          |
| `/users/login`             | Login           | User login                                                              |
| `/users/sign-up`           | UserSignUp      | Sign-up, step 1 (account info)                                          |
| `/users/sign-up/complete`  | UserSignUpPage2 | Sign-up, step 2 (contact & address info)                                |
| `/my-profile/dashboard` 🔒 | UserProfile     | User dashboard                                                          |
| `/my-profile/orders` 🔒    | OrdersHistory   | Order history                                                           |
| `/my-profile/info` 🔒      | UserAccountInfo | Account info management                                                 |

🔒 = requires authentication (wrapped in `ProtectedRoute`)

## Project Structure

```
src/
├── assets/          # fonts, icons, and images
├── components/      # reusable UI (Header, NavBar, Footer, ProductCard, Stepper, Invoice, ...)
├── context/          # AuthContext — JWT auth state, login/logout, silent token refresh
├── enums/           # Province, education, and job options used in sign-up forms
├── pages/           # route-level pages (see table above)
├── services/        # Axios client + per-resource API services (products, customers, contact info, users)
├── styles/          # global styles, typography, fonts
├── App.tsx          # route definitions
└── main.tsx         # application entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A backend API matching the endpoints used in `src/services` (JWT auth in the Djoser + Simple JWT style, plus product/customer/contact-info endpoints)

### Installation

```bash
git clone https://github.com/Yonesj/customme-online-shop-front.git
cd customme-online-shop-front
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server (defaults to `http://localhost:5173`).

### Build

```bash
npm run build
```

Type-checks the project and builds a production bundle.

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

### Connecting to a backend

This project pairs with the **[Customme backend](https://github.com/Yonesj/customme-online-shop-back)** — a Django REST Framework API providing JWT auth (Djoser + Simple JWT) and the product, customer, and contact-info endpoints this frontend expects.

`src/services/api-client.ts` currently points to a hardcoded `http://localhost:8000/` base URL. To run the full stack locally:

1. Clone and set up the [backend repo](https://github.com/Yonesj/customme-online-shop-back) following its own README (dependencies, database, migrations).
2. Start the backend's dev server — by default it serves on `http://localhost:8000/`, matching this frontend out of the box.
3. Start this frontend with `npm run dev`.

If you'd rather connect a different backend of your own, just make sure it exposes:

- JWT auth endpoints (`auth/jwt/verify/`, `auth/jwt/refresh/`)
- Product, customer, and contact-info endpoints consumed by the corresponding files in `src/services`

...and update the `baseURL` in `api-client.ts` accordingly.

## Design Reference

UI and UX are based on the **[Customme Online Shop (Community)](https://www.figma.com/design/vHRWzzeJACbi8prKClb8zu/Customme-Online-Shop--Community-?node-id=1-8&p=f)** Figma community file. Most pages from the design are implemented here; some flows may still be in progress.

## License

Licensed under the [Apache License 2.0](./LICENSE).
