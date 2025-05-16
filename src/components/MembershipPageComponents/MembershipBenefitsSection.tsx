import ExclusiveEvents from "./ExclusiveEvents";
import GymDiscounts from "./GymDiscounts";
import styles from "./MembershipBenefitsSection.module.css";
import PartOfTheCommunity from "./PartOfTheCommunity";
import StoreDiscounts from "./StoreDiscounts";

export default function MembershipBenefitsSection() {
  return (
    <div className={styles.MembershipBenefitsSectionContainer}>
      <div className={styles.contentContainer}>
        <GymDiscounts />
        <ExclusiveEvents />
        <StoreDiscounts />
        <PartOfTheCommunity />
      </div>
    </div>
  );
}
