import React from "react";
// 🧵 Import the fully managed React native carousel components
import { Carousel } from "react-bootstrap";

export default function LuxuryCarousel() {
  return (
    <div className="w-full h-[50vh] md:h-[70vh] bg-stone-900 overflow-hidden relative">
      <Carousel
        fade // ✨ Optional: Creates an ultra-smooth crossfade instead of a basic slide
        indicators={true}
        interval={3000} // Slides switch automatically every 5 seconds
        controls={true}
        className="h-full w-full custom-luxury-carousel"
      >
        {/* --- SLIDE 1 --- */}
        <Carousel.Item className="h-[50vh] md:h-[70vh] relative group">
          {/* 🌑 Velvet Shadow Overlay for deep dark-mode typography contrast */}
          <div className="absolute inset-0 bg-linear-to-r from-stone-950/70 via-stone-950/40 to-transparent z-10" />

          <img
            src="https://bryzenpk.com/wp-content/uploads/2026/03/hero_white_shirt1773271066825.jpg-scaled.jpeg"
            className="d-block w-full h-full object-cover transition-transform duration-[8s] ease-out scale-100 group-hover:scale-105"
            alt="Urban Off-White Drop Shoulder Tee"
          />

          <Carousel.Caption className="left-[5%] right-auto bottom-0 h-full flex flex-col justify-center items-start text-left z-20 max-w-md md:max-w-xl px-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-[#ebdccb] mb-3">
              New Drop 2026
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-light tracking-wide text-white leading-tight">
              Urban Off-White <br />
              Drop Shoulder Tee
            </h1>
            <p className="mt-3 text-xs md:text-sm font-sans font-light tracking-wide text-stone-200/90 leading-relaxed max-w-sm">
              Oversized luxury architecture meets modern streetwear style.
              Crafted from curated heavy cotton.
            </p>
            <button className="mt-6 px-6 py-2.5 bg-white text-stone-950 dark:bg-[#ebdccb] dark:text-stone-950 text-[10px] font-sans font-bold uppercase tracking-[0.3em] rounded-md transition-all hover:bg-stone-200 dark:hover:bg-white shadow-lg">
              Explore Collection
            </button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* --- SLIDE 2 --- */}
        <Carousel.Item className="h-[50vh] md:h-[70vh] relative group">
          <div className="absolute inset-0 bg-linear-to-r from-stone-950/70 via-stone-950/40 to-transparent z-10" />

          <img
            src="https://bryzenpk.com/wp-content/uploads/2026/03/black_shirt1773271013533.jpg-scaled.jpeg"
            className="d-block w-full h-full object-cover transition-transform duration-[8s] ease-out scale-100 group-hover:scale-105"
            alt="Oversized Comfort"
          />

          <Carousel.Caption className="left-[5%] right-auto bottom-0 h-full flex flex-col justify-center items-start text-left z-20 max-w-md md:max-w-xl px-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-[#ebdccb] mb-3">
              The Silhouette
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-light tracking-wide text-white leading-tight">
              Oversized Comfort,
              <br />
              Refined Aesthetics
            </h2>
            <p className="mt-3 text-xs md:text-sm font-sans font-light tracking-wide text-stone-200/90 leading-relaxed max-w-sm">
              Carefully relaxed lines offering a sophisticated street drape
              without compromising structural luxury.
            </p>
            <button className="mt-6 px-6 py-2.5 bg-white text-stone-950 dark:bg-[#ebdccb] dark:text-stone-950 text-[10px] font-sans font-bold uppercase tracking-[0.3em] rounded-md transition-all hover:bg-stone-200 dark:hover:bg-white shadow-lg">
              View Lookbook
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Modern custom styling to clean up arrow designs globally */}
      <style>{`
        .custom-luxury-carousel .carousel-indicators [data-bs-target] {
          width: 32px important;
          height: 2px important;
          background-color: rgba(255,255,255,0.4) important;
        }
        .custom-luxury-carousel .carousel-indicators .active {
          background-color: #ebdccb important;
        }
        .custom-luxury-carousel .carousel-control-prev,
        .custom-luxury-carousel .carousel-control-next {
          width: 8% important;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .custom-luxury-carousel:hover .carousel-control-prev,
        .custom-luxury-carousel:hover .carousel-control-next {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}
