import React from "react";
import { FaPhone } from "react-icons/fa";
import useGsapFadeIn from "../../hooks/useGsapFadeIn";
import Form from "../../components/Snippets/Form/Form";
import Map from "../../components/Snippets/Map/Map";

const Contact = () => {
  const [contactTitleRef, contactMapRef, contactDetailsRef] = useGsapFadeIn();

  return (
    <section id="contact" className="section article-contact">
      <div className="container">
        <section className="article-contact__title" ref={contactTitleRef}>
          <h2 className="heading-two u-margin-bottom-small">Contact Us</h2>
        </section>

        <section
          className="article-contact__contact | u-grid"
          ref={contactMapRef}
        >
          <section className="article-contact__map">
            <Map />
          </section>

          <section className="article-contact__form">
            <Form />
          </section>

          <section className="article-contact__details">
            <h3 className="heading-three">Address</h3>
            <p className="paragraph">
              5/8 Ave of the Americas <br />
              Newington NSW 2127
            </p>
            <h3 className="heading-three">Hours</h3>
            <p className="paragraph">
              Sun: Closed <br />
              Mon: 8:30am - 5:30pm <br />
              Tue: 8:30am - 5:30pm <br />
              Wed: 8:30am - 5:30pm <br />
              Thu: 8:30am - 5:30pm <br />
              Fri: 8:30am - 5:30pm <br />
              Sat: Closed <br />
            </p>
            <h3 className="heading-three">Email</h3>
            <p className="paragraph">
              Email: info@sunderland.com.au <br />
            </p>
            <button className="btn btn--contact | u-flex u-items-center u-justify-between u-gap-1">
              <FaPhone /> 02 9644 9220
            </button>
          </section>
        </section>
      </div>
    </section>
  );
};
export default Contact;
