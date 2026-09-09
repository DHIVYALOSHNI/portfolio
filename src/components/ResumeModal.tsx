import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import {
  PERSONAL_INFO,
  WORK_EXPERIENCE,
  PROJECTS_DATA,
  ACHIEVEMENTS,
  EDUCATION_DATA,
  SKILL_CATEGORIES,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#17211b]/60 backdrop-blur-sm">
        {/* Backdrop click */}
        <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#ede9df] border border-[#17211b]/20 shadow-2xl overflow-hidden z-10 text-[#17211b]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-[#17211b]/15 bg-[#e3ded2] print:hidden">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3f7d68]" />
              <h3
                id="resume-modal-title"
                className="font-sans-ui text-xs font-bold tracking-widest uppercase text-[#17211b]"
              >
                Curriculum Vitae • S. Dhivyaloshni
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans-ui font-semibold uppercase tracking-wider text-[#17211b] bg-[#ede9df] border border-[#17211b]/20 hover:border-[#3f7d68] hover:text-[#3f7d68] transition-colors cursor-pointer"
                title="Print or Save PDF"
              >
                <Printer className="w-3.5 h-3.5 text-[#3f7d68]" />
                <span>Print / PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 text-[#526057] hover:text-[#17211b] bg-[#ede9df] border border-[#17211b]/15 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Dossier Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 lg:p-12 space-y-8 bg-[#ede9df] print:p-0">
            {/* Resume Header */}
            <div className="border-b border-[#17211b]/20 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                <div>
                  <h1 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#17211b]">
                    {PERSONAL_INFO.name}
                  </h1>
                  <p className="font-sans-ui text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3f7d68] mt-1">
                    {PERSONAL_INFO.degreeLine}
                  </p>
                </div>
                <div className="font-sans-ui text-xs text-[#526057] space-y-1 sm:text-right">
                  <div>{PERSONAL_INFO.location}</div>
                  <div>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#17211b] font-semibold hover:underline">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                  <div>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#3f7d68] hover:underline mr-3"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#3f7d68] hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <p className="font-sans-ui text-xs sm:text-sm text-[#526057] mt-4 leading-relaxed max-w-3xl">
                {PERSONAL_INFO.supportingText}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="font-serif-display text-2xl font-semibold text-[#17211b] border-b border-[#17211b]/15 pb-1">
                Education
              </h2>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div>
                    <div className="font-sans-ui text-sm font-bold text-[#17211b]">
                      {EDUCATION_DATA.primary.institution}
                    </div>
                    <div className="font-sans-ui text-xs text-[#526057]">
                      {EDUCATION_DATA.primary.degree} &nbsp;•&nbsp; {EDUCATION_DATA.primary.location}
                    </div>
                  </div>
                  <div className="font-sans-ui text-xs font-bold text-[#3f7d68] sm:text-right mt-1 sm:mt-0">
                    <div>{EDUCATION_DATA.primary.period}</div>
                    <div className="text-[#17211b]">CGPA: {EDUCATION_DATA.primary.cgpa}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans-ui text-[#526057] pt-1">
                  {EDUCATION_DATA.secondary.map((sec, i) => (
                    <div key={i}>
                      <span className="font-bold text-[#17211b]">{sec.level}:</span> {sec.score} — {sec.school}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Work & Open Source */}
            <div className="space-y-3">
              <h2 className="font-serif-display text-2xl font-semibold text-[#17211b] border-b border-[#17211b]/15 pb-1">
                Engineering Experience &amp; Open Source
              </h2>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div>
                    <span className="font-sans-ui text-sm font-bold text-[#17211b]">
                      {WORK_EXPERIENCE.role}
                    </span>
                    <span className="font-sans-ui text-xs text-[#526057] ml-2">
                      — {WORK_EXPERIENCE.company} ({WORK_EXPERIENCE.location})
                    </span>
                  </div>
                  <span className="font-sans-ui text-xs font-semibold text-[#3f7d68]">
                    {WORK_EXPERIENCE.status}
                  </span>
                </div>
                <p className="font-sans-ui text-xs text-[#526057]">
                  {WORK_EXPERIENCE.description}
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs font-sans-ui text-[#526057]">
                  {WORK_EXPERIENCE.contributions.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-3">
              <h2 className="font-serif-display text-2xl font-semibold text-[#17211b] border-b border-[#17211b]/15 pb-1">
                Selected Projects
              </h2>
              <div className="space-y-4">
                {PROJECTS_DATA.map((proj) => (
                  <div key={proj.id} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                      <div className="font-sans-ui text-sm font-bold text-[#17211b]">
                        {proj.title}
                        <span className="font-sans-ui text-xs font-normal text-[#526057] ml-2">
                          ({proj.category})
                        </span>
                      </div>
                      <span className="font-sans-ui text-xs text-[#3f7d68]">
                        {proj.technologies.slice(0, 4).join(', ')}
                      </span>
                    </div>
                    <p className="font-sans-ui text-xs text-[#526057] leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <h2 className="font-serif-display text-2xl font-semibold text-[#17211b] border-b border-[#17211b]/15 pb-1">
                Technical Stack &amp; Tools
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans-ui">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.categoryKey}>
                    <span className="font-bold text-[#17211b] uppercase tracking-wider block mb-0.5">
                      {cat.title}:
                    </span>
                    <span className="text-[#526057]">
                      {cat.skills.map((s) => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Honors & Milestones */}
            <div className="space-y-3">
              <h2 className="font-serif-display text-2xl font-semibold text-[#17211b] border-b border-[#17211b]/15 pb-1">
                Honors &amp; Accolades
              </h2>
              <ul className="space-y-1.5 text-xs font-sans-ui text-[#526057]">
                {ACHIEVEMENTS.map((a) => (
                  <li key={a.id}>
                    <strong className="text-[#17211b]">{a.year} — {a.title}</strong> ({a.event})
                    {a.description && <span>: {a.description}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
