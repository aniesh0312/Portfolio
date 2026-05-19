/* =========================
FILE: script.js
========================= */

// DARK MODE

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});

// TYPING EFFECT

const typingText = document.querySelector(".typing");

const words = [
  "Frontend Developer",
  "CSBS Student",
  "Tech Enthusiast",
  "Creative Builder",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingText.textContent = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();
