export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 max-w-[1200px] mx-auto border-t border-[#222222]/30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Title & Bio */}
        <div className="lg:col-span-7 reveal-on-scroll">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666] mb-3 block">
            01 / Background
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-8">
            Pioneering solutions at the intersection of design, empathy, and logic.
          </h2>
          <p className="text-[#f0f0f0]/80 text-base sm:text-lg leading-relaxed mb-6">
            I am an innovative and results-driven Design Lead with 8 years of solid, multi-disciplinary experience spanning complex B2B desktop platforms, native iOS/Android mobile apps, and immersive consumer-facing websites.
          </p>
          <p className="text-[#64748b] text-base leading-relaxed mb-8">
            Throughout my career, I've had the privilege of designing products for local and international blue-chip clients, establishing comprehensive Design Systems, and leading collaborative teams of designers and engineers. I believe design is not just about aesthetic beauty—it is a functional approach to planning, execution, and company strategy that directly drives product success.
          </p>

          {/* Education Row with high-contrast indicator */}
          <div className="border-t border-[#222222] pt-8">
            <h3 className="font-display font-semibold text-lg text-white mb-4">
              Education
            </h3>
            <div className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-custom mt-2" />
              <div>
                <h4 className="font-medium text-[#f0f0f0]">
                  Bachelor of Science in Information Technology
                </h4>
                <p className="text-sm text-[#666666]">
                  Polytechnic University of the Philippines • 2014 — 2018
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact info card */}
        <div className="lg:col-span-5 reveal-on-scroll" style={{ transitionDelay: '150ms' }}>
          <div className="relative glass-panel bg-surface border border-[#222222] p-8 md:p-10 rounded-lg overflow-hidden group">
            {/* Soft background line highlights */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-custom/5 rounded-full blur-3xl pointer-events-none group-hover:bg-accent-custom/10 transition-all duration-500" />
            
            <h3 className="font-display font-bold text-xl text-white mb-6 border-b border-[#222222] pb-4">
              Personal Information
            </h3>
            
            <ul className="space-y-6">
              <li className="flex flex-col gap-1">
                <span className="font-mono text-xs uppercase tracking-wider text-[#666666]">
                  Current Role
                </span>
                <span className="text-white font-medium text-sm">
                  Design Lead & Senior UI/UX Specialist
                </span>
              </li>

              <li className="flex flex-col gap-1">
                <span className="font-mono text-xs uppercase tracking-wider text-[#666666]">
                  Location
                </span>
                <span className="text-white font-medium text-sm">
                  Quezon City, Metro Manila, Philippines
                </span>
              </li>

              <li className="flex flex-col gap-1">
                <span className="font-mono text-xs uppercase tracking-wider text-[#666666]">
                  Email Address
                </span>
                <a
                  href="mailto:rizaldy.dayto.7@gmail.com"
                  className="text-accent-custom font-medium text-sm hover:text-accent-cyan transition-colors"
                >
                  rizaldy.dayto.7@gmail.com
                </a>
              </li>

              <li className="flex flex-col gap-1">
                <span className="font-mono text-xs uppercase tracking-wider text-[#666666]">
                  Mobile Number
                </span>
                <a
                  href="tel:+639060972241"
                  className="text-[#f0f0f0] font-medium text-sm hover:text-accent-custom transition-colors"
                >
                  +63 906 097 2241
                </a>
              </li>
            </ul>

            <div className="mt-8 border-t border-[#222222] pt-6 flex items-center justify-between">
              <span className="text-xs text-[#666666] font-mono">
                Quezon City PH • UTC +8
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-emerald-500 absolute" />
                <span className="text-xs font-mono text-[#666666]">Active Status</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
