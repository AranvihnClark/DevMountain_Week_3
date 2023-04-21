const pizzas = document.querySelectorAll(`.pizza-item`);
const recommendForm = document.querySelector(`form`);
const pizzaName = document.querySelector(`#pizza-name`);
const pizzaPic = document.querySelector(`.pizza-picture`);
let pizzaDisplay = document.querySelector(`#pizza-display`);

let pizzaArr = [...pizzas];

const pizzaAlert = (event) => {
    const pizza = event.target.getAttribute(`value`);
    console.log(event.target.getAttribute(`value`));
    alert(`You like ${pizza}.`);
}

const formSubmit = event => {
    event.preventDefault();
    let newSection = document.createElement(`section`);
    newSection.classList.add(`pizza-item`);
    newSection.setAttribute(`value`, pizzaName.value);

    let newPizzaImg = document.createElement(`img`);
    newPizzaImg.setAttribute(`src`, pizzaPic.value);
    newPizzaImg.setAttribute(`value`, pizzaName.value);
    newSection.appendChild(newPizzaImg);

    let pizzaTitle = document.createElement(`p`);
    pizzaTitle.setAttribute(`value`, pizzaName.value);
    pizzaTitle.textContent = pizzaName.value;

    newSection.appendChild(pizzaTitle)
    pizzaDisplay.appendChild(newSection)
}

pizzaArr.map(el => el.addEventListener('click', pizzaAlert));
recommendForm.addEventListener('submit', formSubmit)