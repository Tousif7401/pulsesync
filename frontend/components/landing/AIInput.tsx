'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const EXAMPLE_QUESTIONS = [
  'How do I connect my GitHub repository?',
  'What social platforms can I post to?',
  'Is my private code secure?',
];

export default function AIInput() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const predefinedAnswers: Record<string, string> = {
    'How do I connect my GitHub repository?': 'Connecting your GitHub repository is simple. After signing up, you\'ll be prompted to authorize your GitHub account. Select the repositories you want to track, and we\'ll set up webhooks automatically. Every push to those repos will trigger content generation.',
    'What social platforms can I post to?': 'DevSync AI currently supports LinkedIn, Twitter/X, and Instagram. We\'re actively adding more platforms including Mastodon, Bluesky, and Threads based on user demand.',
    'Is my private code secure?': 'Your code privacy is our top priority. We only read commit metadata (messages, author, branch names) - never your actual source code. Private repositories remain private, and you have full control over what gets shared.',
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const answer = predefinedAnswers[input] ||
        `I understand you're asking about "${input}". DevSync AI helps developers automatically generate and share social media content from their GitHub activity. Would you like me to explain how our GitHub integration works, or would you prefer to see our pricing plans?`;

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: answer,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className="w-full max-w-4xl mx-auto"
    >
      {/* AI Assistant Container - Feeta AI Style */}
      <div className="relative">
        {/* Subtle glow */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-[24px] blur-xl" />

        <div className="relative bg-[#0a0a0a] rounded-[24px] border border-white/5 overflow-hidden">
          {/* Header - Minimal and Clean */}
          <div className="px-8 py-6 border-b border-white/5">
            <div className="flex items-center gap-4">
              {/* AI Avatar with subtle pulse */}
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-30"
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>

              <div className="flex-1 text-left">
                <h3 className="text-white font-semibold text-lg">Ask anything about DevSync</h3>
                <p className="text-gray-500 text-sm">Context-aware answers about your workflow</p>
              </div>

              {/* Status indicator */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-medium">Online</span>
              </div>
            </div>
          </div>

          {/* Messages Area - Clean and Spacious */}
          <div className="h-[320px] overflow-y-auto px-8 py-6 space-y-6">
            <AnimatePresence mode="wait">
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/5 flex items-center justify-center mb-6"
                  >
                    <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </motion.div>
                  <h4 className="text-white text-xl font-semibold mb-2">Talk to DevSync AI</h4>
                  <p className="text-gray-500 max-w-md mb-8">
                    I have real-time knowledge of our platform. Ask me about GitHub integration, social platforms, pricing, or anything else.
                  </p>

                  {/* Example questions as cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-2xl">
                    {EXAMPLE_QUESTIONS.map((question, index) => (
                      <motion.button
                        key={question}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        onClick={() => setInput(question)}
                        className="px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-left transition-all group"
                      >
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                          {question}
                        </p>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl rounded-tr-md px-5 py-3.5'
                      : 'bg-white/5 rounded-2xl rounded-tl-md px-5 py-3.5 border border-white/5'
                  }`}>
                    <p className={`text-[15px] leading-relaxed ${
                      message.role === 'user' ? 'text-white' : 'text-gray-200'
                    }`}>
                      {message.content}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/5 rounded-2xl rounded-tl-md px-5 py-4 border border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input Area - Minimal and Elegant */}
          <div className="px-8 pb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-3 bg-[#111] rounded-2xl border border-white/10 focus-within:border-purple-500/30 transition-colors">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask anything about DevSync..."
                  className="flex-1 px-5 py-4 bg-transparent text-white placeholder-gray-500 rounded-2xl focus:outline-none text-[15px]"
                  disabled={isLoading}
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className={`
                    m-1.5 p-3 rounded-xl transition-all
                    ${isLoading || !input.trim()
                      ? 'bg-white/5 text-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                    }
                  `}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Helper text */}
            <p className="text-center text-gray-600 text-xs mt-3">
              Powered by AI • Responses may vary
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
