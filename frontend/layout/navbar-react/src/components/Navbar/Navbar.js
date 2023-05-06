import React, { useState } from "react";
import { FaReact, FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import "./Navbar.css";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((t) => !t);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        React
        <IconContext.Provider value={{ className: "fa-react" }}>
          <FaReact />
        </IconContext.Provider>
      </h1>
      <div className="menu-icon">
        <IconContext.Provider value={{ className: "fa-react" }}>
          {toggle ? (
            <FaTimes onClick={handleClick} />
          ) : (
            <FaBars onClick={handleClick} />
          )}
        </IconContext.Provider>
      </div>
      <ul className={toggle ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Button>Sign Up</Button>
    </nav>
  );
}

export default Navbar;
