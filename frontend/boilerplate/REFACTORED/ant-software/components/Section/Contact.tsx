import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import useGsapFadeIn from "../../hooks/useGsapFadeIn";
import EmailForm from "../Snippets/EmailForm";
import Image from "next/image";

const Contact: React.FC = () => {
  const [contactTitleRef, contactDetailsRef, contactFormRef] = useGsapFadeIn();

  return (
    <section id="contact" className="section section-contact">
      <h2
        className="secondary-heading | u-margin-bottom-medium"
        ref={contactTitleRef}
      >
        Contact
      </h2>

      <div className="container">
        <section className="section-contact__details" ref={contactDetailsRef}>
          <h1 className="primary-heading">
            We are here to <span>help and answer</span> any questions you might
            have.
          </h1>
          <Image
            src="/img/illustrations/undraw_programming_2svr.svg"
            alt="responsive"
            width={300}
            height={225}
          />
          <div className="phone | u-flex u-items-center u-justify-center u-gap-1">
            <FaPhone size="3rem" color="hsl(202, 61%, 47%)" />
            <p className="paragraph">0434 420 506</p>
          </div>
          <div className="email | u-flex u-items-center u-justify-center u-gap-1">
            <FaEnvelope size="3rem" color="hsl(202, 61%, 47%)" />
            <p className="paragraph">ant@antsoftware.dev</p>
          </div>
        </section>
        <section className="section-contact__form" ref={contactFormRef}>
          <EmailForm />
        </section>
      </div>

      {/* <div className="container"></div> */}
    </section>
  );
};
export default Contact;
