import MembershipCardContainer from "./CardContainer/MembershipCardContainer";
import ExclusivePerksBG from "/SVGs/Exclusive_Perks_BG.svg";
import styles from "./MembershipCards.module.css";

export default function ExclusivePerksCard() {
  const title = "Exclusive Perks";

  return (
    <MembershipCardContainer title={title} BG_SVG={ExclusivePerksBG}>
      <ul className={`${styles.ulFlex}`}>
        <li className={`${styles.customBullet}`}>
          Access to all events & socials
        </li>
        <li className={`${styles.customBullet}`}>Invite-only roadtrips</li>
        <li className={`${styles.customBullet}`}>
          Beginner-friendly workshops & intro sessions
        </li>
      </ul>
      <div className={styles.imageGroup}>
        <img
          src="/Images/WednesdaySocialClimb.png"
          alt=""
          className={`${styles.SocialClimb} ${styles.image}`}
        />
        <img
          src="/Images/BoulderBash_Banner.png"
          alt=""
          className={`${styles.BoulderBash} ${styles.image}`}
        />
        <img
          src="/Images/ChillingOutdoorClimbing.png"
          alt=""
          className={`${styles.OutdoorClimbing} ${styles.image}`}
        />
        <img
          src="/Images/SendFestBannerCard.png"
          alt=""
          className={`${styles.Sendfest} ${styles.image}`}
        />
        <img
          src="/Images/RoadTripNotice.png"
          alt=""
          className={`${styles.Roadtrip} ${styles.image}`}
        />
      </div>
    </MembershipCardContainer>
  );
}
