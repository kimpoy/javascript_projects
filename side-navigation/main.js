//* DECLARATIONS
const sidebar = document.querySelector(".sideBar");
const burger = document.querySelector(".burger");
const navigation = document.querySelector(".navLinks");
const navigationLinks = document.querySelectorAll(".navLinks li");
const title = document.querySelector(".title");
const content = document.querySelector(".content");

//* MAKE THE DEFAULT WIDTH OF THE CONTENT TO 100%
//! IF WE USE CSS IT'S NOT WORKING PROPERLY
content.style.width = "100%";

const fadeStyle = () => {
  burger.addEventListener("click", () => {
    //* TO ROTATE BURGER
    burger.classList.toggle("burgerToggle");

    if (sidebar.style.transform) {
      //* DELETES THE TRANSFORM STYLE AND MAKE CONTENT WIDTH TO 100
      sidebar.style.transform = "";
      content.style.width = "100%";
    } else {
      //* ADDS A TRANSFOR STYLE TO SEE THE NAVIGATION AND DELETES THE CONTENT WIDTH DECLARED ABOVE
      sidebar.style.transform = "translateX(0%)";
      content.style.width = "";
    }

    navigationLinks.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        //* MAKES SIDEBAR VISIBLE WITH ANIMATION
        item.style.animation = `navLinksFade .6s ease forwards ${
          index / 5 + 0.3
        }s`;
      }
    });
  });
};

fadeStyle();
