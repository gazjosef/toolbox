import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const useGsapFadeIn = () => {
  const gsapFadeIn = (ref, delay) => {
    const el = ref.current;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: delay,
        ease: "power2",
        scrollTrigger: {
          trigger: el,
          // markers: {
          //   startColor: "purple",
          //   endColor: "fuchsia",
          //   fontSize: "3rem",
          // },
        },
      }
    );
  };

  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsapFadeIn(titleRef, 0.1);
    gsapFadeIn(textRef, 0.3);
    gsapFadeIn(imgRef, 0.3);
  }, []);

  return [titleRef, textRef, imgRef];
};

export default useGsapFadeIn;
