import React, { useState } from "react";
import { useCart } from "../../context/CartContext";

export default function Checkout() {
  const { cart, getCartTotal, clearCart } = useCart(); // Assuming getCartTotal or cart array management exists

  // 1. Form state management
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "Lahore", // Default selection
    postalCode: "",
    paymentMethod: "cod", // Cash on Delivery default for street apparel model
  });

  const [loading, setLoading] = useState(false);
  const [orderStatus, setOrderStatus] = useState({ type: "", message: "" });

  // Calculate strict totals (Assuming flat rate PKR 200 delivery fee for nationwide shipping)
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0,
  );
  const shippingFee = subtotal > 0 ? 200 : 0;
  const grandTotal = subtotal + shippingFee;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      setOrderStatus({
        type: "error",
        message: "Your shopping cart is empty.",
      });
      return;
    }

    setLoading(true);
    setOrderStatus({ type: "", message: "" });

    // Pack checkout payload to stream over to your CI4 backend order processor later
    const orderPayload = {
      customer: shippingInfo,
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity || 1,
        price: item.price,
      })),
      subtotal,
      shipping: shippingFee,
      total: grandTotal,
    };

    try {
      // Endpoint setup ready for your CI4 Order router implementation
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });

      const result = await response.json();

      if (response.ok) {
        setOrderStatus({
          type: "success",
          message:
            "🎯 Order placed successfully! Check your phone/email for dispatch updates.",
        });
        clearCart(); // Flush context state
      } else {
        setOrderStatus({
          type: "error",
          message: result.message || "Failed to finalize order process.",
        });
      }
    } catch (err) {
      setOrderStatus({
        type: "error",
        message: "Network connectivity timeout. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <h1 className="text-3xl font-extrabold tracking-tight mb-10 uppercase">
        Checkout Manifest
      </h1>

      {orderStatus.message && (
        <div
          className={`p-4 mb-8 rounded-2xl border text-sm font-medium ${
            orderStatus.type === "success"
              ? "bg-green-50 text-green-800 border-green-200 dark:bg-zinc-900 dark:text-green-400 dark:border-green-900"
              : "bg-red-50 text-red-800 border-red-200 dark:bg-zinc-900 dark:text-red-400 dark:border-red-900"
          }`}
        >
          {orderStatus.message}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Shipping & Billing Form Formset */}
        <form
          onSubmit={handlePlaceOrder}
          className="lg:col-span-7 space-y-6  p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-zinc-800 shadow-sm"
        >
          <h2 className="text-xl font-bold  tracking-tight border-b border-gray-100 dark:border-zinc-800 pb-3">
            Shipping Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider  mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                required
                value={shippingInfo.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-transparent  focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider  mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                required
                value={shippingInfo.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-transparent  focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider  mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={shippingInfo.email}
                onChange={handleInputChange}
                placeholder="name@domain.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-transparent  focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider  mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={shippingInfo.phone}
                onChange={handleInputChange}
                placeholder="03XXXXXXXXX"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-transparent  focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider  mb-2">
              Street Address
            </label>
            <input
              type="text"
              name="address"
              required
              value={shippingInfo.address}
              onChange={handleInputChange}
              placeholder="House/Apartment number, Street, Sector/Area"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-transparent  focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider  mb-2">
                City
              </label>
              <select
                name="city"
                value={shippingInfo.city}
                onChange={handleInputChange}
                className="bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-slate-50 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-zinc-700  focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition cursor-pointer"
              >
                <option value="Lahore">Lahore</option>
                <option value="Karachi">Karachi</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Rawalpindi">Rawalpindi</option>
                <option value="Faisalabad">Faisalabad</option>
                <option value="Multan">Multan</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider  mb-2">
                Postal Code
              </label>
              <input
                type="text"
                name="postalCode"
                required
                value={shippingInfo.postalCode}
                onChange={handleInputChange}
                placeholder="54000"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-transparent  focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition"
              />
            </div>
          </div>

          <h2 className="text-xl font-bold   tracking-tight border-b border-gray-100 dark:border-zinc-800 pt-4 pb-3">
            Payment Mechanism
          </h2>
          <div className="p-4 rounded-2xl border-2 border-black dark:border-white  flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={shippingInfo.paymentMethod === "cod"}
                readOnly
                className="accent-black dark:accent-white h-4 w-4"
              />
              <div>
                <p className="text-sm font-bold  ">Cash On Delivery (COD)</p>
                <p className="text-xs  ">
                  Pay inside Pakistan with cash upon physical package handoff.
                </p>
              </div>
            </div>
            <span className="text-xs font-bold  px-2.5 py-1 rounded-md uppercase tracking-wider">
              Default
            </span>
          </div>

          <button
            type="submit"
            disabled={loading || cart.length === 0}
            className="w-full py-4 bg-amber-600 rounded-pill font-extrabold uppercase tracking-widest rounded-xl hover:opacity-90 active:scale-[0.99] transition disabled:bg-gray-300 dark:disabled:bg-zinc-800 disabled:cursor-not-allowed text-xs shadow-sm"
          >
            {loading ? "Processing Order Sequence..." : "Confirm & Place Order"}
          </button>
        </form>

        {/* RIGHT COLUMN: Realtime Cart Overview Totals Panel */}
        <div className="lg:col-span-5   p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-zinc-800 sticky top-6">
          <h2 className="text-xl font-bold   tracking-tight mb-6">
            Summary Review ({cart.length} items)
          </h2>

          {/* Cart Item Stream Loop */}
          <div className="divide-y divide-gray-200 dark:divide-zinc-800 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
            {cart.length === 0 ? (
              <p className="text-sm  py-4">
                No selected assets staged for dispatch.
              </p>
            ) : (
              cart.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.img_url}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-xl border dark:border-zinc-800"
                    />
                    <div>
                      <h4 className="text-sm font-bold   line-clamp-1">
                        {item.name}
                      </h4>
                      <p className="text-xs   mt-0.5">
                        Qty: {item.quantity || 1}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-bold  ">
                    PKR {item.price * (item.quantity || 1)}
                  </span>
                </div>
              ))
            )}
          </div>

          {/* Ledger Totals Mapping Structure */}
          <div className="border-t border-gray-200 dark:border-zinc-800 mt-6 pt-6 space-y-3.5">
            <div className="flex justify-between text-sm">
              <span className=" ">Cart Subtotal</span>
              <span className="font-bold  ">PKR {subtotal}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className=" ">Nationwide Shipping (Flat)</span>
              <span className="font-bold  ">PKR {shippingFee}</span>
            </div>
            <div className="border-t border-dashed border-gray-200 dark:border-zinc-800 pt-4 flex justify-between items-baseline">
              <span className="text-base font-bold  ">Total Ledger</span>
              <span className="text-2xl font-black   tracking-tight">
                PKR {grandTotal}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
