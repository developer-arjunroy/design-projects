import db from "./db.js";

// page url
const quizPageUrl = "http://localhost:8158/quiz.html";

// elements
const startBtn = document.querySelector("#start-btn");

startBtn.addEventListener("click", () => {
    window.location.href = quizPageUrl;
});

// result page

