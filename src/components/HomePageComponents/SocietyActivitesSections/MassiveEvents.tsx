import styles from "./SocietyActivitiesSections.module.css";
import OlympicWatchParty from "/Images/OlympicWatchParty.jpg";

import { useMediaQuery } from "react-responsive";

export default function MassiveEvents() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1280px)",
  });

  return (
    <>
      {isDesktopOrLaptop ? (
        <div className={`flex-space-between`}>
          {/* Image */}
          <div className={styles.imageContainer}>
            <img
              src={OlympicWatchParty}
              alt="Group Photo 1"
              className={styles.images}
            />
          </div>
          {/* Text */}
          <div
            className={`${styles.clubActivitesTextContainer} ${styles.clubActivitesContainer}`}
          >
            <div>
              <h3 className="heading">
                Massive Events: <br />
                SendFest + BoulderBash
              </h3>
              <h4 className="subheading">
                The Big Ones. The Loud Ones. The Sendy Ones.
              </h4>
            </div>
            <p className="paragraph">
              Every semester we host massive bouldering comps — BoulderBash and
              Sendfest — complete with prizes, vibes, and unforgettable energy.
              Whether you're a total beginner or campus-ing your way up the
              wall, these events bring the whole community together.
            </p>
          </div>
        </div>
      ) : (
        <div className={styles.clubActivitesContainer}>
          <div>
            <p className={`${styles.heading} ${styles.textCenter}`}>
              Massive Events:
            </p>
            <p className={`${styles.heading} ${styles.textCenter}`}>
              SendFest + BoulderBash
            </p>
          </div>

          {/* Image */}
          <div className={styles.imageContainer}>
            <img
              src={OlympicWatchParty}
              alt="Group Photo 1"
              className={styles.images}
            />
          </div>
          <h4
            className={`subheading ${styles.textCenter} ${styles.subHeading}`}
          >
            The Big Ones. The Loud Ones. The Sendy Ones.
          </h4>
          <p className="paragraph">
            Every semester we host massive bouldering comps — BoulderBash and
            Sendfest — complete with prizes, vibes, and unforgettable energy.
            Whether you're a total beginner or campus-ing your way up the wall,
            these events bring the whole community together.
          </p>
        </div>
      )}
    </>
  );
}
