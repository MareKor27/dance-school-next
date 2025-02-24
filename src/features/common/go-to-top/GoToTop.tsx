"use client";

import style from "./goToTop.module.scss";

export function GoToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={style["gototop"]} onClick={scrollToTop}>
        <svg width="100px" height="300px" transform="scale(1)">
          <image
            xlinkHref="/images/icons/arrow.svg"
            width="50px"
            height="50px"
          />
        </svg>
      </div>
    </>
  );
}
