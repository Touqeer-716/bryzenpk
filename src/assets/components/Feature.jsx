import React from "react";

export default function feature() {
  return (
    <div className="bg-stone-50 text-stone-950 dark:bg-stone-950 dark:text-stone-50 ">
      <div className="container py-5">
        <h2 className="text-center mb-4">Featured Products</h2>

        <div
          id="featuredProductsCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* <!-- Slide 1 --> */}
            <div className="carousel-item active">
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="product-card">
                    <img
                      src="https://bryzenpk.com/wp-content/uploads/2026/03/hero_white_shirt1773271066825.jpg-scaled.jpeg"
                      className="img-fluid "
                      alt="Product 1"
                    />
                    <h5 className="mt-3">Product 1</h5>
                    <p>$29.99</p>
                    <button className="btn btn-primary btn-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-card">
                    <img
                      src="https://bryzenpk.com/wp-content/uploads/2026/03/hero_white_shirt1773271066825.jpg-scaled.jpeg"
                      className="img-fluid"
                      alt="Product 2"
                    />
                    <h5 className="mt-3">Product 2</h5>
                    <p>$39.99</p>
                    <button className="btn btn-primary btn-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-card">
                    <img
                      src="https://bryzenpk.com/wp-content/uploads/2026/03/black_shirt1773271013533.jpg-scaled.jpeg"
                      className="img-fluid"
                      alt="Product 3"
                    />
                    <h5 className="mt-3">Product 3</h5>
                    <p>$49.99</p>
                    <button className="btn btn-primary btn-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Slide 2 --> */}
            <div className="carousel-item">
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="product-card">
                    <img
                      src="https://via.placeholder.com/300x200"
                      className="img-fluid"
                      alt="Product 4"
                    />
                    <h5 className="mt-3">Product 4</h5>
                    <p>$59.99</p>
                    <button className="btn btn-primary btn-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-card">
                    <img
                      src="https://via.placeholder.com/300x200"
                      className="img-fluid"
                      alt="Product 5"
                    />
                    <h5 className="mt-3">Product 5</h5>
                    <p>$69.99</p>
                    <button className="btn btn-primary btn-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-card">
                    <img
                      src="https://via.placeholder.com/300x200"
                      className="img-fluid"
                      alt="Product 6"
                    />
                    <h5 className="mt-3">Product 6</h5>
                    <p>$79.99</p>
                    <button className="btn btn-primary btn-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Controls --> */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#featuredProductsCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#featuredProductsCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
