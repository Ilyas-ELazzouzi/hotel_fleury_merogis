import HeroIntro from "./HeroIntro";
import ScrollHint from "./ScrollHint";
import StarRatingBadge from "./StarRatingBadge";

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

      <HeroIntro />
      <ScrollHint />
      <div className="hero-star-badge">
        <StarRatingBadge />
      </div>
    </div>
  );
}
