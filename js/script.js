document.addEventListener("DOMContentLoaded", function() {
  
  const pinky = document.querySelector(".pinky");
  const navLinks = document.querySelector(".nav-links");
  
  if (pinky && navLinks) {
    pinky.addEventListener("click", function() {
      navLinks.classList.toggle("active");
      pinky.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
    });
  }
  
  const contactForm = document.getElementById("contactForm");
  
  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const nama = document.getElementById("nama").value.trim();
      const email = document.getElementById("email").value.trim();
      const pesan = document.getElementById("pesan").value.trim();
      
      if (!nama || !email || !pesan) {
        alert("⚠️ Semua field wajib diisi!");
        return;
      }
      
      if (!email.includes("@") || !email.includes(".")) {
        alert("⚠️ Format email tidak valid!");
        return;
      }
      
      alert("✅ Terima kasih, " + nama + "! Pesan Anda telah terkirim.");
      contactForm.reset();
    });
  }
  
  const currentPath = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });

  const revealElements = document.querySelectorAll('.scroll-reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    revealElements.forEach(el => revealObserver.observe(el));
  }

  const typingElement = document.querySelector('.typing-text');
  if (typingElement) {
    const texts = ['Keisha Aurel', 'Web Developer', 'Mahasiswa Ilmu Komputer'];
    let textIndex = 0, charIndex = 0, isDeleting = false;
    
    function type() {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }
      
      let typeSpeed = isDeleting ? 50 : 100;
      
      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
      }
      
      setTimeout(type, typeSpeed);
    }
    type();
  }

  const searchInput = document.getElementById('searchInput');
  const projectCards = document.querySelectorAll('.project-card');
  const projectsGrid = document.querySelector('.projects-content .grid');
  
  if (searchInput && projectsGrid) {
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.textContent = 'Project tidak ditemukan 😕';
    projectsGrid.parentElement.appendChild(noResults);
    
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      let visibleCount = 0;
      
      projectCards.forEach(card => {
        const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
        
        if (title.includes(searchTerm) || desc.includes(searchTerm)) {
          card.style.display = 'block';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });
      
      noResults.classList.toggle('show', visibleCount === 0);
    });
  }

const cursorGlow = document.querySelector('.cursor-glow');
  if (cursorGlow) {
    document.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mousedown', () => {
      cursorGlow.style.transform = 'translate(-50%, -50%) scale(0.8)';
      cursorGlow.style.transition = 'transform 0.1s';
    });
    document.addEventListener('mouseup', () => {
      cursorGlow.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorGlow.style.transition = 'transform 0.3s ease-out';
    });
  }

  const yearSpan = document.querySelector('.copyright-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});