import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section
      id="achievements"
      className="py-28 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1360px] mx-auto border-t border-[#17211B]/10"
    >
      <SectionHeading
        label="05 — ACHIEVEMENTS"
        title="RECOGNITION &amp;&#10;MILESTONES."
        subtitle="Competitive hackathon accolades, symposium awards, and leadership recognitions."
      />

      {/* Minimal Vertical Timeline */}
      <div className="relative border-l border-[#17211B]/15 ml-3 sm:ml-4 pl-8 sm:pl-12 lg:pl-16 space-y-12 sm:space-y-16">
        {ACHIEVEMENTS.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            {/* Timeline Marker */}
            <div className="absolute -left-[37px] sm:-left-[53px] lg:-left-[69px] top-1.5 w-3 h-3 rounded-full bg-[#EDE8DC] border-2 border-[#17211B] group-hover:border-[#3F7D68] group-hover:bg-[#3F7D68] transition-colors" />

            <div className="space-y-2">
              {/* Year & Event */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-serif-display text-2xl sm:text-3xl font-medium text-[#C5A66A]">
                  {item.year}
                </span>
                <span className="h-px w-6 bg-[#17211B]/20" />
                <span className="font-sans-ui text-xs font-bold uppercase tracking-[0.14em] text-[#3F7D68]">
                  {item.event}
                </span>
              </div>

              {/* Achievement Title in Cormorant Garamond */}
              <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-[#17211B] leading-snug">
                {item.title}
              </h3>

              {/* Short Description */}
              {item.description && (
                <p className="font-sans-ui text-sm sm:text-base text-[#526057] leading-relaxed max-w-3xl pt-1">
                  {item.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
