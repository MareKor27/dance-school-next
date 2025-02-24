import { SubPageContent } from "@/features/common/sub-page-content/SubPageContent";
import useStyles from "../../hooks/useStyle";
import style from "../../features/common/sub-page-content/subPageContent.module.scss";
import { Breadcrumbs } from "@/features/common/breadcrumbs/Breadcrumbs";

export default function Regulamin() {
  const s = useStyles(style);
  return (
    <>
      <Breadcrumbs namePage={"Regulamin"} />
      <SubPageContent className={"body-arranged-md"}>
        <h1>REGULAMIN STUDIA TAŃCA MAX DANCE</h1>
        <h2>§1 DEFINICJE</h2>
        <ol>
          <li>
            Placówka – należy przez to rozumieć Studio tańca Max Dance
            mieszczące się w Białymstoku przy Alei Piłsudskiego 8/1
          </li>
          <li>
            Uczestnik – osoba, która została zapisana przez placówkę na zajęcia
            lub posiada Pakiet zajęć indywidualnych.
          </li>
          <li>
            Klient – osoba pełnoletnia która uiściła opłatę w wymaganej
            wysokości, zarezerwowała miejsce w danej Grupie lub
            rodzice/opiekunowie prawni w przypadku uczestników nieletnich.
          </li>
          <li>Instruktor – osoba prowadząca zajęcia dydaktyczne w placówce.</li>
          <li>
            Grupa – wyodrębnione według stylu tańca i poziomu zaawansowania
            grono osób, w ramach którego prowadzone są zajęcia grupowe zgodnie z
            ustalonym harmonogramem.
          </li>
          <li>
            Karnet – imiennie przypisany identyfikator wydawany przez placówkę
            nowemu Uczestnikowi po uiszczeniu opłaty.
          </li>
          <li>
            Pakiet – określona liczba lekcji indywidualnych o ograniczonym
            terminie realizacji.
          </li>
          <li>
            Karnet BEZ LIMITU – usługa uprawniająca imiennie wskazaną osobę do
            udziału w dowolnej ilości zajęć grupowych z oferty zajęć regularnych
            prowadzonych przez placówkę z wyłączeniem: lekcji indywidualnych i
            warsztatów.
          </li>
          <li>
            Cennik – aktualne ceny za zajęcia w placówce, dostępny na stronie
            www.maxdance.com oraz w siedzibie placówki.
          </li>
          <li>
            Zajęcia regularne – ogólnie dostępne zajęcia prowadzone w Grupach
            zgodnie z aktualną ofertą dostępną w placówce, z wyłączeniem: lekcji
            indywidualnych, warsztatów i kursów.
          </li>
          <li>
            Nauczanie zdalne – nauczanie za pośrednictwem platformy
            internetowej.
          </li>
        </ol>
        <h2>§2 ZAJĘCIA W GRUPACH</h2>
        <ol>
          <li>Liczba osób w Grupie jest ograniczona.</li>
          <li>
            O kolejności zakwalifikowania Uczestnika do Grupy decyduje data
            zapisu lub wykupienia karnetu.
          </li>
          <li>
            Zapisy na zajęcia do poszczególnych Grup są prowadzone:
            <ul>
              <li className={s(`lower-alpha`)}>w placówce,</li>
              <li className={s(`lower-alpha`)}>telefonicznie,</li>
              <li className={s(`lower-alpha`)}>na stronie www.maxdance.com</li>
              <li className={s(`lower-alpha`)}>drogą e-mailową.</li>
            </ul>
          </li>
          <li>
            Jeżeli Grupa nie zostanie utworzona lub wpłata należności nastąpi po
            zakończeniu zapisów ze względu na wyczerpanie limitu miejsc, Klient
            może według swojego wyboru:
            <ul>
              <li className={s(`lower-alpha`)}>
                zapisać Uczestnika do innej Grupy,
              </li>
              <li className={s(`lower-alpha`)}>
                zgłosić żądanie zwrotu pieniędzy w niewykorzystanym zakresie.
              </li>
            </ul>
          </li>
          <li>
            W przypadku niskiej frekwencji Uczestników danej Grupy, studio tańca
            Max Dance zastrzega sobie prawo do:
            <ul>
              <li className={s(`lower-alpha`)}>rozwiązania Grupy,</li>
              <li className={s(`lower-alpha`)}>zmiany Instruktora,</li>
              <li className={s(`lower-alpha`)}>
                zmiany harmonogramu zajęć Grupy.
              </li>
            </ul>
          </li>
          <li>
            W szczególnych przypadkach studio tańca Max Dance zastrzega sobie
            prawo weryfikacji zgody rodziców opiekunów prawnych na udział
            małoletnich Uczestników w zajęciach.
          </li>
        </ol>
        <h2>§3 ORGANIZACJA ZAJĘĆ</h2>
        <ol>
          <li>Zajęcia odbywają się w siedzibie placówki.</li>
          <li>
            W przypadku zdarzeń losowych, placówka zastrzega prawo do
            incydentalnej:
            <ul>
              <li className={s(`lower-alpha`)}>
                zmiany terminu zajęć w Grupie,
              </li>
              <li className={s(`lower-alpha`)}>zmiany Instruktora,</li>
              <li className={s(`lower-alpha`)}>odwołania zajęć.</li>
            </ul>
          </li>
          <li>
            W przypadku choroby lub innej uzasadnionej niedyspozycji
            Instruktora, placówka zapewnia odpowiednie zastępstwo mając na
            uwadze odpowiednio formę nauczania i stopień zaawansowania danej
            Grupy.
          </li>
          <li>
            W wyjątkowych sytuacjach, niezależnych od studia tańca Max Dance,
            placówka zastrzega sobie prawo zmiany formy nauczania – na Nauczanie
            zdalne przy pomocy platformy internetowej. Organizacja takich zajęć
            będzie wynikała z tygodniowego harmonogramu zajęć zaproponowanego
            przez InstruktorO wysokości odpłatności za tego typu zajęcia Klient
            zostanie poinformowany niezwłocznie, nie później niż 5 dni przez ich
            rozpoczęciem.
          </li>
          <li>
            Zajęcia w Grupach regularnych odbywają się zgodnie z grafikiem zajęć
            regularnych publikowanym na stronie www.maxdance.com.
          </li>
        </ol>
        <h2>§4 UCZESTNICTWO W ZAJĘCIACH</h2>
        <ol>
          <li>
            Klient ma obowiązek zapoznać się z niniejszym Regulaminem,
            Instrukcją Bezpieczeństwa, a także innymi wymaganymi dokumentami
            oraz przestrzegać ich zapisów.
          </li>
          <li>
            Zajęcia odbywają się w terminach określonych w harmonogramie Grupy
            dostępnym na stronie www.maxdance.com oraz w placówce.
          </li>
          <li>
            W zajęciach danej Grupy biorą udział wyłącznie Uczestnicy, którzy
            zostali do niej zapisani, z zastrzeżeniem wyjątków przewidzianych w
            niniejszym Regulaminie.
          </li>
          <li>
            Uczestnik w ramach przysługującej mu liczby zajęć może brać udział w
            zajęciach innej Grupy w miesiącu na który jest wykupiony karnet oraz
            po wcześniejszej rezerwacji miejsca.
          </li>
          <li>
            W trakcie zajęć Grupy na sali nie mogą przebywać osoby trzecie
            niebędące Uczestnikami danej Grupy, chyba że Instruktor wyrazi na to
            zgodę. Placówka może organizować zajęcia otwarte, w których mogą
            brać udział osoby zaproszone przez Uczestnika.
          </li>
          <li>
            W przypadku zgłoszonej nieobecności na zajęciach Grupy, do której
            Uczestnik został zapisany, Uczestnik może przeznaczyć
            niewykorzystane zajęcia na zajęcia w innej Grupie w miesiącu na
            który został wykupiony karnet.
          </li>
          <li>
            Przed rozpoczęciem zajęć Uczestnik zobowiązany jest okazać imienny
            karnet.
          </li>
          <li>
            Po zakończonych zajęciach Uczestnik zobowiązany jest zabrać
            wszystkie swoje rzeczy z siedziby studia.
          </li>
          <li>
            Każdy Uczestnik zobowiązany jest do:
            <ul>
              <li className={s(`lower-alpha`)}>
                uczestniczenia w zajęciach w odpowiednim obuwiu, które nie
                niszczy i nie brudzi podłogi,
              </li>
              <li className={s(`lower-alpha`)}>
                punktualnego stawiania się na zajęcia Grupy, pod rygorem odmowy
                dopuszczenia do zajęć,
              </li>
              <li className={s(`lower-alpha`)}>
                uczestniczenia w zajęciach w sposób, który nie zakłóca ich
                przebiegu,
              </li>
              <li className={s(`lower-alpha`)}>
                podporządkowania się poleceniom instruktora.
              </li>
            </ul>
          </li>
          <li>
            W przypadku nieprzestrzegania przez Uczestnika obowiązków wskazanych
            w ust. 9 Instruktor ma prawo wyłączenia Uczestnika z czynnego
            udziału w zajęciach.{" "}
          </li>
          <li>
            Wyłącznie z zajęć nie stanowi podstawy do zwrotu opłaty za zajęcia.
            Wyłączeni z zajęć Uczestnicy mają obowiązek przebywać na sali pod
            opieką Instruktora do momentu zakończenia zajęć Grupy.
          </li>
          <li>
            W przypadku powtarzających się incydentów nie wywiązywania się
            Uczestnika obowiązków wskazanych w ust. 9 Instruktor prowadzący
            zajęcia ma prawo złożyć wniosek do właściciela studia tańca Max
            Dance o wykreślenie danego Uczestnika z listy Grupy.
          </li>
        </ol>
        <h2>§5 LEKCJE INDYWIDUALNE</h2>
        <ol>
          <li>Lekcje indywidualne mogą być realizowane w pakiecie.</li>
          <li>
            W lekcjach indywidualnych realizowanych w ramach Pakietu mogą brać
            udział wyłącznie osoby imiennie wskazane w momencie jego nabycia.
          </li>
          <li>
            Wykupując lekcję indywidualną lub Pakiet Uczestnik może wskazać
            konkretnego Instruktora spośród aktualnie dostępnych.
          </li>
          <li>
            Termin lekcji indywidualnych można rezerwować osobiście w placówce
            lub telefonicznie pod jej numerem telefonu.
          </li>
          <li>
            Przy ustalaniu terminu lekcji indywidualnych brana jest pod uwagę
            dyspozycyjność wybranego Instruktora oraz dostępność sal.
          </li>
          <li>
            Odwołanie lekcji indywidualnej jest możliwe nie później niż na jeden
            dzień przed planowaną lekcją. Zgłoszenia należy dokonywać
            telefonicznie lub osobiście w placówcW przypadku braku zgłoszenia w
            terminie, zaplanowana lekcja uważana jest za zrealizowaną.
          </li>
          <li>
            Placówka nie prowadzi rezerwacji sal na lekcje indywidualne z
            wyprzedzeniem dłuższym niż pół roku.
          </li>
          <li>
            Jeżeli z przyczyn losowych zaistniałych po stronie placówki
            zarezerwowana lekcja nie może się odbyć, placówka zobowiązuje się
            niezwłocznie powiadomić Uczestnika o tym fakciW przypadku odwołania
            lekcji z przyczyn wskazanych w zdaniu poprzedzającym, lekcja może
            zostać odrobiona w innym terminie.
          </li>
          <li>
            Lekcja indywidualna rozpoczyna się i kończy o ustalonych godzinach
            bez względu na obecność Uczestnika.
          </li>
          <li>
            Pakiet nie może zostać zrealizowany po upływie jego okresu ważności.
          </li>
          <li>
            W szczególnych przypadkach za zgodą Klientów, kilkoro Uczestników
            może brać udział jednocześnie w lekcji prowadzonej przez jednego
            Instruktora.
          </li>
          <li>
            Lekcje indywidualne mogą uwzględniać wybrany przez Uczestnika
            podkład muzyczny, który powinien być dostarczony w formacie
            uzgodnionym z Instruktorem.
          </li>
        </ol>
        <h2>§6 KARNET BEZ LIMITU</h2>
        <ol>
          <li>Karnet BEZ LIMITU można wykupić na dany miesiąc kalendarzowy.</li>
          <li>
            Karnet BEZ LIMITU uprawnia do nielimitowanego udziału w zajęciach
            regularnych w dowolnie wybranej Grupie, która dysponuje wolnymi
            miejscami. Karnet BEZ LIMITU nie daje gwarancji udziału w wybranych
            zajęciach.
          </li>
          <li>
            Karnet BEZ LIMITU jest bezzwrotny niezależnie od stopnia jego
            wykorzystania.
          </li>
        </ol>
        <h2>§7 BEZPIECZEŃSTWO</h2>
        <ol>
          <li>
            Placówka nie ubezpiecza Uczestników od następstw nieszczęśliwych
            wypadków, ani też nie ponosi odpowiedzialności za zaistniałe
            nieszczęśliwe wypadki w najszerszym zakresie dopuszczalnym przez
            powszechnie obowiązujące przepisy prawOsoby, które chcą być
            ubezpieczone na wypadek zdarzenia zaistniałego podczas przebywania
            Uczestnika na terenie placówki, powinny wykupić stosowne
            ubezpieczenie we własnym zakresie.
          </li>
          <li>
            Klienci są obowiązani zgłaszać Instruktorowi przed zajęciami
            wszelkie dolegliwości zdrowotne Uczestnika, złe samopoczucie, urazy,
            kontuzje i innW przypadku problemów zdrowotnych placówka rekomenduje
            konsultacje z lekarzem.
          </li>
          <li>
            Przebywanie w salach jest niedozwolone bez Instruktora lub innego
            upoważnionego pracownika placówki.
          </li>
          <li>
            W przypadku dodatkowego wynajęcia sali, Klient ponosi
            odpowiedzialność za zdrowie i bezpieczeństwo Uczestników
            przebywających na tej sali.
          </li>
          <li>
            Uczestnicy oraz osoby trzecie przebywające na terenie placówki lub w
            miejscu prowadzenia zajęć zobowiązane są do przestrzegania przepisów
            bhp i p-poż obowiązujących na terenie placówki, jak również do
            zachowania czystości i poszanowania mieniUczestnicy zobowiązani są
            do realizacji poleceń Instruktorów prowadzących zajęcia. Uczestnicy
            i osoby trzecie przebywające na terenie placówki lub w miejscu
            prowadzenia zajęć zobowiązani są wykonywania poleceń wydawanych
            przez uprawnionych pracowników placówki.
          </li>
          <li>
            Uczestnik oczekujący na zajęcia powinien przebywać w miejscu do tego
            przeznaczonym, nie zakłócając porządku.
          </li>
          <li>
            Zabrania się wnoszenia na salę taneczną jedzenia i ciepłych napojów.
            Napoje zimne mogą być wnoszone i spożywane w miejscu i czasie
            wskazanym przez Instruktora.
          </li>
          <li>
            Na terenie placówki obowiązuje zakaz palenia tytoniu, wnoszenia,
            spożywania napojów alkoholowych i środków odurzających, wprowadzania
            zwierząt, rowerów oraz wnoszenia przedmiotów mogących stanowić
            zagrożenie dla życia i zdrowia innych osób.
          </li>
          <li>Uczestnicy są obowiązani przechowywać swoje rzeczy w szatni.</li>
          <li>
            Uczestnik ponosi odpowiedzialność za rzeczy pozostawione w szatni.
          </li>
          <li>
            Ewentualne przypadki zagubienia lub uszkodzenia mienia powinny być
            niezwłocznie zgłaszane w recepcji.
          </li>
          <li>Nie należy wnosić cennych przedmiotów na teren placówki.</li>
          <li>
            Klient ponosi odpowiedzialność za wyrządzone szkody, w tym szkody
            powstałe w wyniku niezastosowania się do poleceń Instruktora lub
            pracownika placówki
          </li>
          <li>
            Placówka nie odpowiada za rzeczy pozostawione lub zagubione na jej
            terenie.
          </li>
        </ol>
        <h2>§8 SYSTEM PŁATNOŚCI</h2>
        <ol>
          <li>
            Placówka udostępnia następujące metody płatności:
            <ul>
              <li className={s(`lower-alpha`)}>karta płatnicza,</li>
              <li className={s(`lower-alpha`)}>przelew tradycyjny,</li>
              <li className={s(`lower-alpha`)}>gotówka.</li>
            </ul>
          </li>
          <li>
            Wszelkie opłaty powinny zostać uregulowane w wysokości, terminach i
            na zasadach określonych w cenniku studia tańca Max Dance.
          </li>
          <li>
            Aktualny cennik świadczonych usług znajduje się na stronie
            www.maxdance.com
          </li>
          <li>
            Placówka zastrzega sobie możliwość zmiany cennikInformacja o
            planowanej zmianie cen za zajęcia, podawana jest niezwłocznie do
            publicznej wiadomości na stronie internetowej www.maxdance.com oraz
            w placówcNowy cennik nie dotyczy usług opłaconych i Umów zawartych
            przed jego wejściem w życiZasady regulowane w tym punkcie nie
            dotyczą sytuacji powstałej na skutek działania siły wyższej.
          </li>
          <li>
            Placówka może przygotować indywidualną ofertę w szczególności dla:
            <ul>
              <li className={s(`lower-alpha`)}>
                Grup ustalanych indywidualnie,
              </li>
              <li className={s(`lower-alpha`)}>Grup specjalnych,</li>
              <li className={s(`lower-alpha`)}>
                Grup zamkniętych, w tym dla zespołów tanecznych.
              </li>
            </ul>
          </li>
          <li>
            Na wniosek Klienta placówka wystawi fakturę. W tym celu niezbędne
            jest, aby klient okazał paragon fiskalny. Dane do wystawienia
            faktury należy przekazać pracownikowi recepcji podczas zakupu
            usługi. Faktura może być wystawiona tylko w miesiącu w którym
            została uiszczona opłata za karnet lub lekcje indywidualne.
          </li>
          <li>
            Jeżeli Klientowi przysługuje zwrot opłat, są one dokonywane w
            terminie 14 dni od dnia decyzji uznania żądania zwrotu opłat
            przelewem na wskazane przez Klienta konto bankowe lub gotówką.
          </li>
        </ol>
        <h2>§9 REKLAMACJE</h2>
        <ol>
          <li>
            Klient może złożyć reklamację pisemnie lub w za pośrednictwem poczty
            elektronicznej, jeżeli usługi świadczone przez placówkę nie są
            realizowane lub są realizowane niezgodnie z postanowieniami
            niniejszego Regulaminu.
          </li>
          <li>
            Reklamacja powinna zawierać:
            <ul>
              <li className={s(`lower-alpha`)}>
                dane personalne reklamującego,
              </li>
              <li className={s(`lower-alpha`)}>
                temat reklamacji oraz okres, którego reklamacja dotyczy,
              </li>
              <li className={s(`lower-alpha`)}>
                okoliczności uzasadniające reklamację,
              </li>
              <li className={s(`lower-alpha`)}>
                podpis reklamującego– w przypadku reklamacji złożonej w formie
                pisemnej.
              </li>
            </ul>
          </li>
          <li>
            Wszelkie reklamacje należy zgłaszać do właściciela studia tańca Max
            Dance pisemnie w recepcji lub drogą e-mailową na adres
            biuro@maxdance.pl niezwłocznie, nie później niż w terminie 14 dni od
            dnia zaistnienia zdarzenia stanowiącego podstawę reklamacji.
          </li>
          <li>
            Placówka udziela odpowiedzi na reklamację drogą elektroniczną na
            wskazany przez reklamującego adres poczty elektronicznej lub w
            formie pisemnej na adres podany przez reklamującego w terminie 30
            dni od dnia jej otrzymania.
          </li>
          <li>
            Placówka może pozostawić reklamację bez rozpoznania, jeżeli:
            <ul>
              <li className={s(`lower-alpha`)}>
                reklamacja dotyczy kwestii wyjaśnionej w Regulaminie lub
                załącznikach. W takim przypadku odpowiedź na reklamację zawiera
                odesłanie do stosownego dokumentu.
              </li>
              <li className={s(`lower-alpha`)}>
                reklamacja dotyczy kwestii wyjaśnionej uprzednio w odpowiedzi na
                poprzednie zgłoszenie reklamacyjne danego KlientW takim
                przypadku odpowiedź na reklamację zawiera odesłanie do stosownej
                korespondencji.
              </li>
              <li className={s(`lower-alpha`)}>
                reklamacja pochodzi od osoby trzeciej, która nie posiada
                stosownego upoważnienia lub pełnomocnictwa.
              </li>
              <li className={s(`lower-alpha`)}>
                zostanie złożona po upływie 14 dni od dnia ujawnienia się
                przyczyn reklamacji.
              </li>
            </ul>
          </li>
          <li>
            Jeżeli reklamacja nie spełnia warunków formalnych, o których wyżej
            mowa, placówka może według swojego wyboru pozostawić reklamację bez
            rozpoznania lub wezwać reklamującego do jej uzupełnienia w terminie
            nie dłuższym niż 7 dni wraz z pouczeniem, iż w przypadku braku
            uzupełnienia w oznaczonym terminie reklamacja zostanie pozostawiona
            bez rozpoznania.
          </li>
          <li>
            O skorzystaniu z prawa do pozostawienia reklamacji bez rozpoznania
            placówka poinformuje niezwłocznie reklamującego.
          </li>
        </ol>
        <h2>§10 WYKORZYSTANIE WIZERUNKU</h2>
        <ol>
          <li>
            Klient nieodpłatnie wyraża zgodę na utrwalenie wizerunku Uczestnika
            w trakcie zajęć oraz podczas uczestnictwa w imprezach
            okolicznościowych organizowanych przez placówkę i jego sponsorów.
          </li>
          <li>
            Wyrażając zgodę na utrwalenie wizerunku, Klient nieodpłatnie zezwala
            bezterminowo i nieodwołalnie na wykorzystanie utrwalonego wizerunku
            do promocji i reklamy placówki.
          </li>
          <li>
            Zgoda, o której mowa w art. 2 obejmuje wykorzystanie wizerunku bez
            ograniczeń terytorialnych w dowolnym utworze oraz innych materiałach
            nie noszących znamion utworu w rozumieniu prawa autorskiego, na
            dowolnym polu eksploatacji, jak również obejmuje dowolne
            dysponowanie takimi materiałami w działalności osoby prowadzącej, w
            tym przekazywanie ich osobom trzecim oraz modyfikowanie wizerunku i
            utworów, w których skład będzie wchodzić wizerunek. W szczególności
            zgoda obejmuje:
            <ul>
              <li className={s(`lower-alpha`)}>
                utrwalanie w postaci zdjęć, nagrań TV i audio, zapisów w formie
                cyfrowej lub w innej formie,
              </li>
              <li className={s(`lower-alpha`)}>
                zwielokrotnianie zdjęć, nagrań TV i audio, zapisów w formie
                cyfrowej lub innej formie za pomocą wszelkich technik, w
                dowolnej ilości nakładów, w szczególność i za pomocą wszelkich
                znanych technik drukarskich, reprograficznych, zapisu
                magnetycznego lub technik cyfrowych,
              </li>
              <li className={s(`lower-alpha`)}>
                wprowadzanie do obrotu, użyczenie lub najem oryginałów lub
                egzemplarzy zdjęć, o których mowa w lit. a), nagrań TV i audio,
                zapisów w formie cyfrowej, w tym wydawanie i rozpowszechnianie
                materiałów promocyjnych, reklamowych i marketingowych,
                wprowadzanie do pamięci komputera, umieszczanie w sieci Internet
                oraz w sieciach wewnętrznych typu Intranet,
              </li>
              <li className={s(`lower-alpha`)}>
                rozpowszechnianie zdjęć, o których mowa w lit. a), nagrań,
                zapisów w formie cyfrowej lub w innej formie w inny sposób niż
                określonych w lit. c), w szczególności poprzez wystawienie,
                wyświetlenie, odtworzenie oraz nadawanie i reemitowanie; a także
                publiczne udostępnianie w taki sposób, aby każdy mógł mieć do
                niego dostęp w miejscu i czasie przez siebie wybranym.
              </li>
            </ul>
          </li>
          <li>
            Placówka i osoba prowadząca ją prowadząca zobowiązuje się do
            wykorzystywania wizerunku w sposób zgodny z dobrymi obyczajami.
          </li>
        </ol>
        <h2>§11 PRAWA WŁASNOŚCI INTELEKTUALNEJ</h2>
        <ol>
          <li>
            Wszelkie prawa własności intelektualnej do materiałów reklamowych,
            znaków słownych lub graficznych, nazw, obrazów, grafiki, efektów
            dźwiękowych oraz choreografii przysługują wyłącznie placówce lub jej
            partnerom, którzy przekazali określone materiały do użytkowania.
            Korzystanie z usług świadczonych przez placówkę i ww. treści nie
            skutkuje w żadnym zakresie nabyciem przez Klienta części lub całości
            ww. praw własności intelektualnej.
          </li>
          <li>
            Zabronione jest bez zgody placówki wyrażonej na piśmie: kopiowanie,
            powielanie lub jakiekolwiek inne wykorzystywanie w całości lub we
            fragmentach praw własności intelektualnej do treści, o których mowa
            w art. 1.
          </li>
        </ol>
        <h2>§12 ZMIANY REGULAMINU</h2>
        <ol>
          <li>
            Zmiany Regulaminu są publikowane na stronie www.maxdance.com.
            Informacja o zmianie Regulaminu zostanie udostępniona nie później
            niż 14 dni po opublikowaniu zmienionego Regulaminu.
          </li>
          <li>
            Zmiany Regulaminu i Cennika nie mają wpływu na czynności dokonane
            przed wejściem w życie takich zmian.
          </li>
          <li>
            Nie wymaga zmiany niniejszego Regulaminu wprowadzanie przez placówkę
            promocji, konkursów oraz dodatkowych usług, których szczegółowe
            zasady i warunki określane będą każdorazowo w załącznikach do
            Regulaminu.
          </li>
        </ol>
        <h2>§13 POSTANOWIENIA KOŃCOWE</h2>
        <ol>
          <li>
            Osoby małoletnie są reprezentowane w zakresie praw i obowiązków
            przez rodziców lub opiekunów prawnych.
          </li>
          <li>
            Regulamin, Cennik oraz harmonogram zajęć są dostępne w placówce oraz
            na stronie internetowej www.maxdance.com.
          </li>
          <li>
            Nieważność jednego z postanowień Regulaminu stwierdzona orzeczeniem
            właściwego sądu, nie powoduje nieważności pozostałych postanowień
            Regulaminu.
          </li>
          <li>
            We wszystkich sprawach nieuregulowanych w niniejszym Regulaminie
            zastosowanie mają przepisy obowiązującego prawa polskiego.
          </li>
          <li>
            Regulamin wchodzi w życie z dniem 12.04.2021r., a poprzedni
            regulamin przestaje obowiązywać z dniem 11.04.2021 r.
          </li>
        </ol>
      </SubPageContent>
    </>
  );
}
