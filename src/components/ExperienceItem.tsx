import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, GitPullRequest, Users, Award, Check } from 'lucide-react';
import { ExperienceData } from '../types';

interface ExperienceItemProps {
  experience: ExperienceData;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="relative bg-[#0e1018] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl overflow-hidden"
    >
      {/* Background glow accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Header Block */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="font-mono-code text-xs text-emerald-400 uppercase tracking-widest font-semibold">
              Current Active Engagement
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
            {experience.company}
          </h3>
          <p className="font-mono-code text-amber-400 text-sm font-semibold mt-1">
            {experience.role} <span className="text-slate-500 font-normal">• {experience.location}</span>
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-2">
          <span className="font-mono-code text-xs text-slate-300 bg-[#161924] px-3.5 py-1.5 rounded-full border border-slate-700/80">
            {experience.period}
          </span>
          <a
            href={experience.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono-code text-xs text-slate-400 hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>View Hushh GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Description */}
      <div className="py-6">
        <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
          {experience.description}
        </p>
      </div>

      {/* Highlight Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-y border-slate-800/80 bg-[#090b12]/60 rounded-xl p-4 sm:p-6 mb-6">
        {experience.metrics.map((metric, i) => (
          <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-tight">
              {metric.value}
            </div>
            <div className="font-mono-code text-xs font-bold text-white uppercase tracking-wider mt-1">
              {metric.label}
            </div>
            <div className="text-xs text-slate-400 mt-1 font-sans">
              {metric.detail}
            </div>
          </div>
        ))}
      </div>

      {/* Concrete Contributions */}
      <div>
        <h4 className="font-mono-code text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
          Key Contributions & Engineering Practices
        </h4>
        <ul className="space-y-2.5">
          {experience.contributions.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-400">
              <span className="p-0.5 rounded-full bg-amber-400/20 text-amber-400 shrink-0 mt-0.5">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
