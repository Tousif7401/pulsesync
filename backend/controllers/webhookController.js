import { isImportantCommit } from '../utils/keywords.js';
import { generateContent } from '../services/geminiService.js';
import { savePost } from '../services/postService.js';

/**
 * Handle GitHub webhook push events
 * Detects important commits and generates social media content
 */
export async function handleWebhook(req, res) {
  try {
    const payload = req.body;

    // Verify this is a push event
    if (!payload.commits || !Array.isArray(payload.commits)) {
      return res.status(200).json({ message: 'No commits to process' });
    }

    // Extract repository info
    const repository = payload.repository?.full_name || 'unknown';
    const repositoryUrl = payload.repository?.html_url || '';

    // Process each commit
    const results = [];
    for (const commit of payload.commits) {
      const commitMessage = commit.message;
      const commitId = commit.id;
      const commitUrl = commit.url || `${repositoryUrl}/commit/${commitId}`;

      // Skip if not an important commit
      if (!isImportantCommit(commitMessage)) {
        console.log(`⏭️  Skipping: "${commitMessage.substring(0, 50)}..."`);
        continue;
      }

      console.log(`🎯 Processing: "${commitMessage.substring(0, 50)}..."`);

      // Generate content using Gemini
      const content = await generateContent(commitMessage, {
        repository,
        commitId,
      });

      // Save to database
      const savedPost = await savePost({
        commitMessage,
        commitId,
        commitUrl,
        authorName: commit.author?.name || commit.author?.username,
        authorEmail: commit.author?.email,
        repository,
        content,
      });

      console.log(`✅ Post generated and saved: ${savedPost.id}`);
      results.push({
        commitId: savedPost.id,
        message: commitMessage,
        generated: true,
      });
    }

    return res.status(200).json({
      message: 'Webhook processed',
      processed: results.length,
      results,
    });
  } catch (error) {
    console.error('❌ Webhook error:', error.message);
    return res.status(500).json({ error: 'Failed to process webhook' });
  }
}

/**
 * Health check for webhook endpoint
 */
export function webhookHealth(req, res) {
  res.json({ status: 'ok', endpoint: '/webhook/github' });
}
