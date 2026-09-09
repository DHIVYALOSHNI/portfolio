import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { ABOUT_INFO, CAPABILITY_AREAS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-28 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1360px] mx-auto border-t border-[#17211B]/10"
    >
      {/* 12-Column Grid Alignment */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 sm:mb-28">
        {/* Heading Left */}
        <div className="lg:col-span-6">
          <SectionHeading
            label={ABOUT_INFO.label}
            title={ABOUT_INFO.heading}
            className="mb-0"
          />
        </div>

        {/* Narrative Paragraphs Right */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-6 pt-2 lg:pt-14"
        >
          {ABOUT_INFO.paragraphs.map((p, idx) => (
            <p
              key={idx}
              className="font-sans-ui text-base sm:text-lg lg:text-[19px] text-[#526057] leading-[1.75]"
            >
              {p}
            </p>
          ))}
        </motion.div>
      </div>

      {/* Four Minimal Capability Areas: Pure Typography, Lines, and Whitespace */}
      <div className="border-t border-[#17211B]/15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#17211B]/15">
          {CAPABILITY_AREAS.map((cap, idx) => (
            <motion.div
              key={cap.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`py-8 md:py-10 ${
                idx === 0
                  ? 'md:pr-8'
                  : idx === 3
                  ? 'md:pl-8'
                  : 'md:px-8'
              } flex flex-col justify-between group`}
            >
              <div>
                {/* Number in Cormorant Garamond */}
                <div className="font-serif-display text-4xl sm:text-5xl font-light text-[#C5A66A] group-hover:text-[#3F7D68] transition-colors mb-4">
                  {cap.number}
                </div>

                {/* Capability Title in Manrope */}
                <h3 className="font-sans-ui text-sm sm:text-base font-bold tracking-[0.06em] uppercase text-[#17211B] mb-3">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="font-sans-ui text-xs sm:text-sm text-[#526057] leading-relaxed mb-6">
                  {cap.description}
                </p>
              </div>

              {/* Minimal Skill Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#17211B]/10">
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-sans-ui text-[11px] font-medium text-[#17211B]/80 bg-[#EDE8DC] px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
