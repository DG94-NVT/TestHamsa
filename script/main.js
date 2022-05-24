const header = document.querySelector(".header");
const header_hight = document.querySelector(".header").clientHeight;

window.addEventListener("scroll", () => {
  if (window.scrollY > header_hight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
