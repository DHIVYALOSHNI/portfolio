import React from 'react';
import { motion } from 'motion/react';
import { Github, CheckCircle2, GitPullRequest, Award, CalendarCheck, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export const Work: React.FC = () => {
  return (
    <section
      id="work"
      className="py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1360px] mx-auto border-t border-[#17211b]/10"
    >
      <SectionHeading
        label="03 — WORK"
        title="OPEN SOURCE CONTRIBUTIONS.&#10;REAL REPOSITORIES."
        subtitle="Tangible proof of work collaborating in modern distributed open-source environments with production standards."
      />

      {/* 12-Column Experience Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Role Details & Narrative (col-span-7) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-8"
        >
          {/* Company & Role Header */}
          <div className="border-b border-[#17211b]/15 pb-6">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <h3 className="font-serif-display text-3xl sm:text-4xl font-medium tracking-tight text-[#17211b]">
                {WORK_EXPERIENCE.company}
              </h3>
              <span className="font-sans-ui text-xs font-bold uppercase tracking-wider text-[#3f7d68] bg-[#dce8df] px-3.5 py-1 rounded-none border border-[#3f7d68]/20 flex items-center gap-1.5">
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>{WORK_EXPERIENCE.status}</span>
              </span>
            </div>

            <div className="flex items-center gap-3 font-sans-ui text-xs sm:text-sm text-[#526057]">
              <span className="font-semibold text-[#17211b] uppercase tracking-wider">
                {WORK_EXPERIENCE.role}
              </span>
              <span>•</span>
              <span className="text-[#3f7d68] font-bold">38 PULL REQUESTS MERGED</span>
              <span>•</span>
              <span>{WORK_EXPERIENCE.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="font-sans-ui text-base sm:text-lg text-[#526057] leading-relaxed">
            {WORK_EXPERIENCE.description}
          </p>

          {/* Key Contributions Checklist */}
          <div className="space-y-3.5 pt-2">
            <h4 className="font-sans-ui text-xs font-bold uppercase tracking-[0.14em] text-[#17211b]">
              Verified Engineering Deliverables
            </h4>
            <div className="space-y-3">
              {WORK_EXPERIENCE.contributions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#3f7d68] mt-1 shrink-0" />
                  <p className="font-sans-ui text-sm sm:text-base text-[#526057] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button: VIEW GITHUB → */}
          <div className="pt-4 flex items-center gap-4">
            <Button
              href={WORK_EXPERIENCE.githubUrl}
              variant="primary"
              size="lg"
              icon={<Github className="w-4 h-4" />}
            >
              VIEW GITHUB REPOSITORY
            </Button>
          </div>
        </motion.div>

        {/* Right Column: Prominent Editorial Proof of Work (col-span-5) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 bg-[#e3ded2] p-8 sm:p-10 lg:p-12 border border-[#17211b]/15 space-y-8 shadow-sm"
        >
          <div className="flex items-center justify-between border-b border-[#17211b]/15 pb-4">
            <span className="font-sans-ui text-xs font-bold uppercase tracking-[0.18em] text-[#3f7d68] flex items-center gap-2">
              <GitPullRequest className="w-4 h-4" />
              <span>PROOF OF WORK</span>
            </span>
            <span className="font-sans-ui text-[11px] font-bold text-[#c5a66a]">
              COMPLETED MAY 2026
            </span>
          </div>

          {/* Hero Metric: 38 PRs */}
          <div className="space-y-1">
            <div className="font-serif-display text-6xl sm:text-7xl font-medium tracking-tight text-[#17211b]">
              38 PRs
            </div>
            <div className="font-sans-ui text-xs font-bold uppercase tracking-[0.14em] text-[#3f7d68]">
              Merged Pull Requests
            </div>
            <p className="font-sans-ui text-xs sm:text-sm text-[#526057] leading-relaxed pt-1">
              Authored, reviewed, and successfully merged across Hushh open-source code repositories.
            </p>
          </div>

          {/* Cohort Benchmark */}
          <div className="border-t border-[#17211b]/10 pt-6 space-y-1">
            <div className="font-serif-display text-4xl sm:text-5xl font-medium tracking-tight text-[#17211b]">
              80 / 1000
            </div>
            <div className="font-sans-ui text-xs font-bold uppercase tracking-[0.12em] text-[#3f7d68]">
              Cohort Selection
            </div>
            <p className="font-sans-ui text-xs sm:text-sm text-[#526057] leading-relaxed pt-1">
              Selected among top applicants in a 1,000-candidate cohort based on technical evaluation.
            </p>
          </div>

          {/* Completed Status */}
          <div className="border-t border-[#17211b]/10 pt-6 space-y-1">
            <div className="font-serif-display text-3xl font-medium tracking-tight text-[#17211b]">
              Completed
            </div>
            <div className="font-sans-ui text-xs font-bold uppercase tracking-[0.12em] text-[#c5a66a]">
              May 2026 Milestone
            </div>
            <p className="font-sans-ui text-xs sm:text-sm text-[#526057] leading-relaxed pt-1">
              Delivered complete scope of open-source contributions before scheduled graduation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
