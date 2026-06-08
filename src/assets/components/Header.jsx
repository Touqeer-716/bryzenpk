import React from "react";
import Logo from "./Logo.jsx";
import Logopng from "../images/bryzen.png";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <>
      {/* 💡 INHERITANCE ROOT: We set the text colors once right here. 
          Everything inside this header will automatically adopt these colors! */}
      <header className="w-full  border-b ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Logo Section */}
          {/* <a className="flex title-font font-medium items-center mb-4 md:mb-0 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
          {/* 💡 Cleaned: Removed text-gray-900 and dark:text-white. 
                We only add "font-bold" or "text-gray-950 dark:text-white" if we want it slightly punchier than the standard text. */}
          {/* <span className="ml-3 text-xl font-bold">Tailblocks</span>
          </a> */}
          <Logo />
          {/* <a className="flex title-font font-medium items-center mb-4 md:mb-0 cursor-pointer">
            <span className="ml-3 text-xl font-bold">
              {" "}
              <img src={Logopng} width="80" height="80" />{" "}
            </span>
          </a> */}
          {/* Navigation NavLinks */}
          {/* 💡 Cleaned: Removed manual text colors entirely. The NavLinks inherit beautifully. */}
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l flex flex-wrap items-center text-base justify-center">
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
            <a className="font-bold mr-5  cursor-pointer transition-colors">
              Shirts
            </a>
            <a className="font-bold mr-5  cursor-pointer transition-colors">
              Pants
            </a>
          </nav>

          {/* --- TOGGLE SWITCH UI --- */}
          {/* This box still needs its own background change because it's a structural 'card' element */}
          <div className="max-w-md w-auto text-center p-2 rounded-3xl shadow-md border transition-colors duration-300">
            <h1 className="text-sm font-extrabold mb-1">
              {props.darkMode ? "🌙" : "☀️"}
            </h1>

            <div className="flex items-center justify-center gap-3 px-2">
              {/* 💡 Cleaned: Muted labels use explicit overrides, but the core text scales down naturally */}
              <span className="text-xs font-medium opacity-70">Light</span>

              <button
                onClick={props.switchMode}
                className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                  props.darkMode ? "bg-blue-500" : "bg-slate-300"
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
