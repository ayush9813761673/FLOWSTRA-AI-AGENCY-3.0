import React, { ReactNode } from "react";
import { cn } from "../../lib/utils";

export interface GradientCardProps {
  gradientFrom: string;
  gradientTo: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export function GradientCard({
  gradientFrom,
  gradientTo,
  children,
  className,
  contentClassName,
}: GradientCardProps) {
  return (
    <>
      <div
        className={cn(
          "group/gradient relative transition-all duration-500",
          className,
        )}
      >
        {/* Background Gradients */}
        <span
          className="absolute top-0 left-[10%] w-[70%] h-full rounded-2xl transform skew-x-[8deg] transition-all duration-500 group-hover/gradient:skew-x-0 group-hover/gradient:left-[5%] group-hover/gradient:w-[90%]"
          style={{
            background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
          }}
        />
        <span
          className="absolute top-0 left-[10%] w-[70%] h-full rounded-2xl transform skew-x-[8deg] blur-[25px] transition-all duration-500 group-hover/gradient:skew-x-0 group-hover/gradient:left-[5%] group-hover/gradient:w-[90%]"
          style={{
            background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
          }}
        />

        {/* Animated Blurs (Blobs) */}
        <span className="pointer-events-none absolute inset-0 z-10 w-[calc(100%+2rem)] h-[calc(100%+2rem)] -left-4 -top-4 block">
          <span className="absolute top-4 left-4 w-0 h-0 rounded-2xl opacity-0 bg-[rgba(255,255,255,0.2)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-300 animate-blob group-hover/gradient:top-0 group-hover/gradient:left-0 md:group-hover/gradient:top-0 md:group-hover/gradient:left-0 group-hover/gradient:w-20 group-hover/gradient:h-20 md:group-hover/gradient:w-24 md:group-hover/gradient:h-24 group-hover/gradient:opacity-100" />
          <span className="absolute bottom-4 right-4 w-0 h-0 rounded-2xl opacity-0 bg-[rgba(255,255,255,0.2)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-500 animate-blob animation-delay-1000 group-hover/gradient:bottom-0 group-hover/gradient:right-0 md:group-hover/gradient:bottom-0 md:group-hover/gradient:right-0 group-hover/gradient:w-20 group-hover/gradient:h-20 md:group-hover/gradient:w-24 md:group-hover/gradient:h-24 group-hover/gradient:opacity-100" />
        </span>

        {/* Content */}
        <div
          className={cn(
            "relative z-20 left-0 w-full h-full bg-[#111] shadow-2xl rounded-2xl transition-all duration-500 group-hover/gradient:-left-2 md:group-hover/gradient:-left-4 border border-white/5",
            contentClassName,
          )}
        >
          {children}
        </div>
      </div>
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translateY(10px); }
          50% { transform: translate(-10px); }
        }
        .animate-blob { animation: blob 2s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: -1s; }
      `}</style>
    </>
  );
}

export default function SkewCards() {
  return null;
}
