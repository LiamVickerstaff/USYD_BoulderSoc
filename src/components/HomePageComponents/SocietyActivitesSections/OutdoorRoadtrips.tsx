import styles from "./SocietyActivitiesSections.module.css";
import OutdoorClimbing from "/Images/OutdoorClimbing.jpg";
import { useMediaQuery } from "react-responsive";

export default function OutdoorRoadtrips() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1280px)",
  });

  return (
    <>
      {isDesktopOrLaptop ? (
        <div className={"flex-space-between"}>
          {/* Text */}
          <div
            className={`${styles.clubActivitesTextContainer} ${styles.clubActivitesContainer}`}
          >
            <div>
              <h3 className="heading">Outdoor climbs and roadtrips</h3>
              <h4 className="subheading">Touch Some Grass – Climb Real Rock</h4>
            </div>
            <p className="paragraph">
              Join us as we venture out to some of NSW’s best bouldering spots.
              From the classics in the Blue Mountains to hidden gems closer to
              Sydney, our outdoor trips are a core part of the BoulderSoc
              experience. We’ll take care of the logistics — you just bring your
              shoes, your stoke, and your weekend spirit.
            </p>
          </div>
          {/* Image */}
          <div className={styles.imageContainer}>
            <img
              src={OutdoorClimbing}
              alt="Outdoor Climbing Photo"
              className={styles.images}
            />
          </div>
        </div>
      ) : (
        <div className={styles.clubActivitesContainer}>
          <div>
            <h3 className={`${styles.heading} ${styles.textCenter}`}>
              Outdoor Climbs And Roadtrips
            </h3>
          </div>

          {/* Image */}
          <div className={styles.imageContainer}>
            <img
              src={OutdoorClimbing}
              alt="Outdoor Climbing Photo"
              className={styles.images}
            />
          </div>
          <h4
            className={`subheading ${styles.textCenter} ${styles.subHeading}`}
          >
            Touch Some Grass – Climb Real Rock
          </h4>
          <p className="paragraph">
            Join us as we venture out to some of NSW’s best bouldering spots.
            From the classics in the Blue Mountains to hidden gems closer to
            Sydney, our outdoor trips are a core part of the BoulderSoc
            experience. We’ll take care of the logistics — you just bring your
            shoes, your stoke, and your weekend spirit.
          </p>
        </div>
      )}
    </>
  );
}
