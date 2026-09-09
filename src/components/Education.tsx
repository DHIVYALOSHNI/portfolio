import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-28 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1360px] mx-auto border-t border-[#17211B]/10"
    >
      <SectionHeading
        label="06 — EDUCATION"
        title="ACADEMIC&#10;FOUNDATION."
        subtitle="Formal grounding in computational mathematics, machine learning theory, algorithms, and applied intelligence."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Primary B.Tech Focus (col-span-8) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 bg-[#EDE8DC] p-8 sm:p-12 lg:p-14 border border-[#17211B]/15 space-y-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#17211B]/15 pb-4">
            <span className="font-sans-ui text-xs font-bold uppercase tracking-[0.18em] text-[#3F7D68]">
              UNDERGRADUATE DEGREE (PRIMARY)
            </span>
            <span className="font-sans-ui text-xs font-bold uppercase tracking-wider text-[#17211B] bg-[#F5F1E8] px-3 py-1">
              {EDUCATION_DATA.primary.period}
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#17211B]">
              {EDUCATION_DATA.primary.degree}
            </h3>
            <p className="font-serif-display text-xl sm:text-2xl text-[#526057] italic">
              {EDUCATION_DATA.primary.institution}
            </p>
            <p className="font-sans-ui text-xs sm:text-sm text-[#526057]">
              {EDUCATION_DATA.primary.location}
            </p>
          </div>

          <div className="pt-4 border-t border-[#17211B]/15 flex flex-wrap items-baseline gap-4">
            <div className="flex items-baseline gap-2">
              <span className="font-serif-display text-5xl sm:text-6xl font-semibold text-[#17211B]">
                {EDUCATION_DATA.primary.cgpa}
              </span>
              <span className="font-sans-ui text-xs font-bold uppercase tracking-wider text-[#3F7D68]">
                Cumulative Grade Point Average
              </span>
            </div>
          </div>

          {/* Key Coursework */}
          <div className="pt-4 space-y-2.5">
            <span className="font-sans-ui text-xs font-bold uppercase tracking-wider text-[#17211B] block">
              Core Coursework &amp; Specialization:
            </span>
            <div className="flex flex-wrap gap-2">
              {EDUCATION_DATA.primary.coursework.map((course) => (
                <span
                  key={course}
                  className="font-sans-ui text-xs text-[#17211B] bg-[#FFFFFF] border border-[#17211B]/10 px-3 py-1"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Secondary Education (col-span-4) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 space-y-6"
        >
          <div className="border-b border-[#17211B]/15 pb-3">
            <span className="font-sans-ui text-xs font-bold uppercase tracking-[0.16em] text-[#526057]">
              SECONDARY SCHOOLING
            </span>
          </div>

          {EDUCATION_DATA.secondary.map((sec, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#FFFFFF] border border-[#17211B]/15 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-sans-ui text-xs font-bold uppercase tracking-wider text-[#3F7D68]">
                  {sec.level}
                </span>
                <span className="font-serif-display text-2xl font-semibold text-[#17211B]">
                  {sec.score}
                </span>
              </div>

              <h4 className="font-serif-display text-lg font-medium text-[#17211B]">
                {sec.school}
              </h4>
              <p className="font-sans-ui text-xs text-[#526057]">
                {sec.location}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
