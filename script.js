"use strict";

const checkButton = document.querySelector("#check-btn");
const resetButton = document.querySelector("#reset");
const input = document.querySelector("input");

let highScore = 0;
let chance = 20;

document.querySelector("#chances").textContent = chance;
document.querySelector(".number").textContent = "?";
document.querySelector("#highscore").textContent = highScore;

// Let's implement Dom Manipulation code here.

let randomNumber = Math.floor(Math.random() * 25 + 1);

const restrictKey = function (event) {
  let output =
    (event.charCode != 8 && event.charCode == 0) ||
    (event.charCode >= 48 && event.charCode <= 57);
  return output;
};

checkButton.addEventListener("click", function () {
  if (document.querySelector("input").value !== "") {
    if (parseInt(document.querySelector("input").value) <= 25 && chance > 0) {
      if (Number(document.querySelector("input").value) == randomNumber) {
        document.querySelector(
          "#message"
        ).innerHTML = `<i class="fa-solid fa-circle-check"></i> Congratulation You got the number!`;
        document.querySelector("#message").style.color = "Green";
        document.querySelector(".number").textContent = randomNumber;
        input.setAttribute("disabled", "");
        if (chance >= highScore) {
          highScore = chance;
          document.querySelector("#highscore").textContent = highScore;
        }
      } else if (Number(document.querySelector("input").value) > randomNumber) {
        document.querySelector("#message").textContent = "High Number!";
        chance--;
        document.querySelector("#chances").textContent = chance;
      } else if (Number(document.querySelector("input").value) < randomNumber) {
        document.querySelector("#message").textContent = "Low Number!";
        chance--;
        document.querySelector("#chances").textContent = chance;
      }
    } else {
      document.querySelector("#message").style.color = "red";
      document.querySelector("#message").textContent =
        "You Lost the Game! Play again.";
      input.setAttribute("disabled", "");
    }
  }
});

resetButton.addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * 25 + 1);
  if (input.hasAttribute("disabled")) {
    input.removeAttribute("disabled");
  }
  chance = 20;
  document.querySelector("#chances").textContent = chance;
  input.value = "";
  document.querySelector("#message").textContent = "Start Guessing...";
  document.querySelector("#message").style.color = "";
  document.querySelector(".number").textContent = "?";
});
