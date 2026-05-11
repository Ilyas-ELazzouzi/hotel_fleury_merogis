import homeImage from "./images/homeImage.png";
import "./App.css";
import twinImage from "./images/Twin.png";
import dblImage from "./images/Dbl.png";
import twinPlusImage from "./images/Twinplus.png";
import dblPlusImage from "./images/Dblplus.png";

function App() {
  const roomOffers = [
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

  return (
    <div className="homepage">
      <div className="hero-viewport">
        <div
          className="homepage__bg"
          style={{ backgroundImage: `url(${homeImage})` }}
          role="presentation"
        />
        <div className="homepage__overlay" role="presentation" />

        <header className="site-header">
          <a className="site-header__logo" href="/">
            HÔTEL FLEURY
          </a>

          <nav className="site-header__nav" aria-label="Navigation principale">
            <a href="#chambres">CHAMBRES</a>
            <a href="#services">SERVICES</a>
            <a href="#localisation">LOCALISATION</a>
            <a href="#avis">AVIS</a>
          </nav>

          <div className="site-header__aside">
            <a className="btn-reserver" href="#reserver">
              RÉSERVER
            </a>
            <div
              className="etoile-badge"
              role="img"
              aria-label="Classification : une étoile"
            >
              <svg
                className="etoile-badge__star"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M12 2l2.9 7.3H22l-6 4.6 2.3 7.1L12 17.8 5.7 21l2.3-7.1-6-4.6h7.1L12 2z"
                />
              </svg>
              <span className="etoile-badge__label">1 ÉTOILE</span>
            </div>
          </div>
        </header>

        <main className="hero">
          <h1 className="hero__title">L&apos;essentiel, sublimé.</h1>
          <p className="hero__subtitle">
            Fleury-Mérogis · Île-de-France · À 25 min d&apos;Orly
          </p>
        </main>

        <div className="scroll-hint" aria-hidden="true">
          <svg
            className="scroll-hint__chevron"
            width="28"
            height="16"
            viewBox="0 0 28 16"
          >
            <path
              d="M1 1 L14 14 L27 1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <section className="key-facts" aria-labelledby="key-facts-title">
        <div className="key-facts__inner">
          <h2 id="key-facts-title" className="key-facts__title">
            EN QUELQUES MOTS
          </h2>
          <div className="key-facts__stats">
            <div className="key-facts__stat">
              <p className="key-facts__value">72</p>
              <p className="key-facts__label">CHAMBRES</p>
            </div>
            <div className="key-facts__stat">
              <p className="key-facts__value">25 min</p>
              <p className="key-facts__label">D&apos;ORLY</p>
            </div>
            <div className="key-facts__stat">
              <p className="key-facts__value">30 km</p>
              <p className="key-facts__label">DE PARIS</p>
            </div>
            <div className="key-facts__stat">
              <p className="key-facts__value">24h</p>
              <p className="key-facts__label">PARKING GRATUIT</p>
            </div>
          </div>
        </div>
      </section>

      <section className="chambres-section" aria-labelledby="chambres-title">
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
              <article
                key={room.id}
                className={room.className}
                style={{ backgroundImage: `url(${room.image})` }}
              >
                <div className="chambres-card__overlay" />
                <div className="chambres-card__content">
                  <h3 className="chambres-card__title">{room.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <button type="button" className="help-fab" aria-label="Aide">
        ?
      </button>
    </div>
  );
}

export default App;
