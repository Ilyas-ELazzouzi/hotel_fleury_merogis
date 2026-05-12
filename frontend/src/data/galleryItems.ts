import g01 from "../images/galerie01.png";
import g02 from "../images/galerie02.png";
import g03 from "../images/galerie03.png";
import g04 from "../images/galerie04.png";
import g05 from "../images/galerie05.png";
import g06 from "../images/galerie06.png";
import g07 from "../images/galerie07.png";
import g08 from "../images/galerie08.png";
import g09 from "../images/galerie09.png";

export type GalleryItem = {
  image: string;
};

/** Toutes les images dont le nom contient « galerie » (fichiers locaux). */
export const GALLERY_ITEMS: GalleryItem[] = [
  { image: g01 },
  { image: g02 },
  { image: g03 },
  { image: g04 },
  { image: g05 },
  { image: g06 },
  { image: g07 },
  { image: g08 },
  { image: g09 },
];
