import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  // Read cart from browser storage on load
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("bryzen_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Automatically save to browser storage on change
  useEffect(() => {
    localStorage.setItem("bryzen_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Core Cart Actions (Simplified: ID matching only)
  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex((item) => item.id === product.id);

      if (existingIdx > -1) {
        const updatedCart = [...prev];
        updatedCart[existingIdx].qty += quantity;
        return updatedCart;
      }

      return [...prev, { ...product, qty: quantity }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCartItems(
      (prev) =>
        prev
          .map((item) =>
            item.id === id ? { ...item, qty: item.qty + delta } : item,
          )
          .filter((item) => item.qty > 0), // Removes item if qty drops to 0
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculations
  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeItem,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
