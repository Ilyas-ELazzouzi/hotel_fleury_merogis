export type ReviewCardData = {
  id: string;
  /** Nombre d’étoiles « pleines » (1–5), le reste est contour */
  rating: number;
  quote: string;
  author: string;
  date: string;
};

export const REVIEW_CARDS: ReviewCardData[] = [
  {
    id: "marie",
    rating: 5,
    quote:
      "Excellent rapport qualité-prix. Chambres propres et personnel accueillant. Le parking gratuit est un vrai plus.",
    author: "Marie D.",
    date: "Avril 2026",
  },
  {
    id: "thomas",
    rating: 4,
    quote:
      "Très bien situé pour visiter Paris sans payer le prix fort. Petit-déjeuner copieux.",
    author: "Thomas L.",
    date: "Mars 2026",
  },
  {
    id: "sophie",
    rating: 5,
    quote:
      "Parfait pour une nuit avant un vol tôt le matin depuis Orly. Propre, calme et pratique.",
    author: "Sophie M.",
    date: "Mai 2026",
  },
];

export const GLOBAL_SCORE = "7.2/10";
export const GLOBAL_STAR_FILLED = 4;
export const REVIEW_COUNT_LABEL = "BASÉ SUR 342 AVIS";
