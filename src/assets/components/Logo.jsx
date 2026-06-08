import React from "react";

export default function Logo() {
  return (
    <div className="flex flex-row gap-x-2 hover:gap-x-5 transition-all duration-300 items-center justify-center p-4 group select-none cursor-pointer">
      {/* 🏛️ Thin Roman Architectural Frame */}
      {/* Light: Deep Espresso-Bronze (#544338) | Dark: High-contrast Champagne Gold (#ebdccb) */}
      <div className="relative w-20 h-20 flex items-center justify-center border-2 border-yellow-400 dark:border-yellow-400 p-2 transition-all duration-700 ease-out group-hover:border-yellow-500 dark:group-hover:border-yellow-500 group-hover:rotate-45">
        {/* Inner structural frame that rotates opposite */}
        <div className="absolute inset-1.5 border border-yellow-700 dark:border-yellow-700 transition-all duration-700 ease-out group-hover:-rotate-90 group-hover:border-yellow-500 dark:group-hover:border-yellow-500" />

        {/* 🌟 The Monogram (Stays perfectly centered) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-11 h-11 transition-transform duration-700 ease-out group-hover:-rotate-45 group-hover:scale-105"
        >
          {/* Light Mode Monogram: Crisp, rich Espresso Dark */}
          <g
            className="dark:hidden"
            stroke="#eecf50" //"#261e1a"
            strokeWidth="6"
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
            stroke="#ffdf20" //"#ebdccb"
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

      {/* Heritage Tagline Anchor */}
      <div className="flex flex-col items-center gap-2 opacity-60 transition-opacity duration-500 group-hover:opacity-100">
        <div className="w-3 h-1px bg-[#544338] dark:bg-[#ebdccb]" />
        {/* ✒️ Editorial High-Heritage Typography */}
        {/* Light text color is anchored to #261e1a | Dark text color shifts to elegant #ebdccb */}
        <h2 className=" text-sm font-light tracking-[0.45em] font-serif text-yellow-500 dark:text-yellow-300 transition-all duration-500 ease-in-out group-hover:tracking-[0.5em] group-hover:text-yellow-400 dark:group-hover:text-yellow-400">
          BRYZE’N
        </h2>
        <span className="text-sm  uppercase tracking-[0.45em] font-sans text-yellow-400 dark:text-yellow-400">
          SINCE 2026
        </span>
        <div className="w-3 h-1px bg-[#544338] dark:bg-[#ebdccb]" />
      </div>
    </div>
  );
}
