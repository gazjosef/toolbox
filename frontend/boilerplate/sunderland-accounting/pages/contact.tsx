import React from "react";
import { FaPhone } from "react-icons/fa";
// import MapContainer from "@/components/Map/MapContainer";
import useGsapFadeIn from "../hooks/useGsapFadeIn";

const Contact = () => {
  const [contactTitleRef, contactMapRef, contactDetailsRef] = useGsapFadeIn();

  return (
    <section id="contact" className="article-contact">
      <div className="container">
        <section className="article-contact__title" ref={contactTitleRef}>
          <h2 className="heading-two u-margin-bottom-small">Contact Us</h2>
        </section>

        <section className="article-contact__contact" ref={contactMapRef}>
          <section className="article-contact__map">
            {/* <MapContainer /> */}
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
            <button className="btn btn--contact | u-flex u-items-center u-justify-between">
              <FaPhone className="u-mx-0-5" /> 02 9644 9220
            </button>
          </section>

          <section className="article-contact__form">
            <form action="/action_page.php" className="form">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />

              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />

              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your Email"
              />

              <label htmlFor="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "130px" }}
              ></textarea>

              <input type="submit" value="Submit" className="btn" />
            </form>
          </section>
        </section>
      </div>
    </section>
  );
};
export default Contact;
