import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="services-card">
      <div className="services-card__icon" aria-hidden>
        <Icon
          className="services-card__icon-svg"
          size={38}
          strokeWidth={1.2}
          absoluteStrokeWidth
        />
      </div>
      <h3 className="services-card__title">{title}</h3>
      <p className="services-card__desc">{description}</p>
    </article>
  );
}
