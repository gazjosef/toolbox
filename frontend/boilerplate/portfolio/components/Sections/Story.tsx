import React from "react";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import useGsapFadeDown from "../../hooks/useGsapFadeDown";

const Story: React.FC = () => {
  const [storyTitleRef, storyImgRef, storyTextRef] = useGsapFadeDown();

  return (
    <section id="story" className="section">
      <div className="container | u-mx-auto">
        <section className="article-story__title">
          <h1
            className="heading-one | u-mb-lg u-center-text"
            ref={storyTitleRef}
          >
            Story
          </h1>
        </section>
      </div>
      <div className="container | u-mx-auto u-grid u-even-columns u-gap-5">
        <section ref={storyImgRef as React.RefObject<HTMLElement>}>
          <Image
            src="/images/section/undraw_programming_re_kg9v.svg"
            alt="responsive"
            width={1000}
            height={700}
          />
        </section>
        <section
          className="article-story__text"
          ref={storyTextRef as React.RefObject<HTMLElement>}
        >
          <p className="paragraph">
            With expertise in HTML, CSS, and SASS, I craft beautiful and
            responsive user interfaces.
          </p>
          <p className="paragraph">
            I excel in React, Shopify and headless CMS implementations,
            optimizing e-commerce experiences and leveraging platforms like
            Sanity.io for seamless content management.
          </p>
          <p className="paragraph">
            Let&lsquo;s collaborate to turn your vision into a successful
            reality!
          </p>

          <button className="btn btn--cta btn--inverse | u-max-w-max u-py-2">
            <a
              href="#portfolio"
              className="u-flex u-items-center u-justify-center"
            >
              Portfolio
              <FaArrowCircleRight className="u-ml-1" />
            </a>
          </button>
        </section>
      </div>
    </section>
  );
};
export default Story;
