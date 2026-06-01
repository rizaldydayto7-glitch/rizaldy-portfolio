const tools = [
  "Figma",
  "Adobe XD",
  "Photoshop",
  "Illustrator",
  "After Effects",
  "Premiere"
];

const skills = [
  "Design System",
  "Prototyping",
  "Wireframing",
  "User Research",
  "Art Direction",
  "Product Management",
  "Cross-Industry UX",
  "Team Management",
  "Planning & Execution"
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-6 max-w-[1200px] mx-auto border-t border-[#222222]/30">
      <div className="reveal-on-scroll">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666] mb-3 block">
          03 / Expertise
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-16">
          Skills & Technologies
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Core Methodology and Skills Group */}
        <div className="bg-[#111111]/30 border border-[#222222]/50 p-8 sm:p-10 rounded-xl relative overflow-hidden reveal-on-scroll">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-accent-custom" />
          <h3 className="font-display font-bold text-xl text-white mb-8 flex items-center justify-between">
            <span>Methodology & Expertise</span>
            <span className="text-xs font-mono text-[#666666] font-normal uppercase">
              How I solve problems
            </span>
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={skill}
                style={{ transitionDelay: `${index * 50}ms` }}
                className="reveal-on-scroll inline-block bg-[#1a1a1a] text-[#f0f0f0]/90 text-sm font-medium px-4 py-2 border border-[#222222] hover:border-accent-custom hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm rounded cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Software Tools Group */}
        <div className="bg-[#111111]/30 border border-[#222222]/50 p-8 sm:p-10 rounded-xl relative overflow-hidden reveal-on-scroll" style={{ transitionDelay: '150ms' }}>
          <div className="absolute top-0 left-0 w-full h-[3px] bg-accent-cyan" />
          <h3 className="font-display font-bold text-xl text-white mb-8 flex items-center justify-between">
            <span>Software & Platforms</span>
            <span className="text-xs font-mono text-[#666666] font-normal uppercase">
              Primary design toolkit
            </span>
          </h3>

          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <span
                key={tool}
                style={{ transitionDelay: `${index * 50 + 100}ms` }}
                className="reveal-on-scroll inline-block bg-[#1a1a1a] text-[#f0f0f0]/90 text-sm font-medium px-4 py-2 border border-[#222222] hover:border-accent-cyan hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm rounded cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
