import MembershipCardContainer from "../MembershipCardContainer";
import Store_Discounts_BG from "/SVGs/Store_Discounts_Bg.svg";
import styles from "../MembershipBenefits.module.css";
import GoodGripLogo from "/SVGs/GoodGripLogo.svg";
import ClimbingAnchorsLogo from "/SVGs/Climbing_Anchors_Logo.svg";
import NomadLogo from "/SVGs/Nomad_Climbing_Logo.svg";

export default function StoreDiscountsCard() {
  const title = "Store Discounts";

  return (
    <MembershipCardContainer title={title} BG_SVG={Store_Discounts_BG}>
      <ul className={`${styles.ulFlex}`}>
        <li className={`${styles.customBullet}`}>Climbing Anchors</li>
        <li className={`${styles.customBullet}`}>Nomad</li>
        <li className={`${styles.customBullet}`}>Mountain Equipment</li>
        <li className={`${styles.customBullet}`}>Good Grip Climbing School</li>
      </ul>
      <div className={styles.logosContainer}>
        <div className={styles.logoGroup}>
          <img
            src={NomadLogo}
            alt="Nomad Climbing Gym Logo"
            className={`${styles.logo} ${styles.NomadStore}`}
          />
          <img
            src={GoodGripLogo}
            alt="Good Grip Climbing School Logo"
            className={`${styles.logo} ${styles.GoodGrip}`}
          />
          <img
            src={ClimbingAnchorsLogo}
            alt="Climbing Anchors Logo"
            className={`${styles.logo} ${styles.ClimbingAnchors}`}
          />
        </div>
      </div>
    </MembershipCardContainer>
  );
}
