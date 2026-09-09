import React from 'react';
import { motion } from 'motion/react';
import { Play, Github, Check, Sparkles, ExternalLink, Cpu } from 'lucide-react';
import { ProjectItem } from '../types';
import { Button } from './Button';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onOpenDemo: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpenDemo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative bg-[#0e1019] border border-slate-800 hover:border-slate-700/80 rounded-2xl sm:rounded-3xl p-6 sm:p-10 transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between overflow-hidden"
    >
      {/* Cinematic ambient background line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400/0 via-amber-400/50 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-amber-500/5 group-hover:bg-amber-500/10 blur-[90px] rounded-full pointer-events-none transition-all duration-500" />

      <div>
        {/* Card Header: Category & Index */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="font-mono-code text-xs font-bold text-amber-400 uppercase tracking-wider">
              {project.category}
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-600"></span>
            <span className="font-mono-code text-[11px] text-slate-500 uppercase">
              Production Build
            </span>
          </div>

          <span className="font-mono-code text-xl sm:text-2xl font-black text-slate-700 group-hover:text-slate-500 transition-colors">
            0{index + 1}
          </span>
        </div>

        {/* Project Title & Tagline */}
        <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase group-hover:text-amber-300 transition-colors">
          {project.title}
        </h3>

        <p className="font-mono-code text-xs sm:text-sm text-amber-400/90 font-medium mt-2">
          {project.tagline}
        </p>

        <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed mt-4">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 my-6">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="font-mono-code text-xs px-3 py-1 rounded-md bg-[#161a26] border border-slate-700/70 text-slate-300 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Core Features List */}
        <div className="bg-[#090b12]/80 border border-slate-800/80 rounded-xl p-5 mb-8">
          <div className="font-mono-code text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Architecture & Feature Matrix</span>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
            {project.features.map((feature, fIdx) => (
              <li key={fIdx} className="flex items-start gap-2">
                <span className="p-0.5 rounded-full bg-amber-400/20 text-amber-400 shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span className="font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80">
        {project.hasLiveDemo ? (
          <Button
            size="md"
            variant="primary"
            onClick={() => onOpenDemo(project)}
            icon={<Play className="w-3.5 h-3.5 fill-black" />}
            iconPosition="left"
          >
            LIVE DEMO
          </Button>
        ) : null}

        <Button
          size="md"
          variant="secondary"
          href={project.githubUrl}
          external={true}
          icon={<Github className="w-3.5 h-3.5 text-slate-300" />}
          iconPosition="left"
        >
          SOURCE CODE
        </Button>

        {project.demoDetails && !project.hasLiveDemo && (
          <Button
            size="md"
            variant="outline"
            onClick={() => onOpenDemo(project)}
            icon={<Cpu className="w-3.5 h-3.5 text-amber-400" />}
            iconPosition="left"
          >
            INSPECT TELEMETRY
          </Button>
        )}
      </div>
    </motion.div>
  );
};
