import React from "react";
import { useCart } from "../../context/CartContext";
function Card({ product }) {
  const { addToCart } = useCart();
  return (
    <>
      <div className="flex flex-col h-full rounded-3xl overflow-hidden border justify-between">
        <img
          src={product.img_url}
          alt={product.name}
          className="w-full h-80 object-cover rounded-t-3xl mb-4 "
          onError={(e) => {
            console.error("Failed to load image URL:", product.img_url);
            e.target.src =
              "https://via.placeholder.com/300x200?text=No+Image+Available";
          }}
        />
        <div className="p-4 flex flex-col grow">
          <h5 className="text-lg font-bold mb-1 tracking-tight">
            {product.name}
            {/* ✅ FIXED: Changed from shirt.name to product.name */}
          </h5>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2 ">
            {product.des}
            {/* ✅ FIXED: Changed from shirt.name to product.name */}
          </p>
        </div>
        <div className="mt-auto flex justify-between items-center">
          <span className=" p-2 font-extrabold text-lg">
            PKR . {product.price}
          </span>
          <button
            className="m-1 p-2.5 bg-amber-600 dark:bg-amber-600 hover:bg-amber-400 text-slate-50 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 "
            onClick={() => addToCart(product, 1)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
