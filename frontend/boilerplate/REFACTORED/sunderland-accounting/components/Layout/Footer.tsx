import React from "react";
// ** Import Icons
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
    <footer className="footer">
      <div className="container">
        <h2 className="heading-two | u-margin-bottom-medium">
          Sunderland Accounting
        </h2>

        <section className="footer__links | u-margin-bottom-small ">
          <ul role="list">
            <li>Home</li>
            <li>Our Services</li>
            <li>About Us</li>
          </ul>
        </section>

        <section className="footer__icons | u-margin-bottom-small">
          <IconContext.Provider value={{}}>
            <FaFacebook size={28} />
            <FaGooglePlus size={28} />
            <FaInstagram size={28} />
            <FaLinkedin size={28} />
          </IconContext.Provider>
        </section>

        <section className="footer__links | u-margin-bottom-medium">
          <ul role="list">
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
          </ul>
        </section>

        <section className="u-center-text">
          Gareth Hind &copy; {currentYear}
        </section>
      </div>
    </footer>
  );
};

export default Footer;
