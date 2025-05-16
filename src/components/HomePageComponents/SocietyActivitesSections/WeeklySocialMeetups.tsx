import GroupPhoto_01 from "/Images/GroupPhoto_01.jpg";
import styles from "./SocietyActivitiesSections.module.css";

export default function WeeklySocialMeetups() {
  return (
    <div className={`flex-space-between `}>
      {/* Text */}
      <div
        className={`${styles.clubActivitesTextContainer} ${styles.clubActivitesContainer}`}
      >
        <div>
          <h3 className="heading">Weekly Social Meetups</h3>
          <h4 className="subheading">Climb, Chat, Chill — Every Week</h4>
        </div>
        <p className="paragraph">
          Whether you’re pulling on your first pair of climbing shoes or chasing
          your next project, our weekly meetups are for everyone. We run Monday
          casual climbs at different gyms and Friday socials at Nomad Bouldering
          Gym. <br />
          A perfect mix of movement, mates, and maybe some mischief after the
          sesh.
          <br />
          📍 Check our{" "}
          <a
            href="https://www.instagram.com/usydboulderingsoc"
            className={styles.instagramLink}
          >
            Instagram
          </a>{" "}
          for weekly locations and updates!
        </p>
      </div>
      {/* Image */}
      <div className={styles.imageContainer}>
        <img
          src={GroupPhoto_01}
          alt="Group Photo 1"
          className={styles.images}
        />
      </div>
    </div>
  );
}
