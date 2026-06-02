import { useState } from 'react';

const experiences = [
  {
    company: 'Praxxys Solutions, Inc.',
    role: 'UI/UX Designer & Director Roles',
    period: 'Sep 2018 — Mar 2026',
    rolesHeld: [
      'Design Director',
      'Production Manager',
      'Senior UI/UX Designer',
      'Senior Innovation Specialist'
    ],
    description: 'During my tenure at Praxxys, I led multidisciplinary teams of senior and mid-level designers, established cohesive design workflows, and facilitated client-focused consultations. Focused heavily on complex core internal tooling systems, system administration products, and blue-chip commercial products.',
    systems: [
      'Production Management System',
      'Schedule Management System',
      'Ticketing System',
      'Comprehensive HR Portal & Directory'
    ]
  },
  {
    company: 'Innov8tive Design and Development',
    role: 'Graphic Design Intern',
    period: 'Nov 2017 — Mar 2018',
    rolesHeld: ['Graphic Design Intern'],
    description: 'Assisted senior design staff with digital advertising designs, web illustrations, asset pre-compositions, brand assets, and low-fidelity interface layouts across multiple client accounts.',
    systems: []
  }
];

export default function ExperienceSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 sm:py-32 px-6 max-w-[1200px] mx-auto border-t border-[#222222]/30">
      <div className="reveal-on-scroll">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666] mb-3 block">
          02 / Timeline
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-16">
          Professional Experience
        </h2>
      </div>

      <div className="relative">
        {/* Timeline main vertical line */}
        <div className="absolute left-4 sm:left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-accent-custom via-[#222222] to-transparent -translate-x-1/2 hidden sm:block" />

        <div className="space-y-16 relative">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const isOpen = activeIdx === index;

            return (
              <div
                key={exp.company}
                className={`flex flex-col sm:flex-row items-stretch timeline-node reveal-on-scroll`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Visual marker inside timeline */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-[#222222] bg-[#0a0a0a] group-hover:border-accent-custom flex items-center justify-center transition-all duration-300 hidden sm:flex">
                  <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-accent-custom shadow-[0_0_8px_#7c3aed]' : 'bg-[#333]'}`} />
                </div>

                {/* Grid Spacer for symmetric timeline */}
                <div className={`w-full sm:w-1/2 hidden sm:block ${isLeft ? 'order-1 pr-12 text-right' : 'order-2 pl-12'}`}>
                  <span className="font-mono text-xs text-[#666666]">{exp.period}</span>
                  <h3 className="text-white text-lg font-bold mt-1">{exp.company}</h3>
                </div>

                {/* Content Card Panel */}
                <div className={`w-full sm:w-1/2 pl-8 sm:pl-0 ${isLeft ? 'order-2 sm:pl-12' : 'order-1 sm:pr-12'}`}>
                  <div
                    onClick={() => setActiveIdx(isOpen ? null : index)}
                    className={`custom-card-container rounded-lg p-6 sm:p-8 cursor-pointer transition-all duration-500 hover:scale-[1.01] ${
                      isOpen
                        ? 'border-accent-custom! shadow-[0_4px_30px_rgba(124,58,237,0.15)] bg-slate-900!'
                        : 'hover:border-zinc-700/80!'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        {/* Mobile view metadata helper */}
                        <div className="sm:hidden block mb-2">
                          <span className="font-mono text-xs text-[#6ff9ff]/70">{exp.period}</span>
                        </div>
                        <h4 className="text-xl font-bold font-display text-white group-hover:text-accent-custom transition-all">
                          {exp.company}
                        </h4>
                        <p className="text-sm text-accent-cyan font-mono mt-0.5">
                          {exp.role}
                        </p>
                      </div>
                      
                      <span className="text-xs text-[#666666] font-mono leading-none border border-[#222222] px-2 py-1 rounded">
                        {isOpen ? 'COLLAPSE' : 'EXPAND'}
                      </span>
                    </div>

                    <p className="text-sm text-[#888888] leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Expandable Details Container */}
                    {isOpen && (
                      <div className="mt-6 border-t border-[#222222]/50 pt-6 animate-fade-in space-y-6">
                        {/* Roles held badges */}
                        <div>
                          <h5 className="text-xs font-mono uppercase tracking-wider text-[#666666] mb-3">
                            Roles & Positions
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.rolesHeld.map((role) => (
                              <span
                                key={role}
                                className="text-xs text-white bg-surface border border-accent-custom/25 px-3 py-1 rounded-full font-sans shadow-sm"
                              >
                                {role}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Systems built info */}
                        {exp.systems.length > 0 && (
                          <div className="border-t border-[#222222]/30 pt-4">
                            <h5 className="text-xs font-mono uppercase tracking-wider text-[#666666] mb-3">
                              Key Internal Platforms Engineered
                            </h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {exp.systems.map((system) => (
                                <div
                                  key={system}
                                  className="flex items-center gap-2.5 text-xs text-[#b8b8b8] hover:text-white transition-colors"
                                >
                                  <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full" />
                                  <span>{system}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
