import homeImage from "../images/homeImage.png";
import ChambresSection from "../components/ChambresSection";
import HelpFab from "../components/HelpFab";
import ServicesSection from "../components/ServicesSection";
import LocalizationSection from "../components/LocalizationSection";
import HeroViewport from "../components/HeroViewport";
import KeyFactsSection from "../components/KeyFactsSection";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="homepage">
      <HeroViewport backgroundImage={homeImage} />
      <KeyFactsSection />
      <ChambresSection />
      <ServicesSection />
      <LocalizationSection />
      <HelpFab />
    </div>
  );
}
