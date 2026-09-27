import { Link } from "react-router-dom"

const heroImage =
  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1400&q=90"

function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-layout">
        <div className="hero-copy reveal-item">
          <span className="hero-kicker">
            <span className="hero-kicker-dot" />
            GOOD FOOD STARTS HERE
          </span>
          <h1>
            A little hungry?
            <br />
            <span>Let’s fix that.</span>
          </h1>
          <p>
            Tell us what’s in your kitchen. We’ll help turn it into something
            delicious, comforting, and worth coming back for.
          </p>
          <div className="hero-actions">
            <a className="button button-sun" href="#popular-recipes">
              Find tonight’s dinner <span aria-hidden="true">↗</span>
            </a>
            <Link className="hero-secondary-link" to="/weekly">
              Plan my week <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="hero-social-proof">
            <span className="proof-avatars" aria-hidden="true">
              <span>🍅</span><span>🌿</span><span>🍋</span>
            </span>
            <span><strong>Fresh ideas,</strong> made for real kitchens</span>
          </div>
        </div>

        <div className="hero-photo-wrap reveal-item">
          <img
            className="hero-photo"
            src={heroImage}
            alt="Freshly made pasta with herbs, ready to enjoy"
          />
          <div className="hero-photo-shade" />
          <div className="hero-photo-caption">
            <span className="caption-label">TONIGHT’S LITTLE JOY</span>
            <strong>Fresh pasta, big comfort.</strong>
            <span>Simple ingredients · 25 minutes</span>
          </div>
          <div className="hero-sticker" aria-label="Made with love">
            <span>♡</span>
            MADE WITH<br />A LITTLE LOVE
          </div>
        </div>
      </div>
      <div className="hero-bottom-note">
        <span>GOOD FOOD, NO FUSS</span>
        <span className="note-line" />
        <span>SCROLL FOR A LITTLE INSPIRATION ↓</span>
      </div>
    </section>
  )
}

export default Hero
