import { useState, useEffect, useRef } from 'react';
import { Eye, Search, PenSquare, Grid, RefreshCw, Milestone } from 'lucide-react';

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
  const refs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const phaseId = entry.target.getAttribute('data-phase');
            if (phaseId) setActivePhase(phaseId);
          }
        });
      },
      {
        rootMargin: '-40% 0px -45% 0px', // detects when element passes the central view area
        threshold: 0.1
      }
    );

    phases.forEach((p) => {
      const el = refs.current[p.phase];
      if (el) observer.observe(el);
    });

    return () => {
      phases.forEach((p) => {
        const el = refs.current[p.phase];
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleStepClick = (phaseId: string) => {
    setActivePhase(phaseId);
    const target = refs.current[phaseId];
    if (target) {
      const offsetTop = target.offsetTop - 120;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="process" className="py-24 sm:py-32 px-6 max-w-[1200px] mx-auto border-t border-[#222222]/30">
      <div className="reveal-on-scroll">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666] mb-3 block">
          06 / Workflow
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-8">
          Creative Process
        </h2>
        <p className="text-[#666666] max-w-xl text-base leading-relaxed mb-16">
          A structured 6-phase journey from abstract product alignment to robust, scalable and developers-ready systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative">
        
        {/* Left Side: Sticky Process Progress Visualizer */}
        <div className="lg:col-span-4 sticky top-32 hidden lg:block border-l border-[#222222] pl-8 py-2">
          <div className="flex flex-col gap-6 relative">
            {phases.map((p) => {
              const isActive = activePhase === p.phase;
              return (
                <button
                  key={p.phase}
                  onClick={() => handleStepClick(p.phase)}
                  className="flex items-center gap-4 text-left group focus:outline-none focus:ring-0"
                >
                  <span
                    className={`font-mono text-xs font-semibold tracking-widest transition-all duration-300 ${
                      isActive ? 'text-accent-custom scale-110' : 'text-[#444444] group-hover:text-white'
                    }`}
                  >
                    PHASE_{p.phase}
                  </span>
                  
                  <span
                    className={`h-[1px] transition-all duration-500 ${
                      isActive ? 'w-12 bg-accent-custom' : 'w-4 bg-[#222222] group-hover:bg-[#444444]'
                    }`}
                  />
                  
                  <span
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-[#666666] group-hover:text-[#999999]'
                    }`}
                  >
                    {p.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Step details scrolling pane */}
        <div className="lg:col-span-8 space-y-16 lg:space-y-24">
          {phases.map((p) => {
            const IconComponent = p.icon;
            const isActive = activePhase === p.phase;

            return (
              <div
                key={p.phase}
                ref={(el) => (refs.current[p.phase] = el)}
                data-phase={p.phase}
                className={`reveal-on-scroll flex gap-6 sm:gap-8 items-start relative border-l-2 pl-6 sm:pl-8 transition-all duration-500 ${
                  isActive
                    ? 'border-accent-custom'
                    : 'border-[#222222]'
                }`}
              >
                {/* Visual phase icon */}
                <div
                  className={`w-12 h-12 rounded flex items-center justify-center border transition-all duration-500 shrink-0 ${
                    isActive
                      ? 'bg-accent-custom/10 border-accent-custom text-accent-custom shadow-[0_0_15px_rgba(124,58,237,0.1)]'
                      : 'bg-surface border-[#222222] text-[#444444]'
                  }`}
                  style={{ opacity: isActive ? 1.0 : 0.4 }}
                >
                  <IconComponent className="w-5 h-5" strokeWidth={1.5} />
                </div>

                <div 
                  className="transition-all duration-500 flex-1"
                  style={{ opacity: isActive ? 1.0 : 0.4 }}
                >
                  <span className={`font-mono text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-350 ${
                    isActive ? 'text-accent-custom' : 'text-[#666666]'
                  }`}>
                    Phase {p.phase} — {p.title}
                  </span>
                  
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-2 mb-4">
                    {p.subtitle}
                  </h3>
                  
                  <p className="process-desc-text text-sm sm:text-base leading-relaxed max-w-2xl transition-all duration-300">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
