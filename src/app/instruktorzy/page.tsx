import { Breadcrumbs } from "@/features/common/breadcrumbs/Breadcrumbs";
import { SubPageContent } from "@/features/common/sub-page-content/SubPageContent";
import style from "./instructors.module.scss";
import useStyles from "../../hooks/useStyle";

export default function Instruktors() {
  const s = useStyles(style);
  return (
    <div>
      <Breadcrumbs namePage={"Instruktorzy"} />
      <SubPageContent className={"body-arranged-md"}>
        <h1>Kadra MAXDance</h1>
        <div className={s(`instruktor-section`)}>
          <div className={s(`instructor-box`)}>
            <div className={s(`instructor-photo`)}>
              <img
                src="images\guest\instructors\magdalena-balcerzak.jpg"
                alt=""
                className={s(`instructor-img`)}
              />
            </div>
            <div className={s(`instructor-name`)}>Magdalena Balcerzak</div>
            <div className={s(`instructor-description`)}>
              Tancerka, choreograf i dyplomowany instruktor. Członek Polskiego
              Towarzystwa Tanecznego. Uczestniczyła w wielu turniejach tańca w
              Polsce i zagranicą. Techniki Salsy zdobywała min. u Ritmodelia i
              Jorge Camaguey. Zdobywała liczne Mistrzowskie osiągnięcia w
              turniejach tańca nowoczesnego. Specjalizuje się w tańcu
              towarzyskim, Salsie i tańcach arabskich. Posiada dyplom Szkoły
              Tańca Arabskiego i Polskiej Federacji Tańca na poziomach I i II.
              Wiedzę jej przekazywali znani instruktorzy Jamilah, Monique Neith,
              Elwira Janitziki, Diana Yousseif, Aisha Asia Andrzejewska, Łada
              Tiulik, Jasmin Wachowiak. Pod jej okiem uczestniczki poddają się
              urokowi arabskiego Tańca Brzucha. Prowadzi także zajęcia latino
              solo. Uczenie innych sprawia jej wielka przyjemność i daje dużą
              satysfakcję. Specjalizuje się również w przygotowywaniu pierwszego
              tańca i kursach tańca dla narzeczonych.{" "}
            </div>
          </div>
          <div className={s(`instructor-box`)}>
            <div className={s(`instructor-photo`)}>
              <img
                src="\images\guest\instructors\anna-drelichowska.jpg"
                alt=""
                className={s(`instructor-img`)}
              />
            </div>
            <div className={s(`instructor-name`)}>Anna Drelichowska</div>
            <div className={s(`instructor-description`)}>
              Tancerka, choreograf oraz instruktor tańca. Koordynatorka i
              organizatorka wielu spektakli i warsztatów artystycznych. Ania
              prowadzi zajęcia: jazz, broadway jazz, burleska oraz pilates i
              stretching.
            </div>
          </div>
          <div className={s(`instructor-box`)}>
            <div className={s(`instructor-photo`)}>
              <img
                src="\images\guest\instructors\mariusz-kobylinski.jpg"
                alt=""
                className={s(`instructor-img`)}
              />
            </div>
            <div className={s(`instructor-name`)}>Mariusz Kobyliński</div>
            <div className={s(`instructor-description`)}>
              Tancerz PTT, choreograf i dyplomowany instruktor tańca
              towarzyskiego. Uczestniczył w wielu turniejach tańca towarzyskiego
              w stylach Standard i Latin w kraju i zagranicą. Posiada klasę
              taneczną „A”. Absolwent Wyższej Szkoły Wychowania Fizycznego i
              Turystyki w Bialymstoku. Posiada doświadczenie w pracy z dziećmi,
              młodzieżą oraz pracy z parami tanecznymi. Nauka tańca sprawia mu
              wiele radości i satysfakcji, na co dzień tryska optymizmem i
              zaraża dobrym humorem. Prowadzi kursy dla dorołych: latino solo,
              kurs tańca towarzyskiego dla singli i w parach, discofox. Mariusz
              prowadzi również kurs nauki pierwszego tańca.
            </div>
          </div>
          <div className={s(`instructor-box`)}>
            <div className={s(`instructor-photo`)}>
              <img
                src="\images\guest\instructors\marta-jemielity.jpg"
                alt=""
                className={s(`instructor-img`)}
              />
            </div>
            <div className={s(`instructor-name`)}>Marta Jemielity</div>
            <div className={s(`instructor-description`)}>
              Warsztat taneczny zaczęła profesionalnie w 2009 roku w Ełckim
              Teatrze Tańca, grając w takich spektaklach jak "Podróż
              Sentymentalna", "Orfeusz" czy "Opowieść Wigilijna" - tam poznała
              podstawy baletu, jazzu i broadway jazzu. Była kapitan licealnej
              drużyny cheerleaderek, w Białymstoku najpierw tańczyła salsę, a
              potem znalazła Max Dance, gdzie kontynuowała naukę Jazzu i
              Broadway Jazzu pod okiem Anny Drelichowskiej. Uważa, że
              najważniejsze w tańcu jest poznanie i zrozumienie własnego ciała
              oraz pasja - reszta przychodzi z czasem. Ada prowadzi zajęcia:
              jazz, ladies choreo, high heels, shuffle dance.
            </div>
          </div>
          <div className={s(`instructor-box`)}>
            <div className={s(`instructor-photo`)}>
              <img
                src="\images\guest\instructors\alona-garbar.jpg"
                alt=""
                className={s(`instructor-img`)}
              />
            </div>
            <div className={s(`instructor-name`)}>Alona Garbar</div>
            <div className={s(`instructor-description`)}>
              Warsztat taneczny zaczęła profesionalnie w 2009 roku w Ełckim
              Teatrze Tańca, grając w takich spektaklach jak "Podróż
              Sentymentalna", "Orfeusz" czy "Opowieść Wigilijna" - tam poznała
              podstawy baletu, jazzu i broadway jazzu. Była kapitan licealnej
              drużyny cheerleaderek, w Białymstoku najpierw tańczyła salsę, a
              potem znalazła Max Dance, gdzie kontynuowała naukę Jazzu i
              Broadway Jazzu pod okiem Anny Drelichowskiej. Uważa, że
              najważniejsze w tańcu jest poznanie i zrozumienie własnego ciała
              oraz pasja - reszta przychodzi z czasem. Ada prowadzi zajęcia:
              jazz, ladies choreo, high heels, shuffle dance.
            </div>
          </div>
          <div className={s(`instructor-box`)}>
            <div className={s(`instructor-photo`)}>
              <img
                src="\images\guest\instructors\adrianna-zańko.jpg"
                alt=""
                className={s(`instructor-img`)}
              />
            </div>
            <div className={s(`instructor-name`)}>Adrianna Zańko</div>
            <div className={s(`instructor-description`)}>
              Adrianna Zańko - najpierw nauczyła się tańczyć, potem dopiero
              chodzić. Warsztat taneczny zaczęła profesionalnie w 2009 roku w
              Ełckim Teatrze Tańca, grając w takich spektaklach jak "Podróż
              Sentymentalna", "Orfeusz" czy "Opowieść Wigilijna" - tam poznała
              podstawy baletu, jazzu i broadway jazzu. Była kapitan licealnej
              drużyny cheerleaderek, w Białymstoku najpierw tańczyła salsę, a
              potem znalazła Max Dance, gdzie kontynuowała naukę Jazzu i
              Broadway Jazzu pod okiem Anny Drelichowskiej. Uważa, że
              najważniejsze w tańcu jest poznanie i zrozumienie własnego ciała
              oraz pasja - reszta przychodzi z czasem. Ada prowadzi zajęcia:
              jazz, ladies choreo, high heels, shuffle dance.
            </div>
          </div>
        </div>
      </SubPageContent>
    </div>
  );
}
