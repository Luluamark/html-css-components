"use strict";

const showIcon = document.querySelector(".icon ");
const items = document.querySelector(".item");
const number = document.querySelector(".number");
const text = document.querySelector(".text");

const hiddenBox = document.querySelector(".hidden-box");
showIcon.addEventListener("click", () => {
  if (hiddenBox.style.display === "none") {
    hiddenBox.style.display = "block";

    text.style.color = "#087f5b";
    number.style.color = "#087f5b";
    items.style.borderTop = "4px solid  #087f5b";
  } else {
    hiddenBox.style.display = "none";

    text.style.color = "#343a40";
    number.style.color = "#ced4da";
    showIcon.style.color = "#343a40";
    items.style.borderTop = "none";
  }
});
