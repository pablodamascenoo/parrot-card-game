let amountCards = 0
let first = true
let matches = 0
let flips = 0
let time = 0
let pair = []
let content = document.querySelector("section")
let parrots = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"]
let chosenParrots = []

// Início funções

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function startGame(){

    ResetGame()

    while(amountCards<4 || amountCards > 14 || amountCards%2 != 0){
        amountCards = prompt("Digite a quantidade de cartas do jogo (entre 4 e 14):")
    }

    shuffleParrots()

    for(let i=0; i<amountCards; i++){
        var card = document.createElement("div")
        card.classList.add("card")
        card.setAttribute("onclick", "flipCard(this)")
        var frontFace = document.createElement("div")
        frontFace.classList.add("face", "front-face")
        frontFace.innerHTML = `<img src="assets/images/front 1.svg" alt="flipped-card">`
        var backFace = document.createElement("div")
        backFace.classList.add("face", "back-face")
        backFace.innerHTML = `<img src="assets/gifs/${chosenParrots[i]}.gif" alt="${chosenParrots[i]}">`
        card.appendChild(frontFace)
        card.appendChild(backFace)
        content.appendChild(card)
    }
}

async function flipCard(card){

    if (first == true){
        first = false
    }

    if(((pair.length == 0) || (pair.length+1 == 2 && pair[0]!= card))){ //&& (!card.classList.contains("matched"))
        card.querySelectorAll(".face")[0].classList.toggle("front-face-flip")
        card.querySelectorAll(".face")[1].classList.toggle("back-face-flip")
        pair.push(card)
        flips++
    }


    if(pair.length==2 && card==pair[1]){

        pair[0].removeAttribute("onclick")
        pair[1].removeAttribute("onclick")

        if(pair[0].querySelector(".back-face img").alt != pair[1].querySelector(".back-face img").alt){
            await sleep(1000)
            pair[0].querySelectorAll(".face")[0].classList.toggle("front-face-flip")
            pair[0].querySelectorAll(".face")[1].classList.toggle("back-face-flip")
            pair[0].setAttribute("onclick", "flipCard(this)")
            pair[1].setAttribute("onclick", "flipCard(this)")
            pair[1].querySelectorAll(".face")[0].classList.toggle("front-face-flip")
            pair[1].querySelectorAll(".face")[1].classList.toggle("back-face-flip")
            pair = []
        }
        else{
            matches++
            pair = []
            setTimeout(()=>{
                if(checkWin()){
                if(prompt("Você quer começar um novo jogo? (digite 'y' se sim)") == "y"){
                    startGame()
                }
                }
            }, 500)
            }
        }
}

function shuffleParrots(){
    for(let i=0; i<(amountCards)/2; i++){
        for(let j=0; j<2; j++){
        chosenParrots.push(parrots[i])
        }
    }
    chosenParrots.sort(comparator)
    chosenParrots.sort(comparator)
}

function comparator() { 
	return Math.random() - 0.5
}

function checkWin(){
    if(matches == amountCards/2){
        alert(`Você ganhou o jogo em ${flips} jogadas e ${time} segundos. Parabéns!!`)
        first = true
        return true
    }
    return false
}

function ResetGame(){

    let allCards = document.querySelectorAll(".card")

    if(allCards!=null){
        for(let i=0; i<allCards.length; i++){
            allCards[i].remove()
        }
        time = 0
        document.querySelector("header p").innerHTML = time
        amountCards = 0
        matches = 0
        flips = 0
        chosenParrots = []
    }
}

// Fim Funções

startGame()

setInterval(()=>{
    if(first == false){
        time ++
        document.querySelector("header p").innerHTML = time
    }
}, 1000)
