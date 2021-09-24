let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let btn = document.querySelector("#btn");
let color = document.querySelector(".color");

/* eventlistener */
btn.addEventListener("click", () => {
  let hex = "#";
  /* iterate through the number of hex which is 6 */
  for (let i = 0; i < 6; i++) {
    hex += colors[getRandomNumber()];
  }
  color.textContent = hex;
  document.body.style.background = hex;
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
