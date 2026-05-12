import { GALLERY_ITEMS } from "../data/galleryItems";
import CircularGallery from "./CircularGallery";
import "./GallerySection.css";

export default function GallerySection() {
  return (
    <section
      id="galerie"
      className="gallery-section page-section"
      aria-labelledby="gallery-heading"
    >
      <div className="gallery-section__inner">
        <header className="gallery-section__header">
          <p className="gallery-section__eyebrow">GALERIE</p>
          <h2 id="gallery-heading" className="gallery-section__title">
            L&apos;hôtel en images
          </h2>
        </header>

        <div className="gallery-section__stage">
          <CircularGallery
            items={GALLERY_ITEMS}
            bend={1}
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>
      </div>
    </section>
  );
}
