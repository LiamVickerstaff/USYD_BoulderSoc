import { Link } from "react-router-dom";
import ExclusivePerksCard from "./CardComponents/ExclusivePerksCard";
import GymEntreesCard from "./CardComponents/GymEntreesCard";
import StoreDiscountsCard from "./CardComponents/StoreDiscountsCard";
import styles from "./MembershipBenefits.module.css";
import { FaArrowRight } from "react-icons/fa";

export default function MembershipBenefitSection() {
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Unmissable Membership Benefits</h2>
      <div className={styles.membershipCardGroupContainer}>
        <GymEntreesCard />
        <StoreDiscountsCard />
        <ExclusivePerksCard />
      </div>
      <Link to="/membership" className={styles.linkToMembershipPage}>
        Check out our full list of benefits{" "}
        <FaArrowRight size={20} color="#000" className={styles.arrow} />
      </Link>
    </div>
  );
}
