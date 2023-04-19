// Counter Code
var count = 0;
let increaseButton = document.querySelector(`#plus-btn`)
let decreaseButton = document.querySelector(`#minus-btn`);
let resetButton = document.querySelector(`#reset-btn`);
let counterNum = document.querySelector(`#counter`);

let increase = () => {
    count++;
    counterNum.textContent = count;
}

let decrease = () => {
    count--
    counterNum.textContent = count;
}

let reset = () => {
    count = 0;
    counterNum.textContent = count;
}

increaseButton.addEventListener(`click`, increase);
decreaseButton.addEventListener(`click`, decrease);
resetButton.addEventListener(`click`, reset);
