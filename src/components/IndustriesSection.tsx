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
    <section id="industries" className="py-24 sm:py-32 px-6 w-full relative bg-transparent overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center relative z-10">
        
        {/* Left column: Title and strategic description */}
        <div className="lg:col-span-5 w-full text-left reveal-on-scroll">
          <div className="flex items-center gap-2.5 mb-3 select-none">
            <span className="w-2 h-2 rounded-full bg-accent-custom animate-pulse shadow-[0_0_8px_rgba(124,58,237,0.8)] shrink-0"></span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666]">
              04 / Sectors
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5 font-sans">
            Industries Served
          </h2>
          <p className="text-[#888888] text-sm sm:text-base leading-relaxed">
            A truly diverse background. Having solved complex workflow, commercial, and strategy problems across more than 20 local and global market sectors.
          </p>
        </div>

        {/* Right column: Marquee scrolling chips with premium, multi-stop gradual mask-image fading and extreme breathing space */}
        <div 
          className="lg:col-span-7 w-full overflow-hidden relative py-4 flex flex-col gap-5 select-none lg:pl-14 xl:pl-20"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.01) 3%, rgba(0,0,0,0.08) 8%, rgba(0,0,0,0.25) 15%, rgba(0,0,0,0.55) 23%, rgba(0,0,0,0.85) 32%, black 42%, black 78%, rgba(0,0,0,0.85) 86%, rgba(0,0,0,0.55) 92%, rgba(0,0,0,0.25) 96%, rgba(0,0,0,0.05) 99%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.01) 3%, rgba(0,0,0,0.08) 8%, rgba(0,0,0,0.25) 15%, rgba(0,0,0,0.55) 23%, rgba(0,0,0,0.85) 32%, black 42%, black 78%, rgba(0,0,0,0.85) 86%, rgba(0,0,0,0.55) 92%, rgba(0,0,0,0.25) 96%, rgba(0,0,0,0.05) 99%, transparent 100%)'
          }}
        >
          {/* Subtle violet highlight blur on the left boundary of the chips layout to blend with mask-image */}
          <div className="absolute top-0 bottom-0 left-[15%] w-24 bg-gradient-to-r from-transparent via-accent-custom/[0.04] to-transparent pointer-events-none z-20 blur-md mix-blend-screen" />
          
          {/* Row 1 - Leftward scrolling */}
          <div className="flex overflow-visible w-full">
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
          <div className="flex overflow-visible w-full">
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
          <div className="flex overflow-visible w-full">
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

      </div>
    </section>
  );
}
