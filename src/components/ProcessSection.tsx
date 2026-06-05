import { Eye, Search, PenSquare, Grid, RefreshCw, Milestone, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const phases = [
  {
    phase: "01",
    icon: Search,
    title: "Discovery",
    subtitle: "Strategic Alignment & Scoping",
    desc: "Every successful initiative begins with a deep comprehension of the 'Why'. I collaborate with executive leadership and cross-functional stakeholders to outline business goals, user success metrics, technical boundaries, and high-impact opportunities.",
    deliverables: [
      "Stakeholder Alignment Workshops",
      "Business Requirements Docs",
      "User Persona Insights",
      "Opportunity & Refinement Mapping"
    ]
  },
  {
    phase: "02",
    icon: Eye,
    title: "Research & Analysis",
    subtitle: "Analyzing Landscape & Heuristics",
    desc: "I perform exhaustive qualitative and quantitative studies of competitor systems, industry-standard patterns, and real user interactive behaviors. This identifies critical UI friction points and charts a course for high-conversion design improvements.",
    deliverables: [
      "Competitor Heuristic Analysis",
      "Deep UX Research Reports",
      "Contemporary Benchmark Studies",
      "Product Strategy & Risk Assessment"
    ]
  },
  {
    phase: "03",
    icon: PenSquare,
    title: "Blueprint & Design System Planning",
    subtitle: "Structural Foundations First",
    desc: "Before discussing aesthetic decisions, I craft rigorous architectural pillars. By mapping comprehensive user flows, setting up wireframe blueprints, and aligning on design tokens, we lay a solid bedrock for fluid scalability.",
    deliverables: [
      "Rigorous Information Architecture",
      "Low/Mid-Fidelity Wireframes",
      "High-Conversion User Journeys",
      "Tokenized System Planning"
    ]
  },
  {
    phase: "04",
    icon: Grid,
    title: "UI Design & Prototyping",
    subtitle: "Polished, Scalable Experiences",
    desc: "I translate underlying strategic goals into beautiful, pixel-perfect, and highly functional digital interfaces. Leveraging responsive layouts, fluid typographic grids, and rich interactive prototypes, the experience is animated and thoroughly validated.",
    deliverables: [
      "High-Fidelity Interactive Layouts",
      "Clickable Dynamic Prototypes",
      "Responsive Desktop & Mobile Grids",
      "Continuous Design Validation"
    ]
  },
  {
    phase: "05",
    icon: RefreshCw,
    title: "Collaboration & Iteration",
    subtitle: "Iterative Engineering Alignment",
    desc: "Design is a transparent, highly iterative team sport. I partner directly with core development teams, QA engineers, and business analysts to review build feasibility, validate motion aesthetics, and continuously polish performance.",
    deliverables: [
      "Strategic Design Walkthroughs",
      "Interactive QA & Feedback Loops",
      "Heuristic Defect Resolution",
      "Cross-Team Engineering Syncrecy"
    ]
  },
  {
    phase: "06",
    icon: Milestone,
    title: "Delivery & Growth",
    subtitle: "Perfect Handoff & Value Delivery",
    desc: "I oversee a pristine, highly organized asset transition to the engineering team. By publishing fully documented Figma design systems, establishing clear component specs, and evaluating actual market metrics, we guarantee lasting digital growth.",
    deliverables: [
      "Pragmatic Developer Handoff Docs",
      "Comprehensive Living Design Systems",
      "Production Performance Surveys",
      "Ongoing Optimization Studies"
    ]
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 sm:py-32 px-6 max-w-[1200px] mx-auto border-t border-[#222222]/30 relative bg-transparent">
      {/* Background Ambience Ambient Glow effects */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-accent-custom/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-accent-cyan/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Section Leadership Header */}
      <div className="mb-16 relative z-10">
        <div className="flex items-center gap-2 mb-3 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-custom animate-pulse"></span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666]">
            How I Work / Strategic Blueprint
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
          Process & Product Mindset
        </h2>
      </div>

      {/* Clean, high-impact vertical list of design lead process cards */}
      <div className="flex flex-col gap-8 sm:gap-10 relative z-10 w-full">
        {phases.map((p) => {
          const IconComponent = p.icon;

          return (
            <div
              key={p.phase}
              className="w-full text-left rounded-2xl border border-zinc-900 bg-[#121316]/50 hover:bg-[#121316]/90 px-6 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 group-hover:py-8 sm:group-hover:py-10 md:group-hover:py-12 flex flex-col justify-center transition-all duration-500 relative group hover:border-[#7c3aed]/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] cursor-default"
            >
              <div className="flex items-start justify-between w-full relative">
                <div className="flex flex-col md:flex-row items-start flex-1 gap-6 sm:gap-8 md:gap-10">
                  
                  {/* Giant Phase sequence index */}
                  <span
                    className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-transparent select-none leading-none mr-4 transition-colors duration-300 group-hover:text-accent-custom"
                    style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.08)' }}
                  >
                    {p.phase}
                  </span>

                  {/* Info details & deliverables layout block */}
                  <div className="flex-1 mt-1 sm:mt-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-1">
                      <div className="flex items-center gap-3">
                        {IconComponent && (
                          <IconComponent 
                            className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-500 transition-colors duration-300 group-hover:text-accent-custom"
                          />
                        )}
                        <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl tracking-tight text-white/90 transition-colors duration-300 group-hover:text-white">
                          {p.title}
                        </h3>
                      </div>
                    </div>

                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#a1a1aa] block font-semibold mb-1 group-hover:mb-3 transition-all duration-300">
                      {p.subtitle}
                    </span>
                    
                    {/* Collapsible dynamic grid height micro-interaction */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out overflow-hidden">
                      <div className="min-h-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-4xl mt-3 mb-4 sm:mb-6">
                          {p.desc}
                        </p>

                        {/* Deliverables section inside Card */}
                        <div className="mt-4 pt-4 border-t border-zinc-900/50">
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#666666] block mb-3 font-bold select-none">
                            Key Deliverables & Outcomes
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                            {p.deliverables.map((deliv, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 shrink-0 text-zinc-700 transition-colors duration-350 group-hover:text-accent-custom/80" />
                                <span className="text-xs sm:text-sm font-medium text-zinc-500 transition-colors duration-350 group-hover:text-zinc-350">
                                  {deliv}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Arrow Icon button in top right, rotates on hover */}
                <div className="mt-1 sm:mt-2 shrink-0 animate-pulse group-hover:animate-none">
                  <div className="relative flex items-center justify-center rounded-full border border-zinc-900 text-zinc-700 transition-all duration-300 w-10 h-10 sm:w-12 sm:h-12 group-hover:border-accent-custom/35 group-hover:text-accent-custom group-hover:bg-accent-custom/5 group-hover:scale-105">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 -rotate-45 group-hover:rotate-0" />
                  </div>
                </div>

              </div>

              {/* Purple accent color strip on hover */}
              <div 
                className="absolute left-0 bottom-0 top-0 w-[4px] bg-accent-custom opacity-0 transition-opacity duration-300 rounded-l-2xl group-hover:opacity-100"
              />

            </div>
          );
        })}
      </div>
    </section>
  );
}
