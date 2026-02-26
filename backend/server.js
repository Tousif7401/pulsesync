import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import webhookRoutes from './routes/webhook.js';
import postRoutes from './routes/posts.js';
import aiRoutes from './routes/ai.js';
import { initDatabase } from './services/postService.js';

// Load environment variables
dotenv.config();

// Initialize database
await initDatabase();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'DevSync AI API is running' });
});

// Routes
app.use('/webhook', webhookRoutes);
app.use('/posts', postRoutes);
app.use('/api/ai', aiRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════╗
║     🚀 DevSync AI API Server              ║
║     Running on port ${PORT}                   ║
╚═══════════════════════════════════════════╝
  `);
});
