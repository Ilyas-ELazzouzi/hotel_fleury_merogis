import {
  Accessibility,
  CircleParking,
  PawPrint,
  UtensilsCrossed,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import ServiceCard from "./ServiceCard";
import "./ServicesSection.css";

type ServiceItem = {
  id: string;
  Icon: LucideIcon;
  title: string;
  description: string;
};

const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: "breakfast",
    Icon: UtensilsCrossed,
    title: "Petit-déjeuner",
    description:
      "Produits locaux et artisanaux servis chaque matin dans notre lounge épuré.",
  },
  {
    id: "wifi",
    Icon: Wifi,
    title: "Wi-Fi Haut Débit",
    description:
      "Connectivité optimale dans l'ensemble de l'établissement pour vos besoins professionnels.",
  },
  {
    id: "parking",
    Icon: CircleParking,
    title: "Parking Privé",
    description:
      "Espace sécurisé et gratuit accessible 24h/24 pour votre tranquillité.",
  },
  {
    id: "pets",
    Icon: PawPrint,
    title: "Animaux",
    description:
      "Vos compagnons sont les bienvenus dans l'enceinte de notre demeure.",
  },
  {
    id: "pmr",
    Icon: Accessibility,
    title: "Accès PMR",
    description:
      "Des installations entièrement adaptées pour garantir le confort de tous.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="services-section"
      aria-labelledby="services-heading"
    >
      <div className="services-section__inner">
        <header className="services-section__header">
          <p className="services-section__eyebrow">L&apos;ART DU SERVICE</p>
          <h2 id="services-heading" className="services-section__title">
            Pensé pour vous.
          </h2>
        </header>

        <div className="services-layout">
          {SERVICE_ITEMS.map((item) => (
            <ServiceCard
              key={item.id}
              icon={item.Icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
