import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useReveal from "../hooks/useReveal";
import menu from "../data/menu";
import "../styles/Restaurant.css";

/* Slugify category names for anchor IDs: "From the Fire" -> from-the-fire */
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

function CategorySection({ category, items }) {
  const ref = useReveal(0.05);
  return (
    <section className="menu-cat reveal" id={slug(category)} ref={ref}>
      <h2 className="menu-cat__title">{category}</h2>
      <ul className="menu-cat__list">
        {items.map((item) => (
          <li className="menu-item" key={item.name}>
            <div className="menu-item__row">
              <h3 className="menu-item__name">{item.name}</h3>
              <span className="menu-item__leader" aria-hidden="true" />
              <span className="menu-item__price">{item.price}</span>
            </div>
            <p className="menu-item__desc">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Menu() {
  const [active, setActive] = useState(slug(menu[0].category));
  const suppressSpy = useRef(false);
  const suppressTimer = useRef(null);

  /* Manual scroll instead of letting the browser follow the #anchor.
     e.preventDefault() stops any navigation/re-render that would reset
     React state (and wipe the active highlight). */
  const handleClick = (e, id) => {
    e.preventDefault();
    setActive(id);
    suppressSpy.current = true;
    clearTimeout(suppressTimer.current);
    suppressTimer.current = setTimeout(() => {
      suppressSpy.current = false;
    }, 1000);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
/*
  useEffect(() => {
    const ids = menu.map((cat) => slug(cat.category));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        if (suppressSpy.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach((sec) => observer.observe(sec));

    const onScroll = () => {
      if (suppressSpy.current) return;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) setActive(ids[ids.length - 1]);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      clearTimeout(suppressTimer.current);
    };
  }, []);
*/
  return (
    <div className="page">
      <Navbar />
      <main>
        <header className="page-header">
          <p className="section-eyebrow">Menu</p>
          <h1>
            Short, seasonal, <em>from the fire.</em>
          </h1>
          <p className="page-header__lede">
            The menu changes with the market. Tell us about allergies —
            most plates can be adapted.
          </p>
        </header>

        <nav className="menu-nav" aria-label="Menu categories">
          {menu.map((cat) => {
            const id = slug(cat.category);
            return (
              <a
                key={cat.category}
                href={`#${id}`}
                className={active === id ? "is-active" : ""}
                aria-current={active === id ? "true" : undefined}
                onClick={(e) => handleClick(e, id)}
              >
                {cat.category}
              </a>
            );
          })}
        </nav>

        <div className="menu-wrap">
          {menu.map((cat) => (
            <CategorySection
              key={cat.category}
              category={cat.category}
              items={cat.items}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}