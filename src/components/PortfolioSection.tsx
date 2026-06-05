import { useState, useEffect } from 'react';
import type { MouseEvent } from 'react';
import { projects } from '../data/portfolioData';
import type { ProjectItem } from '../data/portfolioData';
import { X, Calendar, User, Cpu, Award, Building, Sparkles } from 'lucide-react';

const logoFiles: Record<string, string> = {
  "p1": "purification.png",
  "p2": "TaoPhilippines.png",
  "p3": "kawasaki.png",
  "p4": "kubota.png",
  "p5": "TIP.png",
  "p7": "world home depot.png",
  "p8": "", // Nature's Spring
  "p9": "adsia.png",
  "p10": "honda.png",
  "p11": "de la salle.png",
  "p12": "unilab.png",
  "p13": "carments best.png",
  "p17": "the spa.png",
  "p18": "victory christian fellowship.png",
  "p19": "kidzooona.png",
  "p22": "doj.png",
  "p25": "smart driving school.png",
  "p26": "super8.png",
  "p27": "funhan mart.png",
  "p28": "centro.png",
  "p29": "overspec'd.png",
  "p30": "american home.png",
  "p31": "aboitiz.png",
  "p32": "vista residences.png",
  "p33": "moldex.png",
  "p35": "visita.png",
  "p36": "masungi.png",
  "p37": "megaworld.png",
  "p38": "cocogen.png",
  "p39": "pepsi.png",
  "p40": "logos.png",
  "p41": "airtropolis.png",
  "p42": "relaymed.png",
  "p43": "menarini.png",
  "p44": "lazuli.png",
  "p45": "PCCI.png",
  "p46": "perigon.png",
  "p47": "pafcpic.png",
  "p48": "ssa corp.png",
  "p49": "child protection.png",
  "p50": "toys r us.png",
  "p51": "AQSkin.png",
  "p52": "terraflic.png",
  "p53": "dormiko.png",
  "p54": "cazza zamora.png",
  "p55": "trinityhealth.png",
  "p56": "triniycare.png"
};

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedClient, setSelectedClient] = useState<(ProjectItem & { logo: string }) | null>(null);

  const categories = [
    "All",
    "E-Commerce & Retail",
    "Healthcare & Skincare",
    "Automobile & Industry",
    "Real Estate & Space",
    "Experience & Lifestyle",
    "Other Sectors"
  ];

  const enrichedProjects = projects.map(p => {
    const fileName = logoFiles[p.id];
    return {
      ...p,
      logo: fileName ? `/clients/${fileName}` : ""
    };
  });

  const filteredProjects = enrichedProjects.filter(p => {
    if (activeCategory === "All") return true;
    return p.category === activeCategory;
  });

  // Track key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedClient(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Sync Intersection Observer for scroll reveal when categories are filtered
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('#clients .reveal-on-scroll');
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [activeCategory]);

  const handleTileMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const relativeX = (x / rect.width) - 0.5;
    const relativeY = (y / rect.height) - 0.5;
    
    const maxTilt = 10;
    const tiltY = relativeX * maxTilt;
    const tiltX = -relativeY * maxTilt;
    
    card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleTileMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="clients" className="py-24 sm:py-32 px-6 w-full border-t border-[#222222]/30 relative">
      {/* Upper Subtle Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-custom/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Contained Centered Heading Area following the universal margin */}
      <div className="max-w-[1200px] w-full mx-auto relative z-10 flex flex-col items-start text-left mb-16">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6 reveal-on-scroll w-full text-left">
          <div className="text-left">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666] mb-3 block">
              07 / Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              My Clients
            </h2>
          </div>
          <div className="text-sm font-mono text-accent-cyan/90 shrink-0 border-l border-[#222222]/25 pl-6 h-10 flex items-center">
            {projects.length} Trusted Brands & Institutional Partners
          </div>
        </div>

        {/* Interactive Helper Hint */}
        <div className="mb-8 flex items-center gap-2 text-zinc-500 font-mono text-xs uppercase tracking-wider select-none animate-pulse w-full text-left justify-start">
          <Sparkles size={13} className="text-accent-cyan" />
          <span className="text-left">Click any client logo below to view product details & impact</span>
        </div>

        {/* Categories Filter Rail */}
        <div className="flex flex-nowrap overflow-x-auto gap-2.5 pb-3 scrollbar-none max-w-full select-none w-full justify-start">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs uppercase font-mono tracking-wider transition-all duration-300 rounded shrink-0 focus:outline-none focus:ring-0 cursor-pointer ${
                  isActive
                    ? 'bg-accent-custom text-white font-semibold shadow-[0_0_12px_rgba(124,58,237,0.35)]'
                    : 'bg-zinc-900/40 text-[#a1a1aa] hover:text-[#f0f0f0] border border-[#222222]/50 hover:border-accent-custom/40 transition-colors'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* High-density Client Logo Board Grid - Maximize Wide Margins for Grid */}
      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4 w-full">
          {filteredProjects.map((p, index) => {
            return (
              <div
                key={p.id}
                onClick={() => setSelectedClient(p)}
                onMouseMove={handleTileMouseMove}
                onMouseLeave={handleTileMouseLeave}
                style={{
                  transitionDelay: `${(index % 6) * 20}ms`,
                  transformStyle: 'preserve-3d',
                  background: `linear-gradient(135deg, ${p.colorFrom}0b 0%, ${p.colorTo}07 100%)`,
                }}
                className="reveal-on-scroll group relative aspect-[1.3/1] w-full rounded-xl overflow-hidden border border-zinc-800/45 hover:border-accent-cyan/40 bg-zinc-950/20 hover:bg-zinc-950/80 transition-all duration-300 flex flex-col items-center justify-center p-3 sm:p-4 cursor-pointer shadow-lg select-none"
                title={`Click to view ${p.client}`}
              >
                {/* Centerpiece Vector Brand Logo */}
                <div className="w-full h-full flex items-center justify-center text-center transform group-hover:scale-105 transition-transform duration-300 ease-out font-sans">
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={p.client}
                      className="h-10 sm:h-12 w-auto max-w-[90%] object-contain transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    <div className="text-zinc-400 font-extrabold text-xs sm:text-sm tracking-tight text-center px-1.5 uppercase font-mono break-words leading-tight">
                      {p.client}
                    </div>
                  )}
                </div>

                {/* Hover highlight decorative borders */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-transparent group-hover:border-accent-cyan transition-all duration-300 rounded-tl" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-transparent group-hover:border-accent-cyan transition-all duration-300 rounded-br" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Immersive Client Details Overlay Modal */}
      {selectedClient && (
        <div 
          onClick={() => setSelectedClient(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-zinc-950/95 border border-zinc-800/80 p-6 sm:p-8 rounded-2xl max-w-[500px] w-full relative overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Close Button Trigger */}
            <button
              onClick={() => setSelectedClient(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 p-2 rounded-full cursor-pointer transition-all border border-zinc-800"
              aria-label="Close client details"
            >
              <X size={15} />
            </button>

            {/* Giant Colorful Logo Header Display */}
            <div 
              style={{ 
                background: `linear-gradient(135deg, ${selectedClient.colorFrom}dd 0%, ${selectedClient.colorTo} 100%)` 
              }} 
              className="p-8 rounded-xl border border-white/10 flex items-center justify-center mb-6 aspect-[16/9] overflow-hidden relative select-none shadow-inner"
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:12px_12px]" />
              <div className="scale-110 transform transition-transform duration-500 max-w-[85%] max-h-[85%] flex items-center justify-center">
                {selectedClient.logo ? (
                  <img
                    src={selectedClient.logo}
                    alt={selectedClient.client}
                    className="max-h-24 max-w-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                  />
                ) : (
                  <div className="text-white font-black text-xl tracking-wider uppercase font-mono text-center">
                    {selectedClient.client}
                  </div>
                )}
              </div>
            </div>

            {/* Client Context Details Grid */}
            <div className="flex flex-col gap-4">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent-cyan">
                  Case Record Overview
                </span>
                <h3 className="text-xl font-extrabold text-white tracking-tight mt-0.5">
                  {selectedClient.client}
                </h3>
              </div>

              <div className="h-[1px] w-full bg-zinc-800" />

              {/* Attributes block */}
              <div className="grid grid-cols-2 gap-4 text-xs font-mono text-[#b3b3b3]">
                <div className="bg-zinc-900/40 p-2.5 rounded border border-zinc-800/45 flex items-center gap-2.5">
                  <Calendar size={14} className="text-accent-cyan shrink-0" />
                  <div className="truncate">
                    <div className="text-zinc-500 text-[9px] uppercase tracking-wider">LATEST RELEASE</div>
                    <div className="text-white font-bold mt-0.5">{selectedClient.year}</div>
                  </div>
                </div>

                <div className="bg-zinc-900/40 p-2.5 rounded border border-zinc-800/45 flex items-center gap-2.5">
                  <Building size={14} className="text-emerald-400 shrink-0" />
                  <div className="truncate">
                    <div className="text-zinc-500 text-[9px] uppercase tracking-wider">INDUSTRY</div>
                    <div className="text-emerald-400 font-semibold mt-0.5 truncate" title={selectedClient.industry}>
                      {selectedClient.industry}
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900/40 p-2.5 rounded border border-zinc-800/45 flex items-center gap-2.5">
                  <Cpu size={14} className="text-sky-400 shrink-0" />
                  <div className="truncate">
                    <div className="text-zinc-500 text-[9px] uppercase tracking-wider">SYSTEM / PLATFORM</div>
                    <div className="text-white mt-0.5 truncate">{selectedClient.platform}</div>
                  </div>
                </div>

                <div className="bg-zinc-900/40 p-2.5 rounded border border-zinc-800/45 flex items-center gap-2.5">
                  <User size={14} className="text-amber-400 shrink-0" />
                  <div className="truncate">
                    <div className="text-zinc-500 text-[9px] uppercase tracking-wider">MY ROLE PARTNER</div>
                    <div className="text-white mt-0.5 truncate">{selectedClient.role}</div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      )}
    </section>
  );
}
