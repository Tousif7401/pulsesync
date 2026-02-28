'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AIInput from '@/components/landing/AIInput';
import CommitProcessor from '@/components/landing/CommitProcessor';
import ContentOutputTypes from '@/components/landing/ContentOutputTypes';
import FeatureCards from '@/components/landing/FeatureCards';
import WorkflowSteps from '@/components/landing/WorkflowSteps';
import Safari_01 from '@/components/ui/safari-01';
import AnoAI from '@/components/ui/animated-shader-background';
import { Tiles } from '@/components/ui/tiles';
import { Navbar, NavBody, NavItems, MobileNav, NavbarLogo, NavbarButton, MobileNavHeader, MobileNavToggle, MobileNavMenu } from '@/components/ui/resizable-navbar';
import { Button } from '@/components/ui/neon-button';
import { ArrowRight, Check, Github, Linkedin, Zap, Shield, Clock, TrendingUp } from 'lucide-react';
import LogoLoop from '@/components/ui/LogoLoop';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';

// X (Twitter) icon component
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Vercel icon component
function VercelIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="white">
      <path d="M12 2L2 22h20L12 2z" />
    </svg>
  );
}

// Gemini icon component
function GeminiIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/GEMINI.webp"
      alt="Gemini"
      width={32}
      height={32}
      className={className}
    />
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Product', link: '#features' },
    { name: 'How it works', link: '#how-it-works' },
    { name: 'Pricing', link: '#pricing' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody className={isScrolled ? 'bg-darkBg/90 backdrop-blur-xl border-b border-white/5' : ''}>
            <NavItems items={navItems} />
            <NavbarLogo />
            <div className="flex items-center gap-4">
              <NavbarButton variant="secondary">Login</NavbarButton>
              <Button variant="solid" size="default" className="!py-3 !px-6 !text-base">Request for Demo</Button>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-gray-400 hover:text-white text-xl font-medium font-heading py-2 block"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex w-full flex-col gap-4 pt-4">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="secondary"
                  className="w-full"
                >
                  Login
                </NavbarButton>
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Request for Demo
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>

        {/* Hero Section */}
        <section className="relative z-10 min-h-screen flex items-center justify-center px-8 pt-24">
          {/* Animated Shader Background */}
          <div className="absolute inset-0 -z-10">
            <AnoAI />
          </div>

          {/* Tiles Grid Effect */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-30">
            <Tiles rows={50} cols={8} tileSize="md" />
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
                  className="w-2 h-2 rounded-full bg-white animate-pulse"
                />
                <span className="text-white text-sm font-medium">Now in Public Beta</span>
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
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="solid" size="lg" className="flex items-center gap-2">
                    Book a Demo
                    <ArrowRight className="w-4 h-4 -rotate-45" />
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="hollow" size="lg" className="flex items-center gap-2">
                    View Services
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="relative z-10 py-20 px-8">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-gray-400 text-lg mb-12">Integrated with your favorite platforms</p>
            <div className="flex justify-center">
              <LogoLoop
                logos={[
                  { node: <SocialIcon url="https://github.com" style={{ height: 40, width: 40 }} />, title: "GitHub" },
                  { node: <SocialIcon url="https://twitter.com" style={{ height: 40, width: 40 }} />, title: "X" },
                  { node: <SocialIcon url="https://linkedin.com" style={{ height: 40, width: 40 }} />, title: "LinkedIn" },
                  { node: <SocialIcon url="https://instagram.com" style={{ height: 40, width: 40 }} />, title: "Instagram" },
                  { node: <GeminiIcon className="w-10 h-10" />, title: "Gemini" },
                  { node: <VercelIcon className="w-10 h-10 text-white" />, title: "Vercel" },
                ]}
                speed={50}
                direction="left"
                logoHeight={44}
                gap={56}
                fadeOut={true}
                scaleOnHover={true}
                fadeOutColor="#ffffff"
              />
            </div>
          </div>
        </section>

        {/* Workflow Steps - 01, 02, 03 */}
        <WorkflowSteps />

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
              viewport={{ once: false }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                Watch DevSync AI in Action
              </h2>
              <p className="text-xl text-white max-w-2xl mx-auto">
                See how your commits are transformed into engaging social content—automatically.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <Safari_01 contentPadding="pt-8" minHeight="min-h-[655px]" minWidth="min-w-[1000px]">
                <CommitProcessor />
              </Safari_01>
            </motion.div>
          </div>
        </section>

        {/* Benefits/Results Section - Pain-Point Focused */}
        <section className="relative z-10 py-32 px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                DevSync AI Results
              </h2>
              <p className="text-xl text-white">
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
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl p-8 border border-white/5 hover:border-[#4c3bcf]/30 transition-all bg-gradient-to-br from-[#4c3bcf]/10 to-[#0a0a0a] shadow-[0_0_40px_rgba(76,59,207,0.1)]"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <span className="text-white">{benefit.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white font-heading">{benefit.title}</h3>
                  </div>
                  <p className="text-white leading-relaxed">{benefit.description}</p>
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
              viewport={{ once: false }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
                Got Questions?
              </h2>
              <p className="text-xl text-white">
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
                  viewport={{ once: false }}
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
                    <p className="text-white leading-relaxed">{faq.a}</p>
                  </div>
                </motion.details>
              ))}
            </div>

            {/* AI Input */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
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
            viewport={{ once: false }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading">
              Your commits have stories.<br />Let's tell them.
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join thousands of developers building their brand while they code. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="solid" size="lg" className="flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
              >
                <Button variant="ghost" size="lg" className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  Connect GitHub
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Pricing */}
        <section className="relative z-10 py-32 px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
                Simple Pricing
              </h2>
              <p className="text-xl text-white">
                Start free, scale when ready
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1 }}
                className="bg-[#111111] rounded-3xl p-8 border border-white/5 hover:border-draftrPurple/30 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-2 font-heading">Free</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-white">$0</span>
                  <span className="text-gray-300">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {['1 repository', '30 posts/month', 'Basic AI', 'Community support'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white">
                      <Check className="w-5 h-5 text-white shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full py-3 rounded-xl">Request for Demo</Button>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
                className="relative bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">
                  POPULAR
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-heading">Pro</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-white">$19</span>
                  <span className="text-gray-300">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {['Unlimited repos', 'Unlimited posts', 'Advanced AI', 'Custom prompts', 'Priority support'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white">
                      <Check className="w-5 h-5 text-white shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="solid" className="w-full py-3 rounded-xl">Start Free Trial</Button>
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
                <p className="text-white text-sm leading-relaxed">
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
