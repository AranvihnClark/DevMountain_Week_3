// Choose Theme code
let newBodyParam = document.querySelector(`body`);
let newButtonParam = document.querySelectorAll(`button`);
let themeButtons = document.querySelectorAll(`.theme-buttons`);
console.log(themeButtons);
let newMainParam = document.querySelector(`main`);

let themes = (event) => {
    let choice = event.target.textContent;
    newBodyParam.className = choice;
    newMainParam.className = choice;
    for(let i = 0; i < themeButtons.length; i++) {
        newButtonParam[i].className = choice;
    }
    console.log(themeButtons);
}

for(let i = 0; i < themeButtons.length; i++) {
    themeButtons[i].addEventListener(`click`, themes);
}