import express from 'express';
import { signup, login, getCurrentUser, updateProfile } from '../controllers/authController.js';
import { verifyToken } from '../services/authService.js';

const router = express.Router();

// Auth middleware to attach user to request
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  req.user = decoded;
  next();
};

/**
 * POST /auth/signup
 * Create a new user account
 */
router.post('/signup', signup);

/**
 * POST /auth/login
 * Authenticate user and return token
 */
router.post('/login', login);

/**
 * GET /auth/me
 * Get current authenticated user (requires valid token)
 */
router.get('/me', authMiddleware, getCurrentUser);

/**
 * PUT /auth/me
 * Update user profile (requires valid token)
 */
router.put('/me', authMiddleware, updateProfile);

export default router;
