import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

/**
 * Transparent over the hero, solid after 60px of scroll.
 * Plain anchors for drop-in use; swap for <Link to> from
 * react-router-dom when wiring the router (see SETUP.md).
 */

const NAV_LINKS = [
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Find Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--solid" : ""}`}>
      <div className="nav__inner">
        <a className="nav__logo" href="/">
          Ember <span>&amp;</span> Thyme
        </a>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <NavLink key={link.label} to={link.href} onClick={() => setMenuOpen(false)} end>
              {link.label}
            </NavLink>
          ))}
          <a
            className="nav__reserve"
            href="/contact#reserve"
            onClick={() => setMenuOpen(false)}
          >
            Reserve a Table
          </a>
        </nav>
      </div>
    </header>
  );
}
