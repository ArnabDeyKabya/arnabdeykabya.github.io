"use client";

import { useTypewriter } from "@/hooks/use-typewriter";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  loop?: boolean;
  pauseTime?: number;
}

export function Typewriter({
  text,
  speed = 0.08,
  delay = 0,
  className = "",
  showCursor = true,
  loop = false,
  pauseTime = 2000,
}: TypewriterProps) {
  const { displayText, isComplete } = useTypewriter({
    text,
    speed,
    delay,
    loop,
    pauseTime,
  });

  return (
    <div
      className={`min-h-[4rem] sm:min-h-[3.5rem] lg:min-h-[3rem] flex items-start ${className}`}
    >
      <span>
        {displayText}
        {showCursor && <span className="animate-pulse text-primary">|</span>}
      </span>
    </div>
  );
}
