// nav highlight based on section in view
const links = Array.from(document.querySelectorAll('.btn[href^="#"]'));
const sections = links
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

const setActive = (id) => {
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
};

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      setActive(e.target.id);
    }
  });
}, { rootMargin: "-45% 0px -50% 0px", threshold: 0.01 });

sections.forEach(s => io.observe(s));
setActive('intro');
