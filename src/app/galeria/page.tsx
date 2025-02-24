"use client";
import { ExternalPaths } from "@/constants/Paths";
import { Breadcrumbs } from "@/features/common/breadcrumbs/Breadcrumbs";
import { SubPageContent } from "@/features/common/sub-page-content/SubPageContent";
import Link from "next/link";
import style from "../../features/common/sub-page-content/subPageContent.module.scss";
import useStyles from "../../hooks/useStyle";
import { ImageGallery } from "@/features/common/gallery/ImageGallery";

export default function Galery() {
  const s = useStyles(style);
  return (
    <>
      <Breadcrumbs namePage={"Galeria"} />
      <SubPageContent className="body-stretched">
        <h1 className="text-center">Galeria z Studia Tańca MAXDance</h1>
        <div className={s(`masonry-galery`)}>
          <img src="images\gallery\g-1.jpg" alt="" />
          <img src="images\gallery\g-2.jpg" alt="" />
          <img src="images\gallery\g-3.jpg" alt="" />
          <img src="images\gallery\g-10.jpg" alt="" />
          <img src="images\gallery\g-4.jpg" alt="" />
          <img src="images\gallery\g-5.jpg" alt="" />
          <img src="images\gallery\g-6.jpg" alt="" />
          <img src="images\gallery\g-11.jpg" alt="" />
          <img src="images\gallery\g-7.jpg" alt="" />
          <img src="images\gallery\g-8.jpg" alt="" />
          <img src="images\gallery\g-9.jpg" alt="" />
          <img src="images\gallery\g-12.jpg" alt="" />
        </div>
      </SubPageContent>
      <SubPageContent className="body-arranged-md">
        <ImageGallery
          galleryName={"galleryOne"}
          className={"masonry-galery"}
          imgHeight="auto"
          imgWidth="auto"
        />
        <h2 className={s(`h2__pading-top`)}>
          Więcej naszych zdjęć znajdziesz na:
        </h2>
        <div className={s(`links`)}>
          <Link href={ExternalPaths.FACEBOOK} target={"_blank"}>
            <button>Facebooku</button>
          </Link>
          <Link href={ExternalPaths.INSTAGRAM} target={"_blank"}>
            <button>Instagramie</button>
          </Link>
        </div>
      </SubPageContent>
    </>
  );
}
