let amountCards = 0
let content = document.querySelector("section")

while(amountCards<4 || amountCards > 14 || amountCards%2 != 0){
    amountCards = prompt("Digite a quantidade de cartas do jogo (entre 4 e 14):")
}




for(let i=0; i<amountCards; i++){
    var card = document.createElement("div")
    card.classList.add("card")
    var frontFace = document.createElement("div")
    frontFace.classList.add("face")
    frontFace.innerHTML = `<img src="assets/images/front 1.svg" alt="">`
    var backFace = document.createElement("div")
    backFace.classList.add("face")
    backFace.innerText = "Verso"
    card.appendChild(frontFace)
    card.appendChild(backFace)
    content.appendChild(card)
}