import React from "react";
import Logo from "./Logo.jsx";

import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <>
      {/* 💡 INHERITANCE ROOT: We set the text colors once right here. 
          Everything inside this header will automatically adopt these colors! */}
      <header className="w-full  border-b ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Logo />

          <nav className=" md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l flex flex-wrap items-center text-base justify-center">
            <NavLink
              to="/"
              className="font-bold mr-5  cursor-pointer transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className=" font-bold mr-5  cursor-pointer transition-colors"
            >
              Products
            </NavLink>
            <NavLink
              to="/cart"
              className="font-bold mr-5  cursor-pointer transition-colors"
            >
              Cart
            </NavLink>
            <NavLink
              to="/checkout"
              className="font-bold mr-5  cursor-pointer transition-colors"
            >
              Checkout
            </NavLink>
          </nav>

          {/* --- TOGGLE SWITCH UI --- */}
          {/* This box still needs its own background change because it's a structural 'card' element */}
          <div className="mt-4 max-w-md w-auto text-center p-2 rounded-3xl shadow-md border transition-colors duration-300">
            {/* <h1 className="text-sm font-extrabold mb-1">
              {props.darkMode ? "🌙" : "☀️"}
            </h1> */}

            <div className="flex items-center justify-center gap-3 px-2">
              {/* 💡 Cleaned: Muted labels use explicit overrides, but the core text scales down naturally */}
              <span className="text-xs font-medium opacity-70">Light</span>

              <button
                onClick={props.switchMode}
                className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                  props.darkMode ? "bg-amber-500" : "bg-slate-300"
                }`}
              >
                {/* The sliding white ball */}
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                    props.darkMode ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>

              <span className="text-xs font-medium">Dark</span>
            </div>
          </div>
          {/* ----------end toggle-------------- */}
        </div>
      </header>
    </>
  );
}

export default Header;
