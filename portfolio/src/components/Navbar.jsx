import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row justify-around items-center p-4 md:p-5 bg-black text-white fixed top-0 left-0 w-full z-50">
      <div className="font-bold text-base md:text-lg mb-2 md:mb-0">
        Parikshit Maharjan
      </div>
      <ul className="flex flex-wrap justify-center gap-3 md:gap-6">
        <li>
          <Link
            to="/"
            className="text-sm md:text-base hover:text-violet-500 transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-sm md:text-base hover:text-violet-500 transition"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="text-sm md:text-base hover:text-violet-500 transition"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-sm md:text-base hover:text-violet-500 transition"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
