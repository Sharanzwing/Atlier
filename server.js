/**
 * ATELIER STUDIO - Server Bootstrapper & Middleware Configuration
 * Section 5: Architectural Foundation
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import methodOverride from 'method-override';

// Import Route Handlers
import dashboardRoutes from './routes/dashboardRoutes.js';
import apiRoutes from './routes/apiRoutes.js';

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Template Engine Configuration (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 2. Static Assets Middleware
app.use(express.static(path.join(__dirname, 'public')));

// 3. Request Body Parsers (Form Submissions & JSON)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 4. Method Override for RESTful Form Handling (PATCH / DELETE via ?_method=)
app.use(methodOverride('_method'));

// 5. Route Mounting
app.use('/', dashboardRoutes);
app.use('/api/v1', apiRoutes);

// 6. Global 404 Handler
app.use((req, res) => {
  res.status(404).send(`
    <body style="background: #090A0D; color: #F3F4F6; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0;">
      <div style="text-align: center;">
        <h1 style="font-family: monospace; color: #D4AF37;">// 404 — DOSSIER NOT FOUND</h1>
        <p style="color: #9CA3AF;">The requested architectural coordinate does not exist in Atelier OS.</p>
        <a href="/" style="color: #D4AF37; text-decoration: none; border-bottom: 1px solid #D4AF37;">&larr; Return to Studio Matrix</a>
      </div>
    </body>
  `);
});

// 7. Server Listener
app.listen(PORT, () => {
  console.log(`\n✦ ATELIER STUDIO OS RUNNING`);
  console.log(`✦ Local Interface: http://localhost:${PORT}`);
  console.log(`✦ Press Ctrl+C to terminate\n`);
});
