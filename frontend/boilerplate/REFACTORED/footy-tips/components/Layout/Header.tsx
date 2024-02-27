import React from "react";
import { FaFootballBall, FaSignOutAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

const Header: React.FC = () => {
  return (
    <header className="header | u-bg-primary-400 u-clr-white-0">
      <div className="container | u-flex u-items-center u-justify-between">
        <div className="header__logo | u-flex u-items-center u-justify-between | u-clr-white-0">
          <IconContext.Provider value={{ className: "u-fs-750" }}>
            <FaFootballBall />
          </IconContext.Provider>
          <h3 className="u-ml-1 u-uppercase">Footy Tips</h3>
        </div>
        <ul role="list" className="u-flex u-items-center">
          <li className="u-mx-1 | u-clr-white-0">Tips</li>
          <li className="u-mx-1 | u-clr-white-0">Comp</li>
          <li className="u-mx-1 | u-clr-white-0">League</li>
          <li className="u-mx-1 | u-clr-white-0">
            <button className="btn | u-bg-white-0 | u-flex u-items-center u-justify-between | u-clr-primary-400">
              <FaSignOutAlt />
              <h3 className="u-ml-0-5">Logout</h3>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
