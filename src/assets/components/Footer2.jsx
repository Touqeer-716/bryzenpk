import React from "react";
import Logo from "./Logo.jsx";

function Footer2() {
  return (
    <>
      <footer className="bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-200 transition-colors duration-300 border-b border-slate-200 dark:border-slate-800 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="grow flex flex-wrap md:pr-20 -mb-10 md:text-center text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 dark:text-slate-200 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className=" list-none mb-10">
                <li>
                  <a className=" text-gray-600 dark:text-slate-200 hover:text-2xl">
                    All Products
                  </a>
                </li>
                <li>
                  <a className=" text-gray-600 dark:text-slate-200 hover:text-2xl">
                    Shirts
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 dark:text-slate-200 hover:text-2xl">
                    Pants
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 dark:text-slate-200 hover:text-2xl">
                    {/* Fourth Link */}
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>

            <div className="w-64 shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <Logo />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer2;
