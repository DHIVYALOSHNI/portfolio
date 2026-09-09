import React from 'react';
import { motion } from 'motion/react';
import { Award, Trophy, Mic, ShieldAlert, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { Achievement } from '../types';

interface AchievementItemProps {
  achievement: Achievement;
  index: number;
}

const categoryIcons: Record<string, React.ReactNode> = {
  Competition: <Trophy className="w-5 h-5 text-amber-400" />,
  Debate: <Mic className="w-5 h-5 text-cyan-400" />,
  Hackathon: <Award className="w-5 h-5 text-emerald-400" />,
  Leadership: <HeartHandshake className="w-5 h-5 text-rose-400" />,
};

export const AchievementItem: React.FC<AchievementItemProps> = ({ achievement, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative flex items-start gap-4 sm:gap-6 group"
    >
      {/* Left indicator node */}
      <div className="relative flex flex-col items-center">
        <div className="w-10 h-10 rounded-xl bg-[#141724] border border-slate-700/80 flex items-center justify-center shrink-0 group-hover:border-amber-400/80 transition-colors shadow-md">
          {categoryIcons[achievement.category] || <Award className="w-5 h-5 text-amber-400" />}
        </div>
        {index < 4 && <div className="w-px h-full min-h-[44px] bg-slate-800 my-1"></div>}
      </div>

      {/* Content Card */}
      <div className="flex-1 bg-[#0f111a] hover:bg-[#131622] border border-slate-800 hover:border-slate-700/80 rounded-xl p-5 mb-4 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
          <h4 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-tight group-hover:text-amber-300 transition-colors">
            {achievement.title}
          </h4>
          <span className="font-mono-code text-xs text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/30 w-fit">
            {achievement.year}
          </span>
        </div>

        <div className="font-mono-code text-xs text-slate-400 mb-2">
          {achievement.event}
        </div>

        {achievement.description && (
          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            {achievement.description}
          </p>
        )}
      </div>
    </motion.div>
  );
};
