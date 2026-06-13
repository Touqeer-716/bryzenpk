import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function CartView() {
  // 🎯 FIX: Pulling 'cart' directly to match Checkout.jsx structure
  const { cart, updateQuantity, removeItem, cartTotal, cartCount } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 text-center py-24">
        <h4 className="text-xl font-bold text-gray-400 uppercase tracking-wider">
          Your shopping bag is completely empty.
        </h4>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <h2 className="text-3xl font-extrabold tracking-tight mb-10 uppercase">
        Shopping Bag ({cartCount})
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Hand: Items List */}
        <div className="lg:col-span-8 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4  border border-gray-200 dark:border-zinc-800 rounded-3xl shadow-sm gap-4"
            >
              {/* Product Asset Thumbnail */}
              <div className="flex items-center gap-4 grow w-full sm:w-auto">
                <img
                  src={item.img_url}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-2xl border border-gray-100 dark:border-zinc-800 shrink-0"
                />
                <div>
                  <h5 className="text-base font-bold  tracking-tight line-clamp-1">
                    {item.name}
                  </h5>
                  <p className="text-sm font-extrabold text-amber-600 mt-0.5">
                    PKR {item.price}
                  </p>
                </div>
              </div>

              {/* Action Operations Container Row */}
              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100 dark:border-zinc-800">
                {/* Balanced Micro Counter Box */}
                <div className="flex items-center gap-1  p-1 rounded-full border dark:border-zinc-700">
                  <button
                    type="button"
                    className="w-8 h-8 flex items-center justify-center text-sm font-bold  rounded-full transition active:scale-90"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    —
                  </button>
                  {/* 🎯 FIX: Changed from item.qty to item.quantity */}
                  <span className="w-8 text-center text-xs font-black ">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    className="w-8 h-8 flex items-center justify-center text-sm font-bold  rounded-full transition active:scale-90"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>

                {/* Destruct Action Anchor */}
                <button
                  type="button"
                  className="p-2 bg-red-300 rounded-pill text-xs font-bold uppercase tracking-wider text-red-500 hover:text-red-700 transition"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Hand: Pricing Panel Summary Ledger */}
        <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-zinc-800 sticky top-6">
          <h4 className="text-lg font-bold  tracking-tight mb-6 uppercase">
            Order Summary
          </h4>

          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="">Subtotal</span>
              <span className="font-bold ">PKR {cartTotal}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Delivery</span>
              <span className="text-green-600 dark:text-green-400 font-bold uppercase tracking-wide text-xs bg-green-50 dark:bg-green-950/30 px-2 py-0.5 rounded-md">
                FREE
              </span>
            </div>

            <hr className="border-gray-200 dark:border-zinc-800 my-4" />

            <div className="flex justify-between items-baseline mb-6">
              <span className="text-base font-bold text-gray-900 dark:text-white">
                Total
              </span>
              <span className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                PKR {cartTotal}
              </span>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="rounded-pill w-full py-4 bg-amber-800 text-white dark:bg-amber-600 dark:text-black font-extrabold uppercase tracking-widest rounded-xl hover:opacity-90 active:scale-[0.99] transition text-xs shadow-sm"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
