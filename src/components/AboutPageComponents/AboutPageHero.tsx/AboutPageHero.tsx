import styles from "./AboutPageHero.module.css";

export default function AboutPageHero() {
  return (
    <div className={styles.heroContainer}>
      <img
        src="/Images/Beginner_Workshop_Outdoor_Cropped.jpg"
        alt="Outdoor Climbing Photo"
        className={styles.image}
      />
      <div className={styles.QouteContainer}>
        <div className={styles.Qoute}>
          <span className={styles.textStroke}>
            <i>Come climb with us every week. Get involved today!</i>
          </span>
          <span className={styles.textFill}>
            <i>Come climb with us every week. Get involved today!</i>
          </span>
        </div>
      </div>
    </div>
  );
}
