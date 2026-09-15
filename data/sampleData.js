/**
 * ATELIER STUDIO - Sample Seed Data
 * Section 4-A: Realistic Project Entity Shape
 * 
 * You can import this array into `services/projectService.js` to initialize
 * your in-memory array so you don't test on empty screens!
 */

export const initialProjects = [
  {
    id: "proj_8471",
    clientName: "Aetheric Sound Labs",
    clientInitials: "AS",
    projectTitle: "Next-Gen Web Audio Synthesis Platform",
    category: "Full-Stack Development",
    status: "In Progress",     // 'In Progress' | 'In Review' | 'Completed' | 'Delayed'
    budget: 18500,             // Numeric total in dollars
    currency: "USD",           // 'USD' | 'EUR' | 'GBP' | 'INR'
    amountPaid: 9250,          // 50% deposit received
    deadline: "2026-10-15",
    milestones: [
      { id: "m1", title: "Brand Identity & Audio Tokens", completed: true },
      { id: "m2", title: "Express DSP Middleware Architecture", completed: true },
      { id: "m3", title: "Client Staging Deployment", completed: false }
    ],
    invoiceNumber: "INV-2026-004",
    createdAt: "2026-09-01T09:30:00.000Z"
  },
  {
    id: "proj_8472",
    clientName: "Vanderbilt & Finch",
    clientInitials: "VF",
    projectTitle: "Architectural Portfolio & Monograph CMS",
    category: "Creative Direction",
    status: "In Review",
    budget: 24000,
    currency: "USD",
    amountPaid: 24000,
    deadline: "2026-09-28",
    milestones: [
      { id: "m1", title: "Information Architecture & Grid Specs", completed: true },
      { id: "m2", title: "Editorial Layout & Typography", completed: true },
      { id: "m3", title: "Client Review & Signoff", completed: false }
    ],
    invoiceNumber: "INV-2026-005",
    createdAt: "2026-08-15T11:00:00.000Z"
  },
  {
    id: "proj_8473",
    clientName: "Nordic Kinetic Works",
    clientInitials: "NK",
    projectTitle: "Automated Industrial Telemetry Dashboard",
    category: "Interface Engineering",
    status: "Completed",
    budget: 32000,
    currency: "EUR",
    amountPaid: 32000,
    deadline: "2026-08-30",
    milestones: [
      { id: "m1", title: "WebSocket Pipeline", completed: true },
      { id: "m2", title: "Real-time Canvas Rendering", completed: true },
      { id: "m3", title: "Production Hardening", completed: true }
    ],
    invoiceNumber: "INV-2026-002",
    createdAt: "2026-07-20T14:15:00.000Z"
  },
  {
    id: "proj_8474",
    clientName: "Solstice BioTech",
    clientInitials: "SB",
    projectTitle: "Genomic Sequence Visualization Studio",
    category: "Full-Stack Development",
    status: "Delayed",
    budget: 45000,
    currency: "USD",
    amountPaid: 15000,
    deadline: "2026-09-12",
    milestones: [
      { id: "m1", title: "Data Pipeline Ingestion", completed: true },
      { id: "m2", title: "Interactive Chromosome Track", completed: false },
      { id: "m3", title: "Clinical Export Validation", completed: false }
    ],
    invoiceNumber: "INV-2026-001",
    createdAt: "2026-08-01T08:00:00.000Z"
  }
];
