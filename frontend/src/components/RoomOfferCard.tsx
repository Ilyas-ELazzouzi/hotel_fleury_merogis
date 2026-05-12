import type { RoomOffer } from "../types/roomOffer";

type RoomOfferCardProps = {
  room: RoomOffer;
};

export default function RoomOfferCard({ room }: RoomOfferCardProps) {
  return (
    <article
      className={room.className}
      style={{ backgroundImage: `url(${room.image})` }}
    >
      <div className="chambres-card__overlay" />
      <div className="chambres-card__content">
        <h3 className="chambres-card__title">{room.name}</h3>
      </div>
      <a className="chambres-card__reserve" href="#reserver">
        Réserver
      </a>
    </article>
  );
}
