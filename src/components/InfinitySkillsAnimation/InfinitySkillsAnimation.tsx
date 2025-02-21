import React, { useEffect } from 'react'
import './styles.css'

import githubIcon from "../../assets/svg/github-icon.svg"

import bootstrapIcon from "../../assets/svg/bootstrap.svg"
import figmaIcon from "../../assets/svg/figma.svg"
import gitIcon from "../../assets/svg/git.svg"
import javaIcon from "../../assets/svg/java.svg"
import javascriptIcon from "../../assets/svg/javascript.svg"
import reactIcon from "../../assets/svg/react.svg"
import typescripttIcon from "../../assets/svg/typescript.svg"
import cssIcon from "../../assets/svg/css-3.svg"
import htmlIcon from "../../assets/svg/html-5.svg"

export default function InfinitySkillsAnimation() {
  
  useEffect(() => {
    function doSomething() {
      const scrollers = document.querySelectorAll(".scroller");

      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
      }

      function addAnimation() {
        scrollers.forEach((scroller) => {
          scroller.setAttribute("data-animated", "true");

          const scrollerInner = scroller.querySelector(".scroller__inner") as HTMLElement;
          const scrollerContent = Array.from(scrollerInner.children);

          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true) as HTMLElement;
            duplicatedItem.setAttribute("aria-hidden", "true");
            scrollerInner.appendChild(duplicatedItem);
          });
        });
      }
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", doSomething);
    } else {
      doSomething();
    }

    // Cleanup function to avoid memory leaks
    return () => {
      document.removeEventListener("DOMContentLoaded", doSomething);
    };
  }, []);
  
  return (
    <div className="row">
      <div className="col-12">
        <div className="scroller" data-direction="right" data-speed="fast">
          <div className="scroller__inner">
            <img src={bootstrapIcon} alt="bootstrap" />
            <img src={cssIcon} alt="css" />
            <img src={figmaIcon} alt="figma" />
            <img src={gitIcon} alt="git" />
            <img src={htmlIcon} alt="html5" />
            <img src={javaIcon} alt="java" />
            <img src={javascriptIcon} alt="javascript" />
            <img src={reactIcon} alt="react" />
            <img src={typescripttIcon} alt="typescript" />
          </div>
        </div>
      </div>
    </div>
  )
}
