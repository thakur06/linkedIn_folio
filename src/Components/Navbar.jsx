import { Link } from "react-router-dom";

export default function Navbar({ cls }) {
  return (
    <nav
      className={`fixed  left-1/2 transform -translate-x-1/2 z-50 text-white  w-screen flex items-center h-18 backdrop-blur-3xl shadow-md lg:px-8 animate-fade-in ${cls}`}
    >
      <img src="https://img.favpng.com/14/23/12/grizzly-bear-clip-art-png-favpng-pMs7HE78TuH2EecemAftjhUxB.jpg" className="h-14 w-14" />
    </nav>
  );
}
