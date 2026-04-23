// ===== CURSOR GLOW EFFECT =====
const cursorGlow = document.getElementById('cursorGlow');
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorGlow.style.left = mouseX + 'px';
  cursorGlow.style.top = mouseY + 'px';
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.navbar__link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveLink();
});

// ===== SMOOTH ACTIVE LINK =====
function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// ===== MOBILE MENU TOGGLE =====
const menuBtn = document.getElementById('menuBtn');
const navLinksContainer = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinksContainer.classList.toggle('open');
  const icon = menuBtn.querySelector('i');
  if (navLinksContainer.classList.contains('open')) {
    icon.className = 'fa-solid fa-xmark';
  } else {
    icon.className = 'fa-solid fa-bars';
  }
});

// Close menu on link click
navLinksContainer.querySelectorAll('.navbar__link').forEach(link => {
  link.addEventListener('click', () => {
    navLinksContainer.classList.remove('open');
    menuBtn.querySelector('i').className = 'fa-solid fa-bars';
  });
});

// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ===== COUNTING ANIMATION =====
const statValues = document.querySelectorAll('.hero__stat-value');

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const count = parseInt(target.getAttribute('data-count'));
      animateCount(target, count);
      countObserver.unobserve(target);
    }
  });
}, { threshold: 0.5 });

statValues.forEach(el => countObserver.observe(el));

function animateCount(element, target) {
  let current = 0;
  const increment = Math.ceil(target / 40);
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = current + '+';
  }, 40);
}

// ===== SKILL CARDS STAGGER =====
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
});

// ===== PROJECT CARDS STAGGER =====
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.15}s`;
});

// ===== CONTACT FORM (Web3Forms) =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const submitBtn = contactForm.querySelector('.form__submit');
  const originalText = submitBtn.innerHTML;
  
  // Show loading state
  submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.7';
  
  try {
    const formData = new FormData(contactForm);
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
    
    const result = await response.json();
    
    if (result.success) {
      // Success state
      submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Message Sent!';
      submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      submitBtn.style.opacity = '1';
      contactForm.reset();
      
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 4000);
    } else {
      throw new Error(result.message || 'Something went wrong');
    }
  } catch (error) {
    // Error state
    submitBtn.innerHTML = '<i class="fa-solid fa-exclamation-triangle"></i> Failed to Send';
    submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
    submitBtn.style.opacity = '1';
    console.error('Form submission error:', error);
    
    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.style.background = '';
      submitBtn.disabled = false;
    }, 3000);
  }
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== TILT EFFECT ON PROJECT CARDS =====
const tiltCards = document.querySelectorAll('.project-card, .skill-card');

tiltCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ===== PARALLAX FLOATING CARDS =====
window.addEventListener('scroll', () => {
  const floatCards = document.querySelectorAll('.hero__float-card');
  const scrollY = window.scrollY;
  
  floatCards.forEach((card, index) => {
    const speed = (index + 1) * 0.3;
    card.style.transform = `translateY(${-scrollY * speed}px)`;
  });
});

// ===== TYPING EFFECT FOR GREETING =====
const greeting = document.querySelector('.hero__greeting');
if (greeting) {
  const text = greeting.textContent;
  greeting.textContent = '';
  let i = 0;
  
  function typeWriter() {
    if (i < text.length) {
      greeting.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 80);
    }
  }
  
  setTimeout(typeWriter, 500);
}
