import express from 'express';
import { generateFromPrompt } from '../controllers/aiController.js';

const router = express.Router();

/**
 * POST /api/ai/generate
 * Generate social media post from a free-form prompt
 */
router.post('/generate', generateFromPrompt);

export default router;
