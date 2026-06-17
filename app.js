// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = 'var(--shadow-sm)';
    navbar.style.padding = '10px 0';
  } else {
    navbar.style.boxShadow = 'none';
    navbar.style.padding = '16px 0';
  }
});

// Mobile Nav Toggle
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
const mobileLinks = mobileNav.querySelectorAll('a');

function toggleMobileNav() {
  const isOpen = mobileNav.classList.contains('open');
  if (isOpen) {
    mobileNav.classList.remove('open');
    // reset hamburger animation
    hamburger.children[0].style.transform = 'none';
    hamburger.children[0].style.top = '0';
    hamburger.children[1].style.opacity = '1';
    hamburger.children[2].style.transform = 'none';
    hamburger.children[2].style.top = '18px';
  } else {
    mobileNav.classList.add('open');
    // animate hamburger to X
    hamburger.children[0].style.transform = 'rotate(45deg)';
    hamburger.children[0].style.top = '9px';
    hamburger.children[1].style.opacity = '0';
    hamburger.children[2].style.transform = 'rotate(-45deg)';
    hamburger.children[2].style.top = '9px';
  }
}

hamburger.addEventListener('click', toggleMobileNav);

// Close mobile nav when clicking a link
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (mobileNav.classList.contains('open')) {
      toggleMobileNav();
    }
  });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
