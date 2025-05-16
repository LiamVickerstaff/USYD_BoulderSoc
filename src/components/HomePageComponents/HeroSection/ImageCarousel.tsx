import { motion, AnimatePresence } from "framer-motion";
import styles from "./ImageCarousel.module.css";
import OutdoorClimbing from "/Images/OutdoorClimbing.jpg";
import DudeClimbing_01 from "/Images/DudeClimbing_01.jpg";
import GroupPhoto_01 from "/Images/GroupPhoto_01.jpg";
import OlympicWatchParty from "/Images/OlympicWatchParty.jpg";
import GroupPhoto_02 from "/Images/GroupPhoto_02.jpg";
import GroupPhoto_03 from "/Images/GroupPhoto_03.jpg";
import GroupPhoto_04 from "/Images/GroupPhoto_04.jpg";

import { useEffect, useState } from "react";

const images = [
  OutdoorClimbing,
  DudeClimbing_01,
  GroupPhoto_01,
  OlympicWatchParty,
  GroupPhoto_02,
  GroupPhoto_03,
  GroupPhoto_04,
];

export default function ImageCarousel() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextPhoto();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function handleNextPhoto() {
    setImageIndex((prev) => (prev + 1) % images.length);
  }

  return (
    <div className={styles.carouselContainer}>
      <AnimatePresence>
        <motion.img
          key={images[imageIndex]}
          src={images[imageIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.animatedCarousel}
        />
      </AnimatePresence>
      <img src={images[imageIndex]} alt="" />
    </div>
  );
}
