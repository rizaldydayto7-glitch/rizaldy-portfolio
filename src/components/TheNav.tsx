import { useState, useEffect } from 'react';
import type { MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#highlights', label: 'Highlights' },
  { href: '#process', label: 'Process' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

export default function TheNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  }, []);

  useEffect(() => {
    // Scroll state for nav bar styling
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Section highlighting observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px', // triggering as it occupies the mid-to-top screen
        threshold: 0,
      }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      navLinks.forEach((link) => {
        const el = document.querySelector(link.href);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80; // height of navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0add]/80 backdrop-blur-md border-b border-[#222222]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="font-display text-lg tracking-wide hover:text-accent-custom transition-colors duration-300 flex items-center gap-1 text-white"
        >
          <span className="font-bold text-accent-custom tracking-wider">R</span>
          <span className="font-light transition-colors duration-350 text-[#f0f0f0]/60">DAYTO</span>
        </a>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm tracking-widest uppercase font-medium nav-link-underline transition-all duration-300 py-2 ${
                    isActive
                      ? 'text-accent-custom nav-link-active font-semibold'
                      : 'text-[#666666] hover:text-[#f0f0f0]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5 text-[#666666] hover:text-[#f0f0f0] focus:outline-none transition-all border border-[#222222]/30"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-[#0a0a0a] z-40 border-t border-[#222222] px-6 py-12 animate-fade-in">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-2xl font-display font-medium tracking-wide py-3 border-b border-[#222222]/50 ${
                    isActive ? 'text-accent-custom font-semibold pl-2 border-l-2 border-l-accent-custom' : 'text-[#666666]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
