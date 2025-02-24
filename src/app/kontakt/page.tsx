import { Breadcrumbs } from "@/features/common/breadcrumbs/Breadcrumbs";
import { SubPageContent } from "@/features/common/sub-page-content/SubPageContent";
import Link from "next/link";
import style from "../../features/common/sub-page-content/subPageContent.module.scss";
import useStyles from "../../hooks/useStyle";

export default function Contact() {
  const s = useStyles(style);
  return (
    <>
      <Breadcrumbs namePage={"Kontakt"} />
      <SubPageContent className="body-arranged-md">
        <h1>Kontakt ze studiem MAX Dance</h1>
        <div className={s(`contact-grid`)}>
          <div className={s(`adress`)}>
            <div>
              <b>STUDIO TAŃCA MAX DANCE</b>
              <p>
                Aleja Piłsudskiego 8/1 (pierwsze piętro)
                <br />
                15-445 Białystok
              </p>

              <Link href="tel:+48500204400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  viewBox="0 -960 960 960"
                  width="25px"
                  fill="var(--primary-color-1)"
                >
                  <path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                </svg>
                500 204 400
              </Link>
              <br />
              <Link href="mailto:biuro@maxdance.pl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="var(--primary-color-1)"
                >
                  <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
                </svg>
                biuro@maxdance.pl
              </Link>
            </div>
            <p>
              <b>Numer konta: </b> 76 1050 1823 1000 0092 0468 7421 w tytule
              wpisując:
              <br />
              nazwisko, rodzaj kursu, termin kursu np.: <br />
              Anna Kowalska, burleska, wtorek 19.30
            </p>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2846.462605812094!2d23.15122193222752!3d53.13568103939143!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffc3ea02ec545%3A0xd838a2d2e993c01!2sStudio%20Ta%C5%84ca%20MAX%20DANCE!5e0!3m2!1spl!2spl!4v1740402371126!5m2!1spl!2spl"
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </SubPageContent>
    </>
  );
}
