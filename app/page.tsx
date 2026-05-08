const primaryLinks = [
  { label: 'Student Dashboard', icon: 'fa-solid fa-chart-line', href: '#', note: 'Track progress, lessons, and academic milestones.' },
  { label: 'Student Main Portal', icon: 'fa-solid fa-graduation-cap', href: '#', note: 'Open your central learning workspace.' },
  { label: 'Student Subjects', icon: 'fa-solid fa-book-open-reader', href: '#', note: 'Explore subjects, assignments, and study guides.' },
  { label: 'Parent Sign-Up', icon: 'fa-solid fa-user-shield', href: '#', note: 'Create a parent profile and receive academy updates.' },
  { label: 'Student Registration', icon: 'fa-solid fa-pen-to-square', href: '#', note: 'Register for upcoming programs and academy cohorts.' },
  { label: 'Contact Support', icon: 'fa-solid fa-headset', href: '#', note: 'Get friendly help from the Decipher support team.' }
];

const communityLinks = [
  { label: 'Join Parent WhatsApp Community', icon: 'fa-brands fa-whatsapp', href: '#', note: 'Connect with parents, mentors, and announcements.' },
  { label: 'Join Digital Skills Community', icon: 'fa-solid fa-laptop-code', href: '#', note: 'Learn practical technology and digital career skills.' },
  { label: 'TikTok Page', icon: 'fa-brands fa-tiktok', href: '#', note: 'Watch quick tips, student stories, and academy clips.' },
  { label: 'Instagram Page', icon: 'fa-brands fa-instagram', href: '#', note: 'Follow highlights, updates, and learning inspiration.' }
];

const academyLinks = [
  { label: 'STEM Programs', icon: 'fa-solid fa-atom', href: '#', note: 'Discover science, technology, engineering, and math tracks.' },
  { label: 'Academy Landing Page', icon: 'fa-solid fa-globe', href: '#', note: 'Visit the main Decipher Academy website experience.' }
];

const socials = [
  { label: 'TikTok', icon: 'fa-brands fa-tiktok', href: '#' },
  { label: 'Instagram', icon: 'fa-brands fa-instagram', href: '#' },
  { label: 'WhatsApp', icon: 'fa-brands fa-whatsapp', href: '#' },
  { label: 'Website', icon: 'fa-solid fa-earth-africa', href: '#' }
];

function LinkCard({ item, featured = false }: { item: { label: string; icon: string; href: string; note: string }; featured?: boolean }) {
  return (
    <a className={`link-card ${featured ? 'link-card-featured' : ''}`} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
      <span className="link-icon" aria-hidden="true">
        <i className={item.icon}></i>
      </span>
      <span className="link-copy">
        <strong>{item.label}</strong>
        <small>{item.note}</small>
      </span>
      <span className="link-arrow" aria-hidden="true">
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </span>
    </a>
  );
}

export default function HomePage() {
  return (
    <main className="decipher-page">
      <div className="ambient ambient-one" aria-hidden="true"></div>
      <div className="ambient ambient-two" aria-hidden="true"></div>
      <div className="ambient ambient-three" aria-hidden="true"></div>

      <section className="hero-section reveal">
        <div className="hero-orbit" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="logo-shell" aria-label="Decipher Academy logo placeholder">
          <span className="logo-mark">DA</span>
          <span className="logo-glow"></span>
        </div>

        <p className="eyebrow"><i className="fa-solid fa-sparkles"></i> Premium Learning Access Hub</p>
        <h1>Decipher Academy</h1>
        <p className="tagline">Making education easier, smarter, and more accessible.</p>
        <p className="welcome-text">
          Access student portals, parent resources, STEM programs, digital communities, and academy updates all in one place.
        </p>
      </section>

      <section className="links-panel reveal reveal-delay-1" aria-labelledby="quick-access-title">
        <div className="section-heading">
          <p className="section-kicker">Quick Access</p>
          <h2 id="quick-access-title">Everything students and parents need</h2>
        </div>

        <div className="link-group">
          <h3><i className="fa-solid fa-star"></i> Primary Links</h3>
          <div className="link-grid primary-grid">
            {primaryLinks.map((item) => <LinkCard key={item.label} item={item} featured />)}
          </div>
        </div>

        <div className="link-group two-column-groups">
          <div>
            <h3><i className="fa-solid fa-people-group"></i> Community Links</h3>
            <div className="link-grid compact-grid">
              {communityLinks.map((item) => <LinkCard key={item.label} item={item} />)}
            </div>
          </div>
          <div>
            <h3><i className="fa-solid fa-school"></i> Academy Links</h3>
            <div className="link-grid compact-grid">
              {academyLinks.map((item) => <LinkCard key={item.label} item={item} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="connected-section reveal reveal-delay-2" aria-labelledby="connected-title">
        <div className="connected-card">
          <div className="section-heading compact-heading">
            <p className="section-kicker">We Are Connected</p>
            <h2 id="connected-title">Stay close to every learning moment</h2>
          </div>
          <p>Stay connected with Decipher Academy across our learning communities and social platforms.</p>
          <div className="social-row" aria-label="Decipher Academy social links">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                <i className={social.icon}></i>
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="announcement-section reveal reveal-delay-3" aria-label="Latest Update">
        <div className="announcement-card">
          <span className="announcement-icon" aria-hidden="true"><i className="fa-solid fa-bullhorn"></i></span>
          <div>
            <p className="section-kicker">Latest Update</p>
            <h2>Student registrations are now open</h2>
            <p>Student registrations for upcoming STEM and Digital Skills programs are now open.</p>
          </div>
          <a href="#" className="announcement-button">Register Now <i className="fa-solid fa-arrow-right"></i></a>
        </div>
      </section>

      <footer className="decipher-footer reveal reveal-delay-3">
        <p>© Decipher Academy — Elevating Education Through Innovation</p>
      </footer>
    </main>
  );
}
