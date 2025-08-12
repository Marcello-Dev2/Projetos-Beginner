const optionsimg = document.querySelectorAll(".options-img");
const container = document.querySelector(".container");
const resultText = document.querySelector(".results-text");
const userResult = document.querySelector(".user-result")
const randomrResult = document.querySelector(".random-resulter")



const escolha = [
    "./img/pedra.png",
    "./img/papel.png",
    "./img/tesoura.png"]

function handleOptonClick(event) {
    const clickImg = event.currentTarget;
    container.classList.add("start")
    resultText.textContent = `...`

    setTimeout(() => {
        container.classList.remove("start")

        const randomNumber = Math.floor(Math.random() * escolha.length)
       


        resultText.textContent = `X ganhou`
    }, 2000);
}

optionsimg.forEach(img => {
    img.addEventListener("click", handleOptonClick)
});