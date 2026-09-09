import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = NAV_ITEMS.map((item) => item.id);
      const scrollPosition = window.scrollY + 220;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#ede9df]/95 backdrop-blur-md border-b border-[#17211b]/10 py-3 sm:py-4 shadow-sm'
          : 'bg-transparent py-5 sm:py-7'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Brand Left */}
        <a
          href="#home"
          className="font-sans-ui text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#17211b] hover:text-[#3f7d68] transition-colors flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#3f7d68]" />
          <span>{PERSONAL_INFO.name}</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`font-sans-ui text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors relative py-1 cursor-pointer ${
                  isActive
                    ? 'text-[#3f7d68]'
                    : 'text-[#526057] hover:text-[#17211b]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#3f7d68]" />
                )}
              </a>
            );
          })}

          <button
            id="nav-resume-button"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-[#3f7d68]/40 hover:border-[#3f7d68] text-[#3f7d68] hover:bg-[#3f7d68] hover:text-[#ffffff] font-sans-ui text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ml-2"
          >
            <FileText className="w-3 h-3" />
            <span>Resume</span>
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenResume}
            className="px-2.5 py-1 border border-[#3f7d68]/40 text-[#3f7d68] font-sans-ui text-[10px] font-bold uppercase tracking-wider"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#17211b] hover:text-[#3f7d68] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#ede9df] border-b border-[#17211b]/10 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans-ui text-xs font-semibold tracking-[0.12em] uppercase text-[#17211b] hover:text-[#3f7d68] py-2 border-b border-[#17211b]/5"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#3f7d68] text-[#ffffff] font-sans-ui text-xs font-bold uppercase tracking-wider"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Full Resume</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
