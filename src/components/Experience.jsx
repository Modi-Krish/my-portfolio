import ScrollReveal from './ScrollReveal';
<<<<<<< HEAD
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
=======

const TIMELINE = [
  {
    date: 'Nov 2025 — Mar 2026',
    title: 'Operational Intern & Web Developer',
    company: 'Technical Events Cell, Parul University',
    desc: 'Designed and maintained full-stack web applications for event management. Built responsive user interfaces, integrated RESTful APIs, and performed workflow automation to optimize system performance.',
  },
  {
    date: '2023 — Present',
    title: 'B.Tech in Computer Science',
    company: 'Parul Institute of Technology',
    desc: 'Focusing on AI/ML, LLMs, and Scalable Full Stack Systems. Maintaining a 7.36 CGPA and active involvement in technical events, hackathons, and innovative projects.',
  },
  {
    date: '2023 — Present',
    title: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    desc: 'Built multiple specialized web applications including a Civic Issues Reporting Portal (Ongoing) and a Face Recognition Attendance System using Python and OpenCV.',
  },
>>>>>>> 8ea7f443b164b537bd410630b2e17372391e431c
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
<<<<<<< HEAD
          {TIMELINE.map((item, index) => (
            <ScrollReveal key={index} className="timeline__item-wrapper">
=======
          {TIMELINE.map((item) => (
            <ScrollReveal key={item.title} className="timeline__item-wrapper">
>>>>>>> 8ea7f443b164b537bd410630b2e17372391e431c
              <div className="timeline__item">
                <div className="timeline__date">{item.date}</div>
                <h3 className="timeline__title">{item.title}</h3>
                <div className="timeline__company">{item.company}</div>
<<<<<<< HEAD
                {!item.isEdu && item.desc ? (
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                    {item.desc.split('|').map((point, i) => (
                      <li key={i} style={{ marginBottom: '0.2rem' }}>{point.trim()}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="timeline__desc">{item.desc}</p>
                )}
=======
                <p className="timeline__desc">{item.desc}</p>
>>>>>>> 8ea7f443b164b537bd410630b2e17372391e431c
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
