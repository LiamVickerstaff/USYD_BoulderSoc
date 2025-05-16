import AboutPageHero from "../components/AboutPageComponents/AboutPageHero.tsx/AboutPageHero";
import AboutPageOurSociety from "../components/AboutPageComponents/OurSocietySection/OurSocietySection";
import PartnersSection from "../components/AboutPageComponents/PartnersSection/PartnersSection";
import SocialMediaEmbed from "../components/SocialMediaEmbedComponent/SocialMediaEmbed";

export default function AboutPage() {
  return (
    <div>
      <AboutPageHero />
      <div className="pageCenter">
        <div className="maxWidth1440">
          <AboutPageOurSociety />
          <SocialMediaEmbed />
          <PartnersSection />
        </div>
      </div>
    </div>
  );
}
