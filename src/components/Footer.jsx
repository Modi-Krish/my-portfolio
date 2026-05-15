export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">© 2026 Modi Krish. Crafted with ❤️ and a lot of ☕</p>
        <div className="footer__socials">
          <a href="https://github.com/Modi-Krish" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/modikrish0311" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://wa.me/918160443606" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="WhatsApp">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="mailto:kgmodi3112004@gmail.com" className="footer__social" aria-label="Email">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
