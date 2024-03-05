import React from "react";
// ** Import Shared Components
// import { IconContext } from "react-icons";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul role="list" className="flex items-center space-x-2">
        <li>Tips</li>
        <li>Comp</li>
        <li>League</li>
        <li>
          <button className="bg-red-500 flex items-center space-x-2">
            <FaSignOutAlt />
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
