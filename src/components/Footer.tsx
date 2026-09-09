import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#17211b]/15 py-12 sm:py-16 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1360px] mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <div className="font-serif-display text-2xl font-medium text-[#17211b]">
            {PERSONAL_INFO.name}
          </div>
          <div className="font-sans-ui text-xs font-semibold uppercase tracking-[0.14em] text-[#3f7d68]">
            {PERSONAL_INFO.degreeLine}
          </div>
        </div>

        <div className="font-sans-ui text-xs font-bold uppercase tracking-[0.2em] text-[#526057] text-center">
          {PERSONAL_INFO.bottomMetadata}
        </div>

        <div className="flex items-center gap-6 text-xs font-sans-ui text-[#526057]">
          <span>© {new Date().getFullYear()} S. Dhivyaloshni</span>
          <button
            onClick={scrollToTop}
            className="p-2 border border-[#17211b]/15 hover:border-[#3f7d68] hover:text-[#3f7d68] transition-colors cursor-pointer"
            aria-label="Scroll to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
