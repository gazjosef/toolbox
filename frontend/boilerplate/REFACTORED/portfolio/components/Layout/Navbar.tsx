import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

interface MenuItem {
  title: string;
  url: string;
}

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClick = () => {
    setToggle((t) => !t);
  };
  const MenuItems: MenuItem[] = [
    {
      title: "Home",
      url: "#home",
    },
    {
      title: "Portfolio",
      url: "#portfolio",
    },
    {
      title: "Story",
      url: "#story",
    },
    {
      title: "Contact",
      url: "#contact",
    },
  ];

  return (
    <nav className="navbar | u-flex u-items-center">
      <ul
        id="primary-navigation"
        data-visible={false}
        role="list"
        className={`navbar__menu 
              ${toggle ? "navbar__active" : ""}
            `}
      >
        {MenuItems.map((item, index) => {
          return (
            <li className="nav-links" key={index}>
              <a href={item.url}>{item.title}</a>
            </li>
          );
        })}
      </ul>

      {/* TOGGLE BUTTON */}
      <div
        className="navbar__mobile-nav-toggle sr-only"
        aria-label="Toggle navigation"
        aria-expanded={toggle}
      >
        <IconContext.Provider value={{}}>
          {toggle ? (
            <FaTimes onClick={handleClick} />
          ) : (
            <FaBars onClick={handleClick} />
          )}
        </IconContext.Provider>
      </div>
    </nav>
  );
};
export default Navbar;
