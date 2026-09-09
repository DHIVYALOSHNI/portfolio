import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  label: string; // e.g. "01 — ABOUT"
  title: string; // e.g. "BUILDING WITH\nCURIOSITY AND PURPOSE."
  subtitle?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-14 sm:mb-20 lg:mb-24 ${className}`}
    >
      {/* Section Label */}
      <div className="flex items-center gap-4 mb-4 sm:mb-6">
        <span className="font-sans-ui text-xs sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#3F7D68]">
          {label}
        </span>
        <span className="h-[1px] w-12 sm:w-16 bg-[#3F7D68]/30" />
      </div>

      {/* Main Heading in Cormorant Garamond */}
      <h2 className="font-serif-display font-medium text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[1.05] tracking-[-0.02em] text-[#17211B] whitespace-pre-line">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 sm:mt-7 text-base sm:text-lg lg:text-xl text-[#526057] font-sans-ui max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
