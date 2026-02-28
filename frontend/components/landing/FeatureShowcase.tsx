'use client';

import { motion } from 'framer-motion';
import { BarChart3, Zap, Shield, Globe, Database, Code2, Activity, Sparkles, Lock, Share2, Clock, GitBranch } from 'lucide-react';
import { useEffect, useState } from 'react';

// Analytics Animation Component
const AnalyticsDemo = () => {
  const [stats, setStats] = useState({ engagement: 0, growth: 0, reach: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        engagement: Math.random() * 10 + 2,
        growth: Math.random() * 300 + 100,
        reach: Math.random() * 5000 + 2000
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0a0a0a] rounded-2xl border border-white/10 p-6 h-[360px]">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="w-5 h-5 text-[#5235ef]" />
        <span className="text-white font-medium">Live Analytics</span>
      </div>
      <div className="space-y-4">
        <motion.div
          key={stats.engagement}
          initial={{ width: 0 }}
          animate={{ width: `${stats.engagement * 8}%` }}
          transition={{ duration: 0.8 }}
          className="h-2 bg-white/5 rounded-full overflow-hidden"
        >
          <div className="h-full bg-gradient-to-r from-[#5235ef] to-[#8771ff] rounded-full" />
        </motion.div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Engagement</span>
          <motion.span
            key={stats.engagement}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#5235ef] font-medium"
          >
            {stats.engagement.toFixed(1)}%
          </motion.span>
        </div>

        <motion.div
          key={stats.growth}
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(stats.growth / 4, 100)}%` }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-2 bg-white/5 rounded-full overflow-hidden"
        >
          <div className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#ff8e8e] rounded-full" />
        </motion.div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Growth</span>
          <motion.span
            key={stats.growth}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#FF6B6B] font-medium"
          >
            +{stats.growth.toFixed(0)}%
          </motion.span>
        </div>

        <motion.div
          key={stats.reach}
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(stats.reach / 70, 100)}%` }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-2 bg-white/5 rounded-full overflow-hidden"
        >
          <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" />
        </motion.div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Reach</span>
          <motion.span
            key={stats.reach}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white font-medium"
          >
            {stats.reach.toFixed(0)}K
          </motion.span>
        </div>
      </div>
    </div>
  );
};

