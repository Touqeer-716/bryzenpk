import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import Alert from "./assets/components/Alert.jsx";
import Header from "./assets/components/Header.jsx";
import Logo from "./assets/components/Logo.jsx";
import Products from "./assets/components/Products.jsx";
import Footer from "./assets/components/Footer.jsx";
import Footer2 from "./assets/components/Footer2.jsx";
import LuxuryCarousel from "./assets/components/LuxuryCarousel";
import { Outlet } from "react-router-dom";
import Feature from "./assets/components/Feature.jsx";
function App(props) {
  const [alert, setAlert] = useState(null);
  //const [mode, setMode] = useState("light");
  const [darkMode, setDarkMode] = useState("dark");
  const handleAlert = (title, msg, color) => {
    setAlert({
      title: title,
      message: msg,
      color: color,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const switchMode = () => {
    if (darkMode === "dark") {
      setDarkMode("");
      console.log("mode switch");
      // document.body.style.backgroundColor = "white";
      // document.body.style.color = "black";
      // handleAlert("Success", "Light Mode Enabled", "green");
    } else {
      setDarkMode("dark");
      //handleAlert("Success", "Dark Mode Enabled", "black");
      // document.body.style.backgroundColor = "grey";
      // document.body.style.color = "white";
    }
  };
  const handleClick = () => {
    handleAlert("warning", "BTN CLCIKED");
  };
  // 3. Welcome message on Page Load event
  // useEffect(() => {
  //   handleAlert(
  //     "info",
  //     "Welcome to our website! We hope you have a great experience.",
  //     "red",
  //   );
  // }, []); // Run once on load
  return (
    <>
      <div
        className={`${darkMode ? "dark" : ""} transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white-900 p-0`}
      >
        {/* <Header darkMode={darkMode} setDarkMode={switchMode} /> */}
        <Alert alert={alert} />
        {/* 🏛️ Fixed Top Navigation Structure */}
        <Header darkMode={darkMode} switchMode={switchMode} />

        {/* 🔮 Dynamic Window: This switches content based on whether URL is "/" or "/shop" */}
        <main>
          <Outlet />
        </main>
        <Feature />
        {/* 📥 Fixed Bottom Informational Matrix */}
        <Footer />
        {/* <LuxuryCarousel /> */}
        {/* <Logo /> */}
        {/* <Products /> */}
        {/* <Footer /> */}
        {/* <Footer2 /> */}
      </div>
    </>
  );
}

export default App;
