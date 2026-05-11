import { roomOffers } from "../data/roomOffers";
import RoomOfferCard from "./RoomOfferCard";

export default function ChambresSection() {
  return (
    <section
      id="chambres"
      className="chambres-section page-section"
      aria-labelledby="chambres-title"
    >
      <div className="chambres-gallery">
        <header className="chambres-gallery__header">
          <div>
            <p className="chambres-gallery__eyebrow">NOS CHAMBRES</p>
            <h2 id="chambres-title" className="chambres-gallery__subtitle">
              Le Repos Silencieux
            </h2>
          </div>
        </header>

        <div className="chambres-grid">
          {roomOffers.map((room) => (
            <RoomOfferCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
