import Gym_Entrees_BG from "/SVGs/Gym_Entrees_BG.svg";
import MembershipCardContainer from "./CardContainer/MembershipCardContainer";
import styles from "./MembershipCards.module.css";
import NineDegreesLogo from "/SVGs/9_Degrees_logo.svg";
import SydneyIndoorLogo from "/SVGs/Sydney_Indoor_Climbing_Gym_Logo.svg";
import BlochausLogo from "/SVGs/Blochaus_Climbing_Logo.svg";
import NomadLogo from "/SVGs/Nomad_Climbing_Logo.svg";

export default function GymEntreesCard() {
  const title = "Gym Entrees";

  return (
    <MembershipCardContainer title={title} BG_SVG={Gym_Entrees_BG}>
      <ul className={`${styles.ulFlex}`}>
        <li className={`${styles.customBullet}`}>Up to 40% off day passes</li>
        <li className={`${styles.customBullet}`}>Valid at 7+ partner gyms</li>
        <li className={`${styles.customBullet}`}>
          Discounted long-term gym memberships
        </li>
      </ul>
      <div className={styles.logosContainer}>
        <div className={styles.logoGroup}>
          <img
            src={SydneyIndoorLogo}
            alt="Sydney Indoor Climbing Gym Logo"
            className={`${styles.logo} ${styles.SydneyIndoor}`}
          />
          <img
            src={NomadLogo}
            alt="Nomad Climbing Gym Logo"
            className={`${styles.logo} ${styles.Nomad}`}
          />
          <img
            src={BlochausLogo}
            alt="Blochaus Climbing Gym Logo"
            className={`${styles.logo} ${styles.Blochaus}`}
          />
          <img
            src={NineDegreesLogo}
            alt="9 Degrees Climbing Gym Logo"
            className={`${styles.logo} ${styles.NineDegrees}`}
          />
        </div>
      </div>
    </MembershipCardContainer>
  );
}
