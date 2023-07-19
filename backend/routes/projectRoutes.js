import express from 'express';
const router = express.Router();
import {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projectController.js';

import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getProjects).post(protect, admin, createProject);

router
  .route('/:id')
  .get(getProject)
  .put(protect, admin, updateProject)
  .delete(protect, admin, deleteProject);

export default router;
