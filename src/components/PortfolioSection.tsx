import { useState } from 'react';
import type { MouseEvent } from 'react';

const projects = [
  // Page 1: Automobile
  {
    id: "a1",
    title: "Driving School Customer Portal",
    client: "SMART DRIVING SCHOOL",
    category: "Customer Portal",
    industry: "AUTOMOBILE",
    colorFrom: "#021132",
    colorTo: "#051647"
  },
  {
    id: "a2",
    title: "Distributor, Dealer & Customer Portal",
    client: "Kawasaki Japan (Global)",
    category: "Distributor, Dealer & Customer Portal",
    industry: "AUTOMOBILE",
    colorFrom: "#3f0a0a",
    colorTo: "#5f1111"
  },
  {
    id: "a3",
    title: "Informative Website",
    client: "Honda",
    category: "Informative Website",
    industry: "AUTOMOBILE",
    colorFrom: "#1e293b",
    colorTo: "#334155"
  },
  
  // Page 2: E-Commerce Package
  {
    id: "e1",
    title: "Website, Web Application, Mobile App",
    client: "Super 8",
    category: "Comprehensive E-Commerce Suite",
    industry: "E-COMMERCE PACKAGE",
    colorFrom: "#1c1917",
    colorTo: "#292524"
  },
  {
    id: "e2",
    title: "Ecommerce Website",
    client: "funhanmart Korean Convenience Store",
    category: "Ecommerce Website",
    industry: "E-COMMERCE PACKAGE",
    colorFrom: "#022c22",
    colorTo: "#064e3b"
  },
  {
    id: "e3",
    title: "Carmen's Best Digital Suite",
    client: "Carmen's Best",
    category: "Web & Product Showcase",
    industry: "E-COMMERCE PACKAGE",
    colorFrom: "#172554",
    colorTo: "#1e3a8a"
  },
  {
    id: "e4",
    title: "Centro Department Store",
    client: "centro Department Store",
    category: "Digital Omni-Store App",
    industry: "E-COMMERCE PACKAGE",
    colorFrom: "#3b0764",
    colorTo: "#1e1b4b"
  },
  {
    id: "e5",
    title: "Ecommerce Website",
    client: "OVERSPEC'D",
    category: "Ecommerce Website",
    industry: "E-COMMERCE PACKAGE",
    colorFrom: "#3f3f46",
    colorTo: "#18181b"
  },
  {
    id: "e6",
    title: "TrinityCare Digital Suite",
    client: "TrinityCare",
    category: "Mobile & Web Solution",
    industry: "E-COMMERCE PACKAGE",
    colorFrom: "#065f46",
    colorTo: "#047857"
  },
  {
    id: "e7",
    title: "TrinityHealth Philippines Portal",
    client: "TrinityHealth PHILIPPINES",
    category: "Healthcare Partner Web App",
    industry: "E-COMMERCE PACKAGE",
    colorFrom: "#1d4ed8",
    colorTo: "#1e40af"
  },

  // Page 3: Electronics / Appliances
  {
    id: "el1",
    title: "Customer Warranty Website",
    client: "American Home Appliances",
    category: "Customer Warranty Website",
    industry: "ELECTRONICS / APPLIANCES",
    colorFrom: "#111827",
    colorTo: "#1f2937"
  },

  // Page 3: Energy / Power ...
  {
    id: "en1",
    title: "Internal Mobile App",
    client: "AboitizPower",
    category: "Internal Mobile App",
    industry: "ENERGY / POWER / RENEWABLES / GAS / OIL",
    colorFrom: "#14532d",
    colorTo: "#064e3b"
  },
  {
    id: "en2",
    title: "Tablet App & Warehouse Reporting",
    client: "Ramcar Batteries, Inc.",
    category: "Warehouse Reporting System",
    industry: "ENERGY / POWER / RENEWABLES / GAS / OIL",
    colorFrom: "#172554",
    colorTo: "#1e3a8a"
  },

  // Page 3: Real Estate / Construction
  {
    id: "c1",
    title: "Informative Mobile App",
    client: "Vista Residences",
    category: "Informative Mobile App",
    industry: "CONSTRUCTION / REAL ESTATE / ARCHITECTURE",
    colorFrom: "#022c22",
    colorTo: "#14532d"
  },
  {
    id: "c2",
    title: "Owner's App",
    client: "Moldex Realty",
    category: "Owner's App",
    industry: "CONSTRUCTION / REAL ESTATE / ARCHITECTURE",
    colorFrom: "#7c2d12",
    colorTo: "#451a03"
  },

  // Page 4: Education
  {
    id: "ed1",
    title: "Informative Website",
    client: "T.I.P. Technological Institute of the Philippines",
    category: "Informative Website",
    industry: "EDUCATION",
    colorFrom: "#451a03",
    colorTo: "#78350f"
  },
  {
    id: "ed2",
    title: "Informative Website",
    client: "De La Salle Lipa",
    category: "Informative Website",
    industry: "EDUCATION",
    colorFrom: "#064e3b",
    colorTo: "#0f5132"
  },

  // Page 5: Experience
  {
    id: "ex1",
    title: "E-Commerce + Experiential & Internal Marketplace",
    client: "Tao",
    category: "Internal Marketplace Management",
    industry: "EXPERIENCE",
    colorFrom: "#7c2d12",
    colorTo: "#78350f"
  },
  {
    id: "ex2",
    title: "Internal Mobile App & Booking",
    client: "Visita",
    category: "Booking Management",
    industry: "EXPERIENCE",
    colorFrom: "#581c87",
    colorTo: "#3b0764"
  },
  {
    id: "ex3",
    title: "Customer Web App & Booking Portal",
    client: "Masungi Georeserve",
    category: "Customer Booking Portal",
    industry: "EXPERIENCE",
    colorFrom: "#0d5c3a",
    colorTo: "#063c26"
  },
  {
    id: "ex4",
    title: "Experiential Mobile App & Museum Experience",
    client: "Megaworld & Lucky Chinatown",
    category: "Museum Experience App",
    industry: "EXPERIENCE",
    colorFrom: "#4c0519",
    colorTo: "#701a75"
  },

  // Page 6: Fintech & F&B
  {
    id: "f1",
    title: "Customer Mobile App & Claim Portal",
    client: "Cocogen Insurance",
    category: "Insurance Claim Portal",
    industry: "FIN TECH / BANKING / INSURANCE",
    colorFrom: "#065f46",
    colorTo: "#047857"
  },
  {
    id: "fb1",
    title: "Mobile App & Sales Force Automation",
    client: "Pepsi",
    category: "Sales Force Automation Mobile App",
    industry: "FOOD & BEVERAGES",
    colorFrom: "#1e3a8a",
    colorTo: "#1d4ed8"
  },
  {
    id: "fa1",
    title: "Informative Website",
    client: "Purificacion Orchids and Ornamentals",
    category: "Informative Website",
    industry: "FARMING / FLOWERSHOP",
    colorFrom: "#4d1a7f",
    colorTo: "#5b21b6"
  },

  // Page 7: Industrial & Logistics
  {
    id: "ind1",
    title: "Customer Mobile App — Machine & Loyalty",
    client: "Kubota",
    category: "Machine Management and Loyalty App",
    industry: "INDUSTRIAL / EQUIPMENT / REPAIR",
    colorFrom: "#0891b2",
    colorTo: "#0e7490"
  },
  {
    id: "ind2",
    title: "Internal Web App — Production Management System",
    client: "Logos Creative Office Phils Inc.",
    category: "Production Management System",
    industry: "INDUSTRIAL / EQUIPMENT / REPAIR",
    colorFrom: "#1e293b",
    colorTo: "#0f172a"
  },
  {
    id: "log1",
    title: "Internal App & Warehouse Tracking",
    client: "Adsia Logistics",
    category: "Warehouse Tracking App",
    industry: "LOGISTICS",
    colorFrom: "#166534",
    colorTo: "#14532d"
  },
  {
    id: "log2",
    title: "Informative Website & Logistic Tracking",
    client: "Airtropolis Consolidator Phils., Inc.",
    category: "Logistic Tracking System",
    industry: "LOGISTICS",
    colorFrom: "#1d4ed8",
    colorTo: "#1e40af"
  },

  // Page 8: Healthcare
  {
    id: "h1",
    title: "Web App & Patient / Doctor Portal",
    client: "Relaymed Health Solutions",
    category: "Patient & Doctor's Portal",
    industry: "HEALTHCARE & MEDICAL TECH",
    colorFrom: "#be123c",
    colorTo: "#9f1239"
  },
  {
    id: "h2",
    title: "Patient Portal Mobile App",
    client: "Menarini Group",
    category: "Patient Portal Mobile App",
    industry: "HEALTHCARE & MEDICAL TECH",
    colorFrom: "#581c87",
    colorTo: "#4a044e"
  },
  {
    id: "h3",
    title: "Website & Mobile App Portal (Online Consultation, Booking, etc)",
    client: "TrinityCare",
    category: "Doctor and Patient Portal",
    industry: "HEALTHCARE & MEDICAL TECH",
    colorFrom: "#047857",
    colorTo: "#065f46"
  },

  // Page 8: Home
  {
    id: "ho1",
    title: "Informative Website",
    client: "World Home Depot Corporation",
    category: "Informative Website",
    industry: "HOME",
    colorFrom: "#065f46",
    colorTo: "#166534"
  },
  {
    id: "ho2",
    title: "Informative Website",
    client: "Lazuli",
    category: "Informative Website",
    industry: "HOME",
    colorFrom: "#1f2937",
    colorTo: "#111827"
  },

  // Page 9: Lifestyle & NGO
  {
    id: "l1",
    title: "Internal App — Stewards App (Dogshow)",
    client: "Philippine Canine Club, Inc. (PCCI)",
    category: "Dogshow Competition App",
    industry: "LIFESTYLE",
    colorFrom: "#991b1b",
    colorTo: "#7f1d1d"
  },
  {
    id: "l2",
    title: "Mobile App & Admin Backend — Fitness & Booking",
    client: "Perigon",
    category: "Fitness App and Booking",
    industry: "LIFESTYLE",
    colorFrom: "#27272a",
    colorTo: "#18181b"
  },
  {
    id: "n1",
    title: "Informative Website",
    client: "PAFCPIC",
    category: "Informative Website",
    industry: "NON-GOVERNMENT ORGANIZATION",
    colorFrom: "#15803d",
    colorTo: "#166534"
  },
  {
    id: "n2",
    title: "Informative Website",
    client: "S.S.A. Corp",
    category: "Informative Website",
    industry: "NON-GOVERNMENT ORGANIZATION",
    colorFrom: "#581c87",
    colorTo: "#4a044e"
  },
  {
    id: "n3",
    title: "Internal System",
    client: "Child Protection Network",
    category: "Internal System",
    industry: "NON-GOVERNMENT ORGANIZATION",
    colorFrom: "#be123c",
    colorTo: "#9f1239"
  },

  // Page 10: Retail & Safety
  {
    id: "r1",
    title: "Informative Website & Gift Registry Website",
    client: "Toys \"R\" Us",
    category: "Gift Registry Website",
    industry: "RETAIL",
    colorFrom: "#a21caf",
    colorTo: "#86198f"
  },
  {
    id: "s1",
    title: "Internal System & Security App",
    client: "Unilab Trusted Quality Healthcare",
    category: "Security App & Internal System",
    industry: "SAFETY",
    colorFrom: "#1d4ed8",
    colorTo: "#1e40af"
  },
  {
    id: "w1",
    title: "E-Commerce Website",
    client: "AQ Skin Solutions",
    category: "Skincare E-Commerce site",
    industry: "SKINCARE, BEAUTY AND WELLNESS",
    colorFrom: "#3f3f46",
    colorTo: "#27272a"
  },
  {
    id: "d1",
    title: "Customer Web App — Video-Editing Request",
    client: "Terraflic",
    category: "Video-Editing Request management",
    industry: "DIGITAL AGENCY",
    colorFrom: "#0284c7",
    colorTo: "#0369a1"
  },

  // Page 11: Space
  {
    id: "sp1",
    title: "Internal System — Tenant Management System",
    client: "Dormiko",
    category: "Tenant Management System",
    industry: "SPACE",
    colorFrom: "#111827",
    colorTo: "#1f2937"
  },
  {
    id: "sp2",
    title: "Informative Website",
    client: "Cazza (Zamora Residences)",
    category: "Informative Website",
    industry: "SPACE",
    colorFrom: "#7c2d12",
    colorTo: "#451a03"
  }
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All", 
    "Ecommerce & Retail", 
    "Corporate & Space", 
    "Experience & Lifestyle", 
    "Industry & Logistics", 
    "NGO & Education", 
    "Healthcare", 
    "Real Estate & Home"
  ];

  const filteredProjects = projects.filter(p => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Ecommerce & Retail") {
      return p.industry === "E-COMMERCE PACKAGE" || p.industry === "RETAIL" || p.industry === "SKINCARE, BEAUTY AND WELLNESS";
    }
    if (activeCategory === "Corporate & Space") {
      return p.industry === "AUTOMOBILE" || p.industry === "ELECTRONICS / APPLIANCES" || p.industry === "ENERGY / POWER / RENEWABLES / GAS / OIL" || p.industry === "SPACE" || p.industry === "DIGITAL AGENCY";
    }
    if (activeCategory === "Experience & Lifestyle") {
      return p.industry === "EXPERIENCE" || p.industry === "FOOD & BEVERAGES" || p.industry === "FARMING / FLOWERSHOP" || p.industry === "LIFESTYLE";
    }
    if (activeCategory === "Industry & Logistics") {
      return p.industry === "INDUSTRIAL / EQUIPMENT / REPAIR" || p.industry === "LOGISTICS" || p.industry === "SAFETY";
    }
    if (activeCategory === "NGO & Education") {
      return p.industry === "NON-GOVERNMENT ORGANIZATION" || p.industry === "EDUCATION";
    }
    if (activeCategory === "Healthcare") {
      return p.industry === "HEALTHCARE & MEDICAL TECH";
    }
    if (activeCategory === "Real Estate & Home") {
      return p.industry === "CONSTRUCTION / REAL ESTATE / ARCHITECTURE" || p.industry === "HOME";
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
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6 reveal-on-scroll animate-fade-in">
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
      <div className="flex flex-wrap gap-2 mb-12 reveal-on-scroll" style={{ transitionDelay: '50ms' }}>
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs uppercase font-mono tracking-wider transition-all duration-300 rounded focus:outline-none focus:ring-0 cursor-pointer ${
                isActive
                  ? 'bg-accent-custom text-white font-semibold'
                  : 'bg-[#111111]/40 text-[#666666] hover:text-[#f0f0f0] border border-[#222222]/50 hover:border-accent-custom/40'
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
                transitionDelay: `${(index % 2) * 50}ms`,
                transformStyle: 'preserve-3d',
              }}
              className="reveal-on-scroll group flex flex-col justify-between"
            >
              {/* Image gradient area placeholder with absolute ratio and hover zoom overlay */}
              <div
                style={{
                  background: `linear-gradient(135deg, ${p.colorFrom} 0%, ${p.colorTo} 100%)`,
                }}
                className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-[#222222]/80 group-hover:border-accent-custom/50 shadow-lg select-none cursor-default transition-all duration-500"
              >
                {/* Visual mesh wireframe look */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                
                {/* Project title text as abstract mockup element inside card */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/10 select-none">
                  <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/20 mb-3">
                    {p.industry}
                  </span>
                  <p className="font-display font-bold text-xl sm:text-2xl text-white/50 group-hover:text-white/20 transition-all duration-500 ease-out uppercase tracking-wider scale-95 leading-normal max-w-full">
                    {p.client}
                  </p>
                  <p className="font-mono text-[10px] text-white/25 mt-2 transition-colors duration-500">
                    {p.title}
                  </p>
                </div>

                {/* Overlaid sliding details overview - unclickable, purely informative */}
                <div className="absolute inset-0 bg-black/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center select-none">
                  <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-accent-cyan mb-3">
                    Verified Portfolio Client
                  </span>
                  <div className="text-white font-display text-lg font-extrabold tracking-tight mb-2">
                    {p.client}
                  </div>
                  <span className="h-[1px] w-8 bg-accent-custom my-2" />
                  <p className="font-mono text-[11px] text-[#888888] tracking-widest uppercase mt-1">
                    {p.industry}
                  </p>
                  <p className="text-xs text-[#666666] mt-2 italic px-4">
                    {p.category}
                  </p>
                  <div className="mt-5 px-3 py-1 border border-white/10 rounded font-mono text-[9px] text-white/40 uppercase tracking-widest">
                    Design Schema Locked
                  </div>
                </div>
              </div>

              {/* Title & Metadata layout footer */}
              <div className="mt-5 flex justify-between items-start px-2">
                <div className="max-w-[70%]">
                  <h3 className="text-[#f0f0f0] font-bold text-base leading-snug group-hover:text-accent-custom transition-colors duration-300 truncate">
                    {p.client}
                  </h3>
                  <p className="text-xs text-[#666666] font-mono mt-1 uppercase tracking-wider truncate">
                    {p.title}
                  </p>
                </div>
                
                <span className="text-[10px] font-mono text-accent-cyan uppercase bg-accent-cyan/5 border border-accent-cyan/15 px-2 py-0.5 rounded inline-block max-w-[30%] truncate">
                  {p.industry.split(' / ')[0]}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
