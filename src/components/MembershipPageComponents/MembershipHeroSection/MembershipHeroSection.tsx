import styles from "./MembershipHeroSection.module.css";

export default function MembershipHeroSection() {
  return (
    <div className={styles.HeroContainer}>
      <img
        src="/SVGs/MembershipBenefitsBannerBG.svg"
        alt="Membership Benefits Hero Image"
        className={styles.HeroBG}
      />
      <div className={styles.TitleBox}>
        <div className={styles.LeftSide}>
          <img
            src="/SVGs/MembershipHeroLeftSide.svg"
            alt="Membership Benefits"
          />
        </div>
        <div className={styles.RightSide}>
          <img src="/SVGs/MembershipHeroRightSide.svg" alt="Bouldersoc Logo" />
        </div>
      </div>
    </div>
  );
}
