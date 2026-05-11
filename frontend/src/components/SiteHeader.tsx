export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-header__logo" href="#top">
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
      </div>
    </header>
  );
}
