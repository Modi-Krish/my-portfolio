import { useRef } from 'react';
import ScrollReveal from './ScrollReveal';

const SKILLS = [
  {
    icon: '⚛️', colorClass: 'skill-card__icon--cyan',
    title: 'Frameworks & Tools',
    desc: 'Building scalable applications with modern frameworks and robust API architectures.',
    tags: ['React.js', 'Django', 'RESTful APIs', 'Node.js', 'Express'],
  },
  {
    icon: '🧠', colorClass: 'skill-card__icon--purple',
    title: 'AI/ML & LLMs',
    desc: 'Developing intelligent systems using computer vision and large language models.',
    tags: ['DeepFace', 'LLM Concepts', 'Prompt Engineering', 'OpenCV', 'TensorFlow'],
  },
  {
    icon: '☁️', colorClass: 'skill-card__icon--blue',
    title: 'Cloud & DevOps',
    desc: 'Managing infrastructure and streamlining development with cloud services and version control.',
    tags: ['AWS', 'Git', 'API Integration', 'Docker', 'CI/CD'],
  },
  {
    icon: '💻', colorClass: 'skill-card__icon--pink',
    title: 'Programming Languages',
    desc: 'Core languages used for backend logic, data processing, and frontend interactions.',
    tags: ['Python', 'JavaScript', 'SQL', 'TypeScript'],
  },
  {
    icon: '🗄️', colorClass: 'skill-card__icon--green',
    title: 'Databases',
    desc: 'Designing and managing efficient data storage solutions for high-performance apps.',
    tags: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    icon: '🛠️', colorClass: 'skill-card__icon--orange',
    title: 'Other Tools',
    desc: 'Additional libraries and tools used for automation and specialized tasks.',
    tags: ['OpenCV', 'gspread', 'Pandas', 'NumPy', 'Agile', 'Scrum'],
  },
];

function SkillCard({ skill, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = '';
  };

  return (
    <ScrollReveal delay={index * 0.1}>
      <div
        className="skill-card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`skill-card__icon ${skill.colorClass}`}>{skill.icon}</div>
        <h3 className="skill-card__title">{skill.title}</h3>
        <p className="skill-card__desc">{skill.desc}</p>
        <div className="skill-card__tags">
          {skill.tags.map((tag) => (
            <span key={tag} className="skill-card__tag">{tag}</span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section__container">
        <ScrollReveal>
          <span className="section__label">Skills & Tools</span>
          <h2 className="section__title">My Tech Arsenal</h2>
          <p className="section__subtitle">Technologies and tools I use to bring ideas to life.</p>
        </ScrollReveal>
        <div className="skills__grid">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.title} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
