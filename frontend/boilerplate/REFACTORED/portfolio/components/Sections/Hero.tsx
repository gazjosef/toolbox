import React from "react";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import useGsapFadeDown from "../../hooks/useGsapFadeDown";

const Hero: React.FC = () => {
  const [heroTitleRef, heroImgRef, heroTextRef] = useGsapFadeDown();

  return (
    <section id="home" className="section | u-bg-primary-400">
      <div className="container | | u-grid u-even-columns">
        <div ref={heroTextRef as React.RefObject<HTMLDivElement>}>
          <h1 className="heading-home">
            Hi, I&apos;m <span className="u-clr-primary-400">Gareth</span>.
          </h1>

          <p className="paragraph">
            I am a Sydney-based web developer with a passion for creating
            engaging, responsive, and user-friendly websites.
          </p>

          <button className="btn btn--cta | u-max-w-max">
            <a
              href="#portfolio"
              className="u-flex u-items-center u-justify-center"
            >
              Portfoloio
              <FaArrowCircleRight className="u-ml-1" />
            </a>
          </button>
        </div>

        <div ref={heroImgRef as React.RefObject<HTMLDivElement>}>
          <Image
            src="/images/section/undraw_developer_activity_re_39tg.svg"
            alt="responsive"
            width={1000}
            height={700}
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
