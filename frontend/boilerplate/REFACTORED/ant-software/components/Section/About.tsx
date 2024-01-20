import React from "react";
import Image from "next/image";
import useGsapFadeIn from "../../hooks/useGsapFadeIn";

const About: React.FC = () => {
  const [aboutTitleRef, aboutImageRef, aboutTextRef] = useGsapFadeIn();

  return (
    <section id="about" className="section">
      <div className="container | u-center-text">
        <div ref={aboutTitleRef}>
          <h2 className="secondary-heading">About Us</h2>
          <h1 className="primary-heading | u-mx-auto">
            Web development company that vows your{" "}
            <span className="u-clr-primary-300">success</span>.
          </h1>
        </div>

        <div className="container | u-grid u-even-columns u-gap-3">
          <div className="section-about__image" ref={aboutImageRef}>
            <Image
              src="/img/illustrations/undraw_developer_activity_bv83.svg"
              alt="Developer Activity"
              width={800}
              height={600}
            />
          </div>

          <div className="section-about__text" ref={aboutTextRef}>
            <p className="paragraph">
              Founded in 2016, Ant Software is a web development company that
              helps clients meet the challenges of the digital age. We
              specialize in brand design, web design and development, and custom
              software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
