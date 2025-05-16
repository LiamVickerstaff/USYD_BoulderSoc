import styles from "./MembershipBenefitsSection.module.css";

export default function ExclusiveEvents() {
  return (
    <div className="flex-space-between">
      {/* Image */}
      <div className={styles.imageContainer}>
        <img
          src={"/Images/Gym_Entree_Example.jpeg"}
          alt="Image of someone signing up for a climbing gym"
          className={styles.images}
        />
      </div>
      {/* Text */}
      <div className={styles.clubActivitesTextContainer}>
        <h3 className="heading">Exclusive Events</h3>
        <h4 className={`paragraph`}>
          More Than Just Climbing - Membership gets you access to our biggest
          and best events:
        </h4>
        <p></p>
        <br />
        <ul className={`${styles.ulFlex}`}>
          <li className={`${styles.listItem} ${styles.iconPlaceTop}`}>
            BoulderBash – Sydney's biggest interuni climbing competition
            Sendfest – showcase your skills, cheer on your mates at out semester
            1 social competition
          </li>
          <li className={`${styles.listItem}`}>
            Outdoor Climbing Roadtrips – real rock, real fun
          </li>
          <li className={`${styles.listItem} ${styles.iconPlaceTop}`}>
            Beginner Workshops – perfect for first-timers or those levelling up
          </li>
        </ul>
        <p className={`${styles.endComment} paragraph`}>
          Whether you climb V0 or V8, these are the events you’ll talk about all
          semester.
        </p>
      </div>
    </div>
  );
}
