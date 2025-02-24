"use client";
import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import useScroll from "../../../hooks/useScroll";

const ScrollToTop = () => {
  const { scrollToTop } = useScroll();
  const pathname = usePathname();

  useLayoutEffect(scrollToTop, [pathname]);

  return null;
};

export default ScrollToTop;
