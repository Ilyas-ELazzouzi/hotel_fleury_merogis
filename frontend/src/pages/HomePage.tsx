import homeImage from "../images/homeImage.png";
import ChambresSection from "../components/ChambresSection";
import HelpFab from "../components/HelpFab";
import ServicesSection from "../components/ServicesSection";
import LocalizationSection from "../components/LocalizationSection";
import ReviewsSection from "../components/ReviewsSection";
import GallerySection from "../components/GallerySection";
import SiteFooter from "../components/SiteFooter";
import HeroViewport from "../components/HeroViewport";
import KeyFactsSection from "../components/KeyFactsSection";
import ScrollReveal from "../components/ScrollReveal";
import SiteHeader from "../components/SiteHeader";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="homepage" id="top">
      <SiteHeader />
      <HeroViewport backgroundImage={homeImage} />
      <ScrollReveal delayMs={0}>
        <KeyFactsSection />
      </ScrollReveal>
      <ScrollReveal delayMs={40}>
        <ChambresSection />
      </ScrollReveal>
      <ScrollReveal delayMs={80}>
        <ServicesSection />
      </ScrollReveal>
      <ScrollReveal delayMs={120}>
        <LocalizationSection />
      </ScrollReveal>
      <ScrollReveal delayMs={160}>
        <ReviewsSection />
      </ScrollReveal>
      <ScrollReveal delayMs={200} variant="fade">
        <GallerySection />
      </ScrollReveal>
      <ScrollReveal delayMs={240} variant="scale">
        <SiteFooter />
      </ScrollReveal>
      <HelpFab />
    </div>
  );
}
