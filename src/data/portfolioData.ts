export interface ProjectItem {
  id: string;
  client: string;
  project: string;
  platform: string;
  role: string;
  contribution: string;
  year: string;
  category: string;
  industry: string;
  logoPng: string;
  colorFrom: string;
  colorTo: string;
}

export const projects: ProjectItem[] = [
  // --- AUTOMOBILE ---
  {
    id: "p25",
    client: "Smart Driving School",
    project: "Driving School Customer Portal",
    platform: "Web Portal",
    role: "Lead UX Designer",
    contribution: "Designed custom interactive scheduler and student profile manager",
    year: "2024",
    category: "Automobile & Industry",
    industry: "AUTOMOBILE",
    logoPng: "smart_driving_school_logo.png",
    colorFrom: "#ea580c",
    colorTo: "#1e1b4b"
  },
  {
    id: "p3",
    client: "Kawasaki Japan (Global)",
    project: "Distributor, Dealer & Customer Portal",
    platform: "Web & Tablet Intranet",
    role: "Front-end Architect",
    contribution: "Created high-fidelity diagnostic and distributor interface systems",
    year: "2020",
    category: "Automobile & Industry",
    industry: "AUTOMOBILE",
    logoPng: "kawasaki_logo.png",
    colorFrom: "#1e1b4b",
    colorTo: "#2e1065"
  },
  {
    id: "p10",
    client: "Honda",
    project: "Informative Website",
    platform: "Responsive Web",
    role: "Lead UI Designer",
    contribution: "Crafted sleek landing pages for new automobile model presentations",
    year: "2023",
    category: "Automobile & Industry",
    industry: "AUTOMOBILE",
    logoPng: "honda_logo.png",
    colorFrom: "#450a0a",
    colorTo: "#7f1d1d"
  },

  // --- E-COMMERCE PACKAGE ---
  {
    id: "p26",
    client: "Super8",
    project: "E-Commerce Customer Portal",
    platform: "Mobile App & Desktop Web",
    role: "Product Designer",
    contribution: "Led checkout optimization flow reducing cart abandonment",
    year: "2024",
    category: "E-Commerce & Retail",
    industry: "E-COMMERCE PACKAGE",
    logoPng: "super8_logo.png",
    colorFrom: "#1d4ed8",
    colorTo: "#1e3a8a"
  },
  {
    id: "p27",
    client: "Funhan Mart",
    project: "Korean Convenience Store Delivery App",
    platform: "Mobile iOS & Android",
    role: "Mobile App Designer",
    contribution: "Designed full catalog, shopping cart, and live driver tracking system",
    year: "2024",
    category: "E-Commerce & Retail",
    industry: "E-COMMERCE PACKAGE",
    logoPng: "funhan_mart_logo.png",
    colorFrom: "#701a75",
    colorTo: "#3f0712"
  },
  {
    id: "p13",
    client: "Carmen’s Best",
    project: "Premium Gourmet Ice Cream Shop",
    platform: "Web e-Store",
    role: "Commerce Specialist",
    contribution: "Integrated bespoke flavor-picker and local shipping coordinator",
    year: "2023",
    category: "E-Commerce & Retail",
    industry: "E-COMMERCE PACKAGE",
    logoPng: "carmens_best_logo.png",
    colorFrom: "#172554",
    colorTo: "#1e3a8a"
  },
  {
    id: "p8",
    client: "Nature’s Spring",
    project: "Water Order Delivery Platform",
    platform: "Mobile & Responsive Web",
    role: "Interaction Designer",
    contribution: "Developed recurring bottled water subscriptions booking system",
    year: "2022",
    category: "E-Commerce & Retail",
    industry: "E-COMMERCE PACKAGE",
    logoPng: "natures_spring_logo.png",
    colorFrom: "#0284c7",
    colorTo: "#0891b2"
  },
  {
    id: "p28",
    client: "Centro Department Store",
    project: "Inventory & POS System",
    platform: "Desktop Web System",
    role: "Lead Designer",
    contribution: "Designed modern layout connecting physical points of sale to online inventory",
    year: "2024",
    category: "E-Commerce & Retail",
    industry: "E-COMMERCE PACKAGE",
    logoPng: "centro_department_store_logo.png",
    colorFrom: "#b91c1c",
    colorTo: "#1e3a8a"
  },
  {
    id: "p29",
    client: "Overspec’d",
    project: "Brand Identity Website",
    platform: "Responsive Web Portal",
    role: "Creative Director",
    contribution: "Led visual and interaction direction for minimalist apparel outlet",
    year: "2023",
    category: "E-Commerce & Retail",
    industry: "E-COMMERCE PACKAGE",
    logoPng: "overspecd_logo.png",
    colorFrom: "#09090b",
    colorTo: "#27272a"
  },

  // --- ELECTRONICS / APPLIANCES ---
  {
    id: "p30",
    client: "American Home Appliances",
    project: "Warranty Tracking System",
    platform: "Desktop & Mobile Web",
    role: "Interaction Designer",
    contribution: "Created simplified serial-number verification and product registry workflow",
    year: "2023",
    category: "Automobile & Industry",
    industry: "ELECTRONICS / APPLIANCES",
    logoPng: "american_home_logo.png",
    colorFrom: "#18181b",
    colorTo: "#3f3f46"
  },

  // --- CONSTRUCTION & SPACE ---
  {
    id: "p32",
    client: "Vista Residences",
    project: "Informative Mobile App",
    platform: "Mobile iOS & Android",
    role: "Lead Designer",
    contribution: "Engineered elegant unit finder with floor planner and interior galleries",
    year: "2023",
    category: "Real Estate & Space",
    industry: "CONSTRUCTION / REAL ESTATE / ARCHITECTURE",
    logoPng: "vista_residences_logo.png",
    colorFrom: "#065f46",
    colorTo: "#0f172a"
  },
  {
    id: "p33",
    client: "Moldex Realty",
    project: "Owner's Mobile Workspace",
    platform: "Mobile",
    role: "Mobile Architect",
    contribution: "Designed homeowner account tracking, billing statement, and support tickets",
    year: "2023",
    category: "Real Estate & Space",
    industry: "CONSTRUCTION / REAL ESTATE / ARCHITECTURE",
    logoPng: "moldex_realty_logo.png",
    colorFrom: "#b45309",
    colorTo: "#7c2d12"
  },
  {
    id: "p53",
    client: "Dormiko",
    project: "Tenant Management System",
    platform: "Desktop Admin App",
    role: "Interaction Designer",
    contribution: "Engineered grid billing calculators and tenant rental statement tables",
    year: "2019",
    category: "Real Estate & Space",
    industry: "SPACE",
    logoPng: "dormiko_logo.png",
    colorFrom: "#27272a",
    colorTo: "#0f172a"
  },
  {
    id: "p54",
    client: "CAZZA Zamora Residences",
    project: "Luxury Properties Landing Website",
    platform: "Web",
    role: "UI/UX Partner",
    contribution: "Bespoke property landing layout styling with gold accents and layout slides",
    year: "2019",
    category: "Real Estate & Space",
    industry: "SPACE",
    logoPng: "cazza_logo.png",
    colorFrom: "#78350f",
    colorTo: "#0f172a"
  },

  // --- ENERGY / POWER ---
  {
    id: "p31",
    client: "Aboitiz Power",
    project: "Internal Energy Portal",
    platform: "Desktop Intranet",
    role: "UX Specialist",
    contribution: "Redesigned plant operations logs and turbine efficiency report system",
    year: "2023",
    category: "Automobile & Industry",
    industry: "ENERGY / POWER / RENEWABLES / GAS / OIL",
    logoPng: "aboitiz_power_logo.png",
    colorFrom: "#0284c7",
    colorTo: "#14532d"
  },
  {
    id: "p34",
    client: "Ramcar Batteries, Inc.",
    project: "Warehouse Reporting System",
    platform: "Tablet & Desktop",
    role: "Enterprise Lead",
    contribution: "Designed scan-to-verify logistics workflow with real-time error logging",
    year: "2022",
    category: "Automobile & Industry",
    industry: "ENERGY / POWER / RENEWABLES / GAS / OIL",
    logoPng: "ramcar_batteries_logo.png",
    colorFrom: "#0369a1",
    colorTo: "#991b1b"
  },

  // --- EDUCATION ---
  {
    id: "p5",
    client: "Technological Institute of the Philippines",
    project: "Informative Website",
    platform: "Web (Academic Portal)",
    role: "UI/UX Designer",
    contribution: "Created clean visual department finder and admissions intake funnel",
    year: "2021",
    category: "Other Sectors",
    industry: "EDUCATION",
    logoPng: "tip_logo.png",
    colorFrom: "#451a03",
    colorTo: "#78350f"
  },
  {
    id: "p11",
    client: "De la Salle Lipa",
    project: "Informative Website",
    platform: "Web (Responsive)",
    role: "Design Lead",
    contribution: "Implemented modular grid layout for student news and events board",
    year: "2023",
    category: "Other Sectors",
    industry: "EDUCATION",
    logoPng: "de_la_salle_lipa_logo.png",
    colorFrom: "#064e3b",
    colorTo: "#0f5132"
  },

  // --- EXPERIENCE ---
  {
    id: "p2",
    client: "Tao Philippines",
    project: "Internal Marketplace Management",
    platform: "Web Portal",
    role: "Product Designer",
    contribution: "Engineered island expeditions inventory and provisions planning suite",
    year: "2019",
    category: "Experience & Lifestyle",
    industry: "EXPERIENCE",
    logoPng: "tao_philippines_mpos_logo.png",
    colorFrom: "#7c2d12",
    colorTo: "#451a03"
  },
  {
    id: "p35",
    client: "Visita",
    project: "Booking & Reservation Management",
    platform: "Desktop Web",
    role: "Lead UI/UX Designer",
    contribution: "Designed custom calendar with drag-and-drop tour operators organizer",
    year: "2022",
    category: "Experience & Lifestyle",
    industry: "EXPERIENCE",
    logoPng: "visita_logo.png",
    colorFrom: "#854d0e",
    colorTo: "#1e1b4b"
  },
  {
    id: "p36",
    client: "Masungi Geo reserve",
    project: "Customer Booking Portal",
    platform: "Responsive Web",
    role: "Interaction Lead",
    contribution: "Created beautiful reservation portal displaying eco-resort slots availability",
    year: "2022",
    category: "Experience & Lifestyle",
    industry: "EXPERIENCE",
    logoPng: "masungi_georeserve_logo.png",
    colorFrom: "#15803d",
    colorTo: "#064e3b"
  },
  {
    id: "p37",
    client: "Megaworld x Chinatown",
    project: "Museum Experience Mobile App",
    platform: "Mobile iOS & Android",
    role: "Lead Product Designer",
    contribution: "Designed QR-based interactive virtual exhibitions directory and audio guide",
    year: "2022",
    category: "Experience & Lifestyle",
    industry: "EXPERIENCE",
    logoPng: "megaworld_chinatown_logo.png",
    colorFrom: "#1e1b4b",
    colorTo: "#7f1d1d"
  },

  // --- FIN TECH / BANKING / INSURANCE ---
  {
    id: "p38",
    client: "Cocogen Insurance",
    project: "Insurance Claim Mobile App",
    platform: "Mobile iOS & Android",
    role: "Mobile Lead",
    contribution: "Streamlined snap-and-upload automotive collision insurance claims processing",
    year: "2022",
    category: "Other Sectors",
    industry: "FIN TECH / BANKING / INSURANCE",
    logoPng: "cocogen_insurance_logo.png",
    colorFrom: "#047857",
    colorTo: "#1e293b"
  },

  // --- FOOD & BEVERAGES ---
  {
    id: "p39",
    client: "Pepsi Philippines",
    project: "SFA Mobile Logistics Portal",
    platform: "Mobile (Enterprise)",
    role: "Senior UX Designer",
    contribution: "Crafted automated field sales tool for inventory route dispatching",
    year: "2021",
    category: "Other Sectors",
    industry: "FOOD & BEVERAGES",
    logoPng: "pepsi_logo.png",
    colorFrom: "#1d4ed8",
    colorTo: "#991b1b"
  },

  // --- FARMING / FLOWERSHOP ---
  {
    id: "p1",
    client: "Purificacion Orchids",
    project: "Informative Website",
    platform: "Web",
    role: "UI Designer",
    contribution: "Designed floral catalog with taxonomy filter and greenhouse showcase",
    year: "2019",
    category: "Other Sectors",
    industry: "FARMING / FLOWERSHOP",
    logoPng: "purificacion_orchids_logo.png",
    colorFrom: "#4d1a7f",
    colorTo: "#2e1065"
  },

  // --- INDUSTRIAL ---
  {
    id: "p4", // Merged Kubota machines & loyalty under p4
    client: "Kubota Philippines",
    project: "Machine Management & Loyalty App",
    platform: "Mobile App & System Portal",
    role: "Lead UX Architect",
    contribution: "Designed agricultural tracker, part reorder list, and loyalty system",
    year: "2021",
    category: "Automobile & Industry",
    industry: "INDUSTRIAL / EQUIPMENT / REPAIR",
    logoPng: "kubota_philippines_systems_logo.png",
    colorFrom: "#0891b2",
    colorTo: "#0f172a"
  },
  {
    id: "p40",
    client: "Logos Creative Office",
    project: "Production Management System",
    platform: "Desktop System",
    role: "Main Designer",
    contribution: "Designed visual production pipelines, print queues, and job allocations",
    year: "2021",
    category: "Automobile & Industry",
    industry: "INDUSTRIAL / EQUIPMENT / REPAIR",
    logoPng: "logos_creative_logo.png",
    colorFrom: "#15803d",
    colorTo: "#18181b"
  },

  // --- LOGISTICS ---
  {
    id: "p9",
    client: "Adsia Logistics",
    project: "Driver's Mobile App",
    platform: "Android Mobile",
    role: "UX Specialist",
    contribution: "Built optimal parcel routing, delivery task sheets, and sign-to-verify flow",
    year: "2022",
    category: "Automobile & Industry",
    industry: "LOGISTICS",
    logoPng: "adsia_logistics_logo.png",
    colorFrom: "#166534",
    colorTo: "#14532d"
  },
  {
    id: "p41",
    client: "Airtropolis Consolidator Phils.",
    project: "Cargo Cargo Shipping Portal",
    platform: "Web",
    role: "Lead UI Designer",
    contribution: "Designed freight tracking dashboard and automated quote calculator",
    year: "2021",
    category: "Automobile & Industry",
    industry: "LOGISTICS",
    logoPng: "airtropolis_logo.png",
    colorFrom: "#1d4ed8",
    colorTo: "#0f172a"
  },

  // --- HEALTHCARE & MEDICAL TECH ---
  {
    id: "p42",
    client: "Relaymed Health Solutions",
    project: "Patient & Doctor's Web Portal",
    platform: "Web Portal",
    role: "EHR Specialist",
    contribution: "Designed encrypted electronic health records and telehealth booking panel",
    year: "2021",
    category: "Healthcare & Skincare",
    industry: "HEALTHCARE & MEDICAL TECH",
    logoPng: "relaymed_logo.png",
    colorFrom: "#be123c",
    colorTo: "#0f172a"
  },
  {
    id: "p43",
    client: "Menarini Group",
    project: "Patient Portal Mobile App",
    platform: "iOS & Android Mobile",
    role: "Healthcare Designer",
    contribution: "Designed dose logging, prescription refills alerts, and lab report panels",
    year: "2020",
    category: "Healthcare & Skincare",
    industry: "HEALTHCARE & MEDICAL TECH",
    logoPng: "menarini_logo.png",
    colorFrom: "#e11d48",
    colorTo: "#18181b"
  },
  {
    id: "p55",
    client: "TrinityHealth Philippines",
    project: "Patient Care Portal",
    platform: "Web Portal",
    role: "Principal UX Partner",
    contribution: "Formulated patient intake system and clinical records dashboard",
    year: "2023",
    category: "Healthcare & Skincare",
    industry: "HEALTHCARE & MEDICAL TECH",
    logoPng: "trinity_health_philippines_logo.png",
    colorFrom: "#1e3a8a",
    colorTo: "#1e40af"
  },
  {
    id: "p56",
    client: "TrinityCare",
    project: "Care Management Mobile Application",
    platform: "iOS & Android",
    role: "Product Lead",
    contribution: "Built direct doctor-to-patient chat messaging and symptom tracking panels",
    year: "2024",
    category: "Healthcare & Skincare",
    industry: "HEALTHCARE & MEDICAL TECH",
    logoPng: "trinity_care_logo.png",
    colorFrom: "#0284c7",
    colorTo: "#0f172a"
  },

  // --- HOME ---
  {
    id: "p7",
    client: "World Home Depot",
    project: "Informative Website",
    platform: "Web (Desktop)",
    role: "Industrial UI Advisor",
    contribution: "Replaced paper catalogs with lightweight, responsive material inventory matrices",
    year: "2021",
    category: "Other Sectors",
    industry: "HOME",
    logoPng: "world_home_depot_logo.png",
    colorFrom: "#065f46",
    colorTo: "#166534"
  },
  {
    id: "p44",
    client: "Lazuli",
    project: "Curated Furniture Catalog",
    platform: "Web",
    role: "Aesthetics Designer",
    contribution: "Minimalist layout with micro-animations highlighting imported premium textures",
    year: "2020",
    category: "Other Sectors",
    industry: "HOME",
    logoPng: "lazuli_logo.png",
    colorFrom: "#18181b",
    colorTo: "#312e81"
  },

  // --- LIFESTYLE ---
  {
    id: "p45",
    client: "Philippine Canine Club, Inc.",
    project: "Internal Competition Portal",
    platform: "Web System",
    role: "Aesthetics Designer",
    contribution: "Designed dog breed point systems, judging cards, and contest templates",
    year: "2020",
    category: "Experience & Lifestyle",
    industry: "LIFESTYLE",
    logoPng: "pcci_logo.png",
    colorFrom: "#991b1b",
    colorTo: "#18181b"
  },
  {
    id: "p46",
    client: "Perigon",
    project: "Fitness Tracker Mobile App",
    platform: "iOS & Android Mobile",
    role: "Full Cycle UX Lead",
    contribution: "Engineered spinning class reservation, locker selectors, and booking engines",
    year: "2020",
    category: "Experience & Lifestyle",
    industry: "LIFESTYLE",
    logoPng: "perigon_logo.png",
    colorFrom: "#27272a",
    colorTo: "#09090b"
  },

  // --- NGO ---
  {
    id: "p47",
    client: "PAFCPIC",
    project: "Cooperative Informative Hub",
    platform: "Web",
    role: "UI/UX Consult",
    contribution: "Refreshed cooperative account presentations and dividend lookup pages",
    year: "2020",
    category: "Other Sectors",
    industry: "NON-GOVERNMENT ORGANIZATION",
    logoPng: "pafcpic_logo.png",
    colorFrom: "#14532d",
    colorTo: "#78350f"
  },
  {
    id: "p48",
    client: "SSA Corp",
    project: "Welfare Foundations Workspace",
    platform: "Web CMS",
    role: "General Designer",
    contribution: "Created donation reporting systems and visual organization trackers",
    year: "2019",
    category: "Other Sectors",
    industry: "NON-GOVERNMENT ORGANIZATION",
    logoPng: "ssa_corp_logo.png",
    colorFrom: "#065f46",
    colorTo: "#111827"
  },
  {
    id: "p49",
    client: "Child Protection Network",
    project: "Social Welfare Internal System",
    platform: "Desktop System",
    role: "UX Strategist",
    contribution: "Crafted intake trackers and securely segmented case folders for social workers",
    year: "2019",
    category: "Other Sectors",
    industry: "NON-GOVERNMENT ORGANIZATION",
    logoPng: "child_protection_logo.png",
    colorFrom: "#be123c",
    colorTo: "#0f172a"
  },

  // --- RETAIL ---
  {
    id: "p50",
    client: "Toys R Us",
    project: "Registry & Rewards Tracker",
    platform: "Responsive Web",
    role: "Interaction Designer",
    contribution: "Designed gift registry listings share workflow and shopping cart guides",
    year: "2019",
    category: "E-Commerce & Retail",
    industry: "RETAIL",
    logoPng: "toys_r_us_logo.png",
    colorFrom: "#db2777",
    colorTo: "#2563eb"
  },

  // --- SAFETY ---
  {
    id: "p12", // Unilab Security App under Safety
    client: "Unilab Security Portal",
    project: "Security App",
    platform: "Mobile",
    role: "System Architect",
    contribution: "Created security guard incident logger and emergency notify sheets",
    year: "2023",
    category: "Other Sectors",
    industry: "SAFETY",
    logoPng: "unilab_logo.png",
    colorFrom: "#1d4ed8",
    colorTo: "#1e40af"
  },

  // --- SKINCARE ---
  {
    id: "p51",
    client: "AQ Skin Solutions",
    project: "Skincare E-Commerce Solution",
    platform: "Web e-Store",
    role: "Design Lead",
    contribution: "Crafted custom e-skincare routine guide and product catalog checkouts",
    year: "2019",
    category: "Healthcare & Skincare",
    industry: "SKINCARE, BEAUTY AND WELLNESS",
    logoPng: "aq_skin_solutions_logo.png",
    colorFrom: "#18181b",
    colorTo: "#4a044e"
  },

  // --- DIGITAL AGENCY ---
  {
    id: "p52",
    client: "Terraflic",
    project: "Video-Editing Management System",
    platform: "Desktop Web App",
    role: "Main Designer",
    contribution: "Engineered web workspace allowing instant video preview feedback comments",
    year: "2019",
    category: "Automobile & Industry",
    industry: "DIGITAL AGENCY",
    logoPng: "terraflic_logo.png",
    colorFrom: "#0d9488",
    colorTo: "#0f172a"
  },

  // --- GOVERNMENT ---
  {
    id: "p22", // DOJ OADR Government Web App
    client: "DOJ OADR",
    project: "Web App",
    platform: "Web Portal",
    role: "Lead Visual Architect",
    contribution: "Designed secure dispute file registry list and hearing planner modules",
    year: "2025",
    category: "Other Sectors",
    industry: "GOVERNMENT",
    logoPng: "doj_oadr_active_logo.png",
    colorFrom: "#0284c7",
    colorTo: "#0f172a"
  },

  // --- OTHERS ---
  {
    id: "p17", // The Spa Wellness Booking Web App
    client: "The Spa Wellness",
    project: "Booking Web App",
    platform: "Responsive Web",
    role: "Main Designer",
    contribution: "Crafted intuitive therapist booking scheduler with live progress maps",
    year: "2023",
    category: "Other Sectors",
    industry: "OTHERS",
    logoPng: "the_spa_wellness_logo.png",
    colorFrom: "#9f1239",
    colorTo: "#111827"
  },
  {
    id: "p19", // Aeon Fantasy Kidzooona
    client: "Aeon Fantasy: Kidzooona",
    project: "Mobile App",
    platform: "iOS & Android",
    role: "Lead Designer",
    contribution: "Engineered child pass checkouts with integrated sibling pass registers",
    year: "2023",
    category: "Other Sectors",
    industry: "OTHERS",
    logoPng: "kidzooona_logo.png",
    colorFrom: "#4a044e",
    colorTo: "#1e1b4b"
  },
  {
    id: "p18", // Victory Booking System
    client: "Victory Christian Fellowship",
    project: "Venue Booking System",
    platform: "Desktop Portal",
    role: "UX Specialist",
    contribution: "Created administrative room calendar manager with automatic overlaps guards",
    year: "2023",
    category: "Other Sectors",
    industry: "OTHERS",
    logoPng: "victory_christian_fellowship_logo.png",
    colorFrom: "#4c0519",
    colorTo: "#701a75"
  }
];
