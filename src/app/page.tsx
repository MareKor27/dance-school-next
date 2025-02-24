import { HeroSection } from "@/features/home/hero-section/HeroSection";
import styles from "./page.module.css";
import { Parallax } from "@/features/home/parallax/Parallax";
import { OfferSection } from "@/features/home/commponents/offert-boxes/OfferSection";

export default function Home() {
  return (
    <>
      <Parallax />
      <HeroSection />
      <OfferSection />
    </>
  );
}
