"use client";

import { useEffect, useRef } from "react";
import style from "./parallax.module.scss";
import useStyles from "../../../hooks/useStyle";

export function Parallax() {
  const s = useStyles(style);
  const screenWidth = window.innerWidth;

  const parallaxImage = useRef<HTMLImageElement | null>(null);
  const parallaxText = useRef<HTMLDivElement | null>(null);
  let textPosition = 270;
  let imagePosition = -100;
  let scrollSpeed = -0.1;

  if (screenWidth > 991 && screenWidth < 1199) {
    textPosition = 300;
    imagePosition = 100;
    scrollSpeed = -0.3;
  }
  if (screenWidth > 400 && screenWidth <= 991) {
    textPosition = 100;
    imagePosition = 70;
    scrollSpeed = -0.3;
  }

  if (screenWidth <= 400) {
    textPosition = 50;
    imagePosition = 120;
    scrollSpeed = 0.05;
  }

  useEffect(() => {
    const setInitialParallaxPositions = () => {
      const positionY = window.scrollY;

      if (parallaxImage.current) {
        parallaxImage.current.style.top =
          positionY * scrollSpeed + imagePosition + "px";
      }
      if (parallaxText.current) {
        parallaxText.current.style.top =
          positionY * (scrollSpeed * 2) + textPosition + "px";
      }
    };

    const handleScroll = () => {
      const positionY = window.scrollY;

      if (parallaxImage.current) {
        parallaxImage.current.style.top =
          positionY * scrollSpeed + imagePosition + "px";
      }
      if (parallaxText.current) {
        parallaxText.current.style.top =
          positionY * (scrollSpeed * 2) + textPosition + "px";
      }
    };
    setInitialParallaxPositions();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={s(`parallax`)}>
      <div className={s(`content`)}>
        <img
          src="/images/guest/slider.jpg"
          className={s(`background`)}
          ref={parallaxImage}
        />
        <div className={s(`text`)} ref={parallaxText}>
          <p>
            Witamy w szkole <b>MAX DANCE </b>
          </p>
          <p>ZAPRASZAMY !!!</p>
        </div>
      </div>
    </div>
  );
}
