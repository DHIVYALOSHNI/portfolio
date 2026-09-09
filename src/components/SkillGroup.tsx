import React from 'react';
import { motion } from 'motion/react';
import { SkillCategory } from '../types';

interface SkillGroupProps {
  category: SkillCategory;
  index: number;
}

export const SkillGroup: React.FC<SkillGroupProps> = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#0e1018] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:border-slate-700/80 transition-all duration-300"
    >
      <div>
        {/* Category Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
          <h3 className="font-mono-code text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            {category.title}
          </h3>
          <span className="font-mono-code text-[11px] text-slate-500">
            0{index + 1}
          </span>
        </div>

        {/* Skill Items */}
        <ul className="space-y-3">
          {category.skills.map((skill, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between gap-3 text-xs py-1 px-2 rounded-lg hover:bg-slate-800/40 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${skill.highlight ? 'bg-amber-400' : 'bg-slate-600'}`}></span>
                <span className="font-medium text-slate-200 text-sm font-sans">{skill.name}</span>
              </div>
              <span className="font-mono-code text-[11px] text-slate-400 text-right truncate max-w-[170px]">
                {skill.level}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-3 border-t border-slate-800/60 font-mono-code text-[10px] text-slate-500 uppercase tracking-wider flex justify-between">
        <span>Verified Proficiency</span>
        <span>Fresher Level Tested</span>
      </div>
    </motion.div>
  );
};
