const jokeContent = document.getElementById("joke")
const button = document.getElementById("btn")
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let getJoke = () => {
    jokeContent.classList.remove("fade")
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokeContent.textContent = `${item.joke}`
        jokeContent.classList.add("fade")
    })
}
button.addEventListener("click", getJoke)
getJoke()