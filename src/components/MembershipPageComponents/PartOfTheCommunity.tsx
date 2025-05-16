import styles from "./MembershipBenefitsSection.module.css";

export default function PartOfTheCommunity() {
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
        <h3 className="heading">Become Part Of Our Community</h3>
        <h4 className={`subheadingNotTitleCase`}>Your membership includes:</h4>
        <br />
        <ul className={`${styles.ulFlex}`}>
          <li className={`${styles.listItem}`}>Weekly Social Meetups </li>
          <li className={`${styles.listItem}`}>Outdoor Climbs </li>
          <li className={`${styles.listItem}`}>Epic Roadtrips </li>
          <li className={`${styles.listItem}`}>
            After-Climb Pub Nights & Hangs{" "}
          </li>
        </ul>
        <p className={`${styles.endComment} paragraph`}>
          Join a supportive, social, and stoked community of climbers from all
          walks of life.
        </p>
      </div>
    </div>
  );
}
