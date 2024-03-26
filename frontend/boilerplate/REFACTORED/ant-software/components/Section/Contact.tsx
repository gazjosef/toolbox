import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import useGsapFadeIn from "../../hooks/useGsapFadeIn";
import EmailForm from "../Snippets/EmailForm";

const Contact: React.FC = () => {
  const [contactTitleRef, contactDetailsRef, contactFormRef] = useGsapFadeIn();

  return (
    <section id="contact" className="section">
      <div
        className="container | u-margin-bottom-medium | u-center-text"
        ref={contactTitleRef}
      >
        <h2 className="secondary-heading">Contact</h2>
        <h1 className="primary-heading">
          We are here to <span>help and answer</span> any questions you might
          have.
        </h1>
      </div>

      <section
        className="u-flex u-flex-col u-justify-between"
        ref={contactDetailsRef}
      >
        <section className="section-contact__details">
          <div className="phone | u-flex u-items-center u-justify-center u-gap-1">
            <FaPhone size="5rem" color="hsl(202, 61%, 47%)" />
            <p className="paragraph">0434 420 506</p>
          </div>
          <div className="email | u-flex u-items-center u-justify-center u-gap-1">
            <FaEnvelope size="5rem" color="hsl(202, 61%, 47%)" />
            <p className="paragraph">ant@antsoftware.dev</p>
          </div>
        </section>
      </section>

      <div className="container">
        <section className="section-contact__form" ref={contactFormRef}>
          <EmailForm />
        </section>
      </div>
    </section>
  );
};
export default Contact;
