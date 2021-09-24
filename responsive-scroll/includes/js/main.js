/* Elements */

const burgerToggle = document.querySelector(".burger-toggle"); //burger
const linksContainer = document.querySelector(".links-container"); //links container
const links = document.querySelector(".links"); //links
const navigation = document.querySelector(".nav"); //navigation
const topLink = document.querySelector(".top-link"); //top link
const header = document.querySelector("header"); //header
/* const nav = document.querySelector("nav"); //nav */

//* responsive burger ------------------------------------------------------

burgerToggle.addEventListener("click", () => {
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  /* checks the height of the links for showing the links */
  if (linksContainerHeight == 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

//* fixed navbar and top link button ------------------------------------------------------
window.addEventListener("scroll", () => {
  //!!fixed navbar
  const scrollHeight = window.pageYOffset;
  const navigationHeight = navigation.getBoundingClientRect().height;

  if (scrollHeight > navigationHeight) {
    navigation.classList.add("fixed-nav");
  } else {
    navigation.classList.remove("fixed-nav");
  }

  /* different approach */
  /* navigation.classList.toggle("fixed-desktop", window.scrollY > 0); */

  //!!top link
  const headerHeight = header.getBoundingClientRect().height;
  if (window.scrollY > headerHeight / 3) {
    topLink.style.display = "block";
  } else {
    topLink.style.display = "none";
  }
});

//* smooth scroll using links ------------------------------------------------------
const scrollLinks = document.querySelectorAll(".scroll-links");

scrollLinks.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    /* prevent default */
    e.preventDefault();

    /* getting the id of links without # */
    const id = e.currentTarget.getAttribute("href").slice(1);

    /* get element by id */
    const element = document.getElementById(id);

    //! calculate height
    /* height of nav */
    const navHeight = navigation.getBoundingClientRect().height;

    /* height of linksContainer */
    const containerHeight = linksContainer.getBoundingClientRect().height;

    /* looks for the classlist fixed-nav */
    const fixedNav = navigation.classList.contains("fixed-nav");
    
    /* position of element from the top */
    //!!for desktop
    let position = element.offsetTop - navHeight;

    //!!for mobile
    /* the height of the navigation is being calculated (subtraction) so we need to minus the position and navHeight */
    if (!fixedNav) {
      position -= navHeight;
    }

    /* we use 68 because the navHeight is 68 */
    /* when we open the burger, its height is also being calculated (subtraction) so we need to add the containerHeight*/
    if (navHeight > 68) {
      position += containerHeight;
    }



    /* scrolling */
    window.scrollTo({
      left: 0,
      top: position,
    });

    /* closing the burger */
    linksContainer.style.height = "0";
  });
});
