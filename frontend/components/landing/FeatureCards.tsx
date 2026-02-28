'use client';

import { motion, AnimatePresence } from 'framer-motion';
import CardSwap, { Card } from '@/components/ui/CardSwap';
import Safari_01 from '@/components/ui/safari-01';
import { BarChart3, Zap, Shield, Globe, Database, Code2, X } from 'lucide-react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { AnalyticsDemo, AutomationDemo, PrivacyDemo, MultiPlatformDemo, HistoryDemo, GitHubDemo } from '@/components/landing/FeatureShowcase';

const features = [
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Track engagement, reach, and growth across all platforms with detailed insights.',
    color: 'from-[#5235ef] to-[#8771ff]',
    stat: '4.2% Engagement',
    detailTitle: 'Data-Driven Insights',
    demo: AnalyticsDemo,
    detailContent: 'Monitor engagement rates, reach, impressions, and growth patterns in real-time. Our analytics dashboard helps you understand what content resonates with your audience, allowing you to refine your strategy and maximize impact. Visualize your growth with beautiful charts and actionable insights.',
    stats: [
      { label: 'Avg. Engagement', value: '4.2%' },
      { label: 'Weekly Growth', value: '+127%' },
      { label: 'Posts Tracked', value: '2.4K' },
    ]
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Instant Generation',
    description: 'AI-powered content creation in seconds after every commit.',
    color: 'from-[#FF6B6B] to-[#ff8e8e]',
    stat: '< 3s Generation',
    detailTitle: 'Zero-Wait Workflow',
    demo: AutomationDemo,
    detailContent: 'Push your code and watch DevSync AI instantly transform your commits into engaging social media posts. No manual writing, no copy-pasting, no delays. Just seamless automation that keeps your presence active while you focus on coding. The AI understands your technical work and translates it into compelling narratives.',
    stats: [
      { label: 'Generation Time', value: '< 3s' },
      { label: 'Posts Created', value: '10K+' },
      { label: 'Time Saved', value: '8hrs/wk' },
    ]
  },
  {
    id: 'privacy',
    icon: Shield,
    title: 'Privacy First',
    description: 'Your code stays private. We only read commit metadata.',
    color: 'from-green-400 to-emerald-500',
    stat: 'Zero Code Access',
    detailTitle: 'Enterprise Security',
    demo: PrivacyDemo,
    detailContent: 'Your code stays in your repo. We only read commit metadata. Your intellectual property remains completely private and secure. DevSync AI only accesses commit messages, branch names, and PR descriptions—never your actual source code. Your proprietary logic and implementation details are never exposed or stored.',
    stats: [
      { label: 'Code Access', value: 'Zero' },
      { label: 'Encryption', value: 'AES-256' },
      { label: 'SOC2', value: 'Ready' },
    ]
  },
  {
    id: 'multiplatform',
    icon: Globe,
    title: 'Multi-Platform',
    description: 'Post to LinkedIn, X, and Instagram simultaneously.',
    color: 'from-blue-400 to-indigo-500',
    stat: '3+ Platforms',
    detailTitle: 'Everywhere at Once',
    demo: MultiPlatformDemo,
    detailContent: 'Post to LinkedIn, X, and Instagram simultaneously. Each platform receives optimized content tailored to its unique format and audience. Maintain consistent presence across all major social platforms with a single push. Technical depth for LinkedIn, brevity for X, visuals for Instagram—all automatically formatted.',
    stats: [
      { label: 'Platforms', value: '3+' },
      { label: 'Reach Multiplier', value: '3.5x' },
      { label: 'Sync Time', value: 'Instant' },
    ]
  },
  {
    id: 'history',
    icon: Database,
    title: 'Smart History',
    description: 'Reuse and refine your best-performing content effortlessly.',
    color: 'from-purple-400 to-violet-500',
    stat: 'Unlimited Archive',
    detailTitle: 'Content Library',
    demo: HistoryDemo,
    detailContent: 'Reuse and refine your best-performing content effortlessly. Every generated post is saved and categorized for easy access. Search, filter, and reuse your top-performing content. A/B test variations and learn what drives engagement. Build a repository of your best moments that can be repurposed for maximum impact.',
    stats: [
      { label: 'Posts Archived', value: 'Unlimited' },
      { label: 'Reuse Rate', value: '73%' },
      { label: 'A/B Tests', value: 'Built-in' },
    ]
  },
  {
    id: 'github',
    icon: Code2,
    title: 'GitHub Native',
    description: 'Seamless integration with your existing development workflow.',
    color: 'from-orange-400 to-amber-500',
    stat: '< 2min Setup',
    detailTitle: 'Developer-First Design',
    demo: GitHubDemo,
    detailContent: 'Seamless integration with your existing development workflow. Connect your repository in one click via GitHub OAuth. Configure branch targeting, commit message patterns, and approval workflows. DevSync AI becomes part of your CI/CD pipeline—content generation happens automatically as part of your existing process.',
    stats: [
      { label: 'Setup Time', value: '< 2min' },
      { label: 'Repos', value: 'Unlimited' },
      { label: 'Webhook', value: 'Instant' },
    ]
  },
];

export default function FeatureCards() {
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);

  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to turn your GitHub activity into a thriving personal brand
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
                Everything You Need to Grow Your Brand
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Six powerful features designed to transform your GitHub activity into compelling content that resonates with your audience.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed">
                From real-time analytics that track your engagement to instant AI-powered content generation, DevSync AI handles it all. Your code stays private while your brand grows.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Connect once, post everywhere. LinkedIn, X, and Instagram—all synchronized automatically with platform-optimized content.
              </p>
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5235ef]/10 border border-[#5235ef]/30">
                <span className="text-[#5235ef] text-sm font-medium">Click cards for details</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - CardSwap Animation inside Browser */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="flex justify-center items-center"
          >
            <Safari_01>
              <div className="mt-16">
                <CardSwap
                  width={480}
                  height={320}
                  cardDistance={60}
                  verticalDistance={65}
                  delay={2000}
                  pauseOnHover={true}
                  skewAmount={3}
                >
                  {features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <Card key={feature.id} customClass="p-5 flex flex-col justify-between cursor-pointer hover:scale-105 transition-transform group relative" onClick={() => setSelectedFeature(feature)}>
                        <div>
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-3`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2 font-heading">{feature.title}</h3>
                          <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
                        </div>
                        <div className={`text-xs font-semibold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                          {feature.stat}
                        </div>
                        {/* Tooltip */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          <div className="bg-white text-black text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
                            Click me!
                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-white rotate-45"></div>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </CardSwap>
              </div>
            </Safari_01>
          </motion.div>
        </div>
      </div>

      {/* Popup Dialog - Rendered using Portal to avoid stacking context issues */}
      {typeof window !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedFeature && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedFeature(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-[#111111] border border-white/10 rounded-3xl p-8 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedFeature.color} flex items-center justify-center flex-shrink-0`}>
                    <selectedFeature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 font-heading">{selectedFeature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{selectedFeature.description}</p>
                  </div>
                </div>

                {/* Detail Title */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">{selectedFeature.detailTitle}</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedFeature.detailContent}</p>
                </div>

                {/* Demo Animation */}
                <div className="mb-6">
                  {selectedFeature.demo && <selectedFeature.demo />}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  {selectedFeature.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${selectedFeature.color} bg-clip-text text-transparent mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
