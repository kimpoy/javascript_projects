let count = 0;

let value = document.querySelector("#value");
let buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let style = e.currentTarget.classList;

    if (style.contains("decrease")) {
      count--;
    }
    if (style.contains("increase")) {
      count++;
    }
    if (style.contains("reset")) {
      count = 0;
    }

    if (count < 0) {
      value.style.color = "#B61919";
    }
    if (count > 0) {
      value.style.color = "#4AA96C";
    }
    if (count == 0) {
      value.style.color = "#171717";
    }

    value.textContent = count;
  });
});
