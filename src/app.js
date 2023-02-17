/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");

  let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let signs = ["♦", "♥", "♠", "♣"];

  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  let randomSign = signs[Math.floor(Math.random() * signs.length)];

  let finalNumber = document.querySelector(".number");
  let finalSign = document.querySelector(".top");
  let finalSign2 = document.querySelector(".final");

  if (randomSign == signs[0] || randomSign == signs[1]) {
    document.querySelector(".top").style.color = "red";
    document.querySelector(".final").style.color = "red";
  }
  finalNumber.innerHTML = randomNumber;
  finalSign.innerHTML = randomSign;
  finalSign2.innerHTML = randomSign;
};
