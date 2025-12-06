'use client';

import { motion } from 'motion/react';
import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface GlowingEffectProps {
  children?: React.ReactNode;
  className?: string;
  spread?: number;
  glow?: boolean;
  disabled?: boolean;
  proximity?: number;
  inactiveZone?: number;
  borderWidth?: number;
}

export function GlowingEffect({
  children,
  className,
  spread = 40,
  glow = true,
  disabled = false,
  proximity = 64,
  borderWidth = 2,
}: GlowingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;

    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });

    // Check if mouse is within proximity
    const distX = Math.abs(x - rect.width / 2);
    const distY = Math.abs(y - rect.height / 2);
    const distance = Math.sqrt(distX * distX + distY * distY);

    setIsActive(distance < proximity);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  const borderStyle = {
    backgroundImage: isActive
      ? `radial-gradient(${spread}px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(184, 244, 212, 0.8), transparent 80%)`
      : 'none',
  };

  return (
    <div
      ref={containerRef}
      className={cn('relative', className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glowing border effect background */}
      {!disabled && (
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 pointer-events-none"
          style={borderStyle}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Border layer */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          borderWidth: `${borderWidth}px`,
          borderColor: isActive ? 'rgba(184, 244, 212, 0.5)' : 'rgba(209, 213, 219, 1)',
          boxShadow: isActive && glow ? '0 0 20px rgba(184, 244, 212, 0.3)' : 'none',
          transition: 'all 0.3s ease',
        }}
      />

      {children}
    </div>
  );
}
