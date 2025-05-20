import { Link } from "react-router-dom";
// import BoulderSocIcon from "/SVGs/BoulderSoc_Icon.svg";
import BoulderSocIconSmall from "/SVGs/BoulderSoc_Logo_white_small.svg"
import styles from "./Navbar.module.css";
import JoinTodayBtn from "../Buttons/JoinTodayBtn";
import { useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setInitialLoadComplete(true);
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  function handleClick(currentPage: string) {
    setCurrentPage(currentPage);
  }

  return (
    <>
      <nav
        className={`${styles.navbarContainer} ${
          initialLoadComplete ? styles.FadeIn : ""
        }`}
      >
        <div className={styles.content}>
          <Link to="/" onClick={() => handleClick("")}>
            <img
              src={BoulderSocIconSmall}
              className={styles.logo}
              alt="BoulderSoc Logo"
            />
          </Link>

          {/* Desktop Nav Items */}
          <ul className={styles.navItemGroupDesktop}>
            <li>
              <Link
                className={`${styles.navItem} ${
                  currentPage === "about" ? styles.activeTab : ""
                }`}
                to="/about"
                onClick={() => {
                  handleClick("about");
                  setIsOpen(false);
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.navItem} ${
                  currentPage === "membership" ? styles.activeTab : ""
                }`}
                to="/membership"
                onClick={() => {
                  handleClick("membership");
                  setIsOpen(false);
                }}
              >
                Membership
              </Link>
            </li>
            {/* <li>
            <Link
              className={`${styles.navItem} ${
                currentPage === "events" ? styles.activeTab : ""
              }`}
              to="/events"
              onClick={() => handleClick("events")}
            >
              Events
            </Link>
          </li> */}
            <JoinTodayBtn />
          </ul>

          {/* Burger Menu */}
          <div className={styles.burgerIcon} onClick={() => setIsOpen(!isOpen)}>
            <Hamburger
              duration={0.3}
              easing="ease-in"
              label="Show Menu"
              toggled={isOpen}
            />
          </div>
        </div>
      </nav>
      {isOpen && (
        <ul className={styles.burgerMenu}>
          <li
            className={`${styles.navItemBurger} ${
              currentPage === "about" ? styles.burgerActiveTab : ""
            }`}
          >
            <Link
              to="/about"
              onClick={() => {
                handleClick("about");
                setIsOpen(false);
              }}
            >
              About
            </Link>
          </li>
          <li
            className={`${styles.navItemBurger} ${
              currentPage === "membership" ? styles.burgerActiveTab : ""
            }`}
          >
            <Link
              to="/membership"
              onClick={() => {
                handleClick("membership");
                setIsOpen(false);
              }}
            >
              Membership
            </Link>
          </li>
          {/* <li className={styles.navItemBurger}>
              <Link
               
                to="/events"
                onClick={() => {
                  handleClick("events");
                  setIsOpen(false);
                }}
              >
                Events
              </Link>
            </li> */}
          {/* <li className={styles.navItemBurger}>
              <JoinTodayBtn />
            </li> */}
        </ul>
      )}
    </>
  );
}
