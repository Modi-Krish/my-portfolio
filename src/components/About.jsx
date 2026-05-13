import ScrollReveal from './ScrollReveal';
import avatar from '../assets/avatar.jpg';

<<<<<<< HEAD
import { PROFILE_DATA } from '../constants/profileData';

export default function About() {
  const { about } = PROFILE_DATA;

=======
export default function About() {
>>>>>>> 8ea7f443b164b537bd410630b2e17372391e431c
  return (
    <section className="section" id="about">
      <div className="section__container">
        <ScrollReveal>
          <span className="section__label">About Me</span>
<<<<<<< HEAD
          <h2 className="section__title">{about.greeting}</h2>
        </ScrollReveal>
        <div className="about__grid">
          <ScrollReveal className="about__image-wrapper">
            <img src={avatar} alt={`${PROFILE_DATA.name} - About`} className="about__image" />
=======
          <h2 className="section__title">Turning Data Into<br />Digital Experiences</h2>
        </ScrollReveal>
        <div className="about__grid">
          <ScrollReveal className="about__image-wrapper">
            <img src={avatar} alt="Modi Krish - About" className="about__image" />
>>>>>>> 8ea7f443b164b537bd410630b2e17372391e431c
            <div className="about__image-overlay"></div>
          </ScrollReveal>
          <ScrollReveal className="about__content-wrapper">
            <div className="about__content">
<<<<<<< HEAD
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
=======
              <p className="about__text">
                I'm <strong>Krish Modi</strong>, a Computer Science Engineering student specializing in AI/ML, LLMs, and
                scalable full-stack systems.
                Proficient in developing applications that make use of AI capabilities and are in real-time using
                technologies such as Python, React.js, and Django.
              </p>
              <p className="about__text">
                I have a solid knowledge in backend engineering, cloud computing, and distributed systems. I've developed
                innovative solutions ranging from AI-powered learning monitors with eye-tracking to full-stack civic
                engagement platforms.
              </p>
              <p className="about__text">
                Beyond coding, I'm an AWS Academy Graduate and a winner of multiple ideathons and science project
                competitions. I'm always eager to explore new technologies and tackle complex challenges in distributed
                systems and machine learning.
              </p>
              <div className="about__highlights">
                <div className="about__highlight-card">
                  <div className="about__highlight-icon">🎯</div>
                  <div className="about__highlight-title">Problem Solver</div>
                  <div className="about__highlight-desc">Analytical approach to complex challenges</div>
                </div>
                <div className="about__highlight-card">
                  <div className="about__highlight-icon">🚀</div>
                  <div className="about__highlight-title">Fast Learner</div>
                  <div className="about__highlight-desc">Always adopting the latest technologies</div>
                </div>
                <div className="about__highlight-card">
                  <div className="about__highlight-icon">🤝</div>
                  <div className="about__highlight-title">Team Player</div>
                  <div className="about__highlight-desc">Excellent collaboration & communication</div>
                </div>
                <div className="about__highlight-card">
                  <div className="about__highlight-icon">💡</div>
                  <div className="about__highlight-title">Creative Thinker</div>
                  <div className="about__highlight-desc">Unique solutions with elegant design</div>
                </div>
>>>>>>> 8ea7f443b164b537bd410630b2e17372391e431c
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
