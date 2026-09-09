import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1360px] mx-auto border-t border-[#17211b]/10"
    >
      <SectionHeading
        label="05 — SKILLS"
        title="TECHNICAL&#10;COMPETENCIES."
        subtitle="Practical technologies and workflows utilized across machine learning algorithms, data analytics, and software applications."
      />

      {/* Clean Editorial Skill Layout with Subtle Separators and Typography */}
      <div className="border-t border-[#17211b]/15 divide-y divide-[#17211b]/15">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.categoryKey}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline"
          >
            {/* Category Title Column (col-span-4) */}
            <div className="lg:col-span-4 flex items-center gap-3">
              <span className="font-serif-display text-xl sm:text-2xl font-light text-[#c5a66a]">
                0{idx + 1}
              </span>
              <span className="h-px w-6 bg-[#17211b]/20" />
              <h3 className="font-sans-ui text-xs sm:text-sm font-bold tracking-[0.14em] uppercase text-[#17211b]">
                {category.title}
              </h3>
            </div>

            {/* Skills List Column (col-span-8) */}
            <div className="lg:col-span-8">
              <div className="flex flex-wrap gap-2.5 items-center">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 border transition-all text-xs sm:text-sm font-sans-ui ${
                      skill.highlight
                        ? 'border-[#3f7d68]/40 bg-[#dce8df]/60 text-[#17211b] font-semibold'
                        : 'border-[#17211b]/10 bg-[#e3ded2] text-[#526057] hover:border-[#3f7d68]/30 hover:text-[#17211b]'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        skill.highlight ? 'bg-[#3f7d68]' : 'bg-[#c5a66a]'
                      }`}
                    />
                    <span>{skill.name}</span>
                    <span className="text-[11px] text-[#526057]/70 font-normal">
                      ({skill.level})
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
