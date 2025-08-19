import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(DrawSVGPlugin);

export const useHeroAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitText(textRef.current, {
      type: "lines",
      linesClass: "line",
    });

    const tl = gsap.timeline();

    gsap.set(split.lines, { y: 100, opacity: 0 });
    gsap.set(".draw-icon1", { drawSVG: 0 });
    gsap.set(".draw-icon2", { drawSVG: 0 });
    gsap.set(".draw-icon3", { drawSVG: 0 });

    tl.to(split.lines, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.5,
      ease: "back.out(1.7)",
    })
    .to(".draw-icon1", {
      duration: 1,
      drawSVG: true,
    })
    .to(".draw-icon2", {
      duration: 1,
      drawSVG: true,
    })
    .to(".draw-icon3", {
      duration: 1,
      drawSVG: true,
    });

    return () => {
      split.revert()
      tl.kill();
    };
  }, []);

  return textRef;
}