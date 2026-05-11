export default function StarRatingBadge() {
  return (
    <div
      className="etoile-badge"
      role="img"
      aria-label="Classification : une étoile"
    >
      <svg
        className="etoile-badge__star"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M12 2l2.9 7.3H22l-6 4.6 2.3 7.1L12 17.8 5.7 21l2.3-7.1-6-4.6h7.1L12 2z"
        />
      </svg>
      <span className="etoile-badge__label">1 ÉTOILE</span>
    </div>
  );
}
