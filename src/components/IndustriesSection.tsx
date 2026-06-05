const row1 = [
  "Automobile",
  "Ecommerce",
  "Electronics & Appliances",
  "Energy, Power & Renewables",
  "Education Sector",
  "Construction & Real Estate",
  "Experiences & Amusement Parks"
];

const row2 = [
  "Fintech, Banking & Insurance",
  "Farming & Flowershop",
  "Food & Beverages",
  "Healthcare & MedTech",
  "Home Living",
  "Industrial, Equipment & Repair",
  "Logistics & Freight"
];

const row3 = [
  "Non-Governmental Organizations (NGO)",
  "Skincare, Beauty & Wellness",
  "Lifestyle & Editorial",
  "Retail Commerce",
  "Safety & Physical Security",
  "Services & Digital Agencies",
  "Space, Condos & Lodging"
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 sm:py-32 px-6 w-full border-t border-[#222222]/30 relative bg-transparent overflow-hidden">
      {/* Background Ambience Ambient Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-custom/5 blur-[160px] rounded-full pointer-events-none" />

      {/* Title block - Left-aligned following the universal margin */}
      <div className="max-w-[1200px] mx-auto w-full mb-16 reveal-on-scroll">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666] mb-3 block">
          04 / Sectors
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Industries Served
        </h2>
        <p className="text-[#888888] text-base leading-relaxed max-w-3xl">
          A truly diverse background. Having solved complex workflow, commercial, and strategy problems across more than 20 local and global market sectors.
        </p>
      </div>

      {/* Marquee Wrapper with soft edge gradient fades */}
      <div className="relative w-full overflow-hidden marquee-container py-4 flex flex-col gap-5 select-none">
        
        {/* Soft edge masking for seamless entry and disappearance */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-bg to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-bg to-transparent z-20 pointer-events-none" />

        {/* Row 1 - Leftward scrolling */}
        <div className="flex overflow-hidden w-full">
          <div className="animate-marquee-left flex gap-4">
            {/* First render pass */}
            {row1.map((ind) => (
              <div
                key={`r1-1-${ind}`}
                className="inline-flex items-center px-6 py-3.5 rounded-full bg-[#111111] hover:bg-[#151515] border border-[#222222] hover:border-accent-custom hover:shadow-[0_0_15px_rgba(124,58,237,0.15)] text-[#b8b8b8] hover:text-white transition-all duration-300 font-sans text-sm select-none cursor-default shrink-0"
              >
                <span>{ind}</span>
              </div>
            ))}
            {/* Second render pass for seamless loop */}
            {row1.map((ind) => (
              <div
                key={`r1-2-${ind}`}
                className="inline-flex items-center px-6 py-3.5 rounded-full bg-[#111111] hover:bg-[#151515] border border-[#222222] hover:border-accent-custom hover:shadow-[0_0_15px_rgba(124,58,237,0.15)] text-[#b8b8b8] hover:text-white transition-all duration-300 font-sans text-sm select-none cursor-default shrink-0"
              >
                <span>{ind}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Rightward scrolling */}
        <div className="flex overflow-hidden w-full">
          <div className="animate-marquee-right flex gap-4">
            {/* First render pass */}
            {row2.map((ind) => (
              <div
                key={`r2-1-${ind}`}
                className="inline-flex items-center px-6 py-3.5 rounded-full bg-[#111111] hover:bg-[#151515] border border-[#222222] hover:border-accent-custom hover:shadow-[0_0_15px_rgba(124,58,237,0.15)] text-[#b8b8b8] hover:text-white transition-all duration-300 font-sans text-sm select-none cursor-default shrink-0"
              >
                <span>{ind}</span>
              </div>
            ))}
            {/* Second render pass for seamless loop */}
            {row2.map((ind) => (
              <div
                key={`r2-2-${ind}`}
                className="inline-flex items-center px-6 py-3.5 rounded-full bg-[#111111] hover:bg-[#151515] border border-[#222222] hover:border-accent-custom hover:shadow-[0_0_15px_rgba(124,58,237,0.15)] text-[#b8b8b8] hover:text-white transition-all duration-300 font-sans text-sm select-none cursor-default shrink-0"
              >
                <span>{ind}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 - Leftward scrolling */}
        <div className="flex overflow-hidden w-full">
          <div className="animate-marquee-left flex gap-4">
            {/* First render pass */}
            {row3.map((ind) => (
              <div
                key={`r3-1-${ind}`}
                className="inline-flex items-center px-6 py-3.5 rounded-full bg-[#111111] hover:bg-[#151515] border border-[#222222] hover:border-accent-custom hover:shadow-[0_0_15px_rgba(124,58,237,0.15)] text-[#b8b8b8] hover:text-white transition-all duration-300 font-sans text-sm select-none cursor-default shrink-0"
              >
                <span>{ind}</span>
              </div>
            ))}
            {/* Second render pass for seamless loop */}
            {row3.map((ind) => (
              <div
                key={`r3-2-${ind}`}
                className="inline-flex items-center px-6 py-3.5 rounded-full bg-[#111111] hover:bg-[#151515] border border-[#222222] hover:border-accent-custom hover:shadow-[0_0_15px_rgba(124,58,237,0.15)] text-[#b8b8b8] hover:text-white transition-all duration-300 font-sans text-sm select-none cursor-default shrink-0"
              >
                <span>{ind}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
