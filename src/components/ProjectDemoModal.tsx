import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Cpu, CheckCircle2, ShieldCheck, Sparkles, RefreshCw, Github } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDemoModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#17211B]/60 backdrop-blur-sm">
        <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#F5F1E8] border border-[#17211B]/20 shadow-2xl overflow-hidden z-10 text-[#17211B]"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#17211B]/15 bg-[#EDE8DC]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3F7D68]" />
              <div>
                <h3 className="font-serif-display text-2xl font-medium text-[#17211B]">
                  {project.title}
                </h3>
                <p className="font-sans-ui text-[11px] font-bold uppercase tracking-wider text-[#3F7D68]">
                  Interactive Simulation Sandbox
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#526057] hover:text-[#17211B] bg-[#F5F1E8] border border-[#17211B]/10 hover:border-[#17211B]/30 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
            {/* Tech badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#17211B]/10">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="font-sans-ui text-xs px-2.5 py-0.5 bg-[#EDE8DC] border border-[#17211B]/10 text-[#17211B]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-sans-ui font-semibold text-[#17211B] hover:text-[#3F7D68] bg-[#EDE8DC] px-3 py-1.5 border border-[#17211B]/15 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Repository</span>
              </a>
            </div>

            {/* Architecture Overview */}
            {project.demoDetails && (
              <div className="bg-[#EDE8DC] p-5 border border-[#17211B]/15 space-y-2">
                <div className="flex items-center gap-2 text-xs font-sans-ui text-[#3F7D68] font-bold uppercase tracking-wider">
                  <Cpu className="w-4 h-4" />
                  <span>Pipeline Architecture</span>
                </div>
                <div className="font-sans-ui text-xs text-[#17211B] bg-[#FFFFFF] p-3 border border-[#17211B]/10 overflow-x-auto font-medium">
                  {project.demoDetails.architecture}
                </div>
                <div className="text-xs text-[#526057] flex items-center gap-1.5 pt-1">
                  <ShieldCheck className="w-4 h-4 text-[#3F7D68]" />
                  <span>{project.demoDetails.keyMetric}</span>
                </div>
              </div>
            )}

            {/* Interactive Simulation Components */}
            {project.id === 'cognitive-reflection' && (
              <CognitiveReflectionSimulator demoDetails={project.demoDetails} />
            )}

            {project.id === 'climate-smart-agriculture' && (
              <ClimateSmartAgricultureSimulator demoDetails={project.demoDetails} />
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// 1. Cognitive Reflection Interactive Component
const CognitiveReflectionSimulator: React.FC<{ demoDetails?: any }> = ({ demoDetails }) => {
  const [inputText, setInputText] = useState(
    'Felt overwhelmed balancing university hackathon prep and algorithm coursework today. Too many tasks at once.'
  );
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState({
    valence: -0.28,
    pattern: 'Task-Switching Latency & Workload Saturation',
    actionItem: 'Implement 90-minute single-focus blocks. Delegate non-critical dependencies.',
    recommendation:
      'High cognitive demand detected across parallel domains. Recommend 15-minute restorative detachment prior to evening review.',
  });

  const runAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      if (inputText.toLowerCase().includes('happy') || inputText.toLowerCase().includes('great')) {
        setAnalysisResult({
          valence: +0.72,
          pattern: 'Positive Efficacy & Flow State Momentum',
          actionItem: 'Document successful workflow factors for future reference.',
          recommendation:
            'Sustained high cognitive bandwidth. Optimal time for tackling difficult algorithmic proofs.',
        });
      } else {
        setAnalysisResult({
          valence: -0.35,
          pattern: 'Contextual Satiation & Academic Strain',
          actionItem: 'Chunk syllabus into 3 priority milestones.',
          recommendation:
            'Model suggests restorative time-boxing. Journal record stored securely in isolated user document.',
        });
      }
    }, 600);
  };

  return (
    <div className="space-y-5 bg-[#FFFFFF] p-6 border border-[#17211B]/15">
      <div className="flex items-center justify-between">
        <span className="font-sans-ui text-xs font-bold uppercase tracking-wider text-[#3F7D68]">
          Interactive Gemini Analysis Sandbox
        </span>
        <span className="font-sans-ui text-[11px] text-[#526057]">Model: Gemini Flash</span>
      </div>

      <div>
        <label className="block text-xs font-sans-ui font-bold uppercase tracking-wider text-[#17211B] mb-2">
          Sample Journal Input:
        </label>
        <textarea
          rows={3}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full bg-[#F5F1E8] border border-[#17211B]/20 p-3 text-sm text-[#17211B] focus:outline-none focus:border-[#3F7D68]"
        />
      </div>

      <div className="flex items-center justify-between pt-1">
        <button
          onClick={() =>
            setInputText(
              'Presented our project prototype at the symposium and received enthusiastic validation from faculty evaluators!'
            )
          }
          className="font-sans-ui text-xs font-semibold text-[#526057] hover:text-[#3F7D68] underline"
        >
          Load Symposium Scenario
        </button>

        <button
          onClick={runAnalysis}
          disabled={isAnalyzing}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3F7D68] text-white font-sans-ui text-xs font-bold uppercase tracking-wider hover:bg-[#2F6150] transition-colors cursor-pointer"
        >
          {isAnalyzing ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5" />
              <span>Run Gemini Extraction</span>
            </>
          )}
        </button>
      </div>

      {/* Result Cards */}
      <div className="pt-4 border-t border-[#17211B]/10 space-y-3 bg-[#F5F1E8] p-4 border border-[#17211B]/10">
        <div className="flex items-center justify-between text-xs font-sans-ui">
          <span className="font-bold text-[#17211B]">Detected Cognitive Pattern:</span>
          <span className="text-[#3F7D68] font-bold">{analysisResult.pattern}</span>
        </div>

        <div className="flex items-center justify-between text-xs font-sans-ui">
          <span className="font-bold text-[#17211B]">Emotional Valence Score:</span>
          <span
            className={`font-bold ${
              analysisResult.valence >= 0 ? 'text-[#3F7D68]' : 'text-[#C5A66A]'
            }`}
          >
            {analysisResult.valence > 0 ? `+${analysisResult.valence}` : analysisResult.valence}
          </span>
        </div>

        <div className="pt-2 border-t border-[#17211B]/10 text-xs font-sans-ui text-[#526057] leading-relaxed">
          <strong className="text-[#17211B] block mb-1">Synthesized Action:</strong>
          {analysisResult.actionItem}
        </div>
      </div>
    </div>
  );
};

