const burger = document.querySelector(".burger");
const navigation = document.querySelector(".nav-links");
const navigationLinks = document.querySelectorAll(".nav-links li");

const navigationAnimation = () => {
  burger.addEventListener("click", () => {
    navigation.classList.toggle("nav-active");
    burger.classList.toggle("toggle");

    navigationLinks.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `navLinksFade .6s ease forwards ${
          index / 5 + 0.3
        }s`;
      }
    });
  });
};

navigationAnimation();
