<<<<<<< HEAD
# W02 Group Project – TaskFlow# Handcrafted Haven – Artisan Marketplace

**Group Members:**  
- Emily Emerson Cotilda N  
- Abiodun Babayode  
- Daniel Benjamin Chinonso Iwuchukwu  
- Morris Oliha  
- Tafadzwa Neshiri Sibanda  

**Course:** WDD 430 – Web Full-Stack Development  
**Date:** May 13, 2026  

---

## Project Purpose

Handcrafted Haven is a full-stack web application that connects artisans and crafters with customers who value unique, handcrafted items. The platform serves as a virtual marketplace where sellers can showcase their products, share their stories, and manage listings, while buyers can browse, filter, review, and purchase handmade goods. The project emphasises community, sustainable consumption, and support for local artisans.

---

## Requirements

### Functional Requirements
- **Seller Profiles** – Authenticated sellers have dedicated profiles to display their craftsmanship, story, and curated product collection.
- **Product Listings** – Artisans can list items with descriptions, pricing, and images. Buyers can browse the catalog and filter by category, price range, or other criteria.
- **Reviews & Ratings** – Any authenticated user can leave a product rating and a written review.

### Non-Functional / Design Requirements
- **Responsive Design** – Seamless experience across mobile, tablet, and desktop.
- **Accessibility** – WCAG 2.1 Level AA compliance.
- **Performance & SEO** – Optimised loading and search-engine friendly.
- **Consistent Branding** – Unified color scheme, typography, and layout.
- **Clear Navigation** – Intuitive hierarchy and persistent navigation elements.

---

## Technology Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Frontend    | Next.js, Tailwind CSS, JavaScript   |
| Backend     | Node.js + Express                   |
| Database    | PostgreSQL / MongoDB                |
| Deployment  | Vercel (frontend), Render/Fly.io (backend) |
| Version Control | Git + GitHub                    |
| Project Management | GitHub Projects (Kanban)       |

---

## Design Theme (Evidence for W02 Planning)

Our design system is defined in `tailwind.config.js` and implemented throughout the UI.

### Colors
- **Primary:** `#3B82F6` (blue‑500) – buttons, links, headers  
- **Secondary:** `#10B981` (green‑500) – success states, accents  
- **Accent:** `#8B5CF6` (purple‑500) – highlights, hover effects  
- **Background:** Light mode `#F9FAFB`, Dark mode `#111827`  
- **Text:** Light mode `#1F2937`, Dark mode `#F9FAFB`

### Typography
- **Font Family:** Inter (sans-serif) – used for all text.  
- **Headings:** Bold weight, responsive scale (2xl to 4xl).  
- **Body:** Regular weight, comfortable line-height (1.5).

### Layout & Components
- Centered container: `max-w-7xl mx-auto`  
- Card‑based grid for product listings and work items  
- Sticky header with navigation and dark mode toggle  
- Soft shadows and hover effects (transition `card-hover`)

### Dark Mode Support
Dark mode is implemented using the `class` strategy in Tailwind. The user can toggle between themes via a button, and the preference persists in `localStorage`.

---

## Setup Instructions

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Benjaminsoosay/wdd430-team-02.git
   cd wdd430-team-02
=======
# W02 Group Project – Handcrafted Haven

**Group Members:** Emily Emerson Cotilda N, Abiodun Babayode, Daniel Benjamin Chinonso Iwuchukwu, Morris Oliha, Tafadzwa Neshiri Sibanda

## Project Purpose
Handcrafted Haven is an innovative web application that provides a platform for artisans and crafters to showcase and sell their unique handcrafted items. It serves as a virtual marketplace, connecting talented creators with customers who appreciate handmade products. The application fosters community, supports local artisans, and promotes sustainable consumption.

