import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";
import { useState,useEffect } from "react";
export default function Mainlayout() {
  const [theme, setTheme] = useState(localStorage.getItem("mode") || "light");
   useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("mode", theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
     
      <main>
        <div className="px-4 md:px-6 pt-12 pb-24 w-full xl:w-[45%] space-y-6 ">
          <Outlet context={{ theme }} />
        </div>
      </main>
      <Footer />
      <ToastContainer transition={Slide}/>
    </>
  );
}
