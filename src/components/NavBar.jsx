import React from "react";
import PokeBole from "../img/pokebola.png";
import Logo from "../img/LOGO.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const setActiveClass = ({ isActive = false }) => isActive ? "active" : "inactive";
  return (
    <nav>
      <div className="nav_container">
        <NavLink to="/">
          <img src={Logo} alt="Logo" width="150px" />
        </NavLink>
        <div className="titles_nav">
          <NavLink to="/" className={setActiveClass}>
            HOME
          </NavLink>

          <NavLink to="/pokemones" className={setActiveClass}>
            CHARACTERS
          </NavLink>
        </div>
        <Link className="link_mail" to="/pokemones">
          <img className="mail_mobile" src={PokeBole} alt="mail" width="40px" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
