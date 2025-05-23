// Typing animation
const text = ["Full Stack Web Developer", "Frontend Expert", "Creative Thinker","DSA and Alogirithm Specialist"];
let i = 0, j = 0, current = "", isDeleting = false;
const typingElement = document.querySelector(".typing");

function type() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      current = text[i].substring(0, j++);
    } else if (isDeleting && j > 0) {
      current = text[i].substring(0, j--);
    }

    typingElement.innerHTML = current;

    if (!isDeleting && j === text[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }
}

type();

// Contact form handler
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for reaching out! (You can integrate backend/email later.)");
});

// script.js
const scrollBtn = document.getElementById("scrollBtn");
window.onscroll = () => {
  scrollBtn.style.display = (window.scrollY > 300) ? "block" : "none";
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.addEventListener('mousemove', (e) => {
  const dot = document.createElement('div');
  dot.classList.add('trail-dot');
  dot.style.top = `${e.clientY}px`;
  dot.style.left = `${e.clientX}px`;
  document.getElementById('trail-container').appendChild(dot);

  // Remove the dot after animation ends
  setTimeout(() => {
    dot.remove();
  }, 800); // Match animation duration
});

// Loader transition

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = 0;
  setTimeout(() => {
    loader.style.display = "none";
  }, 1000); // matches the CSS transition duration
});

