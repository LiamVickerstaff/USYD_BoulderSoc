import ImageCarousel from "./ImageCarousel";
import BoulderSocIconWhite from "/SVGs/BoulderSoc_Logo_white.svg";
import styles from "./HeroSection.module.css";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setInitialLoadComplete(true);
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  return (
    <div className={styles.HeroSectionContainer}>
      <div className={styles.carousel}>
        <ImageCarousel />
      </div>
      <div
        className={`${styles.IconBG} ${
          initialLoadComplete ? styles.FadeIn : ""
        }`}
      ></div>
      <img
        src={BoulderSocIconWhite}
        alt="Boulder Soc Icon"
        className={`${styles.BoulderSocIcon} ${
          initialLoadComplete ? styles.FadeIn : ""
        }`}
      />
    </div>
  );
}
