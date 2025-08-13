const optionsimg = document.querySelectorAll(".options-img");
const container = document.querySelector(".container");
const resultText = document.querySelector(".results-text");
const userResult = document.querySelector(".user-results img")
const randomrResult = document.querySelector(".random-results img")



const escolha = [
    'img/pedra.png',
    "img/papel.png",
    "img/tesoura.png",
]
    /*

    r p s
    */
   const winner = {
    RR : "Empate",
    RP : "Computador",
    RS : "Você",
    PP : "Empate",
    PR : "Você",
    PS : "Computador",
    SS : "Empate",
    SR : "Computador",
    SP : "Você"
   }


function handleOptonClick(event) {
    const clickImg = event.currentTarget;
    const clickIndex = Array.from(optionsimg).indexOf(clickImg)
   

    container.classList.add("start")
    resultText.textContent = `...`


     userResult.src = randomrResult.src = escolha [0]
    setTimeout(() => {
        container.classList.remove("start")
        userResult.src = escolha [clickIndex]

        const randomNumber = Math.floor(Math.random() * escolha.length)
        randomrResult.src = escolha[randomNumber]

        const sclUser =  ["R","P","S"][clickIndex]
        const sclRandom =  ["R","P","S"][randomNumber]
        const junta = sclUser+sclRandom 
        const results = winner[junta]
       
        
        resultText.textContent = sclUser === sclRandom ?  "Empate " : results + " Ganhou"
    }, 2000);
}



optionsimg.forEach((img) => {
    img.addEventListener("click", handleOptonClick)
});