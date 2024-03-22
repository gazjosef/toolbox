import React, { useRef } from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import useGsapFadeDown from "../../hooks/useGsapFadeDown";

const Contact: React.FC = () => {
  const [contactTitleRef, contactDetailsRef] = useGsapFadeDown();

  return (
    <section id="contact" className="section">
      <h1
        className="heading-one | u-mb-2xl u-mx-auto u-center-text"
        // ref={contactTitleRef as React.RefObject<HTMLElement>}
      >
        Contact
      </h1>
      <div className="container">
        <section
          className="article-contact__details"
          ref={contactDetailsRef as React.RefObject<HTMLElement>}
        >
          <div>
            <a href="https://github.com/gazjosef">
              <h3 className="heading-three | u-flex u-flex-col u-items-center u-justify-center">
                <IconContext.Provider value={{ size: "5rem" }}>
                  <FaGithub />
                </IconContext.Provider>
                Github
              </h3>
            </a>
          </div>

          <div>
            <a href="https://www.linkedin.com/in/gareth-h-a32448191/">
              <h3 className="heading-three | u-flex u-flex-col u-items-center u-justify-center">
                <IconContext.Provider value={{ size: "5rem" }}>
                  <FaLinkedin />
                </IconContext.Provider>
                LinkedIn
              </h3>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Contact;
