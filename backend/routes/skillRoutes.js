import express from 'express';
const router = express.Router();
import {
  getSkills,
  getSkill,
  createSkill,
  updateSkill,
  deleteSkill,
} from '../controllers/skillController.js';

import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getSkills).post(protect, admin, createSkill);

router
  .route('/:id')
  .get(getSkill)
  .put(protect, admin, updateSkill)
  .delete(protect, admin, deleteSkill);

export default router;
