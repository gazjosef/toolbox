import Image from "next/image";
import React from "react";
import useGsapFadeIn from "../../hooks/useGsapFadeIn";
import CtaBtn from "../Snippets/CtaBtn";

const Hero: React.FC = () => {
  const [homeTitleRef, homeTextRef, homeImgRef] = useGsapFadeIn();

  return (
    <section id="home" className="section section-hero | u-bg-primary-50">
      <div className="container | u-mt-3xl | u-grid u-even-columns u-gap-5">
        <div ref={homeImgRef}>
          <Image
            src="/img/illustrations/undraw_responsive_6c8s.svg"
            alt="responsive"
            width={500}
            height={350}
          />
        </div>

        <div className="section-hero__text" ref={homeTextRef}>
          <h1 className="primary-heading | u-margin-bottom-small">
            Get scalable, modern and reliable{" "}
            <span className="">custom software</span>.
          </h1>

          <p className="paragraph">
            We develop web, mobile and custom software that&apos;s tailor-made
            to capture all your unique and essential requirements.
          </p>

          <CtaBtn />
        </div>
      </div>
    </section>
  );
};
export default Hero;
