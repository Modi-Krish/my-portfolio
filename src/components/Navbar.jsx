import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ onResumeClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      let current = '#home';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = `#${section.getAttribute('id')}`;
        }
      });
      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const handleResumeClick = (e) => {
    e.preventDefault();
    onResumeClick();
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar__inner">
        <a href="#" className="navbar__logo" onClick={(e) => handleNavClick(e, '#home')}>
          MK.
        </a>
        <ul className={`navbar__links ${menuOpen ? 'open' : ''}`} id="navLinks">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__link ${activeLink === link.href ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#" className="navbar__link" onClick={handleResumeClick}>
              Resume
            </a>
          </li>
        </ul>
        <button className="navbar__cta" onClick={handleResumeClick}>
          <i className="fa-solid fa-file-pdf"></i> Resume
        </button>
        <button
          className="navbar__menu-btn"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </button>
      </div>
    </nav>
  );
}
