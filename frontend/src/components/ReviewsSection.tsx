import {
  GLOBAL_SCORE,
  GLOBAL_STAR_FILLED,
  REVIEW_CARDS,
  REVIEW_COUNT_LABEL,
} from "../data/reviews";
import ReviewCard from "./ReviewCard";
import StarRow from "./StarRow";
import "./ReviewsSection.css";

export default function ReviewsSection() {
  return (
    <section
      id="avis"
      className="reviews-section page-section"
      aria-labelledby="reviews-heading"
    >
      <div className="reviews-section__inner">
        <header className="reviews-section__header">
          <h2 id="reviews-heading" className="reviews-section__score">
            {GLOBAL_SCORE}
          </h2>
          <StarRow
            filledCount={GLOBAL_STAR_FILLED}
            size={22}
            className="reviews-section__stars"
            aria-label={`${GLOBAL_STAR_FILLED} étoiles sur 5`}
          />
          <p className="reviews-section__count">{REVIEW_COUNT_LABEL}</p>
        </header>

        <div className="reviews-grid">
          {REVIEW_CARDS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
