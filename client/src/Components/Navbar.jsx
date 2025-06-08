import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav
      className={`flex items-center justify-between w-full h-16 p-2 fixed z-10 backdrop-blur-2xl font-semibold transition-all duration-300 ${
        isHome ? "bg-transparent text-white" : "bg-white text-black shadow-lg"
      }`}
    >
      <div>
        <Link to="/" className="text-xl font-medium flex gap-2 items-center">
          <img src="/logo.svg" alt="logo" className="w-8 h-8" />
          <p>FindStays</p>
        </Link>
      </div>

      <ul className="flex gap-5 items-center">
        <li>
          <NavLink to="/" className="hover:underline">Home</NavLink>
        </li>
        <li>
          <NavLink to="/search" className="hover:underline">Search</NavLink>
        </li>
        <li>
          <NavLink to="/Blog" className="hover:underline">Blog</NavLink>
        </li>
         <li>
          <NavLink to="/contact" className="hover:underline">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="hover:underline">About</NavLink>
        </li>
        <li>
          <NavLink to="/login">
            <button className={`rounded-xl w-[5rem] py-1 cursor-pointer ${
              isHome ? "bg-black text-white" : "bg-black text-white"
            }`}>
              Login
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/register">
            <button className={`rounded-xl w-[5rem] border py-1 cursor-pointer ${
              isHome ? "bg-white text-black border-white" : "bg-white text-black border-gray-500"
            }`}>
              Register
            </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
