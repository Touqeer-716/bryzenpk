import React from "react";
import { useCart } from "../../context/CartContext";
function card({ product }) {
  const { addToCart } = useCart();
  return (
    <>
      <div className="rounded-3xl overflow-hidden border  flex flex-col justify-between">
        <img
          src={product.img_url}
          alt={product.name}
          className="w-full h-80 object-cover rounded-t-3xl mb-4 "
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x200?text=No+Image+Available";
          }}
        />
        <div className="px-4">
          <h2 className="text-lg font-semibold">
            {product.name}
            {/* ✅ FIXED: Changed from shirt.name to product.name */}
          </h2>
          <p className="text-md  ">
            {product.des}
            {/* ✅ FIXED: Changed from shirt.name to product.name */}
          </p>
        </div>
        <div className="mt-4 flex justify-between items-center gap-4 px-4 pb-2">
          <span className="text-md font-bold rounded-2xl ">
            PKR . {product.price}
          </span>
          <button
            className="rounded-full bg-amber-500 hover:bg-amber-700 text-slate-950 px-4 py-1.5 text-xs font-black uppercase tracking-wider transition-colors duration-200 cursor-pointer"
            onClick={() => addToCart(product, 1)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default card;
