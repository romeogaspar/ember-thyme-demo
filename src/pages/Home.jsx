import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useReveal from "../hooks/useReveal";
import menu from "../data/menu";
import { HOURS, ADDRESS } from "../data/details";
import "../styles/Restaurant.css";

/* Photos for public/images/ — every slot has a dark fallback. */
const HERO_IMAGE = "/images/hero.jpg";
const GALLERY = [
  { src: "/images/gallery-1.jpg", alt: "Open kitchen, flames in the wood oven" },
  { src: "/images/gallery-2.jpg", alt: "Dining room at golden hour" },
  { src: "/images/gallery-3.jpg", alt: "Plated dish from above" },
  { src: "/images/gallery-4.jpg", alt: "Bartender finishing a cocktail" },
];

/* Signature dishes are flagged in the menu data — single source of truth. */
const SIGNATURES = menu
  .flatMap((cat) => cat.items)
  .filter((item) => item.signature)
  .slice(0, 3);

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__eyebrow">Wood-fired kitchen &amp; bar</p>
        <h1 className="hero__title">
          Cooked by flame,
          <br />
          <em>served with heart.</em>
        </h1>
        <div className="hero__actions">
          <a className="btn btn--solid" href="/contact#reserve">
            Reserve a Table
          </a>
          <a className="btn btn--ghost" href="/menu">
            View the Menu
          </a>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  const ref = useReveal();
  return (
    <section className="intro reveal" ref={ref}>
      <p className="section-eyebrow">Welcome</p>
      <h2 className="intro__statement">
        A small room, an open fire, and a menu that follows the seasons.
      </h2>
      <p className="intro__body">
        Everything we serve passes through the wood oven or over the coals.
        We keep the menu short, source close to home, and let the fire do
        the talking.
      </p>
    </section>
  );
}

function Signatures() {
  const ref = useReveal(0.05);
  return (
    <section className="signatures reveal" ref={ref}>
      <p className="section-eyebrow">From the kitchen</p>
      <h2 className="section-title">Signature plates</h2>
      <div className="signatures__grid">
        {SIGNATURES.map((dish) => (
          <article className="dish-card" key={dish.name}>
            <figure className="dish-card__image">
              <img src={dish.image} alt={dish.name} loading="lazy" />
            </figure>
            <div className="dish-card__row">
              <h3>{dish.name}</h3>
              <span className="dish-card__price">{dish.price}</span>
            </div>
            <p className="dish-card__desc">{dish.description}</p>
          </article>
        ))}
      </div>
      <a className="btn btn--ghost signatures__more" href="/menu">
        See the full menu
      </a>
    </section>
  );
}

function GalleryStrip() {
  const ref = useReveal(0.05);
  return (
    <section className="gallery reveal" ref={ref}>
      <div className="gallery__strip">
        {GALLERY.map((photo) => (
          <figure className="gallery__item" key={photo.src}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}

function VisitTeaser() {
  const ref = useReveal();
  return (
    <section className="visit reveal" ref={ref}>
      <div>
        <p className="section-eyebrow">Visit</p>
        <h2 className="section-title">Find your way to the fire</h2>
        <p className="visit__address">
          {ADDRESS.line1}, {ADDRESS.line2}
        </p>
        <a className="btn btn--solid" href="/contact#reserve">
          Reserve a Table
        </a>
      </div>
      <div className="visit__hours">
        {HOURS.map((row) => (
          <p className="visit__hours-row" key={row.days}>
            <span>{row.days}</span>
            <span>{row.time}</span>
          </p>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Signatures />
        <GalleryStrip />
        <VisitTeaser />
      </main>
      <Footer />
    </div>
  );
}
