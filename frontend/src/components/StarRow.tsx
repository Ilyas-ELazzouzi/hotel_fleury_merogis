import { Star } from "lucide-react";

type StarRowProps = {
  filledCount: number;
  total?: number;
  size?: number;
  className?: string;
  "aria-label"?: string;
};

export default function StarRow({
  filledCount,
  total = 5,
  size = 18,
  className,
  "aria-label": ariaLabel,
}: StarRowProps) {
  return (
    <div
      className={className}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    >
      {Array.from({ length: total }, (_, i) => {
        const filled = i < filledCount;
        return (
          <Star
            key={i}
            className={
              filled ? "reviews-star reviews-star--filled" : "reviews-star"
            }
            size={size}
            strokeWidth={1.35}
            absoluteStrokeWidth
            fill={filled ? "currentColor" : "none"}
          />
        );
      })}
    </div>
  );
}
