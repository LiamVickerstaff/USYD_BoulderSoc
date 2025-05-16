import MassiveEvents from "./MassiveEvents";
import OutdoorRoadtrips from "./OutdoorRoadtrips";
import WeeklySocialMeetups from "./WeeklySocialMeetups";
import styles from "./SocietyActivitiesSections.module.css";

export default function SocietyActivitiesSection() {
  return (
    <div className={styles.SocietyActivitesSectionContainer}>
      <div className={styles.contentContainer}>
        <WeeklySocialMeetups />
        <MassiveEvents />
        <OutdoorRoadtrips />
      </div>
    </div>
  );
}
