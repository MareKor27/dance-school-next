import { HeroSection } from "@/features/home/hero-section/HeroSection";
import styles from "./page.module.css";
import { Parallax } from "@/features/home/parallax/Parallax";

export default function Home() {
  return (
    <>
      <Parallax />
      <HeroSection />
    </>
  );
}
