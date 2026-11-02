/**
 * Main JavaScript: Interactivity, Typing Effect, Photo Switcher, Contact Form
 * Portfolio DevTria - Muhammad Satria Nurulloh
 */

(function () {
  'use strict';

  // --- 1. Toast Notification Helper ---
  const toastEl = document.getElementById('toast');
  const toastMsgEl = document.getElementById('toast-msg');
  let toastTimer = null;

  function showToast(message) {
    if (!toastEl || !toastMsgEl) return;
    toastMsgEl.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3200);
  }
  window.showToast = showToast;

  // --- 2. Dynamic Typing Subtitle ---
  const roles = [
    'Full-Stack Developer',
    'Problem Solver',
    'Laravel 11 & PHP Specialist',
    'Critical Thinker',
    'Database & MySQL Architect'
  ];

  const typedEl = document.getElementById('typed-role');
  if (typedEl) {
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeLoop() {
      const currentRole = roles[roleIdx];
      if (isDeleting) {
        typedEl.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
        typingSpeed = 50;
      } else {
        typedEl.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
        typingSpeed = 110;
      }

      if (!isDeleting && charIdx === currentRole.length) {
        typingSpeed = 1800; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        typingSpeed = 400; // Pause before next
      }

      setTimeout(typeLoop, typingSpeed);
    }
    typeLoop();
  }

  // --- 3. Profile Photo Switcher & Modal ---
  const photo1 = document.getElementById('profile-img-1');
  const photo2 = document.getElementById('profile-img-2');
  const switchBtn1 = document.getElementById('photo-btn-1');
  const switchBtn2 = document.getElementById('photo-btn-2');
  const profileIgLink = document.getElementById('profile-ig-link');

  const igPostLinks = {
    1: 'https://www.instagram.com/p/DfPTfozBvj5/?psln=MW41cXVqa3A5NW1sYg==',
    2: 'https://www.instagram.com/p/DfPTj8yBC-v/?psln=MXM2cmw3em9mem1kbg=='
  };

  let activePhotoId = 1;

  function switchPhoto(targetId) {
    activePhotoId = targetId;
    if (targetId === 1) {
      photo1.classList.remove('inactive');
      photo1.classList.add('active');
      photo2.classList.remove('active');
      photo2.classList.add('inactive');

      switchBtn1.classList.add('active');
      switchBtn2.classList.remove('active');

      if (profileIgLink) {
        profileIgLink.href = igPostLinks[1];
        profileIgLink.querySelector('.link-text').textContent = 'Buka Foto 1 di Instagram';
      }
    } else {
      photo2.classList.remove('inactive');
      photo2.classList.add('active');
      photo1.classList.remove('active');
      photo1.classList.add('inactive');

      switchBtn2.classList.add('active');
      switchBtn1.classList.remove('active');

      if (profileIgLink) {
        profileIgLink.href = igPostLinks[2];
        profileIgLink.querySelector('.link-text').textContent = 'Buka Foto 2 di Instagram';
      }
    }
  }

  if (switchBtn1 && switchBtn2) {
    switchBtn1.addEventListener('click', (e) => {
      e.stopPropagation();
      switchPhoto(1);
    });
    switchBtn2.addEventListener('click', (e) => {
      e.stopPropagation();
      switchPhoto(2);
    });
  }

  // Modal logic
  const modalOverlay = document.getElementById('photo-modal');
  const modalImg = document.getElementById('modal-img');
  const modalIgBtn = document.getElementById('modal-ig-link');
  const modalCloseBtn = document.getElementById('modal-close');
  const profileContainer = document.querySelector('.profile-image-container');

  function openPhotoModal() {
    if (!modalOverlay || !modalImg) return;
    const currentSrc = activePhotoId === 1 ? 'assets/images/profile-1.jpg' : 'assets/images/profile-2.jpg';
    modalImg.src = currentSrc;
    if (modalIgBtn) {
      modalIgBtn.href = igPostLinks[activePhotoId];
    }
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closePhotoModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (profileContainer) {
    profileContainer.addEventListener('click', openPhotoModal);
    profileContainer.style.cursor = 'pointer';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closePhotoModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closePhotoModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closePhotoModal();
    }
  });

  // --- 4. Mobile Menu Navigation ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking nav items
    navLinks.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- 5. Navbar Scroll & Active State ---
  const navbar = document.querySelector('.navbar');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (navbar) {
      if (scrollPos > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollPos > 450) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Active section observer
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // --- 6. Clipboard Copy Buttons ---
  document.querySelectorAll('.btn-copy').forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = button.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Berhasil disalin: ${textToCopy} 📋`);
        }).catch(() => {
          // Fallback
          const tempInput = document.createElement('input');
          tempInput.value = textToCopy;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
          showToast(`Berhasil disalin: ${textToCopy} 📋`);
        });
      }
    });
  });

  // --- 7. Interactive Contact Form (WA & Email Dispatcher) ---
  const contactForm = document.getElementById('contact-form');
  const sendWaBtn = document.getElementById('send-wa-btn');
  const sendEmailBtn = document.getElementById('send-email-btn');

  function getFormData() {
    const name = document.getElementById('contact-name')?.value.trim() || '';
    const contact = document.getElementById('contact-info')?.value.trim() || '';
    const subject = document.getElementById('contact-subject')?.value.trim() || '';
    const message = document.getElementById('contact-message')?.value.trim() || '';
    return { name, contact, subject, message };
  }

  function validateForm(data) {
    if (!data.name) {
      showToast('Mohon masukkan nama Anda! ⚠️');
      return false;
    }
    if (!data.message) {
      showToast('Mohon tuliskan pesan Anda! ⚠️');
      return false;
    }
    return true;
  }

  if (sendWaBtn) {
    sendWaBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const data = getFormData();
      if (!validateForm(data)) return;

      const fullMessage =
        `Halo Satria (DevTria),\n\n` +
        `Nama: ${data.name}\n` +
        (data.contact ? `Kontak Pengirim: ${data.contact}\n` : '') +
        (data.subject ? `Subjek: ${data.subject}\n\n` : '\n') +
        `Pesan:\n${data.message}`;

      const waUrl = `https://wa.me/6288976064734?text=${encodeURIComponent(fullMessage)}`;
      window.open(waUrl, '_blank');
      showToast('Membuka WhatsApp... 💬');
    });
  }

  if (sendEmailBtn) {
    sendEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const data = getFormData();
      if (!validateForm(data)) return;

      const emailSubject = encodeURIComponent(data.subject || `Pesan Portofolio dari ${data.name}`);
      const emailBody = encodeURIComponent(
        `Halo Muhammad Satria Nurulloh,\n\n` +
        `Nama: ${data.name}\n` +
        (data.contact ? `Kontak: ${data.contact}\n\n` : '\n') +
        `Pesan:\n${data.message}\n`
      );

      const mailtoUrl = `mailto:satria.nurulloh.creative.@gmail.com?subject=${emailSubject}&body=${emailBody}`;
      window.location.href = mailtoUrl;
      showToast('Membuka aplikasi Email... ✉️');
    });
  }
})();

