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