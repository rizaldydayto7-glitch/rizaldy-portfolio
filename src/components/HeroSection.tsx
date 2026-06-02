import { useState, useEffect } from 'react';
import type { MouseEvent } from 'react';

const titles = [
  "Senior UI/UX Designer | Design Lead",
  "Senior UI/UX Designer",
  "Design Lead"
];

export default function HeroSection() {
  const [displayName, setDisplayName] = useState("Rizaldy Dayto");
  const [currentTitle, setCurrentTitle] = useState("");
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = titles[titleIdx];

    if (isDeleting) {
      // Deleting text
      timer = setTimeout(() => {
        setCurrentTitle(currentFullText.substring(0, charIdx - 1));
        setCharIdx((prev) => prev - 1);
      }, 50);
    } else {
      // Adding text
      timer = setTimeout(() => {
        setCurrentTitle(currentFullText.substring(0, charIdx + 1));
        setCharIdx((prev) => prev + 1);
      }, 100);
    }

    // Switch states
    if (!isDeleting && charIdx === currentFullText.length) {
      // Pause at the end of the word
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setTitleIdx((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, titleIdx]);

  // Scramble Name Effect on Hover
  const triggerScramble = () => {
    const originalText = "Rizaldy Dayto";
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    let iteration = 0;
    
    const interval = setInterval(() => {
      setDisplayName(
        originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            // keep spaces
            if (originalText[index] === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= originalText.length) {
        clearInterval(interval);
        setDisplayName(originalText);
      }
      iteration += 1 / 2;
    }, 30);
  };

  // Magnetic Button Effect helper
  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMouseLeave = (e: MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    btn.style.transform = `translate(0px, 0px)`;
  };

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col justify-center items-center text-center px-6 overflow-hidden md:py-0 py-32"
    >
      {/* Dynamic Ambient Glowing Orbs */}
      <div className="absolute top-[25%] left-[20%] w-[400px] h-[400px] bg-accent-custom/[0.08] rounded-full blur-[140px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[20%] right-[15%] w-[450px] h-[450px] bg-accent-cyan/[0.05] rounded-full blur-[160px] pointer-events-none animate-pulse duration-[10000ms]" />

      <div className="relative z-10 max-w-[900px] flex flex-col items-center">
        {/* Short Pre-Title */}
        <span className="text-accent-cyan font-mono text-xs tracking-[0.3em] uppercase mb-6 reveal-on-scroll revealed">
          Available for Global Opportunities
        </span>

        {/* Large Display Name */}
        <h1
          id="hero-name"
          onMouseEnter={triggerScramble}
          className="text-white font-display text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-tighter mb-4 select-none cursor-pointer text-center break-words max-w-full"
        >
          {displayName}
        </h1>

        {/* Typing Animated Subtitle */}
        <div className="h-10 sm:h-14 flex items-center justify-center mb-8">
          <p className="text-accent-custom font-display text-xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            {currentTitle}
            <span className="typewriter-cursor inline-block w-[3px] h-[1.1em] bg-accent-custom ml-1.5 align-middle" />
          </p>
        </div>

        {/* Short Bio */}
        <p className="hero-bio-text max-w-xl text-base sm:text-lg leading-relaxed mb-12 reveal-on-scroll revealed">
          Innovative design leader crafting high-fidelity human-centric experiences, standardizing scaled Design Systems, and translating complex problem sets into beautiful digital products.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#portfolio"
            onClick={(e) => scrollToSection(e, '#portfolio')}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full sm:w-auto px-8 py-4 bg-accent-custom text-white font-semibold tracking-wide text-sm rounded border border-accent-custom shadow-[0_0_15px_rgba(124,58,237,0.15)] hover:shadow-[0_0_25px_rgba(124,58,237,0.30)] transition-all duration-300 ease-out text-center"
          >
            View Work
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-semibold tracking-wide text-sm rounded border border-[#222222] hover:border-white/20 hover:bg-[#111111] transition-all duration-300 ease-out text-center"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Floating indicator anchor scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          onClick={(e) => scrollToSection(e, '#about')}
          className="text-[#666666] hover:text-white transition-colors duration-300"
          aria-label="Scroll to Background Section"
        >
          <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
