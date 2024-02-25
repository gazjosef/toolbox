import { IconContext } from "react-icons";
import { FaFacebook, FaGooglePlus, FaLinkedin, FaPhone } from "react-icons/fa";

function Topbar() {
  return (
    <div className="topbar | u-bg-black-1000 u-clr-white-0">
      <div className="container | u-flex u-items-center u-justify-between">
        <div className="topbar__phone | u-flex u-items-center">
          <FaPhone className="u-mr-1" /> 02 9644 9220
        </div>
        <div className="topbar__social-media | u-flex u-items-center">
          <IconContext.Provider value={{ className: "" }}>
            <FaFacebook className="u-mr-1" />
            <FaGooglePlus className="u-mr-1" />
            <FaLinkedin className="" />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
