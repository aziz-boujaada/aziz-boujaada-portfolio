import React, { useEffect, useState, useRef } from 'react';
import { usePortfolio } from '../context';

export const CustomCursor: React.FC = () => {
  const { theme } = usePortfolio();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  // Position references for smooth 60fps rendering without re-renders
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable custom cursor on devices with fine pointer (mouse / trackpad)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!visible) setVisible(true);

      // Instantly position the central dot for zero lag
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering an interactive element
      const targetEl = e.target as HTMLElement | null;
      if (targetEl) {
        const interactive = Boolean(
          targetEl.closest('a, button, input, textarea, select, [role="button"], label, .cursor-pointer')
        );
        setIsHovering(interactive);
      }
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);

    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => {
      setVisible(false);
      setIsHovering(false);
      setIsMouseDown(false);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    // Animation loop for smooth trailing ring
    let animationFrameId: number;
    const render = () => {
      // Easing follower for ring
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [visible]);

  if (!enabled) return null;

  const isDark = theme === 'dark';

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[70] transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Outer Smooth Trailing Ring */}
      <div
        ref={ringRef}
        style={{ willChange: 'transform' }}
        className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,background-color,border-color] duration-200 ease-out flex items-center justify-center ${
          isHovering
            ? isMouseDown
              ? 'w-10 h-10 border-2 border-emerald-400 bg-emerald-500/25 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
              : 'w-12 h-12 border border-emerald-500/80 bg-emerald-500/15 shadow-[0_0_20px_rgba(16,185,129,0.3)] backdrop-blur-[0.5px]'
            : isMouseDown
            ? 'w-6 h-6 border border-emerald-400 bg-emerald-500/20'
            : isDark
            ? 'w-8 h-8 border border-emerald-400/40 bg-emerald-500/5'
            : 'w-8 h-8 border border-emerald-600/40 bg-emerald-600/5'
        }`}
      />

      {/* Center Snappy Laser Pinpoint Dot */}
      <div
        ref={dotRef}
        style={{ willChange: 'transform' }}
        className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75 ${
          isHovering
            ? 'w-2 h-2 bg-emerald-400 shadow-[0_0_8px_#34d399]'
            : 'w-1.5 h-1.5 bg-emerald-500 shadow-[0_0_6px_#10b981]'
        }`}
      />
    </div>
  );
};
