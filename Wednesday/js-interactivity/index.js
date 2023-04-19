let message = document.querySelector(`#message`);

console.log(`hello world`);

const addMovie = event => {
    event.preventDefault();
    let inputField = document.querySelector(`input`);
    let movie = document.createElement(`li`);
    let movieTitle = document.createElement(`span`);

    movieTitle.addEventListener(`click`, crossOffMovie);
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);

    let deleteBtn = document.createElement(`button`);
    deleteBtn.textContent = `X`
    deleteBtn.addEventListener(`click`, deleteMovie);
    movie.appendChild(deleteBtn);

    document.querySelector(`ul`).appendChild(movie);
    inputField.value = ``;
}

document.querySelector(`form`).addEventListener(`submit`, addMovie);

const deleteMovie = event => {
    event.target.parentNode.remove();
    message.textContent = `The movie has been deleted!`;
}

const crossOffMovie = event => {
    event.target.classList.toggle(`checked`);
    if(event.target.classList.contains(`checked`)) {
        message.textContent = `Movie has been watched.`
    }
    else message.textContent = `Movie is on the watch list again.`
}