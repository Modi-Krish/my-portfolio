import { useState, useEffect } from 'react';
import { useCountUp } from '../hooks/useCountUp';
import avatar from '../assets/avatar.jpg';

function StatCounter({ target, label }) {
  const { ref, count } = useCountUp(target);
  return (
    <div className="hero__stat" ref={ref}>
      <div className="hero__stat-value">{count}+</div>
      <div className="hero__stat-label">{label}</div>
    </div>
  );
}

export default function Hero({ onResumeClick }) {
  const [greeting, setGreeting] = useState('');
  const fullGreeting = "Hello, I'm";
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < fullGreeting.length) {
          setGreeting(fullGreeting.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 80);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero section" id="home">
      <div className="hero__container section__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="dot"></span>
            Available for Projects
          </div>
          <p className="hero__greeting">{greeting}</p>
          <h1 className="hero__name">
            Modi<br />
            <span className="hero__name-gradient">Krish</span>
          </h1>
          <div className="hero__roles">
            <span className="hero__role">🧠 AI/ML Specialist</span>
            <span className="hero__role">💻 Full Stack Developer</span>
            <span className="hero__role">📊 Data Scientist</span>
          </div>
          <p className="hero__desc">
            Building intelligent, scalable web applications powered by data-driven insights.
            I transform complex data into impactful solutions and craft beautiful digital experiences.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary" onClick={(e) => handleClick(e, '#projects')}>
              <i className="fa-solid fa-rocket"></i> View My Work
            </a>
            <button className="btn btn--ghost" onClick={onResumeClick}>
              <i className="fa-solid fa-file-pdf"></i> View Resume
            </button>
          </div>
          <div className="hero__stats">
            <StatCounter target={15} label="Projects" />
            <StatCounter target={12} label="Technologies" />
            <StatCounter target={1} label="Year Experience" />
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__avatar-wrapper">
            <div className="hero__avatar-ring"></div>
            <div className="hero__avatar-ring hero__avatar-ring--outer"></div>
            <img src={avatar} alt="Modi Krish" className="hero__avatar" />
          </div>
          <div
            className="hero__float-card hero__float-card--top"
            style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
          >
            <span className="icon">🐍</span>
            <span className="label">Python</span> · <span className="value">Expert</span>
          </div>
          <div
            className="hero__float-card hero__float-card--bottom"
            style={{ transform: `translateY(${-scrollY * 0.6}px)` }}
          >
            <span className="icon">⚛️</span>
            <span className="label">React</span> · <span className="value">Advanced</span>
          </div>
        </div>
      </div>
    </section>
  );
}
