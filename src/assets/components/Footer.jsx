import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      Footer
      {/* <!-- Footer --> */}
      <footer className=" pt-4 mt-auto w-full  bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-200 transition-colors duration-300 border-b border-slate-200 dark:border-slate-800">
        <div className="container">
          <div className="row">
            {/* <!-- Column 1 --> */}
            <div className="col-md-4 mb-3">
              <h5>About Us</h5>
              <p>
                We provide high-quality services and solutions for your business
                needs.
              </p>
            </div>
            {/* <!-- Column 2 --> */}
            <div className="col-md-4 mb-3 ">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link
                    className="bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-200"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-200"
                    to="/shop"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    className="bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-200"
                    to="/shirts"
                  >
                    Shirt's
                  </Link>
                </li>
                <li>
                  <Link
                    className="bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-200"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!-- Column 3 --> */}
            <div className="col-md-4 mb-3">
              <h5>Contact</h5>
              <p>Email: info@example.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
          </div>
          <hr className="border-light" />
          <div className="text-center pb-3">
            &copy; 2026 Your Company. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
