/**
 * ATELIER STUDIO - Dashboard UI View Routes
 * Section 5-A: RESTful Routing Plan
 * 
 * Practice connecting your views to the projectService functions here!
 */

import express from 'express';
import * as projectService from '../services/projectService.js';

const router = express.Router();

/**
 * GET /
 * Fetches telemetry + active projects and renders index.ejs
 */
router.get('/', (req, res) => {
  const projects = projectService.getAllProjects();
  const telemetry = projectService.calculateTelemetry();
  res.render('index', { projects, telemetry });
});

/**
 * GET /projects/new
 * Displays project creation form
 */
router.get('/projects/new', (req, res) => {
  res.render('project-form');
});

/**
 * POST /projects
 * Validates input & creates project in projectService
 */
router.post('/projects', (req, res) => {
  projectService.createProject(req.body);
  res.redirect('/');
});

/**
 * GET /projects/:id
 * Fetches project dossier & milestones
 */
router.get('/projects/:id', (req, res) => {
  const project = projectService.getProjectById(req.params.id);
  if (!project) return res.status(404).send('Dossier Not Found');
  res.render('project-detail', { project });
});

/**
 * GET /projects/:id/edit
 * Pre-populates form with existing project data
 */
router.get('/projects/:id/edit', (req, res) => {
  const project = projectService.getProjectById(req.params.id);
  res.render('project-form', { project });
});

/**
 * PATCH /projects/:id
 * Updates project via method-override
 */
router.patch('/projects/:id', (req, res) => {
  projectService.updateProject(req.params.id, req.body);
  res.redirect('/projects/' + req.params.id);
});

/**
 * PATCH /projects/:id/milestones/:milestoneId
 * Toggles milestone completion
 */
router.patch('/projects/:id/milestones/:milestoneId', (req, res) => {
  projectService.toggleMilestone(req.params.id, req.params.milestoneId);
  res.redirect('/projects/' + req.params.id);
});

/**
 * DELETE /projects/:id
 * Deletes project record
 */
router.delete('/projects/:id', (req, res) => {
  projectService.deleteProject(req.params.id);
  res.redirect('/');
});

/**
 * GET /projects/:id/invoice
 * Renders minimalist printable invoice view
 */
router.get('/projects/:id/invoice', (req, res) => {
  const project = projectService.getProjectById(req.params.id);
  res.render('invoice-view', { project });
});

export default router;
