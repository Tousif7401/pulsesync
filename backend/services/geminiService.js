import { GoogleGenerativeAI } from '@google/generative-ai';
import { getCommitType } from '../utils/keywords.js';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Generate social media content from a commit message
 * @param {string} commitMessage - The git commit message
 * @param {object} metadata - Additional commit metadata
 * @returns {object} - Generated content for different platforms
 */
export async function generateContent(commitMessage, metadata = {}) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const commitType = getCommitType(commitMessage);

    const prompt = `You are a social media content expert. Convert this GitHub commit message into engaging social media posts.

Commit Message: "${commitMessage}"
Commit Type: ${commitType}

Generate posts in the following JSON format:
{
  "linkedin": "Professional post (2-3 paragraphs), highlight the value/benefit to users, not just technical details. End with a question to engage audience.",
  "twitter": "Casual thread format with 3-5 tweets. Use emoji. Each tweet should be under 280 characters.",
  "instagram": "Short caption with emoji, 1-2 sentences, focused on visual appeal and excitement.",
  "hashtags": ["hashtag1", "hashtag2", "hashtag3", "hashtag4", "hashtag5"]
}

Guidelines:
- Focus on USER BENEFIT, not technical implementation
- Use engaging language
- Make it sound exciting, not boring
- Avoid jargon unless necessary
- Include relevant emoji (but don't overuse)
- Hashtags should be relevant and trending

Respond ONLY with valid JSON, no markdown formatting.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Clean up the response (remove markdown code blocks if present)
    let cleanText = text.trim();
    if (cleanText.startsWith('```')) {
      cleanText = cleanText.replace(/```json\n?|\n?```/g, '');
    }

    // Parse JSON
    const generatedContent = JSON.parse(cleanText);

    return {
      linkedin: generatedContent.linkedin || '',
      twitter: generatedContent.twitter || '',
      instagram: generatedContent.instagram || '',
      hashtags: generatedContent.hashtags || [],
      commitType,
      generatedAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error('Gemini API Error:', error.message);

    // Fallback content if API fails
    return {
      linkedin: `🚀 Just shipped: ${commitMessage}`,
      twitter: `🚀 ${commitMessage}\n\n#GitHub #DevCommunity`,
      instagram: `🚀 New update! ${commitMessage}`,
      hashtags: ['#GitHub', '#DevLife', '#Coding', '#Tech', '#Developer'],
      commitType: 'update',
      generatedAt: new Date().toISOString(),
      error: error.message,
    };
  }
}

/**
 * Generate a simple post for a commit
 * @param {string} commitMessage - The git commit message
 * @returns {object} - Generated post
 */
export async function generateSimplePost(commitMessage) {
  const fullContent = await generateContent(commitMessage);
  return fullContent;
}
