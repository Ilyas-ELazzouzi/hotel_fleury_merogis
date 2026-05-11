import homeImage from "../images/homeImage.png";
import ChambresSection from "../components/ChambresSection";
import HelpFab from "../components/HelpFab";
import ServicesSection from "../components/ServicesSection";
import LocalizationSection from "../components/LocalizationSection";
import ReviewsSection from "../components/ReviewsSection";
import SiteFooter from "../components/SiteFooter";
import HeroViewport from "../components/HeroViewport";
import KeyFactsSection from "../components/KeyFactsSection";
import SiteHeader from "../components/SiteHeader";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="homepage" id="top">
      <SiteHeader />
      <HeroViewport backgroundImage={homeImage} />
      <KeyFactsSection />
      <ChambresSection />
      <ServicesSection />
      <LocalizationSection />
      <ReviewsSection />
      <SiteFooter />
      <HelpFab />
    </div>
  );
}
