import React from "react";
// ** Import Shared Components
import Navbar from "../Layout/Navbar";
// ** Import Icons
import { FaFootballBall } from "react-icons/fa";
import { IconContext } from "react-icons";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-400 w-screen p-2 text-white">
      <div className="container | flex items-center justify-between">
        <div className="header__logo | flex items-center justify-between | text-white">
          <IconContext.Provider value={{ className: "u-fs-750" }}>
            <FaFootballBall />
          </IconContext.Provider>
          <h3 className="u-ml-1 u-uppercase">Footy Tips</h3>
        </div>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
