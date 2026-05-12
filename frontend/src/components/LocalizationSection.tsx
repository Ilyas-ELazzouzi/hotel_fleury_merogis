import {
  Car,
  Plane,
  TrainFront,
  TreePine,
  type LucideIcon,
} from "lucide-react";
import "./LocalizationSection.css";

const MAPS_SEARCH_URL =
  "https://www.google.com/maps/search/?api=1&query=91700+Fleury-M%C3%A9rogis,+France";

const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=91700+Fleury-M%C3%A9rogis,+France&hl=fr&z=12&ie=UTF8&iwloc=near&output=embed";

type HighlightItem = {
  id: string;
  Icon: LucideIcon;
  label: string;
};

const HIGHLIGHTS: HighlightItem[] = [
  {
    id: "orly",
    Icon: Plane,
    label: "Aéroport d'Orly à 25 minutes",
  },
  {
    id: "routes",
    Icon: Car,
    label: "Accès direct A6 et N104",
  },
  {
    id: "rer",
    Icon: TrainFront,
    label: "RER C vers Paris en 30 min",
  },
  {
    id: "parc",
    Icon: TreePine,
    label: "Parc de la Greffière à pied",
  },
];

export default function LocalizationSection() {
  return (
    <section
      id="localisation"
      className="localization-section page-section"
      aria-labelledby="localization-heading"
    >
      <div className="localization-section__inner">
        <header className="localization-section__header">
          <p className="localization-section__eyebrow">LOCALISATION</p>
          <h2 id="localization-heading" className="localization-section__title">
            Idéalement situé
          </h2>
          <p className="localization-section__lead">Fleury-Mérogis, Île-de-France</p>
        </header>

        <div className="localization-grid">
          <div className="localization-map">
            <iframe
              title="Carte — 91700 Fleury-Mérogis"
              className="localization-map__iframe"
              src={MAP_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={MAPS_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="localization-map__overlay"
              aria-label="Ouvrir 91700 Fleury-Mérogis dans Google Maps"
            />
          </div>

          <ul className="localization-highlights">
            {HIGHLIGHTS.map(({ id, Icon, label }) => (
              <li key={id} className="localization-card">
                <Icon
                  className="localization-card__icon"
                  size={22}
                  strokeWidth={1.35}
                  absoluteStrokeWidth
                  aria-hidden
                />
                <p className="localization-card__text">{label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
