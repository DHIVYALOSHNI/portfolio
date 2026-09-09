import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, FileText } from 'lucide-react';
import { Button } from './Button';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="home"
      className="min-h-[88vh] pt-32 sm:pt-40 lg:pt-44 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1360px] mx-auto flex flex-col justify-between relative"
    >
      {/* Aligned Editorial Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl xl:max-w-5xl space-y-7 sm:space-y-9 my-auto"
      >
        {/* Degree Sub-label */}
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#3f7d68]" />
          <span className="font-sans-ui text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#3f7d68]">
            {PERSONAL_INFO.degreeLine}
          </span>
        </div>

        {/* Hero Name & Editorial Headline */}
        <div className="space-y-4 sm:space-y-5">
          <h1 className="font-serif-display font-medium text-[clamp(3.4rem,7.5vw,7.2rem)] leading-[0.95] tracking-[-0.03em] text-[#17211b]">
            {PERSONAL_INFO.name}
          </h1>

          <h2 className="font-serif-display font-normal text-[clamp(1.9rem,3.8vw,3.4rem)] leading-[1.08] tracking-[-0.01em] text-[#17211b]">
            {PERSONAL_INFO.headline}
          </h2>
        </div>

        {/* Academic Highlights & Credentials Bar */}
        <div className="pt-3 pb-3 border-y border-[#17211b]/10 flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 font-sans-ui text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#17211b]">
          <span>{PERSONAL_INFO.batch}</span>
          <span className="text-[#c5a66a]">•</span>
          <span>{PERSONAL_INFO.institution}</span>
          <span className="text-[#c5a66a]">•</span>
          <span className="text-[#3f7d68]">CGPA {PERSONAL_INFO.cgpa}</span>
          <span className="text-[#c5a66a]">•</span>
          <span>{PERSONAL_INFO.location}</span>
        </div>

        {/* Supporting Narrative */}
        <p className="font-sans-ui text-base sm:text-lg lg:text-xl text-[#526057] leading-relaxed max-w-3xl">
          {PERSONAL_INFO.supportingText}
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <Button href="#work" variant="primary" size="lg">
            EXPLORE MY WORK
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={onOpenResume}
            showArrow={false}
            icon={<FileText className="w-4 h-4 text-[#3f7d68]" />}
          >
            VIEW RESUME
          </Button>
        </div>
      </motion.div>

      {/* BOTTOM METADATA BAR */}
      <div className="pt-8 border-t border-[#17211b]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#526057]">
        <div className="font-sans-ui text-xs sm:text-[13px] font-bold tracking-[0.22em] uppercase text-[#17211b]">
          {PERSONAL_INFO.bottomMetadata}
        </div>

        <a
          href="#about"
          className="inline-flex items-center gap-2 font-sans-ui text-xs uppercase tracking-wider text-[#526057] hover:text-[#3f7d68] transition-colors"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
