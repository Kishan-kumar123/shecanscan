import { useEffect, useState } from "react";
import "./index.css";
import {
  initialFaqs,
  initialProfiles,
  initialServices,
  initialStats,
  logo,
  navLinks,
} from "./data";

function Reveal({ children, className = "" }) {
  return <div className={`${className} reveal`}>{children}</div>;
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Client Datasets
  const [faqs] = useState(initialFaqs);
  const [profiles] = useState(initialProfiles);
  const [services] = useState(initialServices);
  const [stats] = useState(initialStats);

  // Intersection observer for scroll animations
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const siblings = entry.target.parentElement?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
          const index = siblings ? Array.from(siblings).indexOf(entry.target) : 0;
          window.setTimeout(() => entry.target.classList.add("visible"), Math.min(Math.max(index, 0) * 80, 400));
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((element) => observer.observe(element));

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "home";
      document.querySelectorAll("section[id]").forEach((section) => {
        if (window.scrollY >= section.offsetTop - 100) current = section.id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  };

  const openMobile = () => {
    setMobileOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleAnchor = (event, targetId) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;
    const navHeight = document.getElementById("main-nav")?.offsetHeight ?? 72;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navHeight - 16, behavior: "smooth" });
    closeMobile();
  };

  return (
    <div className="site-shell">
      {/* ===== NAVIGATION ===== */}
      <nav id="main-nav" className={scrolled ? "scrolled" : ""}>
        <a className="logo" href="#home" onClick={(event) => handleAnchor(event, "home")}>
          <img src={logo} alt="She Can Scan logo" className="site-logo" />
        </a>
        <ul className="nav-links">
          {navLinks.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} className={activeSection === id ? "active" : ""} onClick={(event) => handleAnchor(event, id)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          <a href="#cta" className="btn btn-primary" onClick={(event) => handleAnchor(event, "cta")}>
            Book a Screening
          </a>
          <a href="tel:+918800633291" className="btn btn-outline call-btn">
            📞 8800633291
          </a>
        </div>
        <button className="hamburger" aria-label="Open menu" aria-expanded={mobileOpen} onClick={openMobile}>
          <span /><span /><span />
        </button>
      </nav>

      {/* ===== MOBILE NAV DRAWER ===== */}
      <div className={`mobile-nav-overlay ${mobileOpen ? "open" : ""}`} onClick={closeMobile} />
      <aside className={`mobile-nav ${mobileOpen ? "open" : ""}`} aria-hidden={!mobileOpen}>
        <button className="mobile-nav-close" aria-label="Close menu" onClick={closeMobile}>×</button>
        <ul>
          {navLinks.map(([label, id]) => (
            <li key={id}><a href={`#${id}`} onClick={(event) => handleAnchor(event, id)}>{label}</a></li>
          ))}
        </ul>
        <div className="mobile-nav-actions">
          <a href="#cta" className="btn btn-primary" onClick={(event) => handleAnchor(event, "cta")}>
            Book Screening
          </a>
          <a href="tel:+918800633291" className="btn btn-outline">
            📞 Call: 8800633291
          </a>
        </div>
      </aside>

      <main>
        {/* ===== HERO SECTION ===== */}
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="hero-badge">🎗️ Women's Preventive Health</div>
            <h1>Early Detection.<br />Better Outcomes.<br /><em>Healthier Lives.</em></h1>
            <p className="hero-desc">
              At She Can Scan, we believe that the best way to fight cancer is to find it before symptoms appear. Regular screening can detect abnormalities at an early stage — when treatment is often simpler, less invasive, and more successful.
            </p>
            <p className="hero-mission">
              Our mission is to make breast and cervical cancer screening accessible, comfortable, and empowering for every woman.
            </p>
            <p className="hero-tagline">Don't wait for symptoms. Screen today for a healthier tomorrow.</p>
            <div className="hero-actions">
              <a href="#cta" className="btn btn-primary btn-lg" onClick={(event) => handleAnchor(event, "cta")}>
                Book Your Screening Now →
              </a>
              <a href="#screening" className="btn btn-outline btn-lg" onClick={(event) => handleAnchor(event, "screening")}>
                Know Your Risk
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-icon">🩺</div>
              <h3>Screening Saves Lives</h3>
              <p>Early detection gives you the best chance for successful treatment and long-term health. Take the first step today.</p>
              <div className="hero-card-stats">
                <div className="hero-card-stat"><span className="num">90%+</span><span className="label">Survival Rate</span></div>
                <div className="hero-card-stat"><span className="num">Early</span><span className="label">Detection</span></div>
                <div className="hero-card-stat"><span className="num">100%</span><span className="label">Confidential</span></div>
              </div>
              <div className="hero-floating">
                <div className="float-icon">💗</div>
                <strong>Trusted Care</strong>
                <span>Compassionate female healthcare professionals every step of the way.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STATS RIBBON ===== */}
        <div className="stats-ribbon reveal">
          {stats.map((st) => (
            <div key={st.id}>
              <div className="stat-num">{st.number}</div>
              <div className="stat-label">{st.label}</div>
            </div>
          ))}
        </div>

        {/* ===== WHY SCREENING ===== */}
        <section className="why-section" id="screening">
          <Reveal>
            <div className="section-label">Why Screening Matters</div>
            <h2 className="section-title">Screening Finds What Symptoms Can't</h2>
            <p className="why-intro">
              Many women with early breast or cervical cancer have no symptoms at all. Screening helps identify changes before they become serious, giving you the best chance for successful treatment and long-term health.
            </p>
          </Reveal>
          <div className="section-label reveal">Benefits of Regular Screening</div>
          <div className="benefits-grid">
            {[
              ["🔬", "pink-bg", "Earliest Detection", "Detects cancer at its earliest and most treatable stage, when outcomes are best."],
              ["🛡️", "teal-bg", "Precancerous Changes", "Identifies precancerous changes before cancer develops, enabling preventive action."],
              ["📈", "pink-bg", "Better Outcomes", "Improves treatment outcomes and survival rates through timely intervention."],
              ["💊", "teal-bg", "Less Aggressive Treatment", "Reduces the need for aggressive treatments by catching issues early."],
              ["🕊️", "pink-bg", "Peace of Mind", "Provides peace of mind through preventive care and proactive health management."],
            ].map(([icon, tone, title, text]) => (
              <div className="benefit-card reveal" key={title}>
                <div className={`benefit-icon ${tone}`}>{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== SERVICES SECTION ===== */}
        <section className="services-section" id="services">
          <div className="text-center reveal">
            <div className="section-label">Our Screening Services</div>
            <h2 className="section-title">Comprehensive Care for Every Woman</h2>
            <p className="section-sub">
              We offer a full range of breast and cervical cancer screening services, using modern technology and evidence-based protocols for accurate, compassionate care.
            </p>
          </div>
          <div className="services-wrapper">
            {services.map((srv) => (
              <div
                key={srv.id}
                className={`service-panel ${srv.category === "breast" ? "breast reveal-left" : "cervical reveal-right"}`}
              >
                <div className="service-panel-header">
                  <div className="service-panel-icon">{srv.icon}</div>
                  <h3>{srv.title}</h3>
                </div>
                <ul className="service-list">
                  {srv.items.map((item, idx) => (
                    <li key={`${item}-${idx}`}>
                      <span className="check">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className="btn btn-primary service-book-btn"
                  onClick={(event) => handleAnchor(event, "cta")}
                >
                  Book {srv.title}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ===== ELIGIBILITY SECTION ===== */}
        <section className="eligibility-section" id="who-should-screen">
          <div className="text-center reveal">
            <div className="section-label">Who Should Get Screened?</div>
            <h2 className="section-title">Screening Is Recommended For</h2>
            <p className="section-sub">
              Early screening is one of the most important steps you can take for your health. Find out if you should schedule your screening today.
            </p>
          </div>
          <div className="eligibility-grid">
            {[
              ["👩", "Women Aged 21+", "Cervical screening as advised by healthcare guidelines for early detection and prevention."],
              ["👩‍🦳", "Women Aged 40+", "Breast screening recommended based on age and individual risk assessment factors."],
              ["👨‍👩‍👧", "Family History", "Women with a family history of breast or cervical cancer should screen regularly."],
              ["🩺", "Persistent Concerns", "Women with persistent breast or gynecological concerns should seek screening promptly."],
              ["💗", "Every Health-Conscious Woman", "Every woman who values preventive healthcare and wants to stay ahead of potential risks."],
            ].map(([icon, title, text]) => (
              <div className="eligibility-card reveal" key={title}>
                <div className="eligibility-icon">{icon}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PROMISE SECTION ===== */}
        <section className="promise-section" id="about">
          <div className="text-center reveal">
            <div className="section-label">Our Promise</div>
            <h2 className="section-title">What You Can Expect at She Can Scan</h2>
            <p className="section-sub">
              We're committed to providing an experience that is as caring and supportive as it is clinically excellent.
            </p>
          </div>
          <div className="promise-grid">
            {[
              ["Confidential & Respectful", "Your privacy and dignity are protected at every step of your screening journey."],
              ["Female Professionals", "Compassionate female healthcare professionals who understand your needs and concerns."],
              ["Evidence-Based Protocols", "Screening methods guided by the latest clinical evidence and international guidelines."],
              ["Modern Technology", "State-of-the-art screening technology including AI-assisted analysis for accurate results."],
              ["Personalized Guidance", "Individualized follow-up support and guidance tailored to your specific health profile."],
            ].map(([title, text]) => (
              <div className="promise-card reveal" key={title}>
                <div className="promise-check">✔</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PROFILES SECTION ===== */}
        {profiles.map((profile) => (
          <section className="founder-section" id={profile.id} key={profile.id}>
            <div className="founder-grid">
              <div className="founder-img-wrapper reveal-left">
                <img src={profile.image} alt={profile.alt} />
              </div>
              <div className="founder-content reveal-right">
                <div className="section-label">{profile.label}</div>
                <h2>{profile.name}</h2>
                <div className="founder-role">{profile.role}</div>
                <p className="founder-bio">{profile.bio}</p>
                <div className="founder-mission">
                  <p>{profile.quote}</p>
                </div>
                <div className="founder-details">
                  {profile.columns.map((column) => (
                    <div key={column.heading}>
                      <h4>{column.heading}</h4>
                      <ul className="founder-list">
                        {column.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ===== CALL TO ACTION SECTION ===== */}
        <section className="cta-section" id="cta">
          <div className="cta-content reveal">
            <div className="section-label">Your Health Can't Wait</div>
            <h2 className="cta-headline">A Simple Screening Today Can Make All the Difference Tomorrow</h2>
            <p className="cta-sub">
              Because early detection isn't just about finding disease — it's about <strong>protecting your future</strong>.
            </p>
            <p className="cta-emphasis">
              Take charge of your health with She Can Scan. Together, we can detect early, treat effectively, and save lives.
            </p>
            <div className="cta-actions">
              <a href="tel:+918800633291" className="btn btn-primary btn-lg">
                🗓️ Schedule Your Appointment
              </a>
              <a href="tel:+918800633291" className="btn btn-outline btn-lg">
                📞 Request Free Callback
              </a>
            </div>
            <div className="cta-secondary-links">
              <a href="#screening" onClick={(event) => handleAnchor(event, "screening")}>🧠 Know Your Risk →</a>
              <a href="tel:+918800633291">💬 Talk to Our Expert →</a>
              <a href="#services" onClick={(event) => handleAnchor(event, "services")}>🌿 Start Your Preventive Health Journey →</a>
            </div>
          </div>
        </section>

        {/* ===== FAQ SECTION ===== */}
        <section className="faq-section" id="faq">
          <div className="text-center reveal">
            <div className="section-label">Frequently Asked Questions</div>
            <h2 className="section-title">Everything You Need to Know</h2>
            <p className="section-sub">
              We understand you may have questions. Here are answers to the most common ones about our screening services.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const open = openFaq === index;
              return (
                <div className={`faq-item reveal ${open ? "open" : ""}`} key={faq.question}>
                  <button className="faq-question" onClick={() => setOpenFaq(open ? null : index)} aria-expanded={open}>
                    {faq.question}
                    <span className="faq-toggle">+</span>
                  </button>
                  <div className="faq-answer">{faq.answer}</div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="logo" href="#home" onClick={(event) => handleAnchor(event, "home")}>
              <img src={logo} alt="She Can Scan logo" className="site-logo" />
            </a>
            <p>
              Empowering every woman with accessible, comfortable, and life-saving cancer screening. Because early detection protects your future.
            </p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {[
                ["Home", "home"],
                ["Why Screening", "screening"],
                ["Our Services", "services"],
                ["Who Should Screen", "who-should-screen"],
                ["FAQ", "faq"],
              ].map(([label, id]) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={(event) => handleAnchor(event, id)}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {["Breast Screening", "Cervical Screening", "AI-Thermal Screening", "Risk Assessment", "Specialist Referral"].map((label) => (
                <li key={label}>
                  <a href="#services" onClick={(event) => handleAnchor(event, "services")}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+918800633291">📞 Call: 8800633291</a></li>
              <li><a href="mailto:info@shecanscan.com">📧 info@shecanscan.com</a></li>
              <li><a href="#cta" onClick={(event) => handleAnchor(event, "cta")}>📍 Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 She Can Scan. All rights reserved.</span>
          <div>
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms &amp; Conditions</a>
            <a href="#home">Cancellation &amp; Refund</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
