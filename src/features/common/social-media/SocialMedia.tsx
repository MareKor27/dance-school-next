import style from "./socialMedia.module.scss";
import useStyles from "../../../hooks/useStyle";
import { ExternalPaths } from "../../../constants/Paths";
import Link from "next/link";

export function SocialMedia() {
  const s = useStyles(style);
  return (
    <div className={s(`social-media`)}>
      <Link href={ExternalPaths.FACEBOOK} className={s("")} target={"_blank"}>
        <img src="/images/icons/icon-facebook.webp" alt={"Ikona Facebook"} />
      </Link>
      <Link href={ExternalPaths.INSTAGRAM} className={s("")} target={"_blank"}>
        <img src="/images/icons/icon-ig.webp" alt={"Ikona Instagram"} />
      </Link>
    </div>
  );
}
