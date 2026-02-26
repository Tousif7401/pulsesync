import express from 'express';
import {
  getAllPosts,
  getSinglePost,
  getPostStats,
  removePost,
} from '../controllers/postController.js';

const router = express.Router();

/**
 * GET /posts
 * Get all posts
 * Query params: limit, offset, unpublished
 */
router.get('/', getAllPosts);

/**
 * GET /posts/stats
 * Get post statistics
 */
router.get('/stats', getPostStats);

/**
 * GET /posts/:id
 * Get a single post by ID
 */
router.get('/:id', getSinglePost);

/**
 * DELETE /posts/:id
 * Delete a post by ID
 */
router.delete('/:id', removePost);

export default router;
