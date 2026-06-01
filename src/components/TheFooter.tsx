import type { MouseEvent } from 'react';

const footerLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#highlights', label: 'Highlights' },
  { href: '#process', label: 'Process' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

export default function TheFooter() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#070707] border-t border-[#222222]/30 py-12 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Footnotes logo */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="text-white font-display text-sm font-bold tracking-wider hover:text-accent-custom transition-all"
          >
            RIZALDY DAYTO
          </a>
          <span className="text-[10px] text-[#444444] font-mono uppercase tracking-widest">
            DESIGN LEAD / SENIOR UI/UX DESIGNER
          </span>
        </div>

        {/* Anchor shortcuts */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs font-mono text-[#555] hover:text-[#bbb] uppercase tracking-wider transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright legal footer */}
        <div className="text-[11px] font-mono text-[#444] text-center md:text-right uppercase tracking-[0.1em]">
          &copy; {currentYear} Rizaldy Dayto. ALL RIGHTS RESERVED.
        </div>

      </div>
    </footer>
  );
}
