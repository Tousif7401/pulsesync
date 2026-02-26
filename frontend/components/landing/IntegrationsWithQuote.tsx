'use client';

import { motion } from 'framer-motion';
import { Linkedin, Share2, Image as ImageIcon } from 'lucide-react';

const platforms = [
  { name: 'LinkedIn', icon: Linkedin, color: 'text-[#0077b5]' },
  { name: 'X (Twitter)', icon: Share2, color: 'text-white' },
  { name: 'Instagram', icon: ImageIcon, color: 'text-[#E4405F]' },
];

export default function IntegrationsWithQuote() {
  return (
    <section className="relative z-10 py-24 px-6 bg-gradient-to-b from-transparent via-[#5235ef]/3 to-transparent">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-draftrPurple mb-6 font-heading">
            One platform, unlimited integrations
          </h2>
          <motion.blockquote
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-2xl md:text-3xl text-white mb-6 font-light italic leading-relaxed">
              "Our platform empowers developers to build their brand, share their journey, and grow their audience—seamlessly and effortlessly."
            </p>
            <footer className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5235ef] to-[#8771ff] flex items-center justify-center">
                <span className="text-white font-bold text-lg">DT</span>
              </div>
              <div className="text-left">
                <cite className="text-white font-semibold not-italic">DevSync Team</cite>
                <p className="text-gray-400 text-sm not-italic">Founder & CEO</p>
              </div>
            </footer>
          </motion.blockquote>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-16 flex-wrap"
        >
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={platform.name}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-3"
              >
                <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${platform.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <span className="text-gray-400 text-sm">{platform.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
