'use client';

import { motion } from 'framer-motion';
import { Github, Edit, Share2 } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Connect Your GitHub',
    subtitle: 'One-click authorization',
    description: 'Create a new project or import your repository with just one click. Set up your workspace effortlessly.',
    icon: <Github className="w-6 h-6" />,
    tags: ['OAuth 2.0', 'Webhooks', 'Private repos'],
  },
  {
    number: '02',
    title: 'Code as Usual',
    subtitle: 'Push commits, open PRs',
    description: 'Push commits, open PRs, merge branches. Every action becomes content fodder—no extra work required.',
    icon: <Edit className="w-6 h-6" />,
    tags: ['Auto-detect', 'Smart parsing', 'Context aware'],
  },
  {
    number: '03',
    title: 'Review & Publish',
    subtitle: 'One-click publishing',
    description: 'Get AI-generated posts ready for all platforms. Edit if you want and publish with a single click.',
    icon: <Share2 className="w-6 h-6" />,
    tags: ['LinkedIn', 'X (Twitter)', 'Instagram'],
  },
];

export default function WorkflowSteps() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [totalHeight, setTotalHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (timelineRef.current) {
        const height = timelineRef.current.offsetHeight;
        setTotalHeight(height);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current && timelineRef.current) {
        const container = scrollContainerRef.current;
        const scrollTop = container.scrollTop;
        const containerHeight = container.clientHeight;
        const timelineHeight = timelineRef.current.offsetHeight;
        const maxScroll = timelineHeight - containerHeight;
        const progress = Math.min(scrollTop / maxScroll, 1);
        setLineHeight(progress * timelineHeight);
      }
    };

    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', handleScroll, { passive: true });
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [totalHeight]);

  return (
    <div className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Simplify Your Workflow
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Turn your GitHub activity into social content in three simple steps
          </p>
        </motion.div>

        {/* Vertical scrollable container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="max-h-[600px] overflow-y-auto scrollbar-hide border border-white/10 rounded-2xl"
          >
            {/* Timeline line */}
            <div ref={timelineRef} className="relative py-2">
              {/* Animated progress line */}
              <div
                className="absolute left-8 md:left-1/2 top-2 w-[2px] bg-gradient-to-b from-draftrPurple to-[#8771ff] will-change-height"
                style={{ height: `${lineHeight}px`, transition: 'height 0.05s linear' }}
              />

              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ margin: '-100px' }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } mb-16 md:mb-24`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-draftrPurple z-10" />

                  {/* Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 pl-8' : 'md:pl-16 pr-8'} ml-16 md:ml-0`}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition duration-300">
                      {/* Step number background */}
                      <div className="text-[100px] font-bold text-white/5 leading-none absolute -top-8 -left-4 select-none font-heading pointer-events-none">
                        {step.number}
                      </div>

                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-draftrPurple to-[#8771ff] flex items-center justify-center text-white mb-6">
                          {step.icon}
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-white mb-2 font-heading">{step.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">{step.subtitle}</p>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                          {step.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {step.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
