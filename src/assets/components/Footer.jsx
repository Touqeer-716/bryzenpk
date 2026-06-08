import React from "react";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <>
      {/* Footer */}
      {/* <!-- Footer --> */}
      <footer className=" border-t-2 dark:border-slate-100 border-slate-950">
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
              <h5>Quick NavLinks</h5>
              <ul className="list-unstyled">
                <li>
                  <NavLink className="" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="" to="/shop">
                    All Products
                  </NavLink>
                </li>
                <li>
                  <NavLink className="" to="/shirts">
                    Shirt's
                  </NavLink>
                </li>
                <li>
                  <NavLink className="" to="/about">
                    About
                  </NavLink>
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
