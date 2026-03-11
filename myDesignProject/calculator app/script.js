const numerBtn = document.querySelectorAll(".num-btn");
const resetBtn = document.querySelector(".reset-btn");
const backBtn = document.querySelector(".back-btn");
const expElm = document.querySelector(".exp");

const displayExp = exp => {
    expElm.innerHTML += exp;
};
const reset = () => {
    expElm.innerHTML = "";
};
const backStep = () => {
    const exp = expElm.innerHTML;
    expElm.innerHTML = exp.slice(0, exp.length - 1);
};

const calculate = () => {
  
}

numerBtn.forEach(elm => {
    elm.addEventListener("click", e => {
        displayExp(e.target.textContent);
    });
});
resetBtn.addEventListener("click", () => {
    reset();
});
backBtn.addEventListener("click", () => {
    backStep();
});
