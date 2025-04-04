import { Link } from "react-router";
const Navbar = () => {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          justifyContent: "space-evenly",
          padding: "20px 15rem",
          border: "1px solid",
          cursor: "pointer",
        }}
      >
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
