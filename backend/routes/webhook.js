import express from 'express';
import { handleWebhook, webhookHealth } from '../controllers/webhookController.js';

const router = express.Router();

/**
 * POST /webhook/github
 * GitHub webhook endpoint for push events
 */
router.post('/github', handleWebhook);

/**
 * GET /webhook/health
 * Health check for webhook endpoint
 */
router.get('/health', webhookHealth);

export default router;
