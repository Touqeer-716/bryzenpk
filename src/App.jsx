import { useState, useEffect } from "react";
import Header from "./assets/components/Header.jsx";
import Logo from "./assets/components/Logo.jsx";
import Footer from "./assets/components/Footer.jsx";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
function App(props) {
  const [darkMode, setDarkMode] = useState("dark");

  const switchMode = () => {
    if (darkMode === "dark") {
      setDarkMode("");
      console.log("mode switch");
    } else {
      setDarkMode("dark");
    }
  };

  return (
    <>
      <CartProvider>
        <div className={`${darkMode ? "dark" : ""}`}>
          <div className=" transition-color duration-300 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-800 p-0">
            {/* <Header darkMode={darkMode} setDarkMode={switchMode} /> */}

            {/* 🏛️ Fixed Top Navigation Structure */}
            <Header darkMode={darkMode} switchMode={switchMode} />
            {/* 🔮 Dynamic Window: This switches content based on whether URL is "/" or "/shop" */}
            <main>
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      </CartProvider>
    </>
  );
}

export default App;
