import db from "./db.js";
const database = [...db];
const clockElm = document.querySelector("#timer");
const questionLimit = document.querySelector("#question-limit");
const questionTxt = document.querySelector("#question-txt");
const questionOptContainer = document.querySelector("#question-opt");
const nextBtn = document.querySelector("#next-btn");

const resultPageUrl = "http://localhost:8158/result.html";
let correctAnswer = 0;
let clock;
const setClock = () => {
    let totalTime = 15;
    clock = setInterval(() => {
        clockElm.content = `${--totalTime}s`;
    }, 1000);
    setTimeout(() => {
        clearInterval(clock);
    }, 15000);
};

let qIndex = 0;
let clickValue = "";
const isCorrectAnswer = () => {
    const question = database[qIndex];
    return clickValue == question.answer;
};

const displayQuiz = () => {
    const question = database[qIndex];
    questionLimit.content = `Question ${qIndex + 1} of ${database.length}`;
    questionTxt.content = question.question;
    questionOptContainer.innerHTML = "";
    question.options.forEach(option => {
        questionOptContainer.innerHTML += `
        <label for="${option}">
            <input type="radio" id="${option}" value="${option}" name="option" />
            ${option}
        </label>
      `;
    });
    const inputElms = document.querySelectorAll("input");
    inputElms.forEach(inputElm => {
        inputElm.addEventListener("change", e => {
            clickValue = e.target.value;
        });
    });
};

setClock();
displayQuiz();

nextBtn.addEventListener("click", () => {
    clearInterval(clock);

    if (isCorrectAnswer()) {
        correctAnswer += 1;
        console.log(isCorrectAnswer());
    }
    if (qIndex + 1 === database.length) {
        window.location.href = `${resultPageUrl}?ans=${correctAnswer}`;
    }
    if (qIndex !== database.length - 1) {
        qIndex += 1;
    }

    setClock();
    displayQuiz();
});
