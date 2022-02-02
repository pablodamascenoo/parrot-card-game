let amountCards = 0
let content = document.querySelector("section")

while(amountCards<4 || amountCards > 14 || amountCards%2 != 0){
    amountCards = prompt("Digite a quantidade de cartas do jogo (entre 4 e 14):")
}




for(let i=0; i<amountCards; i++){
    var card = document.createElement("div")
    card.classList.add("card")
    card.setAttribute("onclick", "teste(this)")
    var frontFace = document.createElement("div")
    frontFace.classList.add("face", "front-face")
    frontFace.innerHTML = `<img src="assets/images/front 1.svg" alt="">`
    var backFace = document.createElement("div")
    backFace.classList.add("face", "back-face")
    backFace.innerText = "Verso"
    card.appendChild(frontFace)
    card.appendChild(backFace)
    content.appendChild(card)
}


function flipCard(card){

    card.querySelectorAll(".face")[0].classList.toggle("front-face-flip")
    card.querySelectorAll(".face")[1].classList.toggle("back-face-flip")

}