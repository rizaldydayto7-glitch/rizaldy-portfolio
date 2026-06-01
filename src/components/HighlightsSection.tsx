import { useState } from 'react';
import type { MouseEvent } from 'react';
import { Target, Award, Command, Zap, Layers, GraduationCap } from 'lucide-react';

const highlights = [
  {
    icon: Target,
    title: "Expert Solution Designer",
    subtitle: "Blue-chip Client Solutions",
    desc: "Architected modern user experiences and user-flow structures for global giants and local blue-chip enterprises, balancing intricate business constraints with smooth accessibility."
  },
  {
    icon: Award,
    title: "Leadership & Management",
    subtitle: "Two Teams, Peak Performance",
    desc: "Managed multiple concurrent multidisciplinary design and production teams. Streamlined workflows to optimize throughput with zero loss in visual execution quality."
  },
  {
    icon: Command,
    title: "Industry Versatility",
    subtitle: "20+ Diverse Market Sectors",
    desc: "Synthesized UX systems, design patterns, and domain structures for highly disparate sectors, including complex Fintech, critical MedTech, government portals, and ecommerce systems."
  },
  {
    icon: Zap,
    title: "Project Consultation & QA",
    subtitle: "Upholding Craft Integrity",
    desc: "Acted as head of QA and chief consultant on high-stakes designs. Implemented cross-industry visual standards, component validation systems, and rigorous peer reviews."
  },
  {
    icon: Layers,
    title: "Strategic Contributor",
    subtitle: "Operations & Company Vision",
    desc: "Contributed closely to company-wide strategic roadmapping, software planning, operational expansion setups, and product portfolio diversification workflows."
  },
  {
    icon: GraduationCap,
    title: "Design Mentoring & Training",
    subtitle: "Leveling Up Teams",
    desc: "Pioneered inhouse UX design bootcamps, mentored junior design specialists, trained engineering teams, and successfully screened numerous incoming design candidates."
  }
];

export default function HighlightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Relative position from -0.5 to 0.5
    const relativeX = (x / rect.width) - 0.5;
    const relativeY = (y / rect.height) - 0.5;
    
    // Max tilt degree (8 deg as requested)
    const maxTilt = 8;
    const tiltY = relativeX * maxTilt;
    const tiltX = -relativeY * maxTilt;
    
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    setHoveredIndex(null);
  };

  return (
    <section id="highlights" className="py-24 sm:py-32 px-6 max-w-[1200px] mx-auto border-t border-[#222222]/30">
      <div className="reveal-on-scroll">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666] mb-3 block">
          05 / Impact
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-8">
          Career Highlights
        </h2>
        <p className="text-[#666666] max-w-xl text-base leading-relaxed mb-16">
          Key performance milestones highlighting leadership responsibilities, domain breadth, and structural design strategy.
        </p>
      </div>

      {/* 2x3 Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((hl, index) => {
          const IconComponent = hl.icon;
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={hl.title}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => setHoveredIndex(index)}
              style={{
                transitionDelay: `${index * 50}ms`,
                transitionProperty: 'transform, border-color, box-shadow',
                transitionDuration: '300ms',
                transformStyle: 'preserve-3d',
              }}
              className="reveal-on-scroll glass-panel bg-surface border border-[#222222] p-8 rounded-lg relative overflow-hidden flex flex-col justify-between group active:scale-[0.98]"
            >
              {/* Highlight background radial lighting */}
              <div
                style={{
                  background: `radial-gradient(circle 120px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(124, 58, 237, 0.08) 0%, transparent 80%)`,
                }}
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />

              {/* Shimmer Border highlight glow */}
              <div
                className={`absolute inset-0 border border-accent-custom/50 rounded-lg pointer-events-none transition-all duration-500 scale-[1.01] ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              />

              <div>
                {/* Custom icon container */}
                <div className="w-12 h-12 rounded bg-[#1a1a1a] border border-[#222222] flex items-center justify-center text-accent-custom group-hover:text-accent-cyan group-hover:border-accent-cyan/30 transition-colors duration-500 mb-8">
                  <IconComponent className="w-5 h-5" strokeWidth={1.5} />
                </div>

                <span className="font-mono text-xs text-accent-custom uppercase tracking-wider block mb-2">
                  {hl.subtitle}
                </span>

                <h3 className="font-display font-bold text-xl text-[#f0f0f0] mb-4">
                  {hl.title}
                </h3>

                <p className="text-[#666666] group-hover:text-[#999999] text-sm leading-relaxed transition-colors duration-300">
                  {hl.desc}
                </p>
              </div>

              {/* Small footprint design signature */}
              <div className="mt-8 pt-4 border-t border-[#222222]/50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-mono text-[10px] text-accent-custom">
                  HIGHLIGHT_0{index + 1}
                </span>
                <span className="w-1 h-1 rounded-full bg-accent-custom" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
