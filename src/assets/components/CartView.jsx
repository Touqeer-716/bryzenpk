import React from "react";
import { useCart } from "../../context/CartContext";

export default function CartView() {
  const { cartItems, updateQuantity, removeItem, cartTotal, cartCount } =
    useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container text-center py-5">
        <h4>Your shopping bag is completely empty.</h4>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2>Shopping Bag ({cartCount} items)</h2>
      <div className="row mt-4">
        {/* Left Hand: Items List */}
        <div className="col-md-8">
          {cartItems.map((item) => (
            /* 🎯 Key is now simply item.id */
            <div key={item.id} className="card mb-3 p-3">
              <div className="d-flex align-items-center gap-3">
                <img
                  src={item.img_url}
                  alt={item.name}
                  className="rounded-3"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />

                <div className="flex-grow-1">
                  <h5 className="m-0">{item.name}</h5>
                  <p className="fw-bold m-0 text-primary">PKR {item.price}</p>
                </div>

                {/* Counter Actions */}
                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-outline-secondary btn-sm px-2"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span className="fw-bold px-1">{item.qty}</span>
                  <button
                    className="btn btn-outline-secondary btn-sm px-2"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="btn btn-link text-danger p-0 ms-3"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Hand: Pricing Panel */}
        <div className="col-md-4">
          <div className="card p-4 bg-light rounded-4 border-0">
            <h4>Order Summary</h4>
            <hr />
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span className="fw-bold">PKR {cartTotal}</span>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <span>Delivery</span>
              <span className="text-success fw-bold">FREE</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-4 fs-5 fw-bold">
              <span>Total</span>
              <span>PKR {cartTotal}</span>
            </div>
            <button className="btn btn-dark w-100 py-2 rounded-pill uppercase font-bold tracking-wider">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
