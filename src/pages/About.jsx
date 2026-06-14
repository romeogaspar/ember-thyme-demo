import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useReveal from "../hooks/useReveal";
import "../styles/Restaurant.css";

function Story() {
  const ref = useReveal();
  return (
    <section className="story reveal" ref={ref}>
      <figure className="story__image">
        <img src="/images/about-kitchen.jpg" alt="The wood oven at work" loading="lazy" />
      </figure>
      <div className="story__text">
        <p className="section-eyebrow">Our story</p>
        <h2 className="section-title">It started with an oven.</h2>
        <p>
          Ember &amp; Thyme began with a hand-built wood oven and a simple
          conviction: that fire, good produce, and patience beat complexity
          every time. No gas line in the kitchen — everything is cooked over
          wood and coals, the way it's been done forever.
        </p>
        <p>
          The menu is short on purpose. We buy from growers and fishers we
          know by name, change the board with the seasons, and serve it in a
          room built for lingering.
        </p>
      </div>
    </section>
  );
}

function Quote() {
  const ref = useReveal();
  return (
    <section className="quote reveal" ref={ref}>
      <blockquote>
        &ldquo;The fire decides when it's ready. Our job is to listen.&rdquo;
      </blockquote>
      <cite>— Head Chef</cite>
    </section>
  );
}

function Values() {
  const ref = useReveal();
  const VALUES = [
    {
      title: "Open flame",
      body: "Every dish touches the wood oven or the grill. Smoke is our seasoning.",
    },
    {
      title: "Close to home",
      body: "Produce, fish, and meat sourced from people we know, as near as the season allows.",
    },
    {
      title: "Room to linger",
      body: "No turn times posted on the wall. Dinner takes as long as dinner takes.",
    },
  ];
  return (
    <section className="values reveal" ref={ref}>
      <div className="values__grid">
        {VALUES.map((v) => (
          <div className="values__card" key={v.title}>
            <h3>{v.title}</h3>
            <p>{v.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <header className="page-header">
          <p className="section-eyebrow">About</p>
          <h1>
            Fire first. <em>Everything else follows.</em>
          </h1>
        </header>
        <Story />
        <Quote />
        <Values />
      </main>
      <Footer />
    </div>
  );
}
