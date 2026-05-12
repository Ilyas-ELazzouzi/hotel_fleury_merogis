import { useEffect, useId, useState } from 'react';
import { Menu, X } from 'lucide-react';
import './SiteHeader.css';

const NAV_LINKS = [
  { href: '#chambres', label: 'CHAMBRES' },
  { href: '#services', label: 'SERVICES' },
  { href: '#localisation', label: 'LOCALISATION' },
  { href: '#avis', label: 'AVIS' },
  { href: '#galerie', label: 'GALERIE' },
] as const;

const MOBILE_NAV_MQ = '(max-width: 900px)';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [narrowNav, setNarrowNav] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(MOBILE_NAV_MQ).matches,
  );
  const navId = useId();

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_NAV_MQ);
    const sync = () => setNarrowNav(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (!narrowNav && menuOpen) setMenuOpen(false);
  }, [narrowNav, menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header${menuOpen ? ' site-header--nav-open' : ''}`}>
        <a className="site-header__logo" href="#top" onClick={closeMenu}>
          HÔTEL FLEURY
        </a>

        <nav
          id={navId}
          className="site-header__nav"
          aria-label="Navigation principale"
          inert={narrowNav && !menuOpen ? true : undefined}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>

        <div className="site-header__aside">
          <a className="btn-reserver" href="#reserver" onClick={closeMenu}>
            RÉSERVER
          </a>
        </div>

        <button
          type="button"
          className="site-header__menu-btn"
          aria-expanded={menuOpen}
          aria-controls={navId}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X size={22} strokeWidth={1.75} aria-hidden /> : <Menu size={22} strokeWidth={1.75} aria-hidden />}
        </button>
      </header>

      {menuOpen ? (
        <button
          type="button"
          className="site-header__backdrop"
          aria-label="Fermer le menu"
          onClick={closeMenu}
        />
      ) : null}
    </>
  );
}
