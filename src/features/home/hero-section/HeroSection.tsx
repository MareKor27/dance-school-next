import style from "./heroSection.module.scss";
import useStyles from "../../../hooks/useStyle";
import { SitePaths } from "../../../constants/Paths";
import Link from "next/link";

export function HeroSection() {
  const s = useStyles(style);
  return (
    <div className={s(`hero-section`)}>
      <div className="body-arranged-md">
        <div className={s(`main-box`)}>
          <div>
            <img
              className={s(`hero-image`)}
              src="\images\guest\main-box-image.webp"
              alt=""
            />
          </div>
          <div className={s(`hero-content`)}>
            <h1 className={s(`hero-box-title`)}>Studio Tańca MAX Dance</h1>

            <div className={s(`hero-box-text`)}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                sapiente culpa reiciendis, consequuntur molestiae quaerat quas
                temporibus maxime iure nam enim atque, veritatis ipsa debitis
                cupiditate perferendis commodi consequatur dolorem.{" "}
              </p>
              <p>
                At earum impedit nesciunt dolores accusamus, a expedita ad vero
                iure possimus aut eum hic iusto voluptatem ipsam molestias
                veritatis blanditiis adipisci eveniet quos officia minus quidem.{" "}
              </p>
              <p>
                Quam, eligendi placeat! Consectetur sunt suscipit, facilis
                perferendis, reiciendis obcaecati officiis earum aperiam nulla
                quam maxime dolor nihil. Cum recusandae illum magnam, illo
                consectetur ab expedita porro harum et iste, dolorem excepturi
                voluptatum!
              </p>
            </div>
            <div className={s(`hero-box-link`)}>
              <Link href={SitePaths.ABOUT_US.absolute}>
                <button> O nas</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
