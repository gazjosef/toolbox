import React, { useRef } from "react";
import {
  FaBriefcase,
  FaShoppingCart,
  FaPalette,
  FaSearch,
  FaChalkboardTeacher,
} from "react-icons/fa";
import useGsapFadeIn from "../../hooks/useGsapFadeIn";

const Services: React.FC = () => {
  const [servicesTitleRef, servicesGridRef] = useGsapFadeIn();

  return (
    <section id="services" className="section">
      <div className="container">
        <div
          className="services__heading u-margin-bottom-medium"
          ref={servicesTitleRef as React.RefObject<HTMLDivElement>}
        >
          <h2 className="secondary-heading">Services</h2>
          <h1 className="primary-heading | u-center-text">
            We provide <span>professional IT solutions</span> for your business.
          </h1>
        </div>

        <section
          className="section-services__grid"
          ref={servicesGridRef as React.RefObject<HTMLDivElement>}
        >
          <div className="feature-box">
            <FaBriefcase size={70} className="u-margin-bottom-medium" />
            <h2 className="feature-box__title | u-margin-bottom-small">
              Custom Business Software
            </h2>
            <p className="paragraph">
              Custom business software and apps to support growing companies.
            </p>
          </div>

          <div className="feature-box">
            <FaShoppingCart size={70} className="u-margin-bottom-medium" />
            <h2 className="feature-box__title | u-margin-bottom-small">
              E-Commerce, Online Store Fronts
            </h2>
            <p className="paragraph">
              Beautiful online stores and strategically-led shopping
              experiences.{" "}
            </p>
          </div>

          <div className="feature-box">
            <FaPalette size={70} className="u-margin-bottom-medium" />
            <h2 className="feature-box__title | u-margin-bottom-small">
              Web Design
            </h2>
            <p className="paragraph">
              Analyze and implement designs that keep users engaged
            </p>
          </div>

          <div className="feature-box">
            <FaSearch size={70} className="u-margin-bottom-medium" />
            <h2 className="feature-box__title | u-margin-bottom-small">SEO</h2>
            <p className="paragraph">
              Improve your online presence to increase exposure and user
              traffic.
            </p>
          </div>

          <div className="feature-box">
            <FaChalkboardTeacher size={70} className="u-margin-bottom-medium" />
            <h2 className="feature-box__title | u-margin-bottom-small">
              Consulting
            </h2>
            <p className="paragraph">
              Provide end-to-end digital consulting to help you grow your
              business today.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Services;