// 2. Climate Smart Agriculture Interactive Component
const ClimateSmartAgricultureSimulator: React.FC<{ demoDetails?: any }> = () => {
  const [rainfall, setRainfall] = useState(1100);
  const [temperature, setTemperature] = useState(28);
  const [soilType, setSoilType] = useState('Clay Loam');
  const [isInferring, setIsInferring] = useState(false);
  const [result, setResult] = useState({
    crop: 'Paddy / Rice',
    yieldVal: '4.85 Tonnes / Hectare',
    confidence: '94.2%',
    priceForecast: '₹2,450 / Quintal (+6.4% in 30d)',
  });

  const runPrediction = () => {
    setIsInferring(true);
    setTimeout(() => {
      setIsInferring(false);
      if (rainfall < 700) {
        setResult({
          crop: 'Millets / Ragi',
          yieldVal: '2.40 Tonnes / Hectare',
          confidence: '91.8%',
          priceForecast: '₹3,200 / Quintal (Stable)',
        });
      } else if (temperature > 32) {
        setResult({
          crop: 'Cotton / Groundnut',
          yieldVal: '3.10 Tonnes / Hectare',
          confidence: '93.5%',
          priceForecast: '₹6,800 / Quintal (+3.2%)',
        });
      } else {
        setResult({
          crop: 'Paddy / Rice',
          yieldVal: '4.85 Tonnes / Hectare',
          confidence: '94.2%',
          priceForecast: '₹2,450 / Quintal (+6.4%)',
        });
      }
    }, 450);
  };

  return (
    <div className="space-y-5 bg-[#FFFFFF] p-6 border border-[#17211B]/15">
      <div className="flex items-center justify-between">
        <span className="font-sans-ui text-xs font-bold uppercase tracking-wider text-[#3F7D68]">
          Random Forest Crop Regressor
        </span>
        <span className="font-sans-ui text-[11px] text-[#526057]">Scikit-Learn Ensemble</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-sans-ui font-semibold text-[#17211B] mb-1">
            Annual Rainfall: {rainfall} mm
          </label>
          <input
            type="range"
            min={400}
            max={2200}
            value={rainfall}
            onChange={(e) => setRainfall(Number(e.target.value))}
            className="w-full accent-[#3F7D68]"
          />
        </div>

        <div>
          <label className="block text-xs font-sans-ui font-semibold text-[#17211B] mb-1">
            Mean Temperature: {temperature} °C
          </label>
          <input
            type="range"
            min={18}
            max={40}
            value={temperature}
            onChange={(e) => setTemperature(Number(e.target.value))}
            className="w-full accent-[#3F7D68]"
          />
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <span className="font-sans-ui text-xs text-[#526057]">Soil Profile: {soilType}</span>
        <button
          onClick={runPrediction}
          disabled={isInferring}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3F7D68] text-white font-sans-ui text-xs font-bold uppercase tracking-wider hover:bg-[#2F6150] transition-colors cursor-pointer"
        >
          {isInferring ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Evaluating...</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Run Random Forest Inference</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#17211B]/10">
        <div className="bg-[#F5F1E8] p-3 border border-[#17211B]/10">
          <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#526057] block">
            Optimal Crop
          </span>
          <span className="font-serif-display text-lg font-semibold text-[#17211B]">
            {result.crop}
          </span>
        </div>
        <div className="bg-[#F5F1E8] p-3 border border-[#17211B]/10">
          <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#526057] block">
            Expected Yield
          </span>
          <span className="font-sans-ui text-xs font-bold text-[#3F7D68]">
            {result.yieldVal}
          </span>
        </div>
      </div>
    </div>
  );
};
