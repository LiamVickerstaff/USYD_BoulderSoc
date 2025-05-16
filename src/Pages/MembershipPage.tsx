import BecomeAMemberSection from "../components/BecomeAMemberComponent/BecomeAMemberSection";
import MembershipGreenBackgroundSVG from "../components/MembershipPageComponents/MembershipBackgroundSVGs/MembershipGreenBackgroundSVG/MembershipGreenBackgroundSVG";
import MembershipOrangeBackgroundSVG from "../components/MembershipPageComponents/MembershipBackgroundSVGs/MembershipOrangeBackgroundSVG/MembershipOrangeBackgroundSVG";
import MembershipBenefitsSection from "../components/MembershipPageComponents/MembershipBenefitsSection";
import MembershipHeroSection from "../components/MembershipPageComponents/MembershipHeroSection/MembershipHeroSection";

export default function MembershipPage() {
  return (
    <div style={{ position: "relative" }}>
      <MembershipHeroSection />
      <MembershipOrangeBackgroundSVG />
      <MembershipGreenBackgroundSVG />
      <div style={{ position: "relative", padding: "2rem" }}>
        <div className="pageCenter">
          <div className="maxWidth1440">
            <MembershipBenefitsSection />
            <BecomeAMemberSection />
          </div>
        </div>
      </div>
    </div>
  );
}
