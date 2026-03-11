import db from "./db.js";
const params = new URLSearchParams(window.location.search);
const answer = params.get("ans") || 0;
const resultDiv = document.querySelector("#result-div");
const playAgainBtn = document.querySelector(".play-again");
resultDiv.content = `${answer}/${db.length}`;

playAgainBtn.addEventListener("click", () => {
  window.location.href = "http://localhost:8158/quiz.html"
})