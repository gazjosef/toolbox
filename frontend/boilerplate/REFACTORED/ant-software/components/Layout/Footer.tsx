import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import useGsapFadeIn from "../../hooks/useGsapFadeIn";
import { IconContext } from "react-icons";

const Footer: React.FC = () => {
  const [footerTitleRef, footerTextRef, footerImgRef] = useGsapFadeIn();

  const currentYear = new Date().getFullYear();

  const FooterNavItems = [
    {
      title: "Home",
      url: "#home",
    },
    {
      title: "About",
      url: "#about",
    },
    {
      title: "Services",
      url: "#services",
    },
    {
      title: "Contact",
      url: "#contact",
    },
  ];

  return (
    <footer className="footer | u-bg-black-800 u-clr-white-0">
      <div className="container border-line | u-margin-top-medium u-mb-md | u-grid u-even-columns">
        <div>
          {/* <Image
            src="/img/white-logo.png"
            alt="Ant Software"
            height="100"
            width="352.5"
          /> */}

          <div className="u-mx-auto u-my-sm | u-flex">
            <a href="www.facebook.com" className="u-mx-1 u-clr-white-0">
              <FaFacebook />
            </a>
            <a href="www.instagram.com" className="u-mx-1 u-clr-white-0">
              <FaInstagram />
            </a>
            <a href="www.linkedin.com" className="u-mx-1 u-clr-white-0">
              <FaLinkedin />
            </a>
            <a href="www.twitter.com" className="u-mx-1 u-clr-white-0">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="u-mx-auto | u-grid u-even-columns u-gap-3 | u-center-text-md">
          <div className="u-mb-sm | u-place-content-start-center | u-center-text-md">
            <h2 className="u-margin-bottom-small | u-uppercase">Nav Links</h2>
            <ul role="list">
              {FooterNavItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a className="u-clr-white-0" href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="u-mb-sm | u-place-content-start-center | u-center-text-md">
            <h2 className="u-margin-bottom-small | u-uppercase">Contact</h2>

            <div className="u-center-text-md">
              <p className="u-flex u-items-center">
                <IconContext.Provider value={{ className: "u-mr-0-5" }}>
                  <FaPhone />
                </IconContext.Provider>
                : 0434 420 506
              </p>
            </div>

            <div className="u-center-text-md">
              <p className="u-flex u-items-center">
                <IconContext.Provider value={{ className: "u-mr-0-5" }}>
                  <FaEnvelope />
                </IconContext.Provider>
                : ant@antsoftware.dev
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="container | u-margin-top-medium u-mx-auto">
        <p className="u-center-text">
          Copyright <span className="u-clr-secondary-100">&copy;</span> Ant
          Software {currentYear}
        </p>
      </section>
    </footer>
  );
};
export default Footer;
