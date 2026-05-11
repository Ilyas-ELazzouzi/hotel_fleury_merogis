export default function ScrollHint() {
  return (
    <div className="scroll-hint" aria-hidden="true">
      <svg
        className="scroll-hint__chevron"
        width="28"
        height="16"
        viewBox="0 0 28 16"
      >
        <path
          d="M1 1 L14 14 L27 1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
