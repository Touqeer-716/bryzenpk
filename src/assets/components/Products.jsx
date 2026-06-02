import React from "react";

// 📦 Updated JSON Dataset leveraging your live image link across products
const products = [
  {
    id: "prod_001",
    title: "Urban Off-White Drop Shoulder Tee",
    short_description:
      "Oversized comfort meets modern streetwear style. Crafted from premium, heavyweight cotton with a slouchy drape and clean tailored silhouette.",
    price: 1850.0,
    fit: "Oversized Fit",
    image_url:
      "https://bryzenpk.com/wp-content/uploads/2026/03/black_shirt1773271013533.jpg-scaled.jpeg",
  },
  {
    id: "prod_002",
    title: "Aero Obsidian Heavyweight Tee",
    short_description:
      "A dark luxury essential featuring a dropped shoulder design and minimalist box seam detailing. Engineered for effortless street versatility.",
    price: 1900.0,
    fit: "Oversized Fit",
    image_url:
      "https://bryzenpk.com/wp-content/uploads/2026/03/hero_white_shirt1773271066825.jpg-scaled.jpeg", // Replaced with live fallback link
  },
  {
    id: "prod_003",
    title: "Satin Linen Box Silhouette Shirt",
    short_description:
      "Classic heritage tailoring adapted for the modern minimalist. Premium drop shoulder construction woven with breathable vintage linen yarns.",
    price: 2000.0,
    fit: "Relaxed Fit",
    image_url:
      "https://bryzenpk.com/wp-content/uploads/2026/03/hero_white_shirt1773271066825.jpg-scaled.jpeg", // Replaced with live fallback link
  },
];

export default function ProductGrid() {
  return (
    <section className="w-full bg-stone-50 dark:bg-[#121110] py-16 px-4 md:px-8 transition-colors duration-500">
      <div className="container mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="text-[9px] uppercase tracking-[0.5em] font-bold text-[#786050] dark:text-[#ebdccb]">
            The Curated Drop
          </span>
          <h2 className="mt-2 text-2xl font-light tracking-widest font-serif text-stone-900 dark:text-[#f5f0ea] uppercase">
            New Season Essentials
          </h2>
          <div className="w-8 h-1px bg-stone-300 dark:bg-stone-800 mt-4" />
        </div>

        {/* 🛍️ Dynamic Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col justify-between select-none cursor-pointer h-full"
            >
              <div>
                {/* 📸 Clean Reduced Height Aspect Ratio (4:3) Container */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-100 dark:bg-stone-900 border border-stone-200/50 dark:border-stone-800/40 rounded-xl transition-all duration-500 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
                  {/* Premium Badge Tag */}
                  <span className="absolute top-3 left-3 z-10 text-[8px] font-sans font-bold uppercase tracking-[0.2em] bg-stone-950 text-stone-50 dark:bg-stone-50 dark:text-stone-950 px-2 py-1 rounded-md shadow-sm">
                    {product.fit}
                  </span>

                  {/* Product Image Renderer */}
                  <img
                    src={product.image_url}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* 🏷️ Text & Info Area */}
                <div className="mt-4 flex flex-col px-1">
                  <div className="flex justify-between items-baseline gap-4">
                    {/* Title */}
                    <h3 className="text-sm font-medium tracking-wide font-sans text-stone-900 dark:text-[#f5f0ea] transition-colors duration-300">
                      {product.title}
                    </h3>
                    {/* Price with High Contrast Visibility */}
                    <span className="text-sm font-semibold font-sans text-[#786050] dark:text-[#ebdccb] whitespace-nowrap">
                      PKR : {product.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="mt-2 text-xs font-light leading-relaxed font-sans text-stone-500 dark:text-stone-400 line-clamp-2">
                    {product.short_description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4 px-1">
                <button className="w-full py-2.5 bg-stone-950 text-stone-50 dark:bg-stone-50 dark:text-stone-950 text-[10px] font-sans font-bold uppercase tracking-[0.25em] rounded-lg transition-all duration-300 transform opacity-90 group-hover:opacity-100 hover:bg-[#786050] dark:hover:bg-[#ebdccb] dark:hover:text-stone-950">
                  Select Size
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
