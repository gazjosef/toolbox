import React from "react";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import useGsapFadeDown from "../../hooks/useGsapFadeDown";

const Story: React.FC = () => {
  const [storyTitleRef, storyImgRef, storyTextRef] = useGsapFadeDown();

  return (
    <section id="story" className="section">
      <div className="container | u-mx-auto u-grid u-even-columns u-gap-5">
        <section className="article-story__title">
          <h1
            className="heading-one | u-mb-lg u-center-text"
            ref={storyTitleRef}
          >
            Story
          </h1>
        </section>

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
            Web development isn&apos;t just a job; it&apos;s my calling. From my
            very first line of code, I&apos;ve been on an exciting journey
            through the digital universe.
          </p>
          <p className="paragraph">
            With a commitment to elegant solutions and a love for responsive
            design, I&apos;ve had the privilege of crafting meaningful online
            experiences. I&apos;m eager to continue pushing boundaries and
            creating innovative web solutions.
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
