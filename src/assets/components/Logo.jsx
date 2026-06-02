import React from "react";

export default function Logo() {
  return (
    <div className="flex flex-col items-center justify-center p-4 group select-none cursor-pointer">
      {/* 🏛️ Thin Roman Architectural Frame */}
      {/* Light: Deep Espresso-Bronze (#544338) | Dark: High-contrast Champagne Gold (#ebdccb) */}
      <div className="relative w-20 h-20 flex items-center justify-center border-2 border-[#544338]/40 dark:border-[#ebdccb]/40 p-2 transition-all duration-700 ease-out group-hover:border-[#544338] dark:group-hover:border-[#ebdccb] group-hover:rotate-45">
        {/* Inner structural frame that rotates opposite */}
        <div className="absolute inset-1.5 border border-[#544338]/20 dark:border-[#ebdccb]/20 transition-all duration-700 ease-out group-hover:-rotate-90 group-hover:border-[#544338]/50 dark:group-hover:border-[#ebdccb]/40" />

        {/* 🌟 The Monogram (Stays perfectly centered) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-11 h-11 transition-transform duration-700 ease-out group-hover:-rotate-45 group-hover:scale-105"
        >
          {/* Light Mode Monogram: Crisp, rich Espresso Dark */}
          <g
            className="dark:hidden"
            stroke="#261e1a"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            <path d="M 20 25 L 70 25 C 82 25, 82 45, 70 45 L 35 45" />
            <path d="M 15 50 L 55 50" strokeWidth="4" opacity="0.4" />
            <path d="M 25 75 L 68 75 C 80 75, 80 55, 68 55 L 38 55" />
          </g>

          {/* ✅ FIXED: Changed "dark:g" to "dark:block" so it actually displays in dark mode! */}
          {/* Dark Mode Monogram: Highly visible Satin Linen White/Gold */}
          <g
            className="hidden dark:block"
            stroke="#ebdccb"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            <path d="M 20 25 L 70 25 C 82 25, 82 45, 70 45 L 35 45" />
            <path d="M 15 50 L 55 50" strokeWidth="4" opacity="0.4" />
            <path d="M 25 75 L 68 75 C 80 75, 80 55, 68 55 L 38 55" />
          </g>
        </svg>
      </div>

      {/* ✒️ Editorial High-Heritage Typography */}
      {/* Light text color is anchored to #261e1a | Dark text color shifts to elegant #ebdccb */}
      <h2 className="mt-5 text-xl font-light tracking-[0.45em] font-serif text-[#261e1a] dark:text-[#ebdccb] transition-all duration-500 ease-in-out group-hover:tracking-[0.5em] group-hover:text-[#544338] dark:group-hover:text-[#f7f4f0]">
        BRYZE’N
      </h2>

      {/* Heritage Tagline Anchor */}
      <div className="flex items-center gap-2 mt-2.5 opacity-60 transition-opacity duration-500 group-hover:opacity-100">
        <div className="w-3 h-1px bg-[#544338] dark:bg-[#ebdccb]" />
        <span className="text-4.5px  uppercase tracking-[0.45em] font-sans font-bold text-[#544338] dark:text-[#ebdccb]">
          SINCE 2026
        </span>
        <div className="w-3 h-1px bg-[#544338] dark:bg-[#ebdccb]" />
      </div>
    </div>
  );
}
