/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import TheNav from './components/TheNav';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import IndustriesSection from './components/IndustriesSection';
import HighlightsSection from './components/HighlightsSection';
import ProcessSection from './components/ProcessSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import TheFooter from './components/TheFooter';
import CustomCursor from './components/CustomCursor';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  // Activate scroll intersection observer transitions globally
  useScrollReveal();

  return (
    <div className="relative min-h-screen text-[#f0f0f0] font-sans selection:bg-accent-custom selection:text-white antialiased overflow-x-hidden">
      {/* Background Micro Noise Texture overlay */}
      <div className="noise-bg" />

      {/* Smooth Ambient Mouse Follow Glow & dot cursor */}
      <CustomCursor />

      {/* Sticky Top Navigation */}
      <TheNav />

      {/* Main Single Page Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <IndustriesSection />
        <HighlightsSection />
        <ProcessSection />
        <PortfolioSection />
        <ContactSection />
      </main>

      {/* Interactive Footer */}
      <TheFooter />
    </div>
  );
}
