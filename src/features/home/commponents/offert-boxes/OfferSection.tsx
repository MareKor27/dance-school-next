"use client";
import { useEffect, useRef } from "react";
import style from "./offerSection.module.scss";
import useStyles from "@/hooks/useStyle";
import { SitePaths } from "@/constants/Paths";
import Link from "next/link";

export function OfferSection() {
  const s = useStyles(style);

  const backgroundImage = useRef<HTMLImageElement | null>(null);
  useEffect(() => {
    const setInitialParallaxPositions = () => {
      const positionY = window.scrollY - 2000;

      if (backgroundImage.current) {
        backgroundImage.current.style.top = positionY * -0.2 + "px";
      }
    };

    const handleScroll = () => {
      const positionY = window.scrollY - 2000;

      if (backgroundImage.current) {
        backgroundImage.current.style.top = positionY * -0.2 + "px";
      }
    };
    setInitialParallaxPositions();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={s(`offer-section`)}>
      <img
        src="\images\guest\offert-boxes\duzelogo.webp"
        alt=""
        className={s(`bg-img`)}
        ref={backgroundImage}
      />
      <div className="body-arranged-md">
        <header>
          <h2 className={s(`section-heading`, `text-center`)}>
            <b>MAX</b> Dance ZAJĘCIA
          </h2>
        </header>
        <div className={s(`dance-offer`)}>
          <div className={s(`single-dance-box`)}>
            <img
              src="\images\guest\offert-boxes\brzucha.webp"
              alt=""
              className={s(`box-img`)}
            />
            <h3 className={s(`box-heading`)}>TANIEC BRZUCHA</h3>
          </div>
          <div className={s(`single-dance-box`)}>
            <img
              src="images\guest\offert-boxes\buraleska.webp"
              alt=""
              className={s(`box-img`)}
            />
            <h3 className={s(`box-heading`)}>BURALESKA</h3>
          </div>
          <div className={s(`single-dance-box`)}>
            <img
              src="images\guest\offert-boxes\jezz.webp"
              alt=""
              className={s(`box-img`)}
            />
            <h3 className={s(`box-heading`)}>JEZZ</h3>
          </div>
          <div className={s(`single-dance-box`)}>
            <img
              src="images\guest\offert-boxes\shufle.webp"
              alt=""
              className={s(`box-img`)}
            />
            <h3 className={s(`box-heading`)}>SHUFFLE DANCE</h3>
          </div>
          <div className={s(`single-dance-box`)}>
            <img
              src="images\guest\offert-boxes\singlaki.webp"
              alt=""
              className={s(`box-img`)}
            />
            <h3 className={s(`box-heading`)}>TANIEC TOWARZYSKI</h3>
          </div>
          <div className={s(`single-dance-box`)}>
            <img
              src="images\guest\offert-boxes\zumba.webp"
              alt=""
              className={s(`box-img`)}
            />
            <h3 className={s(`box-heading`)}>ZUMBA</h3>
          </div>
        </div>
        <div className={s(`links`)}>
          <Link href={SitePaths.GALLERY.absolute}>
            <button>Zobacz galerię</button>
          </Link>
          <Link href={SitePaths.LESSON_PLAN.absolute}>
            <button>Grafik zajęć</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
