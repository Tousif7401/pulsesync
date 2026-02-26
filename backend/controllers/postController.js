import { getPosts, getPostById, deletePost, getStats } from '../services/postService.js';

/**
 * Get all posts
 * Query params: ?limit=50&offset=0&unpublished=false
 */
export async function getAllPosts(req, res) {
  try {
    const limit = parseInt(req.query.limit) || 50;
    const offset = parseInt(req.query.offset) || 0;
    const unpublishedOnly = req.query.unpublished === 'true';

    const posts = await getPosts({ limit, offset, unpublishedOnly });

    res.json({
      success: true,
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    console.error('❌ Error fetching posts:', error.message);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
}

/**
 * Get a single post by ID
 */
export async function getSinglePost(req, res) {
  try {
    const { id } = req.params;
    const post = await getPostById(id);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json({
      success: true,
      data: post,
    });
  } catch (error) {
    console.error('❌ Error fetching post:', error.message);
    res.status(500).json({ error: 'Failed to fetch post' });
  }
}

/**
 * Get statistics
 */
export async function getPostStats(req, res) {
  try {
    const stats = await getStats();

    res.json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error('❌ Error fetching stats:', error.message);
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
}

/**
 * Delete a post
 */
export async function removePost(req, res) {
  try {
    const { id } = req.params;
    await deletePost(id);

    res.json({
      success: true,
      message: 'Post deleted successfully',
    });
  } catch (error) {
    console.error('❌ Error deleting post:', error.message);
    res.status(500).json({ error: 'Failed to delete post' });
  }
}
