import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Search, PenSquare, Grid, RefreshCw, Milestone, ArrowUpRight } from 'lucide-react';

const phases = [
  {
    phase: "01",
    icon: Search,
    title: "Discovery",
    subtitle: "Uncovering the \"Why\"",
    desc: "Every exceptional project begins with complete alignment on why it is being built. I evaluate stakeholder goals, establish business success metrics, analyze the target user demographic, and trace major technical boundaries early."
  },
  {
    phase: "02",
    icon: Eye,
    title: "UI/UX Research",
    subtitle: "Competitor & Contemporary Analysis",
    desc: "I perform deep competitive audits, trace sector heuristics, catalog user pain points, and discover gaps in existing digital systems to deliver strategic UX improvements that stand out cleanly in the market."
  },
  {
    phase: "03",
    icon: PenSquare,
    title: "Blueprint",
    subtitle: "Wireframing, Structure First",
    desc: "Before introducing any brand identity, I build comprehensive interactive wireframes and structural user flows. Drawing maps of the UX flow ensures clear information hierarchy and effortless user navigation."
  },
  {
    phase: "04",
    icon: Grid,
    title: "Design System",
    subtitle: "Brand-aligned Component Library",
    desc: "For scalability, I build robust, developer-ready Design Systems. Setting up flexible typography rules, unified spacing tokens, theme definitions, and nested Figma auto-layout components ensures fluid scale."
  },
  {
    phase: "05",
    icon: RefreshCw,
    title: "Refining & Iterating",
    subtitle: "Collaborative Feedback Loop",
    desc: "Design is never a solitary process. I lead comprehensive visual QA workshops, execute cognitive walkthroughs with real audiences, and partner with dev engineering assets to refine performance."
  },
  {
    phase: "06",
    icon: Milestone,
    title: "Conclusion",
    subtitle: "Exceptional Scalable Experience",
    desc: "Handoff is polished to absolute perfection. High-fidelity spec documentation, clean asset repositories, and ongoing coordinate support ensure the engineered application retains pixel-perfect design accuracy."
  }
];

export default function ProcessSection() {
  const [activePhase, setActivePhase] = useState("01");

  return (
    <section id="process" className="py-24 sm:py-32 px-6 max-w-[1200px] mx-auto border-t border-[#222222]/30">
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-custom animate-pulse"></span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666]">
            06 / Workflow
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-8">
          My Creative Process
        </h2>
        <p className="text-zinc-500 max-w-xl text-sm sm:text-base leading-relaxed">
          A structured 6-phase journey from abstract product alignment to robust, scalable and developers-ready systems.
        </p>
      </div>

      <div className="flex flex-col border-t border-zinc-800/40 divide-y divide-zinc-850/50">
        {phases.map((p) => {
          const isActive = activePhase === p.phase;
          return (
            <div
              key={p.phase}
              onClick={() => setActivePhase(p.phase)}
              onMouseEnter={() => setActivePhase(p.phase)}
              className={`w-full text-left transition-all duration-350 cursor-pointer group relative overflow-hidden rounded-xl border ${
                isActive 
                  ? 'bg-[#121316]/70 border-zinc-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.45)]' 
                  : 'border-transparent hover:bg-white/[0.02]'
              } p-6 sm:p-8`}
            >
              <div className="flex items-start justify-between w-full">
                <div className="flex items-start flex-1 mr-4">
                  {/* Phase number */}
                  <span
                    className={`font-display text-4xl sm:text-6xl font-extrabold tracking-tighter transition-all duration-500 mr-6 sm:mr-10 select-none ${
                      isActive ? 'text-accent-custom scale-102' : 'text-transparent'
                    }`}
                    style={
                      !isActive
                        ? { WebkitTextStroke: '1px rgba(255, 255, 255, 0.12)' }
                        : {}
                    }
                  >
                    {p.phase}
                  </span>

                  {/* Title & info list wrapper */}
                  <div className="flex-1 mt-1 sm:mt-2">
                    <div className="flex items-center gap-3">
                      <h3 className={`font-display font-extrabold text-lg sm:text-2xl transition-all duration-300 ${
                        isActive ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'
                      }`}>
                        {p.title}
                      </h3>
                      {isActive && (
                        <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-accent-custom/85 bg-accent-custom/10 border border-accent-custom/20 px-2 py-0.5 rounded">
                          Active
                        </span>
                      )}
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#a1a1aa] block mb-2">
                            {p.subtitle}
                          </span>
                          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-2xl">
                            {p.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Arrow indicator and visual container */}
                <div className="mt-1 sm:mt-2 shrink-0">
                  <div
                    className={`relative flex items-center justify-center rounded-full border transition-all duration-300 w-10 h-10 sm:w-12 sm:h-12 ${
                      isActive
                        ? 'border-accent-custom/50 text-accent-custom bg-accent-custom/10 scale-105 shadow-[0_0_15px_rgba(124,58,237,0.15)]'
                        : 'border-zinc-800 text-zinc-600 group-hover:border-zinc-700 group-hover:text-zinc-400'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
