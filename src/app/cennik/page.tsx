import { Breadcrumbs } from "@/features/common/breadcrumbs/Breadcrumbs";
import { SubPageContent } from "@/features/common/sub-page-content/SubPageContent";
import useStyles from "../../hooks/useStyle";
import style from "../../features/common/sub-page-content/subPageContent.module.scss";

export default function PriceList() {
  const s = useStyles(style);
  return (
    <div>
      <Breadcrumbs namePage={"Cennik"} />
      <SubPageContent className={"body-arranged-md"}>
        <h1>Cennik</h1>
        <p>
          <b>
            Każdy uczestnik wykupując karnet oświadcza, że zapoznał sie z
            regulaminem studia tańca MAX DANCE..
          </b>
        </p>
        <p>
          <b>
            Opłaty za zajęcia taneczne należy dokonać przed pierwszymi zajęciami
            w danym miesiącu !!
          </b>
        </p>
        <h2>Cennik obowiązuje od 01.01.2024</h2>
        <h3 className={s(`important-information`)}>
          Uwaga !! W chwili obecnej w studiu jest możliwość płatności tylko
          gotówką !!{" "}
        </h3>
        <h3>CENNIK</h3>
        <p>DOROŚLI (karnet miesięczny )</p>
        <ul>
          <li>1 x tygodniu – 100 zł (4h)</li>
          <li>2 x tygodniu – 150 zł (8h)</li>
          <li>3 x tygodniu – 200 zł (12h)</li>
          <li>Karnet bez limitu - 230 zł</li>
          <li>Jednorazowe wejście – 30 zł (1h) lub 45 zł (1,5h)</li>
        </ul>
        <p>
          * Jeśli zajęcia odbywają się raz w tygodniu i trwają 2h (np dancehall
          lub pilates+stretching) traktowane są jako 2 razy w tygodniu i opłata
          za karnet miesięczny wynosi 150 zł (8h). Jeśli zajęcia odbywają się
          raz w tygodniu i trwają 1,5h (np jazz lub ladies choreo) opłata za
          karnet miesięczny wynosi 150 zł (4x1,5h=6h).
        </p>
        <h3>ZNIŻKA STUDENCKA 10%</h3>
        <ul>
          <li>
            * Zniżka studencka 10% - jest uwzględniana tylko przy wykupieniu
            pełnego karnetu miesięcznego z częstotliwościa 1,2 lub 3 razy w
            tygodniu.
          </li>
          <li>
            * Zniżka studencka 10% nie obejmuje jednorazowych wejść, karntów
            open, karnetów bez limitu oraz niepełnych karnetów (np wykupionych w
            połowie miesiąca).
          </li>
        </ul>
        <p>
          Karnety wystawiane są na dany miesiąc. Ilość wykupionych wejść należy
          wykorzystać podczas jego trwania. Niewykorzystane godziny nie
          przechodzą na kolejny miesiąc. Nieobecności można odrobić w danym
          miesiącu na dowolnych innych zajęciach.
        </p>
        <h3>LEKCJE INDYWIDUALNE</h3>
        <ul>
          <li>150 zł - 1 godz. (solo - 45 minut; para - 60 minut)</li>
          <li>600 zł - pakiet 5 godz. (płatne z góry)</li>
        </ul>
        <p>
          Termin ważności pakietu lekcji indywidualnych to 3 miesiące. Jest to
          okres w którym należy zrealizować wszystkie 5 godzin. Wszystkie
          godziny należy również zrealizowac u jednego instruktora.{" "}
        </p>
        <h3>WIECZORY PANIEŃSKIE (60 minut) :</h3>
        <ul>
          <li>200 zł - do 9 osób</li>
          <li>250 zł - 9 osób i więcej</li>
        </ul>
        <p>
          Potwierdzeniem rezerwacji jest uiszczenie opłaty minimum na 2 tygodnie
          przed terminem wieczoru panieńskiego.
        </p>
        <h3 className={s(`important-information`)}>
          Promocja dla nowych klientów - karnet OPEN
        </h3>
        <p>
          Kupując karnet OPEN za 159 zł możesz brać udział przez cały miesiąc w
          zajęciach regularnych w naszym studio.
        </p>

        <b>Szczegóły oferty:</b>

        <ol>
          <li>
            W danym miesiącu można wybrać maksymalnie 3 zajęcia tygodniowo.
          </li>
          <li>
            Karnet może wykupić nowy klient czyli osoba która nie barała
            wcześniej udział w naszych zajęciach.
          </li>
          <li>Karnet open można wykupić tylko 1 raz.</li>
          <li>
            Karnet open można wykupić także dla swoich znajomych, którzy jeszcze
            nie uczestniczyli w zajęciach tanecznych MAX DANCE np jako preznet.
          </li>
          <li>
            KARNET OPEN WAŻNY JEST DO KOŃCA KAŻDEGO MIESIĄCA np. wykupując
            karnet 15-go marca jest on ważny do 31 marca (nie 15-go kwietnia)
          </li>
        </ol>

        <h4>Honorujemy karty:</h4>
        <ul>
          <li>MULTISPORT PLUS,</li>
          <li>MULTISPORT STUDENT,</li>
          <li>MULTISPORT CLASSIC,</li>
          <li>MULTISPORT LIGHT,</li>
          <li>MULTIACTIVE</li>
          <li>FITPROFIT,</li>
          <li>FITSPORT, </li>
          <li>FITLEX,</li>
          <li>MEDICOVER SPORT,</li>
          <li>PZU SPORT. </li>
        </ul>
        <h4>Istnieje możliwość dokonania przelewu w tytule wpisując:</h4>
        <p>
          nazwisko, rodzaj kursu, termin kursu np.: Anna Kowalska, latino solo,
          wtorek 20.30
        </p>
        <p>
          <b>Numer konta: </b>
          76 1050 1823 1000 0092 0468 7421
          <br />
          ING Bank Śląski
          <br />
          STUDIO TAŃCA MAX DANCE
          <br />
          Aleja Piłsudskiego 8/1 <br />
          15-445 Białystok
          <br />
          <b>Potwierdzenie wpłaty prosimy przynieść na pierwsze zajęcia.</b>
        </p>
      </SubPageContent>
    </div>
  );
}
