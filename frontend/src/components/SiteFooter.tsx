import "./SiteFooter.css";

export default function SiteFooter() {
  return (
    <footer id="reserver" className="site-footer page-section">
      <div className="site-footer__inner">
        <h2 className="site-footer__brand">HÔTEL FLEURY MÉROGIS</h2>

        <div className="site-footer__columns">
          <div className="site-footer__col site-footer__col--address">
            <h3 className="site-footer__col-title">ADRESSE</h3>
            <address className="site-footer__address">
              2 AVENUE DE L&apos;ANCIEN CANAL
              <br />
              91700 FLEURY-MÉROGIS
            </address>
          </div>

          <div className="site-footer__col site-footer__col--contact">
            <h3 className="site-footer__col-title">CONTACT</h3>
            <div className="site-footer__contact-lines">
              <p className="site-footer__contact-line">
                <span className="site-footer__contact-prefix">T:</span>{" "}
                <a href="tel:+33123456789">+33 (0)1 23 45 67 89</a>
              </p>
              <p className="site-footer__contact-line">
                <span className="site-footer__contact-prefix">E:</span>{" "}
                <a href="mailto:hello@hotel-fleury.com">
                  HELLO@HOTEL-FLEURY.COM
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="site-footer__rule" role="presentation" />

        <nav
          className="site-footer__nav"
          aria-label="Liens pied de page"
        >
          <a href="#mentions-legales">MENTIONS LÉGALES</a>
          <a href="#confidentialite">CONFIDENTIALITÉ</a>
          <a href="#carrieres">CARRIÈRES</a>
        </nav>

        <p className="site-footer__copyright">
          © 2024 HÔTEL FLEURY MÉROGIS. L&apos;ART DE LA SOBRIÉTÉ.
        </p>
      </div>
    </footer>
  );
}
