import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  // Read cart from browser storage safely on initialization load
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("bryzen_cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed parsing cart cache initialization data:", error);
      return [];
    }
  });

  // Automatically sync with disk storage whenever state structural vectors transition
  useEffect(() => {
    localStorage.setItem("bryzen_cart", JSON.stringify(cart));
  }, [cart]);

  // 🎯 FIX: Unified targeting to use standard property name 'quantity' instead of 'qty'
  const addToCart = (product, qtyDelta = 1) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex((item) => item.id === product.id);

      if (existingIdx > -1) {
        const updatedCart = [...prev];
        updatedCart[existingIdx].quantity += qtyDelta;
        return updatedCart;
      }

      return [...prev, { ...product, quantity: qtyDelta }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart(
      (prev) =>
        prev
          .map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + delta }
              : item,
          )
          .filter((item) => item.quantity > 0), // Automatically drops record if subset hits absolute zero
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 🎯 FIX: Added clear capability to purge local memory structures post checkout run
  const clearCart = () => {
    setCart([]);
  };

  // Derived Performance Calculations loops
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart, // 🎯 Export matches key expected by Checkout.jsx
        cartItems: cart, // Backwards compatibility protection fallback
        addToCart,
        updateQuantity,
        removeItem,
        clearCart, // 🎯 Now exposed to allow checkout fulfillment state drops
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      "useCart hooks must execute encapsulated within a structurally valid CartProvider element wrapper.",
    );
  }
  return context;
};
