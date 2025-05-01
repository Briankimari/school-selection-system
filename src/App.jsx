import React, { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar, Footer, Sidebar, ThemeSettings, Pie } from "./components";
import { Ecommerce, Orders } from "./pages";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";
import Grading from "./pages/Grading";
import Students from "./pages/Students";
import Database from "./pages/Database";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <ToastContainer />
      <div className="flex flex-col min-h-screen dark:bg-main-dark-bg">
        {/* Settings Button */}
        <div className="fixed right-4 bottom-4 z-50">
          <button
            type="button"
            onClick={() => setThemeSettings(true)}
            style={{ background: currentColor, borderRadius: "50%" }}
            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <FiSettings />
          </button>
        </div>

        {/* Sidebar */}
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}

        {/* Main Content */}
        <div
          className={
            activeMenu
              ? "dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full flex flex-col"
              : "bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex flex-col"
          }
        >
          {/* Navbar */}
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>

          {/* Content */}
          <div className="flex-grow p-4 pb-20">
            {themeSettings && <ThemeSettings />}
            <Routes>
              <Route path="/" element={<Ecommerce />} />
              <Route path="/homepage" element={<Ecommerce />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/grading" element={<Grading />} />
              <Route path="/profile" element={<Students />} />
              <Route path="/database" element={<Database />} />
              <Route path="/graph" element={<Pie />} />
            </Routes>
          </div>

          {/* Footer */}
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
