import { IconContext } from "react-icons";
import { FaFacebook, FaGooglePlus, FaLinkedin, FaPhone } from "react-icons/fa";

function Topbar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar__phone">
          <FaPhone /> 02 9644 9220
        </div>
        <div className="topbar__social-media">
          <IconContext.Provider value={{ className: "" }}>
            <FaFacebook />
            <FaGooglePlus />
            <FaLinkedin />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
