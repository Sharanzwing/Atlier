/**
 * ATELIER STUDIO - Data Abstraction Service Layer
 * Section 4-B: Service Methods
 * 
 * THE GOLDEN ARCHITECTURE RULE:
 * Your Express routes should NEVER interact directly with raw arrays or database drivers.
 * They call these service functions. When you upgrade to PostgreSQL / Prisma later,
 * you will ONLY edit this file!
 * 
 * Practice writing the logic inside each function below.
 */

import { initialProjects } from '../data/sampleData.js';

// In-memory data store initialized with sample data
let inMemoryProjects = [...initialProjects];

/**
 * 1. Returns all projects, with optional filtering by status (e.g. status='In Progress')
 * @param {Object} filter - Optional filter object, e.g. { status: 'In Progress' }
 * @returns {Array} List of projects
 */
export function getAllProjects(filter = {}) {
  // TODO: Implement filtering logic. If filter.status is provided, filter projects; otherwise return all.
  return inMemoryProjects;
}

/**
 * 2. Finds and returns a single project by its unique ID
 * @param {string} id - The project id (e.g. 'proj_8471')
 * @returns {Object|null} The matching project or null
 */
export function getProjectById(id) {
  // TODO: Use Array.prototype.find() to locate project by id
  return inMemoryProjects.find(p => p.id === id) || null;
}

/**
 * 3. Generates a unique ID, calculates initials, adds timestamp, pushes to array, and returns created item
 * @param {Object} payload - Project form data
 * @returns {Object} Created project object
 */
export function createProject(payload) {
  const uniqueId = 'proj_' + Math.floor(10000000 + Math.random() * 90000000);
  // 2. Compute clientInitials from clientName
  const name = (payload.clientName || "").trim();
  const words = payload.clientName.split(/\s+/);
  const clientInitials = words.length > 1 ? (words[0][0] + words[1][0]).toUpperCase() : name.substring(0,2).toUpperCase();
  // 3. Parse budget and amountPaid to numbers
  const budget = Number(payload.budget) || 0;
  const amountPaid = Number(payload.amountPaid) || 0;
  // 4. Transform milestonesRaw (newline separated text) into array of { id, title, completed: false }
  // 5. Add createdAt timestamp and invoiceNumber
  const createdAt = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
  const milestones = payload.milestonesRaw
    ? payload.milestonesRaw
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .map((title, index) => ({
          id: 'm' + (index + 1),
          title: title,
          completed: false
        }))
    : [];
  // 5. Build the complete project entity
  const newProject = {
    id: uniqueId,
    clientName: payload.clientName,
    clientInitials: clientInitials,
    projectTitle: payload.projectTitle,
    category: payload.category || 'Full-Stack Development',
    status: payload.status || 'In Progress',
    budget: budget,
    currency: payload.currency || 'USD',
    amountPaid: amountPaid,
    deadline: payload.deadline || '',
    milestones: milestones,
    invoiceNumber: 'INV-' + Math.floor(1000 + Math.random() * 9000),
    createdAt: createdAt
  };
  // 6. Push to inMemoryProjects array and return it
  inMemoryProjects.push(newProject);
  return newProject; 
}

/**
 * 4. Merges updated fields (budget, deadline, title, status) into existing project record
 * @param {string} id - Project ID to update
 * @param {Object} payload - Updated fields
 * @returns {Object|null} Updated project or null
 */
export function updateProject(id, payload) {
  // TODO: Find the project by id, merge fields, and return updated project
}

/**
 * 5. Toggles milestone completion state
 * @param {string} projectId - Project ID
 * @param {string} milestoneId - Milestone ID to toggle
 * @returns {Object|null}
 */
export function toggleMilestone(projectId, milestoneId) {
  // TODO: Find project, find milestone inside project.milestones, flip milestone.completed (true/false)
}

/**
 * 6. Removes project from array
 * @param {string} id - Project ID
 * @returns {boolean} True if deleted, false otherwise
 */
export function deleteProject(id) {
  // TODO: Use filter or splice to remove project matching id from inMemoryProjects
}

/**
 * 7. Computes live dashboard statistics: total contracted revenue, outstanding balance, and completion percentage
 * @returns {Object} { totalContracted, outstandingBalance, activeCount, totalCount, avgCompletion }
 */
export function calculateTelemetry() {
  // TODO: Calculate:
  let totalContracted = 0;
  let totalPaid = 0;
  let activeCount = 0;
  let totalMilestone = 0;
  let completedMilestone = 0;

  inMemoryProjects.forEach((project) => {
    // - totalContracted: sum of all project budgets
    totalContracted += Number(project.budget) || 0;
    // - totalPaid: sum of all amountPaid
    totalPaid += Number(project.amountPaid) || 0;  
    // - activeCount: number of projects with status 'In Progress' or 'In Review'
    project.status === 'In Progress' || project.status === 'In Review' ? activeCount += 1: activeCount += 0;
    if(project.milestones && Array.isArray(project.milestones)){
      totalMilestone += project.milestones.length;
      completedMilestone += project.milestones.filter(m => m.completed).length;
    }
  });

  // - avgCompletion: average % across all projects
  let avgCompletion = totalMilestone > 0 ? Math.round(completedMilestone / totalMilestone * 100) : 0;

  const telemetry = {
    totalContracted: totalContracted,
    totalPaid: totalPaid,
    // - outstandingBalance: totalContracted - totalPaid
    outstandingBalance: totalContracted - totalPaid,
    activeCount: activeCount,
     // - totalCount: total projects
    totalCount: inMemoryProjects.length,
    avgCompletion: avgCompletion
  }
  return telemetry;
}
