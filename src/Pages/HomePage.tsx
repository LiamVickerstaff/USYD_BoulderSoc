import BecomeAMemberSection from "../components/BecomeAMemberComponent/BecomeAMemberSection";
import SocietyActivitiesSection from "../components/HomePageComponents/SocietyActivitesSections/SocietyActivitiesSection";
import MembershipBenefitSection from "../components/HomePageComponents/MembershipBenefits/MembershipBenefits";
import SocialMediaEmbed from "../components/SocialMediaEmbedComponent/SocialMediaEmbed";
import HeroSection from "../components/HomePageComponents/HeroSection/HeroSection";
import HomeGreenBackgroundSVG from "../components/HomePageComponents/HomeBackgroundSVGs/HomeGreenBackgroundSVG/HomeGreenBackgroundSVG";
import HomeOrangeBackgroundSVG from "../components/HomePageComponents/HomeBackgroundSVGs/HomeOrangeBackgroundSVG/HomeOrangeBackgroundSVG";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div style={{ position: "relative" }}>
        <HomeGreenBackgroundSVG />
        <HomeOrangeBackgroundSVG />
        <div style={{ position: "relative", padding: "2rem" }}>
          <div className="pageCenter">
            <div className="maxWidth1440">
              <SocietyActivitiesSection />
              <MembershipBenefitSection />
              <BecomeAMemberSection />
              <SocialMediaEmbed />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
