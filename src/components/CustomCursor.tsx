import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide default cursor on desktop
    const isMobile = window.matchMedia('(max-width: 1024px)').matches;
    if (!isMobile) {
      document.documentElement.style.cursor = 'none';
      const anchorsAndButtons = document.querySelectorAll('a, button, input, textarea, [role="button"]');
      anchorsAndButtons.forEach((el) => {
        (el as HTMLElement).style.cursor = 'none';
      });
      setIsVisible(true);
    }

    let mouseX = -1000;
    let mouseY = -1000;
    let currentDotX = -1000;
    let currentDotY = -1000;
    let currentGlowX = -1000;
    let currentGlowY = -1000;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => {
      if (dotRef.current) dotRef.current.style.transform = 'translate(-50%, -50%) scale(2.5)';
      if (glowRef.current) glowRef.current.style.opacity = '0.25';
    };

    const handleMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      if (glowRef.current) glowRef.current.style.opacity = '0.14';
    };

    window.addEventListener('mousemove', onMouseMove as unknown as EventListener);

    // Dynamic Hover scale listeners
    const addHoverListeners = () => {
      const hoverables = document.querySelectorAll('a, button, [role="button"], input, textarea, .hover-target');
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    addHoverListeners();

    // Re-bind hover listeners whenever DOM updates slightly or just periodically
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    let animationFrameId: number;

    const updatePosition = () => {
      // Linear interpolation for smooth trailing
      currentDotX += (mouseX - currentDotX) * 0.25;
      currentDotY += (mouseY - currentDotY) * 0.25;

      currentGlowX += (mouseX - currentGlowX) * 0.08;
      currentGlowY += (mouseY - currentGlowY) * 0.08;

      if (dotRef.current) {
        dotRef.current.style.left = `${currentDotX}px`;
        dotRef.current.style.top = `${currentDotY}px`;
      }
      if (glowRef.current) {
        glowRef.current.style.left = `${currentGlowX}px`;
        glowRef.current.style.top = `${currentGlowY}px`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', onMouseMove as unknown as EventListener);
      document.documentElement.style.cursor = 'auto';
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={glowRef}
        className="cursor-glow pointer-events-none fixed top-0 left-0 transition-opacity duration-300"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={dotRef}
        className="cursor-dot pointer-events-none fixed top-0 left-0"
      />
    </>
  );
}
