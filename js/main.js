let navToggler = document.querySelector(".navbarToggler");

navToggler.addEventListener("click", ()=>{
    navToggler.classList.toggle("active");
})

let loader = document.querySelector(".loader");

window.onload = function() {
    loader.style.display = 'none';
    body.style.display = 'block';
  };

// Select all <section> elements
const sections = document.querySelectorAll('section');

const options = {
  root: null, // Use the viewport as the root
  rootMargin: '0px',
  threshold: 0.5 // Trigger when 50% of the section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, options);

// Observe each section
sections.forEach(section => {
  observer.observe(section);
});

