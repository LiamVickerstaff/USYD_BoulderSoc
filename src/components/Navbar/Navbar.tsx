import { Link } from "react-router-dom";
import BoulderSocIcon from "/SVGs/BoulderSoc_Icon.svg";
import styles from "./Navbar.module.css";
import JoinTodayBtn from "../Buttons/JoinTodayBtn";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    setInitialLoadComplete(true);
  }, []);

  function handleClick(currentPage: string) {
    setCurrentPage(currentPage);
  }

  return (
    <nav
      className={`${styles.navbarContainer} ${
        initialLoadComplete ? styles.FadeIn : ""
      }`}
    >
      <div className={styles.content}>
        <Link to="/" onClick={() => handleClick("")}>
          <img src={BoulderSocIcon} width={90} alt="BoulderSoc Logo" />
        </Link>
        <div className={styles.navItemGroup}>
          <Link
            className={`${styles.navItem} ${
              currentPage === "about" ? styles.activeTab : ""
            }`}
            to="/about"
            onClick={() => handleClick("about")}
          >
            About
          </Link>
          <Link
            className={`${styles.navItem} ${
              currentPage === "membership" ? styles.activeTab : ""
            }`}
            to="/membership"
            onClick={() => handleClick("membership")}
          >
            Membership
          </Link>
          <Link
            className={`${styles.navItem} ${
              currentPage === "events" ? styles.activeTab : ""
            }`}
            to="/events"
            onClick={() => handleClick("events")}
          >
            Events
          </Link>
          <JoinTodayBtn />
        </div>
      </div>
    </nav>
  );
}
