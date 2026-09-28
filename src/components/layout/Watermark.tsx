import React from 'react';

interface WatermarkProps {
  opacity?: number;
}

export const Watermark: React.FC<WatermarkProps> = ({ opacity }) => {
  return (
    <div 
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden select-none"
    >
      {/* Central Large Watermark with SRMIST University Logo */}
      <div className="relative flex flex-col items-center justify-center pointer-events-none">
        <img
          src="/college-logo.webp"
          alt="SRMIST Watermark"
          className="w-[340px] sm:w-[500px] md:w-[680px] lg:w-[820px] max-w-full h-auto object-contain transition-opacity duration-300 drop-shadow-sm"
          style={{
            opacity: opacity ?? 0.065, // Distinctly visible university watermark on every page
          }}
        />
        <div 
          className="text-center font-serif font-bold tracking-widest uppercase text-xs sm:text-sm mt-3 text-slate-900/15 dark:text-white/10"
        >
          SRM Institute of Science and Technology • Virtual OS Lab
        </div>
      </div>
    </div>
  );
};
