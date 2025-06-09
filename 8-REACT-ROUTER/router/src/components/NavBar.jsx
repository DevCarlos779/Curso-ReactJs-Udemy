import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="Navbar">
      {/* <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/about">
        About
      </Link> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      {/* 
      
        Agora basta dar os atributos que voce queira para a classe .active no CSS
        O meu está no App.css
      */}
    </nav>
  );
};

export default NavBar;
