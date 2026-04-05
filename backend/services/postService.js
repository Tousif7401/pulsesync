import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const connectionString = process.env.DATABASE_URL;

// Create a pg Pool for the adapter
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({
  adapter,
});

/**
 * Test database connection
 */
export async function initDatabase() {
  try {
    await prisma.$connect();
    console.log('✅ PostgreSQL connected successfully (with Prisma)');
    console.log('✅ Posts table ready');
  } catch (error) {
    console.error('❌ Error connecting to database:', error.message);
    throw error;
  }
}

/**
 * Save a generated post to the database
 * @param {object} data - Post data to save
 * @returns {object} - Saved post
 */
export async function savePost(data) {
  const {
    commitMessage,
    commitId,
    commitUrl,
    authorName,
    authorEmail,
    repository,
    content,
  } = data;

  try {
    const post = await prisma.post.create({
      data: {
        commitMessage,
        commitId,
        commitUrl,
        authorName,
        authorEmail,
        repository,
        commitType: content.commitType || 'update',
        linkedinPost: content.linkedin || null,
        twitterPost: content.twitter || null,
        instagramPost: content.instagram || null,
        hashtags: content.hashtags || [],
      },
    });
    return post;
  } catch (error) {
    console.error('❌ Error saving post:', error.message);
    throw error;
  }
}

/**
 * Get all posts from the database
 * @param {object} options - Query options
 * @returns {array} - Array of posts
 */
export async function getPosts(options = {}) {
  const { limit = 50, offset = 0, unpublishedOnly = false } = options;

  try {
    const posts = await prisma.post.findMany({
      where: unpublishedOnly ? { isPublished: false } : undefined,
      orderBy: { createdAt: 'desc' },
      take: limit,
      skip: offset,
    });
    return posts;
  } catch (error) {
    console.error('❌ Error fetching posts:', error.message);
    throw error;
  }
}

/**
 * Get a single post by ID
 * @param {string} id - Post ID
 * @returns {object} - Post object
 */
export async function getPostById(id) {
  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });
    return post;
  } catch (error) {
    console.error('❌ Error fetching post:', error.message);
    throw error;
  }
}

/**
 * Delete a post by ID
 * @param {string} id - Post ID
 * @returns {boolean} - Success status
 */
export async function deletePost(id) {
  try {
    await prisma.post.delete({
      where: { id },
    });
    return true;
  } catch (error) {
    console.error('❌ Error deleting post:', error.message);
    throw error;
  }
}

/**
 * Get statistics about posts
 * @returns {object} - Statistics
 */
export async function getStats() {
  try {
    const [total, unpublished, byType] = await Promise.all([
      prisma.post.count(),
      prisma.post.count({ where: { isPublished: false } }),
      prisma.post.groupBy({
        by: ['commitType'],
        _count: true,
      }),
    ]);

    return {
      total,
      unpublished,
      byType: byType.map(item => ({
        commit_type: item.commitType || 'update',
        count: item._count,
      })),
    };
  } catch (error) {
    console.error('❌ Error fetching stats:', error.message);
    throw error;
  }
}

/**
 * Disconnect from database (for graceful shutdown)
 */
export async function disconnectDatabase() {
  await prisma.$disconnect();
  await pool.end();
}

/**
 * Update a post by ID
 * @param {string} id - Post ID
 * @param {object} data - Updated post data
 * @returns {object} - Updated post
 */
export async function updatePost(id, data) {
  const {
    linkedinPost,
    twitterPost,
    instagramPost,
    hashtags,
  } = data;

  try {
    const post = await prisma.post.update({
      where: { id },
      data: {
        ...(linkedinPost !== undefined && { linkedinPost }),
        ...(twitterPost !== undefined && { twitterPost }),
        ...(instagramPost !== undefined && { instagramPost }),
        ...(hashtags !== undefined && { hashtags }),
      },
    });
    return post;
  } catch (error) {
    console.error('❌ Error updating post:', error.message);
    throw error;
  }
}

/**
 * Publish a post to specified platforms
 * @param {string} id - Post ID
 * @param {string[]} platforms - Array of platforms to publish to
 * @returns {object} - Updated post
 */
export async function publishPost(id, platforms) {
  try {
    const post = await prisma.post.update({
      where: { id },
      data: {
        isPublished: true,
        platformPublished: platforms,
      },
    });
    return post;
  } catch (error) {
    console.error('❌ Error publishing post:', error.message);
    throw error;
  }
}
