'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AIInput from '@/components/landing/AIInput';
import Antigravity from '@/components/landing/Antigravity';
import CommitProcessor from '@/components/landing/CommitProcessor';
import ContentOutputTypes from '@/components/landing/ContentOutputTypes';
import FeatureCards from '@/components/landing/FeatureCards';
import WorkflowSteps from '@/components/landing/WorkflowSteps';
import IntegrationsWithQuote from '@/components/landing/IntegrationsWithQuote';
import FeatureGrid from '@/components/landing/FeatureGrid';
import TargetAudience from '@/components/landing/TargetAudience';
import StackFeatureSection from '@/components/ui/stack-feature-section';
import Safari_01 from '@/components/ui/safari-01';
import ProceduralGroundBackground from '@/components/ui/procedural-ground-background';
import { ArrowRight, Check, Github, Linkedin, Instagram, Zap, Shield, Clock, TrendingUp } from 'lucide-react';

// X (Twitter) icon component
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Fade + Slide animation wrapper
const ScrollReveal = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Staggered animation for grids
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen overflow-hidden bg-darkBg"
      >
        {/* Navigation */}
        <nav className={`fixed left-0 right-0 z-50 flex items-center px-6 md:px-12 py-4 w-full transition-all duration-300 ${isScrolled ? 'top-0 bg-darkBg/90 backdrop-blur-xl border-b border-white/5' : 'top-0'}`}>
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <span className="text-xl font-bold text-white tracking-tight font-heading">
              DevSync AI
            </span>
          </motion.div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:flex items-center justify-center gap-10 flex-1"
          >
            {['Product', 'How it works', 'Pricing'].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 + index * 0.08, duration: 0.4 }}
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Request for Demo
            </motion.button>
          </motion.div>
        </nav>

        {/* Hero Section */}
        <section className="relative z-10 min-h-screen flex items-center justify-center px-8 pt-24">
          {/* WebGL Procedural Background - FOR TESTING: Can be removed if not liked */}
          <ProceduralGroundBackground />

          <div className="absolute inset-0 overflow-hidden" style={{ pointerEvents: 'none', backgroundColor: '#101011' }}>
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <Antigravity
                count={210}
                magnetRadius={10}
                ringRadius={14}
                waveSpeed={0.10}
                waveAmplitude={0.60}
                particleSize={0.50}
                lerpSpeed={0.03}
                color="#7B61FF"
                autoAnimate={true}
                particleVariance={0.10}
                rotationSpeed={0}
                depthFactor={0.50}
                pulseSpeed={0.50}
                particleShape="capsule"
                fieldStrength={30}
              />
            </div>
          </div>

          <div className="max-w-6xl mx-auto relative">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-draftrPurple/10 border border-draftrPurple/20 mb-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  className="w-2 h-2 rounded-full bg-draftrPurple animate-pulse"
                />
                <span className="text-draftrPurple text-sm font-medium">Now in Public Beta</span>
              </motion.div>

              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-heading"
              >
                Turn Your GitHub <span className="font-serif italic text-white">commits</span> Into<br />
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.85, duration: 0.6 }}
                  className="text-white"
                >
                  Social Stories That Matter
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.95, duration: 0.6 }}
                className="text-xl text-white max-w-2xl mx-auto mb-12 leading-relaxed"
              >
                Stop choosing between coding and building your brand. Every commit becomes content—automatically.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="flex items-center justify-center gap-4"
              >
                <motion.button
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-black rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-lg shadow-white/10"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 text-white font-medium flex items-center gap-2 hover:text-draftrPurple transition-colors border border-gray-400/30 rounded-full hover:bg-white/5"
                >
                  Book a Demo
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Integrations Section - Stack Feature Animation */}
        <StackFeatureSection />

        {/* The ultimate toolkit section */}
        <section className="relative z-10 py-24 px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                The ultimate toolkit for developers & teams
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Everything you need to create, share, and grow your personal brand—all in a single, easy-to-use platform.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Workflow Steps - 01, 02, 03 */}
        <WorkflowSteps />

        {/* Integrations with CEO Quote */}
        <IntegrationsWithQuote />

        {/* Feature Grid - Power up your workflow */}
        <FeatureGrid />

        {/* Core Positioning - "What DevSync AI Delivers" */}
        <section className="relative z-10 py-32 px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                What DevSync AI Delivers
              </h2>
              <p className="text-2xl text-gray-300 mb-4 font-heading">
                The AI Content Engine for Developers
              </p>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Stop managing content creation manually. DevSync AI bridges the gap between your code and your audience—turning every commit into an opportunity to build your personal brand, automatically.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              <div className="p-6">
                <div className="text-5xl font-bold text-white mb-2 font-heading">10x</div>
                <p className="text-gray-400">Faster content creation</p>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold text-white mb-2 font-heading">Zero</div>
                <p className="text-gray-400">Manual effort required</p>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold text-white mb-2 font-heading">100%</div>
                <p className="text-gray-400">Focus on coding</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Cards - CardSwap Animation */}
        <FeatureCards />

        {/* Content Output Types - Display Cards */}
        <ContentOutputTypes />

        {/* Watch DevSync AI in Action - Live Demo */}
        <section className="relative z-10 py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
                Watch DevSync AI in Action
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                See how your commits are transformed into engaging social content—automatically.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <Safari_01 contentPadding="pt-8" minHeight="min-h-[650px]" minWidth="min-w-[1000px]">
                <CommitProcessor />
              </Safari_01>
            </motion.div>
          </div>
        </section>

        {/* Target Audience - Perfect for every workflow */}
        <TargetAudience />

        {/* Feature Deep-Dive - Contextual Understanding */}
        <section className="relative z-10 py-32 px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                Code-Aware Content Generation
              </h2>
              <p className="text-2xl text-white mb-4 font-heading">
                Your commits have context. We capture it.
              </p>
              <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                DevSync AI understands what you're building. Every commit message, branch name, and PR description helps us tell your story—no generic templates, no context lost.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Github className="w-6 h-6" />,
                  title: 'Commit Intelligence',
                  description: 'Analyzes your commit messages to understand the technical context and generate relevant social content.',
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: 'Instant Generation',
                  description: 'Posts are ready for review within seconds of your push. No waiting, no delays.',
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: 'Privacy Protected',
                  description: 'We only read commit metadata. Your actual code never leaves your repository.',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 rounded-2xl p-8 border border-white/5 hover:border-draftrPurple/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-draftrPurple flex items-center justify-center mb-6 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-heading">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits/Results Section - Pain-Point Focused */}
        <section className="relative z-10 py-32 px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                DevSync AI Results
              </h2>
              <p className="text-xl text-gray-400">
                Transform your development workflow into a content engine
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Consistent Presence Without the Hustle',
                  description: 'Build thought leadership while you code. Your audience sees regular updates about your work, and you never spend time drafting posts.',
                  icon: <Clock className="w-5 h-5" />,
                },
                {
                  title: 'Content That Actually Resonates',
                  description: 'No generic tech quotes. Share real progress, real challenges, real wins. Your followers get authentic insights into your development journey.',
                  icon: <TrendingUp className="w-5 h-5" />,
                },
                {
                  title: 'Multiply Your Impact',
                  description: 'One push to GitHub becomes posts across LinkedIn, X, and Instagram. Reach your entire audience without extra effort.',
                  icon: <Zap className="w-5 h-5" />,
                },
                {
                  title: 'Stay In Control',
                  description: 'Review every post before it goes live. Edit, customize, or schedule—your brand voice, always maintained.',
                  icon: <Shield className="w-5 h-5" />,
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 rounded-2xl p-8 border border-white/5 hover:border-draftrPurple/50 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#7B61FF]/20 flex items-center justify-center shrink-0">
                      <span className="text-[#7B61FF]">{benefit.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-draftrPurple font-heading">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative z-10 py-32 px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
                Got Questions?
              </h2>
              <p className="text-xl text-gray-400">
                Quick answers about DevSync AI
              </p>
            </motion.div>

            <div className="space-y-3">
              {[
                {
                  q: 'Does DevSync AI read my actual code?',
                  a: 'No. We only read commit metadata—messages, branch names, and PR descriptions. Your code stays private. Private repositories remain completely private.',
                },
                {
                  q: 'What platforms can I post to?',
                  a: 'Currently we support LinkedIn, X (Twitter), and Instagram. More platforms are coming soon based on user feedback.',
                },
                {
                  q: 'Can I edit the generated posts?',
                  a: 'Absolutely. Every post is fully customizable before publishing. You can also set up custom prompts to match your brand voice.',
                },
                {
                  q: 'How does the AI know what to write?',
                  a: 'We analyze your commit messages and context to generate relevant, engaging content. The more you push, the better it gets at understanding your style.',
                },
                {
                  q: 'What if I don\'t want to post every commit?',
                  a: 'You have full control. Set filters by repository, branch, or even specific commit patterns. Only generate posts for what matters.',
                },
              ].map((faq, index) => (
                <motion.details
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-[#111111] rounded-2xl border border-white/5 hover:border-draftrPurple/30 transition-all"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold text-white pr-4 font-heading">{faq.q}</h3>
                    <svg className="w-5 h-5 text-gray-300 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                  </div>
                </motion.details>
              ))}
            </div>

            {/* AI Input */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12"
            >
              <AIInput />
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative z-10 py-32 px-8 bg-transparent">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading">
              Your commits have stories.<br />Let's tell them.
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join thousands of developers building their brand while they code. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-black rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="px-8 py-4 text-white font-medium flex items-center gap-2 hover:text-gray-300 transition-colors"
              >
                <Github className="w-5 h-5" />
                Connect GitHub
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* Pricing */}
        <section className="relative z-10 py-32 px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
                Simple Pricing
              </h2>
              <p className="text-xl text-gray-400">
                Start free, scale when ready
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#111111] rounded-3xl p-8 border border-white/5 hover:border-draftrPurple/30 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-2 font-heading">Free</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-draftrPurple">$0</span>
                  <span className="text-gray-300">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {['1 repository', '30 posts/month', 'Basic AI', 'Community support'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-400">
                      <Check className="w-5 h-5 text-green-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/15 transition-colors">
                  Request for Demo
                </button>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative bg-white/5 rounded-3xl p-8 border border-punchRed-500/30 hover:border-punchRed-500 transition-all"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-draftrPurple text-white text-xs font-semibold px-3 py-1 rounded-full">
                  POPULAR
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-heading">Pro</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-draftrPurple">$19</span>
                  <span className="text-gray-300">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {['Unlimited repos', 'Unlimited posts', 'Advanced AI', 'Custom prompts', 'Priority support'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-draftrPurple shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 bg-draftrPurple text-white rounded-xl font-medium hover:shadow-lg transition-all">
                  Start Free Trial
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 py-16 px-8 border-t border-white/5 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              {/* Brand */}
              <div className="md:col-span-1">
                <h3 className="text-xl font-bold text-white mb-4 font-heading">DevSync AI</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Turn your GitHub commits into engaging social content—automatically.
                </p>
              </div>

              {/* Product */}
              <div>
                <h4 className="text-white font-semibold mb-4">Product</h4>
                <ul className="space-y-3">
                  {['Features', 'Integrations', 'Pricing', 'Changelog'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-3">
                  {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-3">
                  {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
              <p className="text-gray-400 text-sm">
                © 2025 DevSync AI. All rights reserved.
              </p>
              <div className="flex items-center gap-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <XIcon className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </motion.main>
    </>
  );
}
