import type { ReviewCardData } from "../data/reviews";
import StarRow from "./StarRow";

type ReviewCardProps = {
  review: ReviewCardData;
};

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="reviews-card">
      <StarRow
        filledCount={review.rating}
        size={16}
        className="reviews-card__stars"
        aria-label={`${review.rating} sur 5 étoiles`}
      />
      <blockquote className="reviews-card__quote">
        <p>&ldquo;{review.quote}&rdquo;</p>
      </blockquote>
      <div className="reviews-card__divider" role="presentation" />
      <footer className="reviews-card__footer">
        <p className="reviews-card__author">{review.author}</p>
        <p className="reviews-card__date">{review.date}</p>
      </footer>
    </article>
  );
}
