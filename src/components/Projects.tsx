import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, CheckCircle2, Play, ArrowUpRight, Sparkles } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';
import { ProjectVisual } from './ProjectVisual';
import { ProjectDemoModal } from './ProjectDemoModal';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [activeDemoProject, setActiveDemoProject] = useState<ProjectItem | null>(null);

  // Top 3 major projects with alternating layout
  const majorProjects = PROJECTS_DATA.slice(0, 3);
  // Remaining 2 academic / hardware projects
  const secondaryProjects = PROJECTS_DATA.slice(3);

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1360px] mx-auto border-t border-[#17211b]/10"
    >
      <SectionHeading
        label="04 — PROJECTS"
        title="THINGS I'VE&#10;BUILT."
        subtitle="Practical applications connecting artificial intelligence, machine learning, and data analytics to real-world problems."
      />

      {/* Major Case Studies: Alternating Layout */}
      <div className="space-y-24 sm:space-y-32 lg:space-y-40">
        {majorProjects.map((project, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              {/* Text Block */}
              <div
                className={`lg:col-span-6 space-y-6 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                {/* Category & Index */}
                <div className="flex items-center gap-3">
                  <span className="font-serif-display text-2xl sm:text-3xl font-light text-[#c5a66a]">
                    0{idx + 1}
                  </span>
                  <span className="h-px w-6 bg-[#17211b]/20" />
                  <span className="font-sans-ui text-xs font-bold uppercase tracking-[0.14em] text-[#3f7d68]">
                    {project.category}
                  </span>
                </div>

                {/* Project Title in Cormorant Garamond */}
                <h3 className="font-serif-display font-medium text-3xl sm:text-4xl lg:text-5xl leading-[1.08] text-[#17211b]">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-sans-ui text-base sm:text-lg text-[#526057] leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies List */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-sans-ui text-xs font-semibold uppercase tracking-wider text-[#17211b] bg-[#e3ded2] border border-[#17211b]/10 px-2.5 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features */}
                <div className="pt-2 border-t border-[#17211b]/10 space-y-2.5">
                  <h4 className="font-sans-ui text-xs font-bold uppercase tracking-wider text-[#17211b]">
                    Core Technical Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3f7d68] mt-0.5 shrink-0" />
                        <span className="font-sans-ui text-xs sm:text-[13px] text-[#526057] leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  {project.hasLiveDemo && (
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => setActiveDemoProject(project)}
                      icon={<Play className="w-3.5 h-3.5 fill-current" />}
                    >
                      LIVE DEMO
                    </Button>
                  )}

                  <Button
                    variant="secondary"
                    size="md"
                    href={project.githubUrl}
                    showArrow={false}
                    icon={<Github className="w-3.5 h-3.5" />}
                  >
                    SOURCE CODE
                  </Button>
                </div>
              </div>

              {/* Visual Block */}
              <div
                className={`lg:col-span-6 ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <ProjectVisual
                  project={project}
                  onOpenDemo={
                    project.hasLiveDemo ? () => setActiveDemoProject(project) : undefined
                  }
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Secondary Projects Section */}
      <div className="mt-28 sm:mt-36 pt-16 border-t border-[#17211b]/15">
        <div className="mb-10">
          <span className="font-sans-ui text-xs font-bold uppercase tracking-[0.18em] text-[#3f7d68] block mb-2">
            PRACTICAL EXPLORATIONS
          </span>
          <h3 className="font-serif-display text-3xl sm:text-4xl font-medium text-[#17211b]">
            Hardware, IoT & Campus Systems.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((proj, sIdx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: sIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#e3ded2] p-6 sm:p-8 border border-[#17211b]/15 flex flex-col justify-between group hover:border-[#3f7d68]/60 transition-colors shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif-display text-xl font-light text-[#c5a66a]">
                    0{sIdx + 4}
                  </span>
                  <span className="font-sans-ui text-[11px] font-bold uppercase tracking-wider text-[#3f7d68]">
                    {proj.category}
                  </span>
                </div>

                <h4 className="font-serif-display text-2xl sm:text-3xl font-medium text-[#17211b] group-hover:text-[#3f7d68] transition-colors">
                  {proj.title}
                </h4>

                <p className="font-sans-ui text-xs sm:text-sm text-[#526057] leading-relaxed">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.technologies.map((t) => (
                    <span
                      key={t}
                      className="font-sans-ui text-[10px] font-semibold uppercase tracking-wider text-[#17211b] bg-[#ede9df] px-2 py-0.5 border border-[#17211b]/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#17211b]/10 flex items-center justify-between">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans-ui text-xs font-bold uppercase tracking-wider text-[#17211b] group-hover:text-[#3f7d68] transition-colors"
                >
                  <span>Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Demo Simulation Modal */}
      <ProjectDemoModal
        project={activeDemoProject}
        isOpen={!!activeDemoProject}
        onClose={() => setActiveDemoProject(null)}
      />
    </section>
  );
};
