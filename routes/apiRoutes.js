/**
 * ATELIER STUDIO - Future-Proof RESTful JSON API Routes
 * Section 9-C: Headless REST API
 */

import express from 'express';
import * as projectService from '../services/projectService.js';

const router = express.Router();

/**
 * GET /api/v1/projects
 * Returns pure JSON of all projects for future mobile / SPA integration
 */
router.get('/projects', (req, res) => {
  const projects = projectService.getAllProjects();
  res.json({
    status: 'success',
    count: projects.length,
    data: projects
  });
});

/**
 * GET /api/v1/projects/:id
 * Returns single project as JSON
 */
router.get('/projects/:id', (req, res) => {
  const project = projectService.getProjectById(req.params.id);
  if (!project) {
    return res.status(404).json({ status: 'error', message: 'Dossier not found' });
  }
  res.json({ status: 'success', data: project });
});

export default router;
