import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, FileText, Copy, Check, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1360px] mx-auto border-t border-[#17211b]/10"
    >
      <div className="max-w-4xl">
        <SectionHeading
          label="07 — CONTACT"
          title="LET'S BUILD&#10;SOMETHING INTELLIGENT."
          subtitle="Open to internships, research collaborations, and opportunities in AI, Data Science, Generative AI, and intelligent software systems."
          className="mb-12 sm:mb-16"
        />

        {/* 4 Clean Direct Channels (No large forms) */}
        <div className="space-y-6 pt-2">
          {/* Primary Email Card */}
          <div className="p-8 sm:p-10 bg-[#e3ded2] border border-[#17211b]/15 space-y-4 shadow-sm">
            <span className="font-sans-ui text-xs font-bold uppercase tracking-[0.18em] text-[#3f7d68] flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>PRIMARY CONTACT & INQUIRIES</span>
            </span>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#17211b] hover:text-[#3f7d68] transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  id="contact-copy-email-btn"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#ede9df] hover:bg-[#dce8df] border border-[#17211b]/20 text-[#17211b] font-sans-ui text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#3f7d68]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#526057]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#17211b] hover:bg-[#3f7d68] text-[#ede9df] font-sans-ui text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Write Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Secondary Professional Channels: LinkedIn, GitHub, Resume */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              id="contact-linkedin-link"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-[#e3ded2] border border-[#17211b]/15 hover:border-[#3f7d68] flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3.5">
                <Linkedin className="w-5 h-5 text-[#3f7d68]" />
                <div>
                  <span className="font-sans-ui text-xs font-bold uppercase tracking-wider text-[#17211b] block">
                    LinkedIn
                  </span>
                  <span className="font-sans-ui text-[11px] text-[#526057]">
                    Professional Profile
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#526057] group-hover:text-[#3f7d68] transition-colors" />
            </a>

            <a
              id="contact-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-[#e3ded2] border border-[#17211b]/15 hover:border-[#3f7d68] flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3.5">
                <Github className="w-5 h-5 text-[#3f7d68]" />
                <div>
                  <span className="font-sans-ui text-xs font-bold uppercase tracking-wider text-[#17211b] block">
                    GitHub
                  </span>
                  <span className="font-sans-ui text-[11px] text-[#526057]">
                    Code & Repositories
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#526057] group-hover:text-[#3f7d68] transition-colors" />
            </a>

            <button
              id="contact-resume-btn"
              onClick={onOpenResume}
              className="p-6 bg-[#e3ded2] border border-[#17211b]/15 hover:border-[#3f7d68] flex items-center justify-between group transition-all text-left cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <FileText className="w-5 h-5 text-[#3f7d68]" />
                <div>
                  <span className="font-sans-ui text-xs font-bold uppercase tracking-wider text-[#17211b] block">
                    View Resume
                  </span>
                  <span className="font-sans-ui text-[11px] text-[#526057]">
                    Curriculum Vitae
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#526057] group-hover:text-[#3f7d68] transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
