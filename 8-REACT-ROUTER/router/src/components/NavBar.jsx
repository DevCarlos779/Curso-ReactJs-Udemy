import { Link } from "react-router-dom";

import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="Navbar">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/about">
        About
      </Link>
    </nav>
  );
};

export default NavBar;
