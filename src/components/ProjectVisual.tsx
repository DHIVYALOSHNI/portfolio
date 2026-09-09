import React from 'react';
import { Sparkles, Brain, Cpu, Database, Activity, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectVisualProps {
  project: ProjectItem;
  onOpenDemo?: () => void;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ project, onOpenDemo }) => {
  if (project.id === 'cognitive-reflection') {
    return (
      <div className="relative w-full aspect-[16/11] bg-[#e3ded2] border border-[#17211b]/15 p-6 sm:p-8 flex flex-col justify-between overflow-hidden group shadow-[0_8px_30px_rgba(23,33,27,0.04)]">
        {/* Subtle architectural grid pattern */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#17211b 0.75px, transparent 0.75px)`,
            backgroundSize: '18px 18px',
          }}
        />

        {/* Top Header Strip */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#17211b]/10 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#3f7d68]" />
            <span className="font-sans-ui text-xs font-bold uppercase tracking-widest text-[#3f7d68]">
              GEMINI AI INFERENCE PIPELINE
            </span>
          </div>
          <span className="font-sans-ui text-[11px] font-semibold text-[#526057] uppercase tracking-wider">
            Google Gen AI Ideathon
          </span>
        </div>

        {/* Center Architectural Vector Diagram */}
        <div className="relative z-10 my-auto py-4 space-y-4">
          {/* Node Flow */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
            <div className="bg-[#ede9df] border border-[#17211b]/15 p-3 shadow-xs">
              <span className="font-sans-ui text-[10px] font-bold uppercase tracking-wider text-[#526057] block mb-1">
                Step 01: Client
              </span>
              <p className="font-sans-ui text-xs font-bold text-[#17211b]">Reflective Journal Entry</p>
            </div>

            <div className="bg-[#ede9df] border border-[#3f7d68]/40 p-3 shadow-xs relative">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#3f7d68] text-white text-[9px] font-bold px-1.5 py-0.2 uppercase tracking-wider">
                Active
              </div>
              <span className="font-sans-ui text-[10px] font-bold uppercase tracking-wider text-[#3f7d68] block mb-1">
                Step 02: Gemini
              </span>
              <p className="font-sans-ui text-xs font-bold text-[#17211b]">Pattern Extraction</p>
            </div>

            <div className="bg-[#ede9df] border border-[#17211b]/15 p-3 shadow-xs">
              <span className="font-sans-ui text-[10px] font-bold uppercase tracking-wider text-[#526057] block mb-1">
                Step 03: Firestore
              </span>
              <p className="font-sans-ui text-xs font-bold text-[#17211b]">Owner-Bound Isolated State</p>
            </div>
          </div>

          {/* Sample Analytical Trace */}
          <div className="bg-[#ede9df]/90 border border-[#17211b]/15 p-4 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-sans-ui font-bold">
              <span className="text-[#3f7d68] uppercase tracking-wider">Analysis Matrix</span>
              <span className="text-[#c5a66a]">Valence Index: +0.42</span>
            </div>
            <p className="font-sans-ui text-xs text-[#526057] leading-relaxed italic">
              "Structured synthesis identifies study-session cognitive focus rhythms and suggests iterative restorative reflections."
            </p>
          </div>
        </div>

        {/* Bottom Interactive Prompt */}
        <div className="relative z-10 flex items-center justify-between pt-4 border-t border-[#17211b]/10">
          <div className="flex items-center gap-2 text-xs font-sans-ui font-semibold text-[#526057]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#3f7d68]" />
            <span>Strict User Data Isolation</span>
          </div>

          {onOpenDemo && (
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-1.5 font-sans-ui text-xs font-bold text-[#3f7d68] hover:text-[#17211b] transition-colors uppercase tracking-wider cursor-pointer"
            >
              <span>Test Interactive Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    );
  }

  if (project.id === 'climate-smart-agriculture') {
    return (
      <div className="relative w-full aspect-[16/11] bg-[#e3ded2] border border-[#17211b]/15 p-6 sm:p-8 flex flex-col justify-between overflow-hidden group shadow-[0_8px_30px_rgba(23,33,27,0.04)]">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#17211b 0.75px, transparent 0.75px)`,
            backgroundSize: '18px 18px',
          }}
        />

        <div className="relative z-10 flex items-center justify-between border-b border-[#17211b]/10 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#c5a66a]" />
            <span className="font-sans-ui text-xs font-bold uppercase tracking-widest text-[#17211b]">
              RANDOM FOREST REGRESSOR
            </span>
          </div>
          <span className="font-sans-ui text-[11px] font-semibold text-[#3f7d68] uppercase tracking-wider">
            94.2% R² Accuracy
          </span>
        </div>

        <div className="relative z-10 my-auto py-4 space-y-4">
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="bg-[#ede9df] border border-[#17211b]/15 p-2.5">
              <span className="font-sans-ui text-[10px] text-[#526057] uppercase tracking-wider block">Soil N-P-K</span>
              <span className="font-sans-ui text-xs font-bold text-[#17211b]">85-42-40</span>
            </div>
            <div className="bg-[#ede9df] border border-[#17211b]/15 p-2.5">
              <span className="font-sans-ui text-[10px] text-[#526057] uppercase tracking-wider block">Rainfall</span>
              <span className="font-sans-ui text-xs font-bold text-[#17211b]">1,100 mm</span>
            </div>
            <div className="bg-[#ede9df] border border-[#17211b]/15 p-2.5">
              <span className="font-sans-ui text-[10px] text-[#526057] uppercase tracking-wider block">Temp</span>
              <span className="font-sans-ui text-xs font-bold text-[#17211b]">28.4 °C</span>
            </div>
            <div className="bg-[#3f7d68] text-white p-2.5">
              <span className="font-sans-ui text-[10px] text-[#dce8df] uppercase tracking-wider block">Inference</span>
              <span className="font-sans-ui text-xs font-bold text-white">&lt; 150ms</span>
            </div>
          </div>

          <div className="bg-[#ede9df] border border-[#17211b]/15 p-4 flex items-center justify-between">
            <div>
              <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#526057] block">
                Target Recommendation
              </span>
              <h4 className="font-serif-display text-xl font-semibold text-[#17211b]">
                Paddy / Rice (Yield: 4.85 T/Ha)
              </h4>
            </div>
            <div className="text-right">
              <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#3f7d68] font-bold block">
                Price Forecast
              </span>
              <span className="font-sans-ui text-sm font-bold text-[#17211b]">
                ₹2,450 / Quintal
              </span>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between pt-4 border-t border-[#17211b]/10">
          <div className="flex items-center gap-2 text-xs font-sans-ui font-semibold text-[#526057]">
            <Activity className="w-3.5 h-3.5 text-[#3f7d68]" />
            <span>10,000+ Regional Agricultural Samples</span>
          </div>

          {onOpenDemo && (
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-1.5 font-sans-ui text-xs font-bold text-[#3f7d68] hover:text-[#17211b] transition-colors uppercase tracking-wider cursor-pointer"
            >
              <span>Test Interactive Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    );
  }

  // Hushh Ambassify Dashboard
  return (
    <div className="relative w-full aspect-[16/11] bg-[#e3ded2] border border-[#17211b]/15 p-6 sm:p-8 flex flex-col justify-between overflow-hidden group shadow-[0_8px_30px_rgba(23,33,27,0.04)]">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#17211b 0.75px, transparent 0.75px)`,
          backgroundSize: '18px 18px',
        }}
      />

      <div className="relative z-10 flex items-center justify-between border-b border-[#17211b]/10 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#17211b]" />
          <span className="font-sans-ui text-xs font-bold uppercase tracking-widest text-[#17211b]">
            AMBASSIFY GROWTH INTERFACE
          </span>
        </div>
        <span className="font-sans-ui text-[11px] font-semibold text-[#526057] uppercase tracking-wider">
          Campaign Analytics
        </span>
      </div>

      <div className="relative z-10 my-auto py-4 space-y-3">
        <div className="bg-[#ede9df] border border-[#17211b]/15 p-4 space-y-3">
          <div className="flex items-center justify-between font-sans-ui text-xs">
            <span className="font-bold text-[#17211b]">Ambassador Growth Pipeline</span>
            <span className="text-[#3f7d68] font-bold">Verified Interface</span>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-sans-ui text-[#526057]">
              <span>Dynamic Engagement Components</span>
              <span>92%</span>
            </div>
            <div className="h-1.5 w-full bg-[#e3ded2]">
              <div className="h-full bg-[#3f7d68] w-[92%]" />
            </div>

            <div className="flex items-center justify-between text-[11px] font-sans-ui text-[#526057] pt-1">
              <span>Performance Analytics Tables</span>
              <span>88%</span>
            </div>
            <div className="h-1.5 w-full bg-[#e3ded2]">
              <div className="h-full bg-[#c5a66a] w-[88%]" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-[#17211b]/10">
        <div className="flex items-center gap-2 text-xs font-sans-ui font-semibold text-[#526057]">
          <Database className="w-3.5 h-3.5 text-[#3f7d68]" />
          <span>Real-Time Contributor Metrics</span>
        </div>
        <span className="font-sans-ui text-[11px] font-bold text-[#17211b] uppercase tracking-wider">
          React & CSS Modular Stack
        </span>
      </div>
    </div>
  );
};
