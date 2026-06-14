import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useReveal from "../hooks/useReveal";
import { HOURS, ADDRESS, PHONE, EMAIL } from "../data/details";
import "../styles/Restaurant.css";

/**
 * The reservation form ships with a stub submit. For a real client,
 * wire the TODO to Formspree/EmailJS, a booking system (OpenTable,
 * TableCheck, SevenRooms — usually just their widget or link), or a
 * serverless endpoint. Validation and states are already handled.
 */

const INITIAL = { name: "", email: "", phone: "", date: "", time: "", guests: "2", notes: "" };

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // TODO: replace with the client's booking provider or form service
      await new Promise((res) => setTimeout(res, 600));
      setStatus("sent");
      setForm(INITIAL);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="page">
      <Navbar />
      <main>
        <header className="page-header">
          <p className="section-eyebrow">Find us</p>
          <h1>
            Come hungry, <em>leave slowly.</em>
          </h1>
        </header>

        <section className="contact reveal" ref={ref}>
          <div className="contact__info">
            <p className="footer__eyebrow">Address</p>
            <p className="contact__text">
              {ADDRESS.line1}
              <br />
              {ADDRESS.line2}
            </p>

            <p className="footer__eyebrow">Hours</p>
            {HOURS.map((row) => (
              <p className="contact__text visit__hours-row" key={row.days}>
                <span>{row.days}</span>
                <span>{row.time}</span>
              </p>
            ))}

            <p className="footer__eyebrow">Contact</p>
            <a className="contact__text footer__link" href={`tel:${PHONE.replace(/\s/g, "")}`}>
              {PHONE}
            </a>
            <a className="contact__text footer__link" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>

            <div className="contact__map">
              <iframe
                title="Map to Ember & Thyme"
                src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS.mapQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <form className="reserve-form" id="reserve" onSubmit={handleSubmit}>
            <h2 className="reserve-form__title">Reserve a table</h2>

            <div className="reserve-form__grid">
              <label>
                Name
                <input type="text" value={form.name} onChange={update("name")} required autoComplete="name" />
              </label>
              <label>
                Email
                <input type="email" value={form.email} onChange={update("email")} required autoComplete="email" />
              </label>
              <label>
                Phone
                <input type="tel" value={form.phone} onChange={update("phone")} autoComplete="tel" />
              </label>
              <label>
                Guests
                <select value={form.guests} onChange={update("guests")}>
                  {["1", "2", "3", "4", "5", "6", "7+"].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Date
                <input type="date" value={form.date} onChange={update("date")} required />
              </label>
              <label>
                Time
                <input type="time" value={form.time} onChange={update("time")} required />
              </label>
            </div>

            <label>
              Notes <span className="reserve-form__optional">(allergies, occasions — optional)</span>
              <textarea rows={3} value={form.notes} onChange={update("notes")} />
            </label>

            <button type="submit" className="btn btn--solid" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Request Reservation"}
            </button>

            {status === "sent" && (
              <p className="reserve-form__status" role="status">
                Request received — we'll confirm by email shortly.
              </p>
            )}
            {status === "error" && (
              <p className="reserve-form__status reserve-form__status--error" role="alert">
                Something went wrong. Call us at {PHONE} and we'll sort you out.
              </p>
            )}
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
