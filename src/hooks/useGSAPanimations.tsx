import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
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

export const useSkillAnimation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const titleElement = titleRef.current;
    const skillsElement = skillsRef.current;

    if (!section || !titleElement || !skillsElement) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      titleElement,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      },
    );

    tl.fromTo(
      skillsElement.children,
      {
        opacity: 0,
        y: 40,
        x: -30,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.4",
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return { sectionRef, titleRef, skillsRef };
}