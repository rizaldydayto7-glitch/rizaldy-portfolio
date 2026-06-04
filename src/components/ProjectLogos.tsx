import type { JSX } from 'react';

export const getProjectLogo = (id: string, clientName: string): JSX.Element => {
  switch (id) {
    case "p1": // Purificacion Orchids
      return (
        <div className="flex flex-col items-center animate-fade-in text-[#d8b4fe]">
          <svg viewBox="0 0 100 80" className="w-14 h-10">
            <path d="M50 15 C54 25, 65 30, 75 30 C60 40, 65 55, 50 50 C35 55, 40 40, 25 30 C35 30, 46 25, 50 15 Z" fill="#A855F7" fillOpacity="0.3" stroke="#C084FC" strokeWidth="1.5" />
            <circle cx="50" cy="38" r="3" fill="#EAB308" />
          </svg>
          <span className="font-sans font-black text-[10px] tracking-widest text-[#D8B4FE] uppercase mt-1">PURIFICACION</span>
        </div>
      );

    case "p2": // Tao Philippines mPOS
      return (
        <div className="flex flex-col items-center animate-fade-in text-amber-500">
          <svg viewBox="0 0 100 100" className="w-14 h-14">
            <circle cx="50" cy="50" r="42" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3,3" />
            <circle cx="50" cy="50" r="18" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="1" />
            <path d="M50 35 L50 65 M35 50 L65 50" stroke="#FFFFFF" strokeWidth="1.5" />
          </svg>
          <span className="font-sans font-black text-[#F59E0B] tracking-[0.25em] text-xs mt-1.5 uppercase">TAO</span>
        </div>
      );

    case "p3": // Kawasaki
      return (
        <div className="flex flex-col items-center gap-1 animate-fade-in">
          <svg viewBox="0 0 140 50" className="w-28 h-10">
            <path d="M10 5 H22 L42 27 L42 5 H52 V45 H42 L42 37 L22 45 H10 L30 31 Z" fill="#E60012" />
            <text x="60" y="32" className="font-sans font-black text-xl tracking-tighter fill-white">KAWASAKI</text>
          </svg>
          <span className="font-mono text-[7px] uppercase tracking-[0.35em] text-[#999999]/85">ENGINEERED SYSTEM</span>
        </div>
      );

    case "p4":
    case "p6": // Kubota
      return (
        <div className="flex items-center gap-3 animate-fade-in">
          <div className="flex items-center bg-zinc-950/40 p-2.5 rounded-lg border border-teal-500/15">
            <span className="font-sans font-black text-xl text-teal-400 tracking-tighter italic mr-1">Kubota</span>
            <span className="w-3.5 h-3.5 bg-teal-400 text-black font-sans font-bold text-[9px] flex items-center justify-center rounded">K</span>
          </div>
        </div>
      );

    case "p5": // TIP
      return (
        <div className="flex items-center gap-2.5 p-1.5 bg-zinc-950/50 border border-zinc-800 rounded-lg animate-fade-in">
          <svg viewBox="0 0 80 80" className="w-12 h-12">
            <circle cx="40" cy="40" r="35" fill="#EAB308" />
            <circle cx="40" cy="40" r="30" fill="#000000" />
            <g transform="translate(40,40)">
              {Array.from({ length: 12 }).map((_, i) => (
                <rect key={i} x="-2.5" y="-36" width="5" height="10" fill="#EAB308" transform={`rotate(${i * 30})`} />
              ))}
            </g>
            <circle cx="40" cy="40" r="22" fill="#EAB308" />
            <text x="40" y="47" textAnchor="middle" className="font-sans font-black text-base fill-black">TIP</text>
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-xs text-yellow-500 tracking-wider">T.I.P.</span>
            <span className="font-mono text-[6px] text-zinc-400 max-w-[100px] leading-tight">Technological Institute</span>
          </div>
        </div>
      );

    case "p7": // World Home Depot
      return (
        <div className="flex items-center gap-2.5 animate-fade-in">
          <svg viewBox="0 0 80 80" className="w-12 h-12 text-emerald-500">
            <circle cx="40" cy="40" r="32" fill="none" stroke="#10B981" strokeWidth="2" />
            <rect x="25" y="28" width="6" height="24" fill="#10B981" />
            <rect x="37" y="22" width="6" height="30" fill="#34D399" />
            <rect x="49" y="28" width="6" height="24" fill="#047857" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-sans font-extrabold text-[11px] text-white tracking-tight leading-none">WORLD HOME DEPOT</span>
            <span className="font-mono text-[7px] text-zinc-500 tracking-widest mt-0.5 mt-1 uppercase">CORPORATION</span>
          </div>
        </div>
      );

    case "p8": // Nature's Spring
      return (
        <div className="flex flex-col items-center gap-1.5 animate-fade-in">
          <svg viewBox="0 0 100 100" className="w-14 h-14">
            <defs>
              <linearGradient id="springDrop2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#0284C7" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="42" fill="none" stroke="#38BDF8" strokeWidth="0.5" strokeDasharray="3,3" />
            <circle cx="50" cy="50" r="32" fill="none" stroke="#22D3EE" strokeWidth="1" strokeOpacity="0.4" />
            <path d="M50 20 C50 20 30 46 30 60 C30 71 39 80 50 80 C61 80 70 71 70 60 C70 46 50 20 50 20 Z" fill="url(#springDrop2)" />
            <path d="M44 54 C44 50 48 44 50 44" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
          </svg>
          <span className="font-sans font-black text-[9px] tracking-[0.25em] text-[#0ea5e9] uppercase leading-none mt-1">Nature's Spring</span>
        </div>
      );

    case "p9": // Adsia Logistics
      return (
        <div className="flex items-center gap-2.5 animate-fade-in">
          <svg viewBox="0 0 80 80" className="w-12 h-12">
            <circle cx="40" cy="40" r="32" fill="#15803D" fillOpacity="0.2" stroke="#22C55E" strokeWidth="2" />
            <path d="M25 40 L35 30 H55 L45 40 H25 Z" fill="#22C55E" />
            <path d="M35 50 L45 40 H55 L45 50 H35 Z" fill="#16A34A" opacity="0.8" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-sm text-white tracking-widest leading-none">ADSIA</span>
            <span className="font-mono text-[7px] text-zinc-400 uppercase tracking-wider mt-0.5">LOGISTICS</span>
          </div>
        </div>
      );

    case "p10": // Honda
      return (
        <div className="flex flex-col items-center gap-2 animate-fade-in">
          <svg viewBox="0 0 100 50" className="w-20 h-10">
            <path d="M22 6 C18 6 15 8 16 14 Q19 32 23 48 C24 51 27 52 32 52 H42 L41 32 H25 L21 16 H44 L43 6 Z" fill="#E31837" />
            <path d="M78 6 C82 6 85 8 84 14 Q81 32 77 48 C76 51 73 52 68 52 H58 L59 32 H75 L79 16 H56 L57 6 Z" fill="#E31837" />
          </svg>
          <span className="font-sans font-black text-sm tracking-[0.3em] text-white">HONDA</span>
        </div>
      );

    case "p11": // De La Salle Lipa
      return (
        <div className="flex items-center gap-2.5 p-1.5 bg-[#064E3B]/20 rounded-xl border border-emerald-500/20 animate-fade-in">
          <svg viewBox="0 0 80 80" className="w-12 h-12">
            <polygon points="40,10 70,25 70,55 40,70 10,55 10,25" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
            <polygon points="40,20 45,35 60,35 48,45 52,60 40,50 28,60 32,45 20,35 35,35" fill="#FFFFFF" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-sm text-white tracking-wider leading-none">DLSL</span>
            <span className="font-mono text-[7px] text-emerald-400 uppercase tracking-widest mt-1">De La Salle Lipa</span>
          </div>
        </div>
      );

    case "p12":
    case "p14": // Unilab
      return (
        <div className="flex flex-col items-center animate-fade-in">
          <div className="bg-[#005A9C] px-4 py-2 rounded-full border-2 border-white/95 flex items-center gap-1.5 shadow-xl shrink-0">
            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#005A9C] font-sans font-black text-[9px]">U</span>
            </div>
            <span className="font-sans font-black text-white text-sm tracking-wide uppercase">UNILAB</span>
          </div>
          <span className="font-mono text-[7px] text-zinc-500 uppercase tracking-widest mt-1.5">Trusted Healthcare</span>
        </div>
      );

    case "p13":
    case "p15": // Carmen's Best
      return (
        <div className="flex flex-col items-center animate-fade-in">
          <svg viewBox="0 0 80 80" className="w-14 h-14">
            <circle cx="40" cy="40" r="32" fill="#1E3A8A" stroke="#FFFFFF" strokeWidth="1.5" />
            <circle cx="40" cy="40" r="28" fill="#1E3A8A" stroke="#D97706" strokeWidth="1" strokeDasharray="3,3" />
            <path d="M22 45 C30 50 50 50 58 45 L54 62 L40 55 L26 62 Z" fill="#D97706" />
            <text x="40" y="32" textAnchor="middle" className="font-sans font-black text-xs fill-white tracking-widest">CB</text>
            <path d="M22 38 Q40 43 58 38" stroke="#FFFFFF" strokeWidth="1" />
          </svg>
          <span className="font-sans font-bold text-[10px] tracking-widest text-[#F59E0B] uppercase mt-1">Carmen's Best</span>
        </div>
      );

    case "p16":
    case "p20": // Ortigas Malls
      return (
        <div className="flex items-center gap-2.5 animate-fade-in">
          <svg viewBox="0 0 80 80" className="w-12 h-12">
            <rect x="5" y="5" width="70" height="70" rx="12" fill="#BE123C" fillOpacity="0.15" stroke="#E11D48" strokeWidth="1.5" />
            <path d="M22 40 A15 15 0 1 1 52 40 A15 15 0 1 1 22 40 Z" fill="none" stroke="#F59E0B" strokeWidth="3" />
            <path d="M35 32 L45 50 L55 32" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-[#F59E0B] tracking-wider text-sm leading-none uppercase">ORTIGAS</span>
            <span className="font-mono text-[7px] text-zinc-400 uppercase tracking-widest mt-1">Malls & Space</span>
          </div>
        </div>
      );

    case "p17": // The Spa
      return (
        <div className="flex flex-col items-center gap-1 animate-fade-in">
          <svg viewBox="0 0 120 70" className="w-20 h-10">
            <path d="M35 50 C35 35, 55 25, 60 15 C65 25, 85 35, 85 50 C85 50, 60 55, 35 50 Z" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
            <line x1="60" y1="15" x2="60" y2="50" stroke="#F59E0B" strokeWidth="1" />
            <path d="M60 30 C53 35, 48 40, 42 43" stroke="#F59E0B" strokeWidth="1" />
            <path d="M60 30 C67 35, 72 40, 78 43" stroke="#F59E0B" strokeWidth="1" />
          </svg>
          <span className="font-sans font-black text-white text-[10px] tracking-[0.2em] uppercase leading-none">THE SPA</span>
          <span className="font-mono text-[6px] text-zinc-500 uppercase tracking-widest leading-none mt-0.5">Wellness & Bliss</span>
        </div>
      );

    case "p18":
    case "p21": // Victory / VCF
      return (
        <div className="flex items-center gap-3 animate-fade-in">
          <svg viewBox="0 0 80 80" className="w-12 h-12">
            <circle cx="40" cy="40" r="32" fill="#1E3A8A" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="2" />
            <circle cx="40" cy="40" r="22" fill="none" stroke="#60A5FA" strokeWidth="1.5" />
            <path d="M28 35 L38 48 L56 26" fill="none" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-sm text-white tracking-widest leading-none uppercase">VICTORY</span>
            <span className="font-mono text-[7px] text-[#60A5FA] tracking-wider mt-0.5">FELLOWSHIP</span>
          </div>
        </div>
      );

    case "p19": // Kidzooona
      return (
        <div className="flex flex-col items-center justify-center animate-fade-in select-none">
          <svg viewBox="0 0 210 95" className="w-32 h-14" fill="none">
            {/* Slogan "Aeon Fantasy" */}
            <text 
              x="12" 
              y="22" 
              fill="#F59E0B" 
              fontSize="11" 
              fontWeight="900" 
              fontFamily='"Inter", system-ui, sans-serif'
              letterSpacing="1.2"
              className="font-black"
            >
              Aeon Fantasy
            </text>

            {/* k */}
            <text 
              x="10" 
              y="68" 
              fill="#EF4444" 
              fontSize="34" 
              fontWeight="900" 
              fontFamily='"Inter", system-ui, sans-serif'
              className="font-black"
            >
              k
            </text>

            {/* i letter (excluding dot) */}
            <text 
              x="30" 
              y="68" 
              fill="#2563EB" 
              fontSize="34" 
              fontWeight="900" 
              fontFamily='"Inter", system-ui, sans-serif'
              className="font-black"
            >
              i
            </text>
            
            {/* Custom playful i-dot */}
            <circle cx="34" cy="40" r="3.5" fill="#DC2626" />
            <circle cx="34" cy="40" r="2" fill="#EAB308" />

            {/* d */}
            <text 
              x="44" 
              y="68" 
              fill="#D97706" 
              fontSize="34" 
              fontWeight="900" 
              fontFamily='"Inter", system-ui, sans-serif'
              className="font-black"
            >
              d
            </text>

            {/* z */}
            <text 
              x="66" 
              y="68" 
              fill="#16A34A" 
              fontSize="34" 
              fontWeight="900" 
              fontFamily='"Inter", system-ui, sans-serif'
              className="font-black"
            >
              z
            </text>

            {/* Playful o-face 1 */}
            <g transform="translate(90, 52)">
              <circle cx="0" cy="0" r="10.5" fill="#84CC16" stroke="#4D7C0F" strokeWidth="1" />
              {/* Eyes */}
              <ellipse cx="-3.5" cy="-1" rx="1.8" ry="2.8" fill="#3D2012" />
              <ellipse cx="3.5" cy="-1" rx="1.8" ry="2.8" fill="#3D2012" />
            </g>

            {/* Playful o-face 2 */}
            <g transform="translate(112, 60)">
              <circle cx="0" cy="0" r="10.5" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" />
              {/* Eyes */}
              <ellipse cx="-3.5" cy="-1" rx="1.8" ry="2.8" fill="#3D2012" />
              <ellipse cx="3.5" cy="-1" rx="1.8" ry="2.8" fill="#3D2012" />
            </g>

            {/* Playful o-face 3 */}
            <g transform="translate(134, 52)">
              <circle cx="0" cy="0" r="10.5" fill="#0D9488" stroke="#115E59" strokeWidth="1" />
              {/* Eyes */}
              <ellipse cx="-3.5" cy="-1" rx="1.8" ry="2.8" fill="#3D2012" />
              <ellipse cx="3.5" cy="-1" rx="1.8" ry="2.8" fill="#3D2012" />
            </g>

            {/* Giant collective smile curve linking the faces */}
            <path 
              d="M 90,66 Q 112,82 134,66" 
              stroke="#3D2012" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              fill="none" 
            />

            {/* n */}
            <text 
              x="150" 
              y="68" 
              fill="#10B981" 
              fontSize="34" 
              fontWeight="900" 
              fontFamily='"Inter", system-ui, sans-serif'
              className="font-black"
            >
              n
            </text>

            {/* a */}
            <text 
              x="172" 
              y="68" 
              fill="#047857" 
              fontSize="34" 
              fontWeight="900" 
              fontFamily='"Inter", system-ui, sans-serif'
              className="font-black"
            >
              a
            </text>

            {/* Japanese Subtext "キッズーナ" */}
            <text 
              x="138" 
              y="85" 
              fill="#A1A1AA" 
              fontSize="8" 
              fontWeight="900" 
              fontFamily='"Inter", system-ui, sans-serif'
              letterSpacing="0.5"
              className="font-black tracking-wide"
            >
              キッズーナ
            </text>
          </svg>
        </div>
      );

    case "p22":
    case "p24": // DOJ OADR
      return (
        <div className="flex items-center gap-3 bg-zinc-950/40 p-2 rounded-lg border border-yellow-500/10 animate-fade-in">
          <svg viewBox="0 0 80 80" className="w-12 h-12">
            <circle cx="40" cy="40" r="35" fill="none" stroke="#EAB308" strokeWidth="1.5" />
            <line x1="40" y1="15" x2="40" y2="65" stroke="#EAB308" strokeWidth="2" />
            <line x1="22" y1="28" x2="58" y2="28" stroke="#EAB308" strokeWidth="2.5" />
            <path d="M22 28 L15 45 C15 50 29 50 29 45 Z" fill="#EAB308" fillOpacity="0.2" stroke="#EAB308" strokeWidth="1" />
            <path d="M58 28 L51 45 C51 50 65 50 65 45 Z" fill="#EAB308" fillOpacity="0.2" stroke="#EAB308" strokeWidth="1" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-white text-xs leading-none">DOJ OADR</span>
            <span className="font-mono text-[5px] text-zinc-500 uppercase tracking-widest max-w-[80px] leading-tight mt-1">dispute resolution</span>
          </div>
        </div>
      );

    case "p23": // IBPAP
      return (
        <div className="flex flex-col items-center gap-1 animate-fade-in">
          <svg viewBox="0 0 100 60" className="w-16 h-8 text-sky-400">
            <path d="M15,30 L35,30" stroke="#FFFFFF" strokeWidth="2" />
            <path d="M35,15 L35,45" stroke="#3B82F6" strokeWidth="2.5" />
            <path d="M35,30 L65,30" stroke="#EF4444" strokeWidth="2" />
            <circle cx="15" cy="30" r="4" fill="#3B82F6" />
            <circle cx="35" cy="15" r="4" fill="#EAB308" />
            <circle cx="35" cy="45" r="4" fill="#10B981" />
            <circle cx="65" cy="30" r="4" fill="#EF4444" />
            <circle cx="85" cy="30" r="4" fill="#A21CAF" />
            <line x1="65" y1="30" x2="85" y2="30" stroke="#FFFFFF" strokeWidth="2" />
          </svg>
          <span className="font-sans font-black text-[11px] text-white tracking-[0.2em] uppercase leading-none">IBPAP</span>
        </div>
      );

    case "p25": // Smart Driving School
      return (
        <div className="flex flex-col items-center animate-fade-in">
          <svg viewBox="0 0 100 100" className="w-14 h-14">
            <polygon points="50,5 92,23 92,77 50,95 8,77 8,23" fill="#EAB308" stroke="#EF4444" strokeWidth="3" />
            <polygon points="50,11 86,27 86,73 50,89 14,73 14,27" fill="#EF4444" />
            <text x="50" y="44" textAnchor="middle" className="font-sans font-black text-[9px] fill-white tracking-widest">SMART</text>
            <rect x="18" y="52" width="64" height="18" rx="3" fill="#1E3A8A" stroke="#EAB308" strokeWidth="1" />
            <text x="50" y="64" textAnchor="middle" className="font-sans font-black text-[7px] fill-white tracking-wider">DRIVING SCHOOL</text>
          </svg>
          <span className="font-mono text-[6px] tracking-[0.25em] text-amber-400 uppercase mt-1">Driving School Portal</span>
        </div>
      );

    case "p26": // Super8
      return (
        <div className="flex items-center gap-1 animate-fade-in italic">
          <span className="font-sans font-black text-2xl tracking-tighter text-white stroke-blue-500 stroke-2">SUPER</span>
          <span className="font-sans font-black text-3xl text-sky-400">8</span>
        </div>
      );

    case "p27": // Funhan Mart
      return (
        <div className="flex flex-col items-center animate-fade-in">
          <div className="flex items-baseline">
            <span className="font-sans font-black text-lg text-purple-400 tracking-tighter">funhan</span>
            <span className="font-sans font-black text-xl text-yellow-400">mart</span>
          </div>
          <span className="font-mono text-[6px] text-zinc-300 uppercase tracking-widest leading-none mt-0.5">Korean Convenience Store</span>
        </div>
      );

    case "p28": // Centro Department Store
      return (
        <div className="flex flex-col items-center animate-fade-in">
          <svg viewBox="0 0 100 50" className="w-16 h-8">
            <polygon points="20,5 60,5 80,45 40,45" fill="#EF4444" />
            <polygon points="40,5 80,5 60,45 20,45" fill="#1D4ED8" opacity="0.8" />
            <text x="50" y="32" textAnchor="middle" className="font-sans font-black text-base fill-white italic tracking-tighter">C</text>
          </svg>
          <span className="font-sans font-black text-[9px] tracking-widest text-white mt-1 uppercase">CENTRO</span>
        </div>
      );

    case "p29": // Overspec'd
      return (
        <div className="flex flex-col items-center animate-fade-in border border-white/20 px-3 py-1.5 rounded bg-black/40">
          <span className="font-sans font-black text-xs text-white tracking-[0.25em] uppercase">OVERSPEC'D.</span>
          <span className="font-mono text-[5px] text-zinc-500 tracking-widest mt-1 uppercase">ESTABLISHED SPEC</span>
        </div>
      );

    case "p30": // American Home Appliances
      return (
        <div className="flex flex-col items-center animate-fade-in border-2 border-white px-2.5 py-1.5 bg-black/80">
          <span className="font-serif font-bold text-xs text-white tracking-wider">AMERICAN HOME</span>
          <span className="font-sans text-[7px] text-zinc-400 uppercase tracking-[0.2em] -mt-0.5">appliances</span>
        </div>
      );

    case "p31": // Aboitiz Power
      return (
        <div className="flex items-center gap-2 animate-fade-in">
          <svg viewBox="0 0 100 100" className="w-12 h-12 text-cyan-400">
            <path d="M50 15 C35 15 25 25 25 40 C25 55 35 65 50 65" fill="none" stroke="currentColor" strokeWidth="3" />
            <circle cx="50" cy="40" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M50 40 L65 55" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <circle cx="65" cy="55" r="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-xs text-white tracking-wide">AboitizPower</span>
            <span className="font-mono text-[5px] text-cyan-300 uppercase tracking-widest">A Better Future</span>
          </div>
        </div>
      );

    case "p32": // Vista Residences
      return (
        <div className="flex items-center gap-2 animate-fade-in">
          <svg viewBox="0 0 80 80" className="w-10 h-10">
            <path d="M15 25 L35 55 L65 15" fill="none" stroke="#22C55E" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M35 55 L45 35" fill="none" stroke="#3B82F6" strokeWidth="5.5" strokeLinecap="round" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-xs text-white tracking-widest leading-none">VISTA</span>
            <span className="font-mono text-[7px] text-zinc-400 mt-0.5">RESIDENCES</span>
          </div>
        </div>
      );

    case "p33": // Moldex Realty
      return (
        <div className="flex flex-col items-center gap-1 animate-fade-in">
          <svg viewBox="0 0 100 80" className="w-14 h-11">
            <polygon points="50,10 85,45 75,45 75,70 25,70 25,45 15,45" fill="#EA580C" stroke="#FDBA74" strokeWidth="1.5" />
            <rect x="35" y="45" width="30" height="25" fill="#EAB308" opacity="0.7" />
            <circle cx="50" cy="30" r="4" fill="#10B981" />
          </svg>
          <span className="font-sans font-black text-[9px] text-[#fb923c] tracking-widest uppercase">MOLDEX REALTY</span>
        </div>
      );

    case "p34": // Ramcar Batteries
      return (
        <div className="flex items-center gap-2 animate-fade-in">
          <svg viewBox="0 0 80 80" className="w-11 h-11 text-blue-500">
            <circle cx="40" cy="40" r="32" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M25 45 L40 25 L55 45" fill="none" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-[11px] text-white tracking-tighter">RAMCAR</span>
            <span className="font-mono text-[6px] text-zinc-400">Batteries, Inc.</span>
          </div>
        </div>
      );

    case "p35": // Visita
      return (
        <div className="flex flex-col items-center animate-fade-in">
          <div className="border border-yellow-500/30 p-2 rounded bg-zinc-950/60 flex items-center justify-center">
            <svg viewBox="0 0 80 80" className="w-10 h-10 text-yellow-500">
              <path d="M15 15 L65 15 L40 65 Z M15 15 L40 45 L65 15" fill="none" stroke="currentColor" strokeWidth="2.5" />
            </svg>
          </div>
          <span className="font-sans font-black text-[10px] text-yellow-500 tracking-[0.3em] uppercase mt-1">VISITA</span>
        </div>
      );

    case "p36": // Masungi Georeserve
      return (
        <div className="flex flex-col items-center animate-fade-in">
          <svg viewBox="0 0 100 80" className="w-14 h-11 text-emerald-400">
            <path d="M20,65 Q35,25 50,45 Q65,25 80,65" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M35,65 Q50,40 65,65" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          </svg>
          <span className="font-sans font-extrabold text-[8px] text-white tracking-[0.18em] uppercase -mt-1">MASUNGI</span>
          <span className="font-mono text-[5px] text-emerald-400 tracking-widest mt-0.5">GEORESERVE</span>
        </div>
      );

    case "p37": // Megaworld x Chinatown
      return (
        <div className="flex gap-4 items-center justify-center animate-fade-in">
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 60 60" className="w-9 h-9 text-blue-500">
              <rect x="5" y="5" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <path d="M15 15 H45 V45 H15 Z M25 25 H35 V35 H25 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className="font-mono text-[5px] text-zinc-400 mt-1 uppercase">MEGAWORLD</span>
          </div>
          <div className="w-[1px] h-8 bg-zinc-800" />
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 60 60" className="w-9 h-9 text-red-500">
              <circle cx="30" cy="30" r="23" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M20 30 C20 22, 40 22, 40 30 C40 38, 20 38, 20 30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2,1" />
            </svg>
            <span className="font-mono text-[5px] text-red-400 mt-1 uppercase">CHINATOWN</span>
          </div>
        </div>
      );

    case "p38": // Cocogen Insurance
      return (
        <div className="flex flex-col items-center animate-fade-in text-emerald-500">
          <svg viewBox="0 0 80 80" className="w-12 h-12">
            <circle cx="40" cy="40" r="34" fill="none" stroke="#EAB308" strokeWidth="1.5" />
            <path d="M40 70 L40 35 M40 45 C35 38, 22 42, 22 48 M40 50 C45 40, 58 42, 58 48 C55 35, 40 30, 40 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span className="font-sans font-black text-[9px] text-white tracking-[0.2em] uppercase mt-1">COCOGEN</span>
        </div>
      );

    case "p39": // Pepsi Philippines
      return (
        <div className="flex items-center gap-2 animate-fade-in">
          <svg viewBox="0 0 100 100" className="w-12 h-12">
            <circle cx="50" cy="50" r="45" fill="#1E3A8A" />
            <path d="M10 50 C10 50, 30 25, 50 25 C70 25, 90 50, 90 50 C90 50, 70 75, 50 75 C30 75, 10 50, 10 50 Z" fill="#EF4444" />
            <path d="M10 50 C10 50, 30 55, 50 55 C70 55, 90 50, 90 50 C90 50, 70 75, 50 75 C30 75, 10 50, 10 50 Z" fill="#FFFFFF" />
            <path d="M10 50 C10 50, 30 65, 50 65 C70 65, 90 50, 90 50 C90 50, 70 75, 50 75 C30 75, 10 50, 10 50 Z" fill="#1D4ED8" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-sm text-white tracking-widest lowercase">pepsi</span>
            <span className="font-mono text-[5px] text-zinc-400 mt-0.5">PHILIPPINES</span>
          </div>
        </div>
      );

    case "p40": // Logos Creative Office
      return (
        <div className="flex items-center gap-2.5 p-1.5 bg-[#15803D]/10 rounded border border-emerald-500/20 animate-fade-in">
          <svg viewBox="0 0 80 80" className="w-10 h-10 text-emerald-400">
            <rect x="15" y="15" width="50" height="50" rx="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <path d="M25 55 C25 35, 45 25, 55 45" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-xs text-white tracking-widest">LOGOS</span>
            <span className="font-mono text-[5px] text-zinc-400 max-w-[80px] leading-tight">Creative Office</span>
          </div>
        </div>
      );

    case "p41": // Airtropolis
      return (
        <div className="flex flex-col items-center animate-fade-in">
          <span className="font-serif italic font-black text-base text-sky-400 tracking-tighter shrink-0">Airtropolis</span>
          <span className="font-mono text-[5px] text-zinc-500 uppercase tracking-widest shrink-0">Consolidator Phils.</span>
        </div>
      );

    case "p42": // Relaymed
      return (
        <div className="flex items-center gap-2 p-1 bg-zinc-900 rounded animate-fade-in">
          <svg viewBox="0 0 80 80" className="w-9 h-9 text-rose-500">
            <rect x="25" y="10" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M40 5 L40 55 M25 30 L55 30" stroke="currentColor" strokeWidth="3" />
            <circle cx="40" cy="30" r="12" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-[10px] text-white tracking-widest leading-none">RELAYMED</span>
            <span className="font-mono text-[5px] text-zinc-500 tracking-wider">HEALTH SOLUTIONS</span>
          </div>
        </div>
      );

    case "p43": // Menarini Group
      return (
        <div className="flex items-center gap-2 animate-fade-in">
          <div className="bg-black border border-zinc-800 p-1 rounded">
            <svg viewBox="0 0 60 60" className="w-10 h-10 text-red-500">
              <rect x="5" y="5" width="50" height="50" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <path d="M15 45 L30 15 L45 45" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="22" y1="32" x2="38" y2="32" stroke="currentColor" strokeWidth="3" />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-xs text-white tracking-wide">MENARINI</span>
            <span className="font-mono text-[6px] text-red-400 mt-0.5">group</span>
          </div>
        </div>
      );

    case "p44": // Lazuli
      return (
        <div className="flex flex-col items-center animate-fade-in">
          <span className="font-serif text-[#e0e7ff] text-sm font-light tracking-[0.35em] uppercase">LAZULI</span>
          <svg viewBox="0 0 100 20" className="w-16 h-3 text-[#c7d2fe]">
            <path d="M10,10 Q50,20 90,10" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "p45": // Philippine Canine Club
      return (
        <div className="flex flex-col items-center animate-fade-in">
          <div className="flex items-baseline gap-1">
            <span className="font-sans font-black text-rose-600 text-lg tracking-tighter italic">PCCI</span>
            <svg viewBox="0 0 40 20" className="w-7 h-4 text-zinc-300">
              <path d="M10,18 L25,12 L35,5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="35" cy="5" r="2" fill="currentColor" />
            </svg>
          </div>
          <span className="font-mono text-[5px] text-zinc-500 uppercase tracking-widest mt-0.5">Philippine Canine Club</span>
        </div>
      );

    case "p46": // Perigon
      return (
        <div className="flex flex-col items-center animate-fade-in">
          <span className="font-sans font-black text-white text-base tracking-[0.25em] uppercase">PERIGON</span>
          <span className="font-mono text-[5px] text-zinc-600 tracking-[0.3em] uppercase mt-1">FITNESS INSPIRED</span>
        </div>
      );

    case "p47": // PAFCPIC
      return (
        <div className="flex items-center gap-2 animate-fade-in">
          <svg viewBox="0 0 80 80" className="w-11 h-11 text-emerald-400">
            <circle cx="40" cy="40" r="32" fill="none" stroke="#EAB308" strokeWidth="2" strokeDasharray="5,2" />
            <path d="M25,40 L40,25 L55,40 L40,55 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="40" cy="40" r="10" fill="#EAB308" />
          </svg>
          <span className="font-sans font-black text-emerald-300 text-xs tracking-wider">PAFCPIC</span>
        </div>
      );

    case "p48": // SSA Corp
      return (
        <div className="flex items-center gap-2 bg-emerald-900/10 p-1.5 rounded border border-emerald-500/10 animate-fade-in">
          <svg viewBox="0 0 80 80" className="w-10 h-10 text-emerald-500">
            <path d="M15 50 C15 30, 25 15, 40 15 C55 15, 65 30, 65 50" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="40" cy="35" r="3" fill="#EF4444" />
            <text x="40" y="55" textAnchor="middle" className="font-serif font-bold text-[10px] fill-white tracking-widest">S.S.A.</text>
          </svg>
          <span className="font-sans font-bold text-[9px] text-[#dbfde9]">SSA CORP</span>
        </div>
      );

    case "p49": // Child Protection Network
      return (
        <div className="flex flex-col items-center gap-1.5 animate-fade-in">
          <svg viewBox="0 0 80 80" className="w-11 h-11">
            <circle cx="40" cy="40" r="30" fill="none" stroke="#EF4444" strokeWidth="1" strokeDasharray="3,3" />
            <circle cx="40" cy="40" r="22" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
            <circle cx="40" cy="18" r="4" fill="#10B981" />
            <circle cx="58" cy="32" r="4" fill="#EAB308" />
            <circle cx="51" cy="54" r="4" fill="#A855F7" />
            <circle cx="29" cy="54" r="4" fill="#EC4899" />
            <circle cx="22" cy="32" r="4" fill="#EF4444" />
          </svg>
          <div className="flex flex-col leading-none">
            <span className="font-sans font-black text-rose-500 text-[8px] tracking-wide uppercase text-center">Child Protection</span>
            <span className="font-mono text-[5px] text-zinc-500 uppercase text-center">Network</span>
          </div>
        </div>
      );

    case "p50": // Toys R Us
      return (
        <div className="flex flex-col items-center justify-center animate-fade-in">
          <div className="flex gap-1">
            <span className="text-[#db2777] font-sans font-black text-sm uppercase leading-none">T</span>
            <span className="text-[#ea580c] font-sans font-black text-sm uppercase leading-none">o</span>
            <span className="text-[#eab308] font-sans font-black text-sm uppercase leading-none">y</span>
            <span className="text-[#2563eb] font-sans font-black text-sm uppercase leading-none">s</span>
            <span className="text-[#2563eb] font-sans font-black text-sm uppercase font-mono italic leading-none mx-0.5">R</span>
            <span className="text-[#10b981] font-sans font-black text-sm uppercase leading-none">u</span>
            <span className="text-[#db2777] font-sans font-black text-sm uppercase leading-none">s</span>
          </div>
          <span className="font-mono text-[5px] text-zinc-500 uppercase tracking-widest mt-1">Registry Workspace</span>
        </div>
      );

    case "p51": // AQ Skin Solutions
      return (
        <div className="flex items-center gap-3 animate-fade-in pb-1.5">
          <svg viewBox="0 0 100 50" className="w-16 h-8 text-[#a855f7]">
            <polygon points="10,25 25,5 40,25 25,45" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <polygon points="40,25 55,5 70,25 55,45" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
            <text x="25" y="30" textAnchor="middle" className="font-sans font-bold text-xs fill-white">A</text>
            <text x="55" y="30" textAnchor="middle" className="font-sans font-bold text-xs fill-white">Q</text>
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-[10px] text-white tracking-[0.2em] leading-none uppercase">AQ SKIN</span>
            <span className="font-mono text-[5px] text-zinc-400 uppercase tracking-wider mt-1">SOLUTIONS</span>
          </div>
        </div>
      );

    case "p52": // Terraflic
      return (
        <div className="flex flex-col items-center justify-center animate-fade-in gap-1">
          <svg viewBox="0 0 60 60" className="w-10 h-10 text-teal-400">
            <polygon points="20,15 45,30 20,45" fill="currentColor" />
            <circle cx="30" cy="30" r="25" fill="none" stroke="currentColor" strokeWidth="2.5" />
          </svg>
          <span className="font-sans font-black text-[10px] text-white tracking-[0.15em] uppercase">TERRAFLIC</span>
        </div>
      );

    case "p53": // Dormiko
      return (
        <div className="flex flex-col items-center animate-fade-in">
          <svg viewBox="0 0 100 50" className="w-16 h-8 text-neutral-400">
            <path d="M20,40 L20,20 L35,10 L50,20 L50,40 M50,25 L65,15 L80,25 L80,40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <rect x="30" y="28" width="8" height="12" fill="currentColor" opacity="0.6" />
          </svg>
          <span className="font-sans font-extrabold text-[11px] text-white tracking-widest uppercase mt-1">dormiko</span>
        </div>
      );

    case "p54": // CAZZA Zamora Residences
      return (
        <div className="flex flex-col items-center justify-center animate-fade-in">
          <svg viewBox="0 0 100 50" className="w-16 h-8 text-amber-500">
            <path d="M15,40 L15,15 L35,25 L55,10 L75,25 L75,40" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M35,25 L55,40 L75,25" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
            <circle cx="45" cy="18" r="2.5" fill="#FFFFFF" />
          </svg>
          <span className="font-serif italic font-extrabold text-[#f59e0b] text-[8px] tracking-[0.25em] uppercase mt-1">CAZZA RESIDENCES</span>
        </div>
      );

    case "p55": // TrinityHealth Philippines
      return (
        <div className="flex items-center gap-2 animate-fade-in text-[#2563eb]">
          <svg viewBox="0 0 80 80" className="w-10 h-10">
            <rect x="25" y="10" width="30" height="60" rx="4" fill="#1E3A8A" />
            <rect x="10" y="25" width="60" height="30" rx="4" fill="#1E3A8A" />
            <path d="M40 18 L40 62 M18 40 L62 40" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
            <circle cx="40" cy="40" r="14" fill="#0EA5E9" />
            <path d="M40 32 L40 48 M32 40 L48 40" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-[10px] text-white tracking-widest leading-none">TRINITYHEALTH</span>
            <span className="font-mono text-[5px] text-sky-400 uppercase tracking-wider mt-1">PHILIPPINES</span>
          </div>
        </div>
      );

    case "p56": // TrinityCare
      return (
        <div className="flex items-center gap-2 p-1.5 bg-sky-950/20 border border-sky-500/10 rounded-lg animate-fade-in">
          <svg viewBox="0 0 80 80" className="w-9 h-9 text-[#F59E0B]">
            <path d="M40 20 C25 20 20 35 20 45 C20 58 35 68 40 70 C45 68 60 58 60 45 C60 35 55 20 40 20 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <path d="M40 35 V55 M30 45 H50" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
            <path d="M30 40 C30 30, 50 30, 50 40" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-[#F59E0B] tracking-wider text-[10px] leading-none uppercase">TRINITY</span>
            <span className="font-mono text-[6px] text-white tracking-widest leading-none uppercase mt-0.5">CARE</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="flex flex-col items-center justify-center animate-fade-in">
          <span className="text-white/60 text-base font-bold uppercase tracking-wider">{clientName}</span>
        </div>
      );
  }
};
