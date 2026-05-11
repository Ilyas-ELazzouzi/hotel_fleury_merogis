import HeroIntro from "./HeroIntro";
import ScrollHint from "./ScrollHint";
import SiteHeader from "./SiteHeader";

type HeroViewportProps = {
  backgroundImage: string;
};

export default function HeroViewport({ backgroundImage }: HeroViewportProps) {
  return (
    <div className="hero-viewport">
      <div
        className="homepage__bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        role="presentation"
      />
      <div className="homepage__overlay" role="presentation" />

      <SiteHeader />
      <HeroIntro />
      <ScrollHint />
    </div>
  );
}
