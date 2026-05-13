import ScrollReveal from './ScrollReveal';
import avatar from '../assets/avatar.jpg';

import { PROFILE_DATA } from '../constants/profileData';

export default function About() {
  const { about } = PROFILE_DATA;

  return (
    <section className="section" id="about">
      <div className="section__container">
        <ScrollReveal>
          <span className="section__label">About Me</span>
          <h2 className="section__title">{about.greeting}</h2>
        </ScrollReveal>
        <div className="about__grid">
          <ScrollReveal className="about__image-wrapper">
            <img src={avatar} alt={`${PROFILE_DATA.name} - About`} className="about__image" />
            <div className="about__image-overlay"></div>
          </ScrollReveal>
          <ScrollReveal className="about__content-wrapper">
            <div className="about__content">
              {about.description.map((para, i) => (
                <p key={i} className="about__text" dangerouslySetInnerHTML={{ __html: para.replace(/Krish Modi/g, `<strong>Krish Modi</strong>`) }} />
              ))}
              <div className="about__highlights">
                {about.highlights.map((h, i) => (
                  <div key={i} className="about__highlight-card">
                    <div className="about__highlight-icon">{h.icon}</div>
                    <div className="about__highlight-title">{h.title}</div>
                    <div className="about__highlight-desc">{h.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
