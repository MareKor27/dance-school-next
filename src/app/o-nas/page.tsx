import { SitePaths } from "@/constants/Paths";
import { Breadcrumbs } from "@/features/common/breadcrumbs/Breadcrumbs";
import { SubPageContent } from "@/features/common/sub-page-content/SubPageContent";
import Link from "next/link";
import style from "../../features/common/sub-page-content/subPageContent.module.scss";
import useStyles from "../../hooks/useStyle";

export default function AboutUs() {
  const s = useStyles(style);
  return (
    <>
      <Breadcrumbs namePage={"O nas"} />
      <SubPageContent className="body-arranged-md">
        <h1> Studio Tańca Max Dance w Białymstoku</h1>
        <p>
          Studio Tańca Max Dance to miejsce, które od <b>2005</b> roku przyciąga
          miłośników tańca w każdym wieku i na każdym poziomie zaawansowania. To
          tutaj spotykają się osoby, które dopiero rozpoczynają swoją przygodę z
          tańcem, oraz ci, dla których taniec jest pasją i sposobem na życie.
        </p>
        <h2>Profesjonalna Kadra i Przyjazna Atmosfera</h2>
        <p>
          W naszym studiu czekają na Ciebie wszechstronnie utalentowani tancerze
          oraz dyplomowani instruktorzy. Dzięki ich doświadczeniu i
          zaangażowaniu odkryjesz uroki tańca w łatwy, miły i przyjemny sposób.
          Wierzymy, że taniec to nie tylko ruch, ale także sztuka, która
          przynosi radość i pozwala wyrazić siebie.
        </p>
        <h2>Bogata Oferta Zajęć na Sezon 2024/2025</h2>
        <p>
          Oferujemy szeroki wybór zajęć, które pozwalają każdemu znaleźć coś dla
          siebie. Od dostojnych walców po energetyczne rytmy latino – nasze
          kursy to prawdziwa podróż przez kulturę taneczną całego świata.
        </p>
        <h3>W ofercie znajdziesz:</h3>
        <ul className={s(`ul-padding-left`)}>
          <li className={s(`custom-li-icon`)}>
            Kursy tańca towarzyskiego (dla par i singli),
          </li>
          <li className={s(`custom-li-icon`)}>
            Taniec użytkowy i discofox 2 na 1,
          </li>
          <li className={s(`custom-li-icon`)}>
            Taniec brzucha, sexy dance i high heels,
          </li>
          <li className={s(`custom-li-icon`)}>
            Jazz, broadway jazz, burleskę, ladies choreo,
          </li>
          <li className={s(`custom-li-icon`)}>Latino solo i latin fusion,</li>
          <li className={s(`custom-li-icon`)}>
            Shuffle dance, zumbę i salsation,
          </li>
          <li className={s(`custom-li-icon`)}>Stretching i pilates.</li>
        </ul>
        <p>
          {" "}
          Każdy znajdzie u nas zajęcia dostosowane do swoich potrzeb – od
          klasycznych walców po gorące klimaty latino czy energetyczne zumba®!
        </p>
        <h2>Nowoczesne Studio w Centrum Miasta</h2>
        <p>
          Studio Tańca Max Dance znajduje się w samym centrum Białegostoku, co
          zapewnia dogodny dojazd zarówno samochodem, jak i komunikacją miejską.
          Dysponujemy dwoma klimatyzowanymi salami tanecznymi, wyposażonymi w
          profesjonalne nagłośnienie i oświetlenie, które tworzą idealne warunki
          do nauki i zabawy.
        </p>
        <h2>Nieustanny Rozwój i Nowe Możliwości</h2>
        <p>
          Dbamy o ciągłe podnoszenie naszych kwalifikacji, biorąc udział w
          licznych szkoleniach i warsztatach tanecznych. Dzięki temu wprowadzamy
          w Białymstoku nowe formy tańca, dając naszym kursantom możliwość
          poznawania różnych stylów i tradycji tanecznych z całego świata.
        </p>
        <h2>Dołącz do Nas!</h2>
        <p>
          Zapraszamy wszystkich, którzy chcą rozpocząć swoją przygodę z tańcem
          lub rozwijać swoje umiejętności w przyjaznej atmosferze. Studio Tańca
          Max Dance to nie tylko miejsce nauki, ale także społeczność ludzi z
          pasją.
        </p>
        <h3 className="text-center">
          <Link href={SitePaths.CONTACT.absolute}>
            Zadzwoń lub odwiedź nas!
          </Link>
        </h3>
      </SubPageContent>
    </>
  );
}
