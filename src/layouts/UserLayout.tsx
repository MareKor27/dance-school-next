import { Footer } from "@/features/common/footer/Footer";
import { GoToTop } from "@/features/common/go-to-top/GoToTop";
import { Navbar } from "@/features/common/header/Navbar";
import ScrollToTop from "@/features/common/scroll-to-top/ScrollToTop";
import { SocialMedia } from "@/features/common/social-media/SocialMedia";
import { ReactNode } from "react";
import useStyles from "../hooks/useStyle";
import style from "./userLayout.module.scss";

type UserLayoutType = {
  children: ReactNode;
};

export default function UserLayout({ children }: UserLayoutType) {
  const s = useStyles(style);
  return (
    <div className={s(`site-content`)}>
      <ScrollToTop />
      <SocialMedia />
      <Navbar />
      <main className={s(`main-content`)}>{children}</main>
      <Footer />
      <GoToTop />
    </div>
  );
}
