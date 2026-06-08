import React from "react";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <>
      {/* Footer */}
      {/* <!-- Footer --> */}
      <footer className=" border-t-2 py-4 dark:border-slate-100 border-slate-950">
        <div className="">
          <div className="">
            {/* <!-- Column 1 --> */}
            <div>
              <h5>About Us</h5>
              <p>
                We provide high-quality services and solutions for your business
                needs.
              </p>
            </div>
            {/* <!-- Column 2 --> */}
            <div>
              <h5>Quick NavLinks</h5>
              <ul className="">
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
            <div className="">
              <h5>Contact</h5>
              <p>Email: info@example.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
          </div>
          <hr className="border-slate-100" />
          <div className="text-center pb-1 py-4">
            &copy; 2026 AHMEDSOFT. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