## Requirements (Functional)
- **Seller Profiles** – Authenticated sellers have dedicated profiles to showcase their craftsmanship, share their stories, and display a curated collection of items.
- **Product Listings** – Artisans can list handcrafted items with descriptions, pricing, and images. Users can browse the catalog, filter by category, price range, or other criteria.
- **Reviews & Ratings** – Any user can leave a product rating and a written review.

## Non‑Functional & Design Requirements
- **Web Standards** – Performance, validation, accessibility (WCAG 2.1 Level AA), SEO, usability.
- **Responsive Design** – Seamless experience across smartphones, tablets, and desktops.
- **Branding** – Consistent color scheme, typography, and layout.
- **Navigation** – Clear, intuitive structure with logical hierarchy.

## Technology Stack
- **Front‑End:** HTML5, CSS (Tailwind CSS), JavaScript, Next.js
- **Back‑End:** Node.js + database (PostgreSQL / MongoDB)
- **Project Management:** GitHub Projects (Kanban)
- **Code Management:** Git & GitHub repository
- **Deployment / Cloud Platform:** Vercel

## Setup Instructions
1. Clone the repository:  
   `git clone https://github.com/your-group/handcrafted-haven.git`
2. Install dependencies:  
   `npm install`
3. Run the development server:  
   `npm run dev`
4. Open `http://localhost:3000` in your browser.

## Theme Design (Figma / Tailwind CSS)
- **Colors:** Primary `#3B82F6` (blue), Secondary `#10B981` (green), Background `#F9FAFB` (light) / `#111827` (dark)
- **Typography:** Inter, sans‑serif
- **Layout:** Centered `max-w-7xl`, card‑based product grid, sticky header

## Work Items (GitHub Project Kanban)
We have brainstormed the following 12 user stories / work items (see [Project Board](https://github.com/your-group/handcrafted-haven/projects/1)):

1. **User Registration** – As a new user, I want to create an account so I can save my profile and favorites. *(Priority: High)*
2. **User Login** – As a returning user, I want to log in securely to access my seller dashboard or shopping cart. *(Priority: High)*
3. **Create Task (Product Listing)** – As a seller, I want to add a new product with title, description, price, and images. *(Priority: High)*
4. **Edit Task (Edit Product)** – As a seller, I want to modify an existing product’s details. *(Priority: Medium)*
5. **Delete Task (Delete Product)** – As a seller, I want to remove a product I no longer offer. *(Priority: Medium)*
6. **View All Tasks (View All Products)** – As a user, I want to see all products ordered by date or popularity. *(Priority: High)*
7. **Mark Task Complete (Mark as Sold)** – As a seller, I want to mark an item as sold and visually distinguish it. *(Priority: Medium)*
8. **Filter by Status (Filter by Category/Price)** – As a user, I want to filter products by category, price range, or availability. *(Priority: Low)*
9. **Responsive Layout** – As a mobile user, I want the interface to work perfectly on any screen size. *(Priority: High)*
10. **Dark/Light Mode Toggle** – As a user, I want a button to switch between dark and light themes. *(Priority: Low)*
11. **Search Tasks (Search Products)** – As a user, I want to search products by keyword (title, artisan name). *(Priority: Medium)*
12. **Persistent Storage** – As a user, I want my cart and preferences to remain after page refresh (localStorage or database). *(Priority: High)*

> *Note:* The 12 work items above are directly taken from our group’s brainstorming HTML document. They form the initial backlog for Handcrafted Haven and will be refined as development progresses.

## Deployment
The application will be deployed to **Vercel** (frontend) and a cloud database service (e.g., Render, Fly.io, or MongoDB Atlas). The live URL will be added here once deployed.

## Collaboration Workflow
- **Branching:** Create a feature branch for each work item (`git checkout -b feature/user-registration`)
- **Pull Requests:** Open a PR into `main`, request review from another group member
- **Project Board:** Move issues from “To do” → “In progress” → “Done”

---

*Brainstormed: May 13, 2026 | Group Project – WDD 430 (BYU‑Idaho)*
>>>>>>> 9180d08dc1464bb00781c0b516771d457bec5315
