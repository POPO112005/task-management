import logo from "../assets/react.svg";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineDarkMode,MdOutlineLightMode } from "react-icons/md";
export default function Navbar({ theme, setTheme }) {
  const activelink = ({ isActive }) =>
    isActive
      ? "border-b-2 border-purple-500 bg-opacity-60 px-3 py-2"
      : "hover:bg-sky-500 hover:bg-opacity-20 rounded px-3 py-2";

  function handleThemeToggle() {
    if(theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    // 1. ทำให้ nav เป็นจุดอ้างอิง (relative) และจัดเนื้อหาหลักไว้ตรงกลาง (justify-center)
    <nav className="flex items-center justify-between px-6 py-3 ">
      {/* ส่วนกลาง: กลุ่ม Logo และ Links */}
      <div >
        <h1 className="font-bold text-2xl">
          Task Management
        </h1>
       
      </div>

      {/* 2. ส่วนขวา: ปุ่มที่จัดวางแบบ Absolute */}
      {/* - absolute: ทำให้ลอยทับ
           - right-6: ชิดขวา โดยเว้นระยะเท่ากับ padding ของ nav
           - top-1/2 -translate-y-1/2: จัดกึ่งกลางแนวตั้ง */}
      <div >
        <button onClick={handleThemeToggle}  className=" text-white rounded px-4 py-2">
          {theme === "light" ? (
            <MdOutlineDarkMode className="text-2xl text-black" />
          ) : (
            <MdOutlineLightMode  className="text-2xl"/>
          )}
        </button>
      </div>
    </nav>
  );
}
