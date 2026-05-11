import dblImage from "../images/Dbl.png";
import dblPlusImage from "../images/Dblplus.png";
import twinImage from "../images/Twin.png";
import twinPlusImage from "../images/Twinplus.png";
import type { RoomOffer } from "../types/roomOffer";

export const roomOffers: RoomOffer[] = [
  {
    id: "twin",
    name: "Chambre Twin",
    price: "A PARTIR DE 85EUR",
    image: twinImage,
    className: "chambres-card chambres-card--featured",
  },
  {
    id: "dbl",
    name: "Chambre Double",
    price: "95EUR",
    image: dblImage,
    className: "chambres-card",
  },
  {
    id: "twinplus",
    name: "Twin + Lit d'appoint",
    price: "110EUR",
    image: twinPlusImage,
    className: "chambres-card",
  },
  {
    id: "dblplus",
    name: "Double + Lit superpose",
    price: "120EUR",
    image: dblPlusImage,
    className: "chambres-card",
  },
];
