import { useState } from 'react';
import type { MouseEvent } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: "p1",
    title: "OADR Portal",
    category: "Government Web App",
    industry: "Dept. of Justice — OADR",
    colorFrom: "#021132",
    colorTo: "#051647"
  },
  {
    id: "p2",
    title: "Apex Banking",
    category: "Fintech / Banking App",
    industry: "Fintech, Banking & Insurance",
    colorFrom: "#022c22",
    colorTo: "#064e3b"
  },
  {
    id: "p3",
    title: "MedLink Hub",
    category: "Healthcare App",
    industry: "Healthcare & MedTech",
    colorFrom: "#4c0519",
    colorTo: "#880808"
  },
  {
    id: "p4",
    title: "EcoLoyalty Portal",
    category: "Ecommerce + Loyalty",
    industry: "Ecommerce & Retail",
    colorFrom: "#3b0764",
    colorTo: "#1e1b4b"
  },
  {
    id: "p5",
    title: "Pulse Pad Pro",
    category: "Tablet App",
    industry: "Electronics & Appliances",
    colorFrom: "#1e293b",
    colorTo: "#0f172a"
  },
  {
    id: "p6",
    title: "Arena Sports",
    category: "Experiential / Sports App",
    industry: "Experiences & Amusement",
    colorFrom: "#311042",
    colorTo: "#4a044e"
  },
  {
    id: "p7",
    title: "Estate Finder Pro",
    category: "Real Estate / Property App",
    industry: "Construction & Real Estate",
    colorFrom: "#7c2d12",
    colorTo: "#451a03"
  },
  {
    id: "p8",
    title: "Reserve Hub",
    category: "Booking System (Universal)",
    industry: "Logistics & Lifestyle",
    colorFrom: "#134e5e",
    colorTo: "#0c3a47"
  },
  {
    id: "p9",
    title: "Omega Arcade",
    category: "Online Games Dashboard",
    industry: "Experiences & Leisure",
    colorFrom: "#500724",
    colorTo: "#3b0c22"
  },
  {
    id: "p10",
    title: "CartPlus",
    category: "Ecommerce Mobile App",
    industry: "Consumer Retail",
    colorFrom: "#030712",
    colorTo: "#111827"
  },
  {
    id: "p11",
    title: "Horizon Digital",
    category: "Informative Website",
    industry: "Services & Agencies",
    colorFrom: "#063c46",
    colorTo: "#0c505d"
  },
  {
    id: "p12",
    title: "Rewardio Points",
    category: "Game + Reward System",
    industry: "Farming & Flowershop",
    colorFrom: "#143a28",
    colorTo: "#062215"
  }
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Web App", "Mobile App", "System & Booking", "Creative & Informative"];

  const filteredProjects = projects.filter(p => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Web App") {
      return p.category.includes("Web App") || p.category.includes("Banking") || p.category.includes("Healthcare");
    }
    if (activeCategory === "Mobile App") {
      return p.category.includes("Mobile App") || p.category.includes("Tablet");
    }
    if (activeCategory === "System & Booking") {
      return p.category.includes("Booking") || p.category.includes("Reward") || p.category.includes("Dashboard");
    }
    if (activeCategory === "Creative & Informative") {
      return p.category.includes("Informative") || p.category.includes("Sports") || p.category.includes("Loyalty");
    }
    return true;
  });

  const handleTileMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const relativeX = (x / rect.width) - 0.5;
    const relativeY = (y / rect.height) - 0.5;
    
    const maxTilt = 8;
    const tiltY = relativeX * maxTilt;
    const tiltX = -relativeY * maxTilt;
    
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.01, 1.01, 1.01)`;
  };

  const handleTileMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 px-6 max-w-[1200px] mx-auto border-t border-[#222222]/30">
      {/* Section Title */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6 reveal-on-scroll">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666] mb-3 block">
            07 / Works
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Selected Works
          </h2>
        </div>
        <div className="text-sm font-mono text-[#666666] shrink-0 border-l border-[#222222] pl-6 h-10 flex items-center">
          {projects.length} Total Projects Managed
        </div>
      </div>

      {/* Categories Filter Rail */}
      <div className="flex flex-wrap gap-2.5 mb-12 reveal-on-scroll" style={{ transitionDelay: '50ms' }}>
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs uppercase font-mono tracking-wider transition-all duration-300 rounded focus:outline-none focus:ring-0 ${
                isActive
                  ? 'bg-accent-custom text-white font-semibold'
                  : 'bg-[#111111]/40 text-[#666666] hover:text-[#f0f0f0] border border-[#222222] hover:border-white/10'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid with 3D Tilt and Hover scale */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filteredProjects.map((p, index) => {
          return (
            <div
              key={p.id}
              onMouseMove={handleTileMouseMove}
              onMouseLeave={handleTileMouseLeave}
              style={{
                transitionDelay: `${(index % 2) * 100}ms`,
                transformStyle: 'preserve-3d',
              }}
              className="reveal-on-scroll group flex flex-col justify-between"
            >
              {/* Image gradient area placeholder with absolute ratio and hover zoom overlay */}
              <div
                style={{
                  background: `linear-gradient(135deg, ${p.colorFrom} 0%, ${p.colorTo} 100%)`,
                }}
                className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-[#222222]/80 group-hover:border-accent-custom/50 shadow-lg select-none cursor-pointer transition-all duration-500"
              >
                {/* Visual mesh wireframe look */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                
                {/* Project title text as abstract mockup element inside card */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/10 select-none">
                  <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/20 mb-2">
                    PROTOTYPE_SPEC
                  </span>
                  <p className="font-display font-bold text-2xl sm:text-3xl text-white/35 group-hover:text-white/80 group-hover:scale-105 transition-all duration-500 ease-out uppercase tracking-tighter">
                    {p.title}
                  </p>
                  <p className="font-mono text-[10px] text-white/15 mt-1 group-hover:text-white/40 transition-colors duration-500">
                    {p.industry}
                  </p>
                </div>

                {/* Overlaid sliding view prototype action container */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                  <span className="text-white font-medium text-sm tracking-wide transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    Interact with Project Specs
                  </span>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-custom hover:bg-accent-cyan text-white text-xs uppercase font-mono tracking-widest font-bold rounded shadow-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span>View Prototype</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Title & Metadata layout footer */}
              <div className="mt-5 flex justify-between items-start px-2">
                <div>
                  <h3 className="text-[#f0f0f0] font-bold text-lg leading-snug group-hover:text-accent-custom transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#666666] font-mono mt-1 uppercase tracking-wider">
                    {p.industry}
                  </p>
                </div>
                
                <span className="text-[11px] font-mono text-accent-cyan uppercase bg-accent-cyan/5 border border-accent-cyan/15 px-2.5 py-1 rounded inline-block">
                  {p.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
