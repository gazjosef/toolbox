import React from "react";
import { IconContext } from "react-icons";
import {
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="footer | u-bg-black-900 | u-clr-white-0">
      <div className="container">
        <h2 className="u-mb-md | u-center-text u-uppercase">
          Sunderland Accounting
        </h2>

        <section className="footer__links | u-mb-sm u-mx-auto">
          <ul
            role="list"
            className="u-flex u-items-center u-justify-center u-gap-2 | u-uppercase"
          >
            <li>Home</li>
            <li>Our Services</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
          </ul>
        </section>

        <section className="footer__icons | u-mx-auto u-mb-md | u-flex u-items-center u-justify-center | u-fs-800">
          <IconContext.Provider value={{ className: "" }}>
            <FaFacebook className="u-mx-0-5" />
            <FaGooglePlus className="u-mx-0-5" />
            <FaInstagram className="u-mx-0-5" />
            <FaLinkedin className="u-mx-0-5" />
          </IconContext.Provider>
        </section>

        <section className="u-center-text">
          Ant Software &copy; {currentYear}
        </section>
      </div>
    </footer>
  );
};

export default Footer;
