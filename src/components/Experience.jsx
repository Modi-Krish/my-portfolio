import ScrollReveal from './ScrollReveal';
import { PROFILE_DATA } from '../constants/profileData';

// Combine experience and education for the portfolio timeline
const TIMELINE = [
  ...PROFILE_DATA.experience.map(e => ({ ...e, isEdu: false })),
  ...PROFILE_DATA.education.map(e => ({
    date: e.date,
    title: e.degree.replace('(CGPA: 7.36)', ''),
    company: e.institution,
    desc: `Location: ${e.location}`,
    isEdu: true
  }))
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section__container">
        <ScrollReveal>
          <span className="section__label">Experience</span>
          <h2 className="section__title">My Journey</h2>
          <p className="section__subtitle">A timeline of my professional growth and education.</p>
        </ScrollReveal>
        <div className="timeline">
          {TIMELINE.map((item, index) => (
            <ScrollReveal key={index} className="timeline__item-wrapper">
              <div className="timeline__item">
                <div className="timeline__date">{item.date}</div>
                <h3 className="timeline__title">{item.title}</h3>
                <div className="timeline__company">{item.company}</div>
                {!item.isEdu && item.desc ? (
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                    {item.desc.split('|').map((point, i) => (
                      <li key={i} style={{ marginBottom: '0.2rem' }}>{point.trim()}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="timeline__desc">{item.desc}</p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
