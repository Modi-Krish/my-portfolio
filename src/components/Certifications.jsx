import ScrollReveal from './ScrollReveal';

const CERTIFICATIONS = [
  { icon: '☁️', date: 'Jul 2025 — Aug 2025', title: 'WS Academy Graduate', desc: 'Cloud Foundations, Amazon Web Services (AWS). (Completed)' },
  { icon: '🐍', date: 'Nov 2024 — Dec 2024', title: 'Python Programming', desc: 'Etrain (Score: 90%)' },
  { icon: '🛡️', date: 'Sep 2024 — Oct 2024', title: 'Cybersecurity', desc: 'Introduction to Cybersecurity, Cisco. (Completed)' },
];

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="section__container">
        <ScrollReveal>
          <span className="section__label">Learning</span>
          <h2 className="section__title">Courses &<br />Certifications</h2>
        </ScrollReveal>
        <div className="achievements__grid">
          {CERTIFICATIONS.map((item) => (
            <ScrollReveal key={item.title}>
              <div className="achievement-card">
                <div className="achievement-card__icon">{item.icon}</div>
                <div className="timeline__date">{item.date}</div>
                <h3 className="achievement-card__title">{item.title}</h3>
                <p className="achievement-card__desc">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
