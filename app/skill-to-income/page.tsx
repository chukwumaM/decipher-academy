import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skill to Income System | Webinar Deck',
  description: 'A premium webinar presentation deck for The Global Mira digital product launch.'
};

type Slide = {
  number: number;
  kicker?: string;
  title: string;
  subtitle?: string;
  body?: string;
  quote?: string;
  visual: string;
  icon: string;
  bullets?: string[];
  layout?: 'hero' | 'split' | 'roadmap' | 'quote' | 'offer' | 'table' | 'list';
};

const timeline = [
  ['November 2024', 'Learned Social Media Management'],
  ['January 2025', 'Built Portfolio'],
  ['February 2025', 'Got First Opportunity'],
  ['2025–2026', 'Worked With Multiple Clients']
];

const modules = [
  'Why Most People Stay Stuck',
  'Choosing The Right Skill Path',
  'What To Do After Learning A Skill',
  'How I Got Opportunities',
  'Building An Opportunity System',
  '30-Day Action Plan'
];

const valueStack = [
  ['1-Hour Consultation', '₦30,000'],
  ['Portfolio Checklist', '₦5,000'],
  ['Profile Optimization Guide', '₦3,000'],
  ['Application Tracker', '₦3,000'],
  ['Outreach Tracker', '₦3,000'],
  ['Skill Selection Worksheet', '₦3,000'],
  ['Accountability Community', '₦15,000'],
  ['Skill to Income Training Modules', '₦10,000']
];

