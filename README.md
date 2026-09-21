# ✦ ATELIER : Studio Project & Invoice Operating System

[![Node.js Version](https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express.js](https://img.shields.io/badge/Express.js-v4.21+-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![EJS](https://img.shields.io/badge/View_Engine-EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)](https://ejs.co)
[![CSS3](https://img.shields.io/badge/Design-Modern_CSS3_Tokens-1572B6?style=for-the-badge&logo=css3&logoColor=white)](public/css/tokens.css)
[![Deployment](https://img.shields.io/badge/Deployed_on-Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)](https://atlier-sjvs.onrender.com/)

> **A bespoke Studio Project & Invoice Operating System engineered with Executive Tech design principles, monospaced tabular telemetry, and a database-ready Service-Layer architecture.**

---

## 🌐 Live Demo

👉 **[Launch Live Studio OS on Render](https://atlier-sjvs.onrender.com/)**

---

## 📖 Table of Contents
- [Executive Overview](#-executive-overview)
- [Design System & Typography](#-design-system--typography)
- [Architecture & Service-Layer Pattern](#-architecture--the-service-layer-pattern)
- [Key Features](#-key-features)
- [Folder Structure](#-folder-structure)
- [Getting Started Locally](#-getting-started-locally)
- [REST API Endpoints](#-rest-api-endpoints)
- [Future Roadmap](#-future-roadmap)

---

## 🏛️ Executive Overview

In an era of cookie-cutter templates and neon-bloated dashboards, **Atelier** was conceived as a high-craft operating system for boutique creative studios, software consultancies, and freelance engineers. 

Instead of bloated navigation menus and generic cards, Atelier celebrates:
- **Typographic discipline** (Inter + JetBrains Mono)
- **Financial precision** (`font-variant-numeric: tabular-nums` to eliminate metric jitter)
- **Instant feedback** (Filter matrix, search, keyboard navigation)
- **Print-to-PDF readiness** (Zero-artifact invoice engine)

---

## 🎨 Design System & Typography

Atelier is built upon a strict, custom **CSS3 Design Tokens Architecture** (`public/css/tokens.css`):

### Palette Architecture (Executive Slate & Tech Cobalt)
| Token | Hex / Value | Description |
| :--- | :--- | :--- |
| `--bg-canvas` | `#0B0F19` | Midnight Slate deep canvas |
| `--bg-surface` | `#111827` | Deep slate glass card containers |
| `--bg-elevated` | `#1F2937` | High-contrast elevated menus & modals |
| `--border-subtle` | `rgba(255,255,255,0.08)` | Crisp 1px architectural hairlines |
| `--accent-primary` | `#2563EB` | Executive Royal Cobalt Blue action state |
| `--accent-primary-light` | `#3B82F6` | Tech Sapphire luminous hover highlight |
| `--status-paid` | `#10B981` | Emerald for completed phases and settled accounts |
| `--status-pending` | `#F59E0B` | Amber for deliverables in review |
| `--status-overdue` | `#F43F5E` | Crimson for delayed or overdue deadlines |

### Typography Disciplines
- **Interface & Headings**: **Inter** (`300` through `800`) — The industry benchmark for modern developer tools and enterprise SaaS (tight tracking `-0.025em`).
- **Telemetry & Numerics**: **JetBrains Mono** with `tabular-nums` — All financial balances, timestamps, and KPIs occupy identical character widths to prevent visual layout shifts when numbers update.

---

## 🏗️ Architecture & The Service-Layer Pattern

A common mistake in beginner full-stack projects is stuffing routing, business logic, array mutations, and view rendering into a giant 500-line monolithic server file. 

Atelier implements the industry-standard **Service-Layer Pattern**:

```text
┌────────────────────────────────────────────────────────┐
│                   BROWSER CLIENT                       │
└──────────────────────────┬─────────────────────────────┘
                           │ HTTP Request
                           ▼
┌────────────────────────────────────────────────────────┐
│              EXPRESS ROUTING LAYER                     │
│          (routes/dashboardRoutes.js)                   │
│   • Parses request parameters (req.params, req.body)   │
│   • Calls Service functions                            │
│   • Renders EJS views / Returns JSON                   │
└──────────────────────────┬─────────────────────────────┘
                           │ Calls Service Methods
                           ▼
┌────────────────────────────────────────────────────────┐
│                 SERVICE LAYER                          │
│          (services/projectService.js)                  │
│   • Business logic & validations                       │
│   • Telemetry & KPI calculations                       │
│   • CRUD data operations                               │
└──────────────────────────┬─────────────────────────────┘
                           │ Reads / Writes
                           ▼
┌────────────────────────────────────────────────────────┐
│                   DATA STORE                           │
│   Today: In-Memory Array (data/sampleData.js)          │
│   Tomorrow: PostgreSQL + Prisma ORM                    │
└────────────────────────────────────────────────────────┘
```

> ✦ **The Golden Rule**: Your Express routes *never* touch the raw database or array. When you migrate from in-memory storage to **PostgreSQL**, **MongoDB**, or **Prisma**, you will **only edit `services/projectService.js`**. All routes and EJS views remain 100% untouched.

---

## ⚡ Key Features

### 1. Studio Telemetry Banner
Top-stage KPI summary cards showing live aggregate data computed on demand:
- **Total Contract Value**: Sum of all contracted budgets.
- **Outstanding Balance**: Real-time difference between total budgets and deposits paid.
- **Active Studio Dossiers & Capacity**: Ratio of active vs total dossiers with live milestone completion percentage (`avgCompletion`).

### 2. Interactive Project Matrix & Filter Pills
- Instant client-side filtering by status (`All`, `In Progress`, `In Review`, `Completed`, `Delayed`).
- Live search bar filtering by client, title, and discipline.
- Dynamic **Client Monogram Badges** auto-generated from client names (e.g. *"Aetheric Sound Labs"* &rarr; `AS`).
- High-impact architectural empty state when no projects match a query.

### 3. Detailed Client Dossiers & Interactive Milestones
- Individual project dossiers displaying timeline, currency, budget progress, and deliverables.
- **Interactive Checkbox Sign-Offs**: Clicking milestone checkboxes dispatches `PATCH /projects/:id/milestones/:milestoneId` via `method-override` to toggle completion status live.

### 4. Minimalist Printable Invoice & PDF Engine
- Client-ready invoice sheet itemizing project deliverables, contract values, subtotal, and wire transfer bank credentials.
- **Dedicated `@media print` Stylesheet**: Clicking "Print Invoice / Export PDF" strips away app headers, navbars, buttons, and dark canvas backgrounds, producing a crisp, clean black-and-white document ready for "Save as PDF".

### 5. Power-User Ergonomics
- <kbd>N</kbd> &rarr; Instantly navigate to New Project form.
- <kbd>/</kbd> &rarr; Focus search input.
- <kbd>Esc</kbd> &rarr; Clear search and dismiss focus.
- Live studio UTC telemetry clock in the navigation bar.

---

## 📁 Folder Structure

```
atelier-project-os/
├── package.json              # Configured with "type": "module" & dependencies
├── server.js                 # Server bootstrapper & middleware configuration
├── .gitignore                # Production ignore list
│
├── public/
│   ├── favicon.svg           # Atelier geometric monogram favicon
│   ├── css/
│   │   ├── tokens.css        # CSS variables: palette, typography, spacing, radius
│   │   ├── main.css          # Global typography, layout reset, navbar, buttons, forms
│   │   ├── dashboard.css     # KPI telemetry banner, filter pills, project matrix
│   │   └── invoice.css       # Printable invoice layout with @media print engine
│   └── js/
│       ├── dashboard.js      # Live clock, keyboard shortcuts (N, /, Esc), search filters
│       └── invoice.js        # Window print trigger
│
├── views/
│   ├── partials/
│   │   ├── header.ejs        # Google Fonts import (Inter & JetBrains Mono), navigation
│   │   ├── footer.ejs        # Studio footer, keyboard shortcuts legend, scripts
│   │   ├── telemetry.ejs     # 3 KPI metric tiles component
│   │   └── project-card.ejs  # Reusable card component for project matrix
│   ├── index.ejs             # Master Dashboard View
│   ├── project-detail.ejs    # Detailed Client Dossier & Milestones checklist
│   ├── project-form.ejs      # Create & Edit Project View (obsidian-styled)
│   └── invoice-view.ejs      # Minimalist Printable Invoice View (PDF-ready)
│
├── data/
│   └── sampleData.js         # Realistic studio starter seed data
│
├── services/
│   └── projectService.js     # Data abstraction layer (CRUD & telemetry engine)
│
└── routes/
    ├── dashboardRoutes.js    # UI Web views routing
    └── apiRoutes.js          # Headless REST JSON API routes
```

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org) (v18.0.0 or higher recommended)
- [Git](https://git-scm.com)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/atelier-project-os.git
   cd atelier-project-os
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server with automatic file watching:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

---

## 🔌 REST API Endpoints

In addition to rendering server-side EJS views, Atelier provides a headless REST API ready for future mobile apps or React frontends:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/projects` | Returns all projects formatted as clean JSON |
| `GET` | `/api/v1/projects/:id` | Returns a single project dossier by ID |

Example JSON Response:
```json
{
  "status": "success",
  "count": 4,
  "data": [
    {
      "id": "proj_8471",
      "clientName": "Aetheric Sound Labs",
      "clientInitials": "AS",
      "projectTitle": "Next-Gen Web Audio Synthesis Platform",
      "category": "Full-Stack Development",
      "status": "In Progress",
      "budget": 18500,
      "currency": "USD",
      "amountPaid": 9250,
      "deadline": "2026-10-15",
      "milestones": [
        { "id": "m1", "title": "Brand Identity & Audio Tokens", "completed": true }
      ],
      "invoiceNumber": "INV-2026-004",
      "createdAt": "2026-09-01T09:30:00.000Z"
    }
  ]
}
```

---

## 🛣️ Future Roadmap

- [ ] **PostgreSQL + Prisma ORM**: Migrate in-memory array storage to a persistent cloud database (Neon / Supabase).
- [ ] **Multi-Tenant Authentication**: Add User registration and login sessions so creative consultants can manage private studios.
- [ ] **Currency Conversion API**: Real-time exchange rate calculation when switching currencies (USD / EUR / GBP / INR).
- [ ] **Stripe Checkout Webhooks**: Generate direct payment checkout links on the invoice sheet.

---

## 📄 License
This project is open source and available under the [ISC License](LICENSE).