// Automation Animation Component
const AutomationDemo = () => {
  const [step, setStep] = useState(0);
  const steps = ['Commit pushed', 'AI analyzing', 'Content generated', 'Posted everywhere'];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % steps.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0a0a0a] rounded-2xl border border-white/10 p-6 h-[360px] flex flex-col justify-center">
      <div className="space-y-6">
        {steps.map((label, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0.3, x: -10 }}
            animate={{
              opacity: index === step ? 1 : 0.3,
              x: index === step ? 0 : -10,
              scale: index === step ? 1.02 : 1
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3"
          >
            <motion.div
              animate={{
                scale: index === step ? [1, 1.2, 1] : 1,
                backgroundColor: index === step ? '#5235ef' : 'rgba(255,255,255,0.05)'
              }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 rounded-lg flex items-center justify-center"
            >
              {index < step && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-5 h-5 rounded-full bg-green-400"
                />
              )}
              {index === step && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-5 h-5 text-white" />
                </motion.div>
              )}
              {index > step && (
                <div className="w-2 h-2 rounded-full bg-white/20" />
              )}
            </motion.div>
            <span className={index === step ? 'text-white font-medium' : 'text-gray-500'}>
              {label}
            </span>
            {index === step && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="ml-auto text-xs text-[#5235ef] font-medium"
              >
                Processing...
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Privacy Animation Component
const PrivacyDemo = () => {
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanning((s) => !s);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0a0a0a] rounded-2xl border border-white/10 p-6 h-[360px] flex flex-col items-center justify-center relative overflow-hidden">
      <motion.div
        animate={{
          y: scanning ? [-150, 150] : 150,
          opacity: [0, 1, 0]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"
      />
      <div className="relative z-10 flex flex-col items-center gap-6">
        <motion.div
          animate={{ scale: scanning ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className="w-24 h-24 rounded-2xl bg-gradient-to-br from-green-400/20 to-emerald-500/20 border border-green-400/30 flex items-center justify-center"
        >
          <Lock className="w-12 h-12 text-white" />
        </motion.div>
        <div className="text-center">
          <div className="text-white font-medium mb-2">Your Code</div>
          <div className="flex items-center gap-2 text-white text-sm">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-400"
            />
            <span>100% Private</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
            Only metadata accessed
          </div>
        </div>
      </div>
    </div>
  );
};

// Multi-Platform Animation Component
const MultiPlatformDemo = () => {
  const [posting, setPosting] = useState(false);
  const [posted, setPosted] = useState<string[]>([]);

  const platforms = [
    { id: 'linkedin', name: 'LinkedIn', icon: 'in', color: 'from-blue-400 to-blue-600' },
    { id: 'x', name: 'X', icon: '𝕏', color: 'from-gray-400 to-gray-600' },
    { id: 'instagram', name: 'Instagram', icon: 'ig', color: 'from-pink-400 to-purple-600' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosted([]);
      setPosting(true);
      platforms.forEach((p, i) => {
        setTimeout(() => {
          setPosted((prev) => [...prev, p.id]);
        }, i * 400 + 300);
      });
      setTimeout(() => setPosting(false), 2000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0a0a0a] rounded-2xl border border-white/10 p-6 h-[360px] flex flex-col justify-center">
      <div className="mb-6 text-center">
        <motion.div
          animate={{ y: posting ? [0, -10, 0] : 0 }}
          transition={{ duration: 0.5, repeat: posting ? Infinity : 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5235ef]/10 border border-[#5235ef]/30"
        >
          <Zap className="w-4 h-4 text-[#5235ef]" />
          <span className="text-[#5235ef] text-sm font-medium">
            {posting ? 'Posting to all platforms...' : 'Content ready'}
          </span>
        </motion.div>
      </div>
      <div className="flex justify-center gap-6">
        {platforms.map((platform) => (
          <motion.div
            key={platform.id}
            animate={{
              scale: posted.includes(platform.id) ? [1, 1.1, 1] : 1,
              opacity: posted.includes(platform.id) ? 1 : 0.4
            }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-2"
          >
            <motion.div
              className={`w-16 h-16 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center`}
              animate={posted.includes(platform.id) ? {
                boxShadow: ['0 0 0 rgba(255,255,255,0)', '0 0 20px rgba(123,97,255,0.5)', '0 0 0 rgba(255,255,255,0)']
              } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white text-xl font-bold">{platform.icon}</span>
            </motion.div>
            <span className="text-xs text-gray-500">{platform.name}</span>
            {posted.includes(platform.id) && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center"
              >
                <div className="w-2 h-2 bg-white rounded-full" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// History Animation Component
const HistoryDemo = () => {
  const [selectedPost, setSelectedPost] = useState(0);
  const posts = [
    { title: 'React hooks tutorial', engagement: '4.2K', status: 'high' },
    { title: 'TypeScript best practices', engagement: '3.8K', status: 'medium' },
    { title: 'Docker container guide', engagement: '5.1K', status: 'high' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedPost((s) => (s + 1) % posts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0a0a0a] rounded-2xl border border-white/10 p-6 h-[360px]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Database className="w-5 h-5 text-[#5235ef]" />
          <span className="text-white font-medium">Content Library</span>
        </div>
        <span className="text-xs text-gray-500">{posts.length} posts archived</span>
      </div>
      <div className="space-y-2 mb-4">
        {posts.map((post, index) => (
          <motion.div
            key={post.title}
            animate={{
              x: index === selectedPost ? 10 : 0,
              backgroundColor: index === selectedPost ? 'rgba(123, 97, 255, 0.1)' : 'rgba(255,255,255,0.02)'
            }}
            className="p-3 rounded-lg border border-white/5 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className={`text-sm ${index === selectedPost ? 'text-white' : 'text-gray-500'}`}>
                {post.title}
              </span>
              <span className={`text-xs ${post.status === 'high' ? 'text-white' : 'text-white'}`}>
                {post.engagement}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        key={selectedPost}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-4 rounded-xl bg-gradient-to-r from-[#5235ef]/10 to-[#FF6B6B]/10 border border-white/10"
      >
        <div className="flex items-center gap-2 mb-2">
          <Clock className="w-4 h-4 text-[#5235ef]" />
          <span className="text-xs text-gray-400">Reuse this content</span>
        </div>
        <button className="w-full py-2 rounded-lg bg-[#5235ef] text-white text-sm font-medium">
          Repost to all platforms
        </button>
      </motion.div>
    </div>
  );
};

// GitHub Animation Component
const GitHubDemo = () => {
  const [connected, setConnected] = useState(false);
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setConnected((c) => !c);
      setSyncing(true);
      setTimeout(() => setSyncing(false), 1500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0a0a0a] rounded-2xl border border-white/10 p-6 h-[360px] flex flex-col justify-center">
      <div className="flex flex-col items-center gap-6">
        <motion.div
          animate={{ rotate: syncing ? 360 : 0 }}
          transition={{ duration: 1, ease: "linear" }}
          className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center"
        >
          <GitBranch className="w-10 h-10 text-white" />
        </motion.div>
        <div className="text-center">
          <div className="text-white font-medium mb-2">GitHub Connected</div>
          <div className={`flex items-center gap-2 text-sm ${connected ? 'text-white' : 'text-white'}`}>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-current"
            />
            <span>{connected ? 'Listening for commits' : 'Connecting...'}</span>
          </div>
        </div>
        {connected && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 text-xs text-gray-500"
          >
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span>Webhook active</span>
            </div>
            <div className="px-2 py-1 rounded bg-white/5">main branch</div>
          </motion.div>
        )}
        {syncing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-[#5235ef]"
          >
            Syncing...
          </motion.div>
        )}
      </div>
    </div>
  );
};

const features = [
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Track your content performance across all platforms with detailed insights and metrics. Monitor engagement rates, reach, impressions, and growth patterns in real-time.',
    detailContent: 'Our analytics dashboard helps you understand what content resonates with your audience, allowing you to refine your strategy and maximize impact. Visualize your growth with beautiful charts and actionable insights.',
    stats: ['4.2% Avg Engagement', '+127% Weekly Growth', '2.4K Posts Tracked'],
    demo: <AnalyticsDemo />,
    color: 'from-[#5235ef] to-[#8771ff]'
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Instant Generation',
    description: 'AI-powered content creation in seconds after every commit. Push your code and watch DevSync AI instantly transform your commits into engaging social media posts.',
    detailContent: 'No manual writing, no copy-pasting, no delays. Just seamless automation that keeps your presence active while you focus on coding. The AI understands your technical work and translates it into compelling narratives.',
    stats: ['< 3s Generation', '10K+ Posts Created', '8hrs/wk Saved'],
    demo: <AutomationDemo />,
    color: 'from-[#FF6B6B] to-[#ff8e8e]'
  },
  {
    id: 'privacy',
    icon: Shield,
    title: 'Privacy First',
    description: 'Your code stays in your repo. We only read commit metadata. Your intellectual property remains completely private and secure.',
    detailContent: 'DevSync AI only accesses commit messages, branch names, and PR descriptions—never your actual source code. Your proprietary logic and implementation details are never exposed or stored.',
    stats: ['Zero Code Access', 'AES-256 Encryption', 'SOC2 Ready'],
    demo: <PrivacyDemo />,
    color: 'from-green-400 to-emerald-500'
  },
  {
    id: 'multiplatform',
    icon: Globe,
    title: 'Multi-Platform',
    description: 'Post to LinkedIn, X, and Instagram simultaneously. Each platform receives optimized content tailored to its unique format and audience.',
    detailContent: 'Maintain consistent presence across all major social platforms with a single push. Technical depth for LinkedIn, brevity for X, visuals for Instagram—all automatically formatted.',
    stats: ['3+ Platforms', '3.5x Reach Multiplier', 'Instant Sync'],
    demo: <MultiPlatformDemo />,
    color: 'from-blue-400 to-indigo-500'
  },
  {
    id: 'history',
    icon: Database,
    title: 'Smart History',
    description: 'Reuse and refine your best-performing content effortlessly. Every generated post is saved and categorized for easy access.',
    detailContent: 'Search, filter, and reuse your top-performing content. A/B test variations and learn what drives engagement. Build a repository of your best moments that can be repurposed for maximum impact.',
    stats: ['Unlimited Archive', '73% Reuse Rate', 'Built-in A/B Tests'],
    demo: <HistoryDemo />,
    color: 'from-purple-400 to-violet-500'
  },
  {
    id: 'github',
    icon: Code2,
    title: 'GitHub Native',
    description: 'Seamless integration with your existing development workflow. Connect your repository in one click via GitHub OAuth.',
    detailContent: 'Configure branch targeting, commit message patterns, and approval workflows. DevSync AI becomes part of your CI/CD pipeline—content generation happens automatically as part of your existing process.',
    stats: ['< 2min Setup', 'Unlimited Repos', 'Instant Webhook'],
    demo: <GitHubDemo />,
    color: 'from-orange-400 to-amber-500'
  },
];

export { AnalyticsDemo, AutomationDemo, PrivacyDemo, MultiPlatformDemo, HistoryDemo, GitHubDemo };

export default function FeatureShowcase() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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

        {/* Feature Sections with Alternating Layout */}
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={feature.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ margin: '-100px' }}
              transition={{ delay: index * 0.1 }}
              className={`mb-32 last:mb-0`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                {/* Content Side */}
                <div className={isEven ? 'order-1' : 'order-2 lg:order-1'}>
                  <motion.div
                    initial={{ x: isEven ? -30 : 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2 }}
                    className="space-y-8"
                  >
                    {/* Header with inline icon */}
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white">{feature.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Detail content */}
                    <p className="text-gray-400 leading-relaxed">
                      {feature.detailContent}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-3">
                      {feature.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="bg-white/[0.05] rounded-lg border border-white/10 px-4 py-2"
                        >
                          <div className={`text-sm font-semibold bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`}>
                            {stat}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Demo/Animation Side */}
                <div className={isEven ? 'order-2' : 'order-1 lg:order-2'}>
                  <motion.div
                    initial={{ x: isEven ? 30 : -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3 }}
                  >
                    {feature.demo}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
