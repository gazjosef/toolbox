import React from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import useGsapFadeIn from "../../hooks/useGsapFadeIn";
import EmailForm from "../Snippets/EmailForm";

const Contact: React.FC = () => {
  const [contactTitleRef, contactDetailsRef, contactFormRef] = useGsapFadeIn();

  return (
    <section id="contact" className="section">
      <div
        className="container | u-mx-auto | u-center-text"
        ref={contactTitleRef}
      >
        <h2 className="secondary-heading | u-margin-bottom-medium">Contact</h2>
        <h1 className="primary-heading">
          We are here to{" "}
          <span className="u-clr-primary-300">help and answer</span> any
          questions you might have.
        </h1>
      </div>

      <div className="container | u-grid u-even-columns u-gap-3">
        <section
          className="u-flex u-flex-col u-justify-between"
          ref={contactDetailsRef}
        >
          <section className="section-contact__details">
            <div className="phone | u-margin-bottom-medium">
              <h3 className="u-margin-bottom-small | u-flex u-items-center u-justify-center">
                <FaPhone className="u-mr-1" /> Phone
              </h3>
              <p className="paragraph | u-center-text">
                <span>0434 420 506</span>
              </p>
            </div>
            <div className="email">
              <h3 className="u-margin-bottom-small | u-flex u-items-center u-justify-center">
                <FaEnvelope className="u-mr-1" /> Email
              </h3>
              <p className="paragraph | u-center-text">
                <span>ant@antsoftware.dev</span>
              </p>
            </div>
          </section>
        </section>

        <section className="section-contact__form" ref={contactFormRef}>
          <EmailForm />
        </section>
      </div>
    </section>
  );
};
export default Contact;
