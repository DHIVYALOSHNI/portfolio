import React from 'react';
import { motion } from 'motion/react';
import { Calendar, CheckCircle2, Clock, Award, BookOpen, GraduationCap } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { JOURNEY_TIMELINE, LEARNING_ITEMS, EDUCATION_DATA, ACHIEVEMENTS } from '../data/portfolioData';

export const Journey: React.FC = () => {
  return (
    <section
      id="journey"
      className="py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1360px] mx-auto border-t border-[#17211b]/10"
    >
      <SectionHeading
        label="06 — JOURNEY"
        title="ACADEMIC &amp; TECHNICAL&#10;TRAJECTORY."
        subtitle="Chronological progression of engineering milestones, open-source deliverables, and continuous learning."
      />

      {/* Main 12-Column Grid: Timeline on Left (col-span-8), Learning & Education on Right (col-span-4) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Chronological Journey Timeline (col-span-7) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="border-b border-[#17211b]/15 pb-4">
            <h3 className="font-sans-ui text-xs font-bold uppercase tracking-[0.16em] text-[#3f7d68] flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>CHRONOLOGICAL MILESTONES</span>
            </h3>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-[#17211b]/20 space-y-10">
            {JOURNEY_TIMELINE.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Timeline node dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#ede9df] border-2 border-[#3f7d68] group-hover:bg-[#3f7d68] transition-colors" />

                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-serif-display text-lg font-bold text-[#c5a66a]">
                      {item.year}
                    </span>
                    {item.highlight && (
                      <span className="font-sans-ui text-[11px] font-bold uppercase tracking-wider text-[#3f7d68] bg-[#dce8df] px-2 py-0.5 border border-[#3f7d68]/20">
                        {item.highlight}
                      </span>
                    )}
                  </div>

                  <h4 className="font-serif-display text-2xl font-medium text-[#17211b] group-hover:text-[#3f7d68] transition-colors">
                    {item.title}
                  </h4>

                  {item.organization && (
                    <p className="font-sans-ui text-xs font-semibold uppercase tracking-wider text-[#526057]">
                      {item.organization}
                    </p>
                  )}

                  <p className="font-sans-ui text-sm text-[#526057] leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Learning / Certifications & Formal Education (col-span-5) */}
        <div className="lg:col-span-5 space-y-10">
          {/* Section 18: Learning / Certifications */}
          <div className="bg-[#e3ded2] p-6 sm:p-8 border border-[#17211b]/15 space-y-6 shadow-sm">
            <div className="border-b border-[#17211b]/15 pb-3">
              <h3 className="font-sans-ui text-xs font-bold uppercase tracking-[0.16em] text-[#3f7d68] flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>CONTINUOUS LEARNING</span>
              </h3>
            </div>

            <div className="space-y-5">
              {LEARNING_ITEMS.map((item) => (
                <div key={item.id} className="space-y-1 border-b border-[#17211b]/10 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif-display text-xl font-medium text-[#17211b]">
                      {item.title}
                    </h4>
                    <span
                      className={`font-sans-ui text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 border ${
                        item.status === 'Completed'
                          ? 'bg-[#dce8df] text-[#3f7d68] border-[#3f7d68]/30'
                          : 'bg-[#ede9df] text-[#c5a66a] border-[#c5a66a]/40'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  {item.platform && (
                    <p className="font-sans-ui text-xs text-[#526057] font-medium">
                      {item.platform}
                    </p>
                  )}
                  {item.description && (
                    <p className="font-sans-ui text-xs text-[#526057] leading-relaxed pt-0.5">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Academic Foundation Card */}
          <div className="bg-[#e3ded2] p-6 sm:p-8 border border-[#17211b]/15 space-y-5 shadow-sm">
            <div className="border-b border-[#17211b]/15 pb-3 flex items-center justify-between">
              <h3 className="font-sans-ui text-xs font-bold uppercase tracking-[0.16em] text-[#3f7d68] flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>ACADEMIC FOUNDATION</span>
              </h3>
              <span className="font-sans-ui text-xs font-bold text-[#c5a66a]">
                CGPA 8.57 / 10
              </span>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif-display text-2xl font-medium text-[#17211b]">
                {EDUCATION_DATA.primary.degree}
              </h4>
              <p className="font-sans-ui text-xs font-semibold uppercase tracking-wider text-[#526057]">
                {EDUCATION_DATA.primary.institution} • {EDUCATION_DATA.primary.period}
              </p>
              <p className="font-sans-ui text-xs text-[#526057] italic">
                {EDUCATION_DATA.primary.location}
              </p>

              <div className="pt-3 border-t border-[#17211b]/10">
                <p className="font-sans-ui text-[11px] font-bold uppercase tracking-wider text-[#17211b] mb-2">
                  Key Coursework
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {EDUCATION_DATA.primary.coursework.map((course) => (
                    <span
                      key={course}
                      className="font-sans-ui text-[11px] bg-[#ede9df] px-2 py-0.5 border border-[#17211b]/10 text-[#17211b]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
