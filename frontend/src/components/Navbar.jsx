import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <ul className="flex justify-evenly px-60 py-4 text-gray-700 font-medium">
        <li className="hover:text-blue-600 transition-colors">
          <Link to="/home">Home</Link>
        </li>
        <li className="hover:text-blue-600 transition-colors">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-blue-600 transition-colors">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="hover:text-blue-600 transition-colors">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
