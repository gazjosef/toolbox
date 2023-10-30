import React, { useRef } from "react";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import useGsapFadeDown from "../../hooks/useGsapFadeDown";

const Contact: React.FC = () => {
  const [contactTitleRef, contactImgRef, contactDetailsRef] = useGsapFadeDown();

  return (
    <section id="contact" className="section">
      <div className="container | u-mx-auto">
        <section
          className="article-contact__image"
          ref={contactImgRef as React.RefObject<HTMLElement>}
        >
          <Image
            className="heading-one | u-margin-bottom-small u-mx-auto u-center-text"
            src="/images/section/undraw_designer_re_5v95.svg"
            alt="responsive"
            width={960}
            height={572}
          />
        </section>
        <h1 className="heading-one | u-margin-bottom-small u-mx-auto u-center-text">
          Contact
        </h1>
        <section>
          <section
            className="article-contact__details | u-bg-white-0 u-mx-auto"
            ref={contactDetailsRef as React.RefObject<HTMLElement>}
          >
            <div>
              <h3 className="heading-three | u-flex u-items-center">
                <FaPhone className="u-mr-1" /> Mobile
              </h3>
              <p>0402 830 315</p>
            </div>

            <div>
              <h3 className="heading-three | u-flex u-items-center">
                <FaGithub className="u-mr-1" /> Github
              </h3>
              <a href="https://github.com/gazjosef">
                https://github.com/gazjosef
              </a>
            </div>

            <div>
              <h3 className="heading-three | u-flex u-items-center">
                <FaEnvelope className="u-mr-1" /> Email
              </h3>
              <p>garethjhind@gmail.com</p>
            </div>

            <div>
              <h3 className="heading-three | u-flex u-items-center">
                <FaLinkedin className="u-mr-1" /> LinkedIn
              </h3>
              <a href="https://www.linkedin.com/in/gareth-h-a32448191/">
                https://www.linkedin.com/in/gareth-h
              </a>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
};
export default Contact;
