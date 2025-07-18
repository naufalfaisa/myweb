//for delay animations effect after click
export default function setupAnimatedLinks() {
  const allLinks = document.querySelectorAll(".animated-link, .animated-social");

  allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      link.classList.add("clicked");

      setTimeout(() => {
        const href = link.getAttribute("href");
        const target = link.getAttribute("target");

        if (target === "_blank") {
          window.open(href, "_blank");
        } else {
          window.location.href = href;
        }

        setTimeout(() => {
          link.classList.remove("clicked");
        }, 200);
      }, 400);
    });
  });
}
