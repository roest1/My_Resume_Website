document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scrolling to all links
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
      window.scrollTo({
        top: target.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    });
  });

  // Animate page transitions
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(-50px)";
  });
  window.addEventListener("scroll", function () {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
      }
    });
  });
});
