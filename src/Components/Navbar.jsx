import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.png"
export default function Navbar({ cls }) {
  return (
    <nav
      className={`fixed  left-1/2 transform -translate-x-1/2 z-50 text-white  w-screen flex items-center h-20 backdrop-blur-3xl shadow-md lg:px-8 animate-fade-in ${cls}`}
    >
      <img src={logo} className="h-20 w-20" />
    </nav>
  );
}
