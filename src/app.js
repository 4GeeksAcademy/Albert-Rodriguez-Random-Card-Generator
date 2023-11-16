/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.getElementById("rdmButton").addEventListener("click", function() {
    getRandomCard();
  });
};

function getRandomCard() {
  const cardElement = document.querySelector(".card");

  cardElement.classList.add("spin-animation");

  setTimeout(() => {
    cardElement.classList.remove("spin-animation");

    const suits = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
    const cards = [
      "A",
      "J",
      "Q",
      "K",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10"
    ];

    let randomSuit = suits[Math.floor(Math.random() * suits.length)];
    let randomCard = cards[Math.floor(Math.random() * cards.length)];

    document.getElementById("top-suit").innerHTML = randomSuit;
    document.getElementById("bottom-suit").innerHTML = randomSuit;
    document.getElementById("card-number").innerHTML = randomCard;

    if (randomSuit === "&hearts;" || randomSuit === "&diams;") {
      document.getElementById("top-suit").style.color = "red";
      document.getElementById("bottom-suit").style.color = "red";
      document.getElementById("card-number").style.color = "red";
    } else {
      document.getElementById("top-suit").style.color = "black";
      document.getElementById("bottom-suit").style.color = "black";
      document.getElementById("card-number").style.color = "black";
    }
  }, 500);
}
