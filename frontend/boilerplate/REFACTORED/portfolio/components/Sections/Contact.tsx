import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import useGsapFadeDown from "../../hooks/useGsapFadeDown";

const Contact: React.FC = () => {
  const [contactTitleRef, contactDetailsRef] = useGsapFadeDown();

  return (
    <section id="contact" className="section">
      <h1
        className="heading-one | u-mb-2xl u-mx-auto u-center-text"
        ref={contactTitleRef as React.LegacyRef<HTMLHeadingElement>}
      >
        Contact
      </h1>
      <div className="container">
        <section
          className="article-contact__details"
          ref={contactDetailsRef as React.RefObject<HTMLElement>}
        >
          <div>
            <a
              href="https://github.com/gazjosef"
              className=" u-flex u-flex-col u-items-center u-justify-center"
            >
              <FaGithub size="15rem" />
              <h3 className="heading-three">Github</h3>
            </a>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/gareth-h-a32448191/"
              className=" u-flex u-flex-col u-items-center u-justify-center"
            >
              <FaLinkedin size="15rem" />
              <h3 className="heading-three">LinkedIn</h3>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Contact;