const slides: Slide[] = [
  {
    number: 1,
    kicker: 'Title',
    title: 'SKILL TO INCOME',
    subtitle: 'Why Most People Never Make Money From The Skills They Learn',
    body: 'From Learning → Positioning → Opportunities · Your Name · The Global Mira',
    visual: 'Learning staircase to income',
    icon: 'fa-solid fa-stairs',
    layout: 'hero'
  },
  {
    number: 2,
    kicker: 'Welcome',
    title: 'Before We Begin...',
    bullets: ["You've learned a skill", "You're struggling to get opportunities", "You're unsure what to do next"],
    body: 'Type “ME” if this sounds like you.',
    visual: 'Audience illustration',
    icon: 'fa-solid fa-people-group',
    layout: 'list'
  },
  {
    number: 3,
    kicker: 'The Big Problem',
    title: 'The Problem Is NOT Learning A Skill',
    quote: 'INFORMATION ≠ RESULTS',
    bullets: ['Information', 'Implementation', 'Consistency', 'Results'],
    visual: 'Process diagram',
    icon: 'fa-solid fa-diagram-project',
    layout: 'roadmap'
  },
  {
    number: 4,
    kicker: 'My Story',
    title: 'From Learning To Client Opportunities',
    body: 'A simple timeline of action, proof, and visibility.',
    visual: 'Timeline infographic',
    icon: 'fa-solid fa-timeline',
    layout: 'roadmap'
  },
  {
    number: 5,
    kicker: 'The Question',
    title: 'The Question That Changed Everything',
    quote: '“What Did I Do Differently?”',
    visual: 'Question mark illustration',
    icon: 'fa-solid fa-circle-question',
    layout: 'quote'
  },
  {
    number: 6,
    kicker: 'The Real Difference',
    title: 'Same Information. Different Results.',
    visual: 'Side-by-side comparison',
    icon: 'fa-solid fa-scale-balanced',
    layout: 'split'
  },
  {
    number: 7,
    kicker: 'Why People Stay Stuck',
    title: 'The 4 Stages Of Being Stuck',
    bullets: ['Confused Learner', 'Skilled But Invisible', 'Portfolio But No Opportunities', 'Inconsistent Implementer'],
    visual: 'Roadmap',
    icon: 'fa-solid fa-route',
    layout: 'roadmap'
  },
  {
    number: 8,
    kicker: 'Stage 1',
    title: 'The Confused Learner',
    bullets: ['Too many options', 'Too much information', 'Fear of choosing wrongly', 'Constant overthinking'],
    visual: 'Maze illustration',
    icon: 'fa-solid fa-map',
    layout: 'list'
  },
  {
    number: 9,
    kicker: 'Stage 2',
    title: 'Skilled But Invisible',
    bullets: ['Has skill', 'Nobody knows', 'No visibility', 'No proof'],
    visual: 'Person hidden in crowd',
    icon: 'fa-solid fa-user-secret',
    layout: 'list'
  },
  {
    number: 10,
    kicker: 'Stage 3',
    title: 'Portfolio But No Opportunities',
    bullets: ['Portfolio exists', 'No applications', 'No outreach', 'No networking'],
    visual: 'Closed door illustration',
    icon: 'fa-solid fa-door-closed',
    layout: 'list'
  },
  {
    number: 11,
    kicker: 'Stage 4',
    title: 'Inconsistent Implementer',
    bullets: ['Starts often', 'Stops often', 'No tracking', 'No accountability'],
    visual: 'Broken staircase',
    icon: 'fa-solid fa-chart-simple',
    layout: 'list'
  },
  {
    number: 12,
    kicker: 'The Difference Maker',
    title: 'The 5 Things I Did Differently',
    bullets: ['Started Before Ready', 'Built Proof Before Clients', 'Followed Structure', 'Tracked Actions', 'Stayed Visible'],
    visual: 'Five pillars',
    icon: 'fa-solid fa-columns',
    layout: 'roadmap'
  },
  { number: 13, kicker: 'Lesson 1', title: 'Stop Waiting To Feel Ready', quote: 'Action creates confidence.', visual: 'Rocket launch', icon: 'fa-solid fa-rocket', layout: 'quote' },
  { number: 14, kicker: 'Lesson 2', title: 'Build Proof Before Clients', quote: 'People trust proof faster than promises.', visual: 'Portfolio samples', icon: 'fa-solid fa-briefcase', layout: 'quote' },
  { number: 15, kicker: 'Lesson 3', title: 'Follow A Structure', quote: 'Random actions create random results.', visual: 'Roadmap illustration', icon: 'fa-solid fa-signs-post', layout: 'quote' },
  { number: 16, kicker: 'Lesson 4', title: 'Track Everything', quote: 'What gets tracked gets improved.', visual: 'Tracker dashboard', icon: 'fa-solid fa-chart-line', layout: 'quote' },
  { number: 17, kicker: 'Lesson 5', title: 'Stay Visible', quote: 'Opportunities rarely find invisible people.', visual: 'Spotlight illustration', icon: 'fa-solid fa-lightbulb', layout: 'quote' },
  { number: 18, kicker: 'The Missing Piece', title: 'INFORMATION IS NOT THE PROBLEM', quote: 'IMPLEMENTATION IS', visual: 'Puzzle piece', icon: 'fa-solid fa-puzzle-piece', layout: 'quote' },
  { number: 19, kicker: 'Introducing', title: 'THE SKILL TO INCOME SYSTEM', subtitle: 'A practical implementation path from learning to opportunity.', visual: 'Premium product mockup', icon: 'fa-solid fa-box-open', layout: 'hero' },
  { number: 20, kicker: 'What’s Inside', title: 'Six Modules Built For Implementation', bullets: modules, visual: 'Course module grid', icon: 'fa-solid fa-layer-group', layout: 'roadmap' },
  { number: 21, kicker: 'Bonuses', title: 'Tools To Help You Take Action', bullets: ['Portfolio Checklist', 'Profile Optimization Guide', 'Application Tracker', 'Outreach Tracker', 'Skill Selection Worksheet', 'Accountability Community'], visual: 'Gift box', icon: 'fa-solid fa-gift', layout: 'list' },
  { number: 22, kicker: 'Value Stack', title: 'Everything You Get Today', visual: 'Value stack table', icon: 'fa-solid fa-table-list', layout: 'table' },
  { number: 23, kicker: 'Today’s Offer', title: 'Early Access Price', subtitle: 'Instead of ₦72,000', quote: 'Today: ₦3,000', visual: 'Price drop', icon: 'fa-solid fa-tags', layout: 'offer' },
  { number: 24, kicker: 'Early Access Deadline', title: 'Ends When This Webinar Ends', subtitle: 'After that: ₦5,000', visual: 'Countdown clock', icon: 'fa-solid fa-clock', layout: 'offer' },
  { number: 25, kicker: 'Giveaway', title: 'Register Today For A Private 1:1 Chance', body: 'Win a personal portfolio audit or clarity session focused on what will work for you personally, not generic advice.', visual: 'Gift illustration', icon: 'fa-solid fa-award', layout: 'hero' },
  { number: 26, kicker: 'Who This Is For', title: 'Built For Action-Takers', bullets: ['Students', 'Graduates', 'Freelancers', 'Creators', 'Skill Learners', 'Job Seekers'], visual: 'Diverse audience illustration', icon: 'fa-solid fa-users', layout: 'list' },
  { number: 27, kicker: 'Who This Is Not For', title: 'This Is Not For Everyone', bullets: ['People looking for shortcuts', 'People unwilling to implement', 'People expecting instant success'], visual: 'Warning sign', icon: 'fa-solid fa-triangle-exclamation', layout: 'list' },
  { number: 28, kicker: 'Final Message', title: 'Nothing Changes If Nothing Changes', visual: 'Road splitting into two directions', icon: 'fa-solid fa-road', layout: 'quote' },
  { number: 29, kicker: 'Scan To Join', title: 'Join The Skill To Income System', bullets: ['QR Code', 'Payment Details', 'WhatsApp Link', 'Website Link'], visual: 'QR and payment panel', icon: 'fa-solid fa-qrcode', layout: 'offer' },
  { number: 30, kicker: 'Questions & Answers', title: 'Let’s Talk', visual: 'Conversation illustration', icon: 'fa-solid fa-comments', layout: 'hero' }
];

