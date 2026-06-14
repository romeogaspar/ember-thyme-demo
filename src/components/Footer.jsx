import { HOURS, ADDRESS, PHONE, EMAIL } from "../data/details";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <p className="footer__brand">
            Ember <span>&amp;</span> Thyme
          </p>
          <p className="footer__text">
            Wood-fired kitchen &amp; bar.
            <br />
            Seasonal plates, open flame, good company.
          </p>
        </div>

        <div>
          <p className="footer__eyebrow">Hours</p>
          {HOURS.map((row) => (
            <p className="footer__text footer__hours-row" key={row.days}>
              <span>{row.days}</span>
              <span>{row.time}</span>
            </p>
          ))}
        </div>

        <div>
          <p className="footer__eyebrow">Find us</p>
          <p className="footer__text">
            {ADDRESS.line1}
            <br />
            {ADDRESS.line2}
          </p>
          <a className="footer__text footer__link" href={`tel:${PHONE.replace(/\s/g, "")}`}>
            {PHONE}
          </a>
          <a className="footer__text footer__link" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>

        <div>
          <p className="footer__eyebrow">Follow</p>
          <a className="footer__text footer__link" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a className="footer__text footer__link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>
      </div>

      <div className="footer__base">
        <span>© {new Date().getFullYear()} Ember &amp; Thyme</span>
        <span>Site by cessyrona.com</span>
      </div>
    </footer>
  );
}
