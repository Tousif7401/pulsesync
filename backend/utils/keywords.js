/**
 * Keywords that trigger content generation
 * When a commit message contains these, we consider it important enough
 * to generate social media content
 */
export const KEYWORDS = [
  // Feature releases
  'feature',
  'release',
  'launch',
  'ship',

  // Important updates
  'update',
  'upgrade',
  'improve',
  'enhance',

  // Bug fixes (major ones)
  'fix',
  'patch',
  'hotfix',

  // New functionality
  'add',
  'create',
  'implement',
  'integrate',

  // Breaking changes
  'breaking',
  'major',
  'migrate',
];

/**
 * Check if commit message contains any important keywords
 * @param {string} message - The commit message
 * @returns {boolean} - True if message contains important keywords
 */
export function isImportantCommit(message) {
  if (!message) return false;

  const lowerMessage = message.toLowerCase();
  return KEYWORDS.some(keyword => lowerMessage.includes(keyword));
}

/**
 * Extract the type of commit from the message
 * @param {string} message - The commit message
 * @returns {string} - The commit type (feature, fix, etc.)
 */
export function getCommitType(message) {
  if (!message) return 'update';

  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes('feature') || lowerMessage.includes('add') || lowerMessage.includes('create')) {
    return 'feature';
  }
  if (lowerMessage.includes('fix') || lowerMessage.includes('patch') || lowerMessage.includes('hotfix')) {
    return 'fix';
  }
  if (lowerMessage.includes('release') || lowerMessage.includes('launch') || lowerMessage.includes('ship')) {
    return 'release';
  }
  if (lowerMessage.includes('breaking') || lowerMessage.includes('major')) {
    return 'breaking';
  }
  if (lowerMessage.includes('improve') || lowerMessage.includes('enhance') || lowerMessage.includes('upgrade')) {
    return 'improvement';
  }

  return 'update';
}
