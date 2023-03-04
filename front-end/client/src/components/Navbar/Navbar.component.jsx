import React from "react";
import NavbarContainer from "./Navbar.styles";
import logo from "../../assets/logo.png";
import { Link, useHref } from "react-router-dom";

const Navbar = () => {
  const href = useHref();
  return (
    <NavbarContainer>
      <div className="logo">
        <img src={logo} alt="logo" className="img-fluid" />
      </div>
      <div className="nav-links d-flex align-items-center ">
        <ul className="list-unstyled d-flex align-items-center">
          <li className={`${href === "/analytics" && "active"}`}>
            <Link to="/analytics">Analytics</Link>
          </li>
          <li className={`${href === "/" && "active"}`}>
            <Link to="/">Dashboard</Link>
          </li>
          <li className={`${href === "/trade" && "active"}`}>
            <Link to="/trade">Trade</Link>
          </li>
        </ul>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
