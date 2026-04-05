import { getPosts, getPostById, deletePost, getStats, updatePost, publishPost, savePost } from '../services/postService.js';

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

/**
 * Create a new post
 */
export async function createPost(req, res) {
  try {
    const {
      commitMessage,
      commitId,
      commitUrl,
      authorName,
      authorEmail,
      repository,
      linkedinPost,
      twitterPost,
      instagramPost,
      hashtags,
    } = req.body;

    if (!commitMessage) {
      return res.status(400).json({ error: 'commitMessage is required' });
    }

    const post = await savePost({
      commitMessage,
      commitId,
      commitUrl,
      authorName,
      authorEmail,
      repository,
      content: {
        linkedin: linkedinPost,
        twitter: twitterPost,
        instagram: instagramPost,
        hashtags,
        commitType: 'manual',
      },
    });

    res.json({
      success: true,
      data: post,
    });
  } catch (error) {
    console.error('❌ Error creating post:', error.message);
    res.status(500).json({ error: 'Failed to create post' });
  }
}

/**
 * Update a post
 */
export async function updatePostById(req, res) {
  try {
    const { id } = req.params;
    const { linkedinPost, twitterPost, instagramPost, hashtags } = req.body;

    const post = await updatePost(id, {
      linkedinPost,
      twitterPost,
      instagramPost,
      hashtags,
    });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json({
      success: true,
      data: post,
    });
  } catch (error) {
    console.error('❌ Error updating post:', error.message);
    res.status(500).json({ error: 'Failed to update post' });
  }
}

/**
 * Publish a post to specified platforms
 */
export async function publishPostById(req, res) {
  try {
    const { id } = req.params;
    const { platforms } = req.body;

    if (!platforms || !Array.isArray(platforms)) {
      return res.status(400).json({ error: 'platforms array is required' });
    }

    const validPlatforms = ['linkedin', 'twitter', 'instagram'];
    const invalidPlatforms = platforms.filter(p => !validPlatforms.includes(p));

    if (invalidPlatforms.length > 0) {
      return res.status(400).json({
        error: `Invalid platforms: ${invalidPlatforms.join(', ')}. Valid platforms are: ${validPlatforms.join(', ')}`
      });
    }

    const post = await publishPost(id, platforms);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json({
      success: true,
      data: post,
      message: `Post published to ${platforms.join(', ')}`,
    });
  } catch (error) {
    console.error('❌ Error publishing post:', error.message);
    res.status(500).json({ error: 'Failed to publish post' });
  }
}
