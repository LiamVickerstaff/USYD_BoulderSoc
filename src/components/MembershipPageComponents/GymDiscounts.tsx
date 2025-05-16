import styles from "./MembershipBenefitsSection.module.css";
import { FiArrowRight } from "react-icons/fi";

export default function GymDiscounts() {
  return (
    <div className="flex-space-between">
      {/* Text */}
      <div className={styles.clubActivitesTextContainer}>
        <h3 className="heading">Climb More, Pay Less</h3>
        <h4 className={`subheadingNotTitleCase`}>
          Your BoulderSoc membership gets you sweet discounted rates at top
          Sydney climbing gyms:
        </h4>
        <br />
        <ul className={`${styles.ulFlexGymDiscounts}`}>
          <li className={`${styles.listItem}`}>
            Nomad
            <span className={`${styles.spanPrices}`}>
              <s>$24</s> <FiArrowRight /> $14
            </span>
          </li>
          <li className={`${styles.listItem}`}>
            <p>
              Waterloo 9 Degrees <br />
              <span className={`${styles.detailsText}`}>
                (On Monday BoulderSoc Socials)
              </span>
            </p>

            <span className={`${styles.spanPrices}`}>
              <s>$25</s> <FiArrowRight /> $14.50
            </span>
          </li>
          <li className={`${styles.listItem}`}>
            All 9 Degrees Gyms
            <span className={`${styles.spanPrices}`}>
              <s>$25</s> <FiArrowRight /> $17
            </span>
          </li>
          <li className={`${styles.listItem}`}>
            <p>
              Sydney Indoor Climbing Gym <br />
              <span className={`${styles.detailsText}`}>
                (Monday, Wednesdays and Fridays)
              </span>
            </p>

            <span className={`${styles.spanPrices}`}>
              <s>$25</s> <FiArrowRight /> $15
            </span>
          </li>
          <li className={`${styles.listItem}`}>
            All Blochaus Gyms
            <span className={`${styles.spanPrices}`}>
              <s>$25</s> <FiArrowRight /> $17
            </span>
          </li>
          <li className={`${styles.listItem}`}>
            1UP Bouldering
            <span className={`${styles.spanPrices}`}>
              <s>$24</s> <FiArrowRight /> $16
            </span>
          </li>
          <li className={`${styles.listItem}`}>
            Beta One Bouldering
            <span className={`${styles.spanPrices}`}>
              <s>$25</s> <FiArrowRight /> $16
            </span>
          </li>
          <li className={`${styles.listItem}`}>
            <p>
              Skywood Climbing <br />
              <span className={`${styles.detailsText}`}>(Weekdays)</span>
            </p>
            <span className={`${styles.spanPrices}`}>
              <s>$26</s> <FiArrowRight /> $18
            </span>
          </li>
          <li className={`${styles.listItem}`}>
            <p>
              Skywood Climbing <br />
              <span className={`${styles.detailsText}`}>(Weekends)</span>
            </p>
            <span className={`${styles.spanPrices}`}>
              <s>$26</s> <FiArrowRight /> $15
            </span>
          </li>
        </ul>
        <br />
        <p className={`${styles.endComment}`}>
          Flash your digital tag at the counter and save instantly!
        </p>
      </div>
      {/* Image */}
      <div className={`${styles.imageContainer}`}>
        <img
          src={"/Images/Gym_Entree_Example.jpeg"}
          alt="Image of someone signing up for a climbing gym"
          className={styles.images}
        />
      </div>
    </div>
  );
}
