import { IconContext } from "react-icons";
import { FaFacebook, FaGooglePlus, FaLinkedin, FaPhone } from "react-icons/fa";

function Topbar() {
  return (
    <div className="topbar | u-bg-black-1000 u-clr-white-0">
      <div className="container | u-flex u-items-center u-justify-between">
        <div className="topbar__phone | u-flex u-items-center">
          <IconContext.Provider value={{ className: "" }}>
            <FaPhone className="u-mx-0-5" /> 02 9644 9220
          </IconContext.Provider>
        </div>
        <div className="topbar__social-media | u-flex u-items-center">
          <IconContext.Provider value={{ className: "" }}>
            <FaFacebook className="u-mx-0-5" />
            <FaGooglePlus className="u-mx-0-5" />
            <FaLinkedin className="u-mx-0-5" />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
