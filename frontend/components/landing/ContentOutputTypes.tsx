'use client';

import { motion } from 'framer-motion';
import DisplayCards from '@/components/ui/display-cards';
import Safari_01 from '@/components/ui/safari-01';
import { FileText, Zap, Image as ImageIcon } from 'lucide-react';

const contentOutputCards = [
  {
    icon: <FileText className="size-4 text-white" />,
    title: "Technical Deep Dives",
    description: "LinkedIn long-form content",
    date: "2 min read",
    iconClassName: "text-draftrPurple",
    titleClassName: "text-white font-heading font-semibold",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-white/10 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/30 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Zap className="size-4 text-white" />,
    title: "Quick Updates",
    description: "X (Twitter) short posts",
    date: "280 chars",
    iconClassName: "text-[#FF6B6B]",
    titleClassName: "text-white font-heading font-semibold",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-white/10 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/30 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <ImageIcon className="size-4 text-white" />,
    title: "Visual Stories",
    description: "Instagram carousels",
    date: "Multiple slides",
    iconClassName: "text-green-400",
    titleClassName: "text-white font-heading font-semibold",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

export default function ContentOutputTypes() {
  return (
    <section className="relative z-10 py-24 px-6 bg-gradient-to-b from-transparent via-draftrPurple/3 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Side - Display Cards inside Browser */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <Safari_01>
              <DisplayCards cards={contentOutputCards} />
            </Safari_01>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                Three Content Types,<br />One Powerful Platform
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed font-heading">
                DevSync AI transforms your commits into perfectly formatted content for every platform. Choose the output that matches your audience.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-draftrPurple to-[#8771ff] flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-heading">Technical Deep Dives</h3>
                  <p className="text-gray-400 leading-relaxed">
                    In-depth articles for LinkedIn that showcase your expertise. Perfect for thought leadership and networking with peers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B6B] to-[#ff8e8e] flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-heading">Quick Updates</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Short, punchy posts for X that keep your followers engaged. Ideal for daily updates and quick wins.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shrink-0">
                  <ImageIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-heading">Visual Stories</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Eye-catching carousels for Instagram that combine visuals with your technical story. Great for reaching broader audiences.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
