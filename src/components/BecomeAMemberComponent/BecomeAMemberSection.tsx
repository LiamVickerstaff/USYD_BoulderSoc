import JoinNowGroup from "./JoinNowGroup";
import styles from "./BecomeAMemberSection.module.css";
import GroupPhoto_1 from "/Images/GroupPhoto_01.jpg";

export default function BecomeAMemberSection() {
  return (
    <div className={styles.BecomeAMemberContainer}>
      <h2 className={styles.sectionTitle}>Become A Member Today!</h2>
      <div className={styles.PricingContainer}>
        <div className={styles.imageContainer}>
          <img
            src={GroupPhoto_1}
            alt="Outdoor Climbing Photo"
            className={styles.image}
          />
        </div>
        <JoinNowGroup />
      </div>
    </div>
  );
}
