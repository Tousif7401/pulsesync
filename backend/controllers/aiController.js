import { generateContent } from '../services/geminiService.js';

/**
 * Generate social media post from a free-form prompt
 */
export async function generateFromPrompt(req, res) {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    // Use existing gemini service to generate content
    // The prompt can be a commit message or any text
    const content = await generateContent(prompt, {
      source: 'ai-input',
    });

    // Return the generated content
    // For the AI input feature, we'll return a combined format
    res.json({
      post: formatPostForDisplay(content),
      platforms: {
        linkedin: content.linkedin,
        twitter: content.twitter,
        instagram: content.instagram,
      },
      hashtags: content.hashtags,
    });
  } catch (error) {
    console.error('AI Generation Error:', error);
    res.status(500).json({
      error: 'Failed to generate content',
      message: error.message,
    });
  }
}

/**
 * Format generated content for display in the UI
 */
function formatPostForDisplay(content) {
  // Return Twitter thread as default for the quick preview
  return content.twitter || content.linkedin || prompt;
}