function SlideVisual({ slide }: { slide: Slide }) {
  if (slide.number === 4) {
    return (
      <div className="deck-timeline">
        {timeline.map(([date, action]) => (
          <div className="deck-timeline-item" key={date}>
            <strong>{date}</strong>
            <span>{action}</span>
          </div>
        ))}
      </div>
    );
  }

  if (slide.layout === 'split') {
    return (
      <div className="comparison-grid">
        <div className="comparison-card muted-card">
          <span>Person A</span>
          <p>Learned skill · Stopped · Waited</p>
          <strong>No opportunities</strong>
        </div>
        <div className="comparison-card success-card">
          <span>Person B</span>
          <p>Implemented · Built proof · Stayed visible</p>
          <strong>Opportunities</strong>
        </div>
      </div>
    );
  }

  if (slide.layout === 'table') {
    return (
      <div className="value-table-wrap">
        <table className="value-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {valueStack.map(([item, value]) => (
              <tr key={item}>
                <td>{item}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total Value</td>
              <td>₦72,000</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }

  if (slide.number === 29) {
    return (
      <div className="join-panel">
        <div className="qr-placeholder"><i className="fa-solid fa-qrcode"></i></div>
        <div>
          <span>Payment Details</span>
          <span>WhatsApp Link</span>
          <span>Website Link</span>
        </div>
      </div>
    );
  }

  return (
    <div className="illustration-card" aria-label={slide.visual}>
      <i className={slide.icon}></i>
      <span>{slide.visual}</span>
    </div>
  );
}

function SlideCard({ slide }: { slide: Slide }) {
  return (
    <article className={`webinar-slide slide-${slide.layout ?? 'default'}`} id={`slide-${slide.number}`}>
      <div className="slide-copy">
        <span className="slide-number">Slide {slide.number.toString().padStart(2, '0')}</span>
        {slide.kicker && <p className="deck-kicker">{slide.kicker}</p>}
        <h2>{slide.title}</h2>
        {slide.subtitle && <p className="slide-subtitle">{slide.subtitle}</p>}
        {slide.quote && <blockquote>{slide.quote}</blockquote>}
        {slide.body && <p className="slide-body">{slide.body}</p>}
        {slide.bullets && (
          <ul className={slide.layout === 'roadmap' ? 'roadmap-list' : 'check-list'}>
            {slide.bullets.map((bullet, index) => (
              <li key={bullet}>
                <span>{slide.layout === 'roadmap' ? index + 1 : '✓'}</span>
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="slide-visual">
        <SlideVisual slide={slide} />
      </div>
    </article>
  );
}

export default function SkillToIncomeDeckPage() {
  return (
    <main className="webinar-deck-page">
      <section className="deck-hero">
        <p className="deck-kicker">Premium Webinar Presentation Deck</p>
        <h1>Skill to Income System</h1>
        <p>
          A modern, illustration-led launch deck for skill learners who need a clear path from learning to proof, visibility, and paid opportunities.
        </p>
        <div className="deck-meta">
          <span><i className="fa-solid fa-palette"></i> Deep Purple · Lavender · White</span>
          <span><i className="fa-solid fa-layer-group"></i> 30 Slides</span>
          <span><i className="fa-solid fa-wand-magic-sparkles"></i> Premium Startup Style</span>
        </div>
      </section>

      <section className="slides-grid" aria-label="Skill to Income webinar slides">
        {slides.map((slide) => <SlideCard key={slide.number} slide={slide} />)}
      </section>
    </main>
  );
}
