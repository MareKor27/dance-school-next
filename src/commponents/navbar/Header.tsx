import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/o-nas">O NAS</Link>
        </li>
        <li>
          <Link href="/instruktorzy">INSTRUKTORZY</Link>
        </li>
        <li>
          <Link href="/oferta">OFERTA</Link>
        </li>
        <li>
          <Link href="/grafik">GRAFIK</Link>
        </li>
        <li>
          <Link href="/galeria">GALERIA</Link>
        </li>
        <li>
          <Link href="/cennik">CENNIK</Link>
        </li>
        <li>
          <Link href="/kontakt">KONTAKT</Link>
        </li>
      </ul>
    </nav>
  );
}
