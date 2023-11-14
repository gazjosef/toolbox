import Image from "next/image";
import React from "react";
import useGsapFadeIn from "../../hooks/useGsapFadeIn";

const Hero: React.FC = () => {
  const [homeTitleRef, homeTextRef, homeImgRef] = useGsapFadeIn();

  return (
    <section id="home" className="section | u-bg-primary-50">
      <div className="container | u-mt-3xl | u-grid u-even-columns u-gap-3">
        <div ref={homeImgRef}>
          {/* <Image
            src="/img/illustrations/undraw_responsive_6c8s.svg"
            alt="responsive"
            width={500}
            height={350}
          /> */}
          <Image
            src="/isometric-startup-development-V2B8Q7PS9T-w600.jpg"
            alt="responsive"
            width={500}
            height={350}
          />
        </div>

        <div ref={homeTextRef}>
          <h1 className="primary-heading | u-mb-sm">
            Get scalable, modern and reliable{" "}
            <span className="u-clr-primary-300">custom software</span>.
          </h1>

          <p className="paragraph">
            We develop web, mobile and custom software that&apos;s tailor-made
            to capture all your unique and essential requirements.
          </p>

          {/* <Button /> */}
        </div>
      </div>
    </section>
  );
};
export default Hero;
