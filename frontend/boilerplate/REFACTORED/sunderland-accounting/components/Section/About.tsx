import { useEffect, useRef } from "react";
import useGsapFadeIn from "../../hooks/useGsapFadeIn";
import Gallery from "../../components/Snippets/Gallery/Gallery";

const About: React.FC = () => {
  const [aboutTitleRef, aboutTextRef, aboutGalleryRef] = useGsapFadeIn();

  return (
    <article id="about" className="article-about">
      <div className="container">
        <section ref={aboutTitleRef}>
          <h2 className="heading-two">About Us</h2>
        </section>
        <section ref={aboutTextRef}>
          <p className="paragraph">
            We are a professional accounting firm dedicated to providing
            top-notch financial services to businesses and individuals. Our team
            of experts has a combined experience of several decades in the field
            of accounting and finance. We offer a wide range of services
            including bookkeeping, tax planning and preparation, financial
            statement analysis, and consulting.
          </p>
          <p className="paragraph">
            Our goal is to help our clients make informed financial decisions,
            stay compliant with tax laws, and achieve their financial goals. We
            are committed to providing personalized, timely and efficient
            services at an affordable price.
          </p>
        </section>
      </div>

      <div className="container">
        <Gallery />
      </div>
    </article>
  );
};
export default About;
