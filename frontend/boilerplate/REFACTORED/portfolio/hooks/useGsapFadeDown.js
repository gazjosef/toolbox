import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const useGsapFadeDown = () => {
  const gsapFadeDown = (ref, delay) => {
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
    gsapFadeDown(titleRef, 0.1);
    gsapFadeDown(textRef, 0.3);
    gsapFadeDown(imgRef, 0.3);
  }, []);

  return [titleRef, textRef, imgRef];
};

export default useGsapFadeDown;
