import styles from "./PartnersSection.module.css";
import GoodGripLogo from "/SVGs/GoodGripLogo.svg";
import ClimbingAnchorsLogo from "/SVGs/Climbing_Anchors_Logo.svg";
import NineDegreesLogo from "/SVGs/9_Degrees_logo.svg";
import NomadLogo from "/SVGs/Nomad_Climbing_Logo.svg";
import BlochausLogo from "/SVGs/Blochaus_Climbing_Logo.svg";
import SydneyIndoorLogo from "/SVGs/Sydney_Indoor_Climbing_Gym_Logo.svg";

export default function PartnersSection() {
  return (
    <div className={styles.PartnersContainer}>
      <h2 className={`sectionTitle`}>Special Thanks To All Our Partners</h2>
      <div className={styles.logosContainer}>
        <div className={styles.logoGroup}>
          <a href="https://www.nomadbouldering.com.au/">
            <img
              src={NomadLogo}
              alt="Nomad Climbing Gym Logo"
              className={`${styles.logo} ${styles.NomadStore}`}
            />
          </a>
          <a href="https://www.goodgripclimbingschool.com/">
            <img
              src={GoodGripLogo}
              alt="9 Degrees Climbing Gym Logo"
              className={`${styles.logo} ${styles.GoodGrip}`}
            />
          </a>
          <a href="https://www.climbinganchors.com.au/">
            <img
              src={ClimbingAnchorsLogo}
              alt="Climbing Anchors Logo"
              className={`${styles.logo} ${styles.ClimbingAnchors}`}
            />
          </a>
          <a href="https://www.9degrees.com.au/">
            <img
              src={NineDegreesLogo}
              alt="9 Degrees Climbing Gym Logo"
              className={`${styles.logo} ${styles.NineDegrees}`}
            />
          </a>
          <a href="https://syd.blochaus.com.au/">
            <img
              src={BlochausLogo}
              alt="Blochaus Climbing Gym Logo"
              className={`${styles.logo} ${styles.Blochaus}`}
            />
          </a>
          <a href="https://indoorclimbing.com.au/stpeters/">
            <img
              src={SydneyIndoorLogo}
              alt="Sydney Indoor Climbing Gym Logo"
              className={`${styles.logo} ${styles.SydneyIndoor}`}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
