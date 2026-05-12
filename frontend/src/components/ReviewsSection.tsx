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
          <p className="reviews-section__eyebrow">AVIS</p>
          <h2 id="reviews-heading" className="reviews-section__title">
            Ce qu&apos;ils en disent
          </h2>
          <div
            className="reviews-section__rating"
            aria-label={`Note moyenne ${GLOBAL_SCORE} sur 5, ${REVIEW_COUNT_LABEL}`}
          >
            <p className="reviews-section__score">{GLOBAL_SCORE}</p>
            <StarRow
              filledCount={GLOBAL_STAR_FILLED}
              size={22}
              className="reviews-section__stars"
            />
            <p className="reviews-section__count">{REVIEW_COUNT_LABEL}</p>
          </div>
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
