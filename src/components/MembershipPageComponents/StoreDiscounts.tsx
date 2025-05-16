import styles from "./MembershipBenefitsSection.module.css";

export default function StoreDiscounts() {
  return (
    <div className="flex-space-between">
      {/* Text */}
      <div className={styles.clubActivitesTextContainer}>
        <h3 className="heading">Store Discounts & Classes</h3>
        <h4 className={`subheadingNotTitleCase`}>
          Your membership unlocks exclusive savings at Sydney’s best climbing
          stores
        </h4>
        <br />
        <ul className={`${styles.ulFlex}`}>
          <li className={`${styles.listItem}`}>
            Mountain Equipment{" "}
            <span className={`${styles.spanSprices}`}>12.5% Off</span>
          </li>
          <li className={`${styles.listItem}`}>
            Climbing Anchors{" "}
            <span className={`${styles.spanSprices}`}>12.5% Off</span>
          </li>
          <li className={`${styles.listItem}`}>
            Nomad Bouldering Pro Store{" "}
            <span className={`${styles.spanSprices}`}>10% Off</span>
          </li>
          <li className={`${styles.listItem}`}>
            Good Grip Climbing School{" "}
            <span className={`${styles.spanSprices}`}>
              15% Off Classes + Packages
            </span>
          </li>
        </ul>
        <p className={`${styles.endComment} paragraph`}>
          Get deals on shoes, chalk, pads, gear, and more.
        </p>
      </div>
      {/* Image */}
      <div className={styles.imageContainer}>
        <img
          src={"/Images/Gym_Entree_Example.jpeg"}
          alt="Image of someone signing up for a climbing gym"
          className={styles.images}
        />
      </div>
    </div>
  );
}
