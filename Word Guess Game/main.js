let gameName = "Guess The Word"
document.title = gameName
document.querySelector("h1").innerHTML = gameName
document.querySelector("footer") .innerHTML = `${gameName} Created By <a href="#" class="link">Mersal</a>`

// Setting Game Option
let numOfTries = 5;
let numOfLetters = 6;
let currentTry = 1;

function generateInpute(){
    const inputContainer = document.querySelector(".inputs")
    
    for(let i = 1 ; i <= numOfTries; i++){
        let tryDiv = document.createElement('div');
        tryDiv.classList.add(`try-${i}`)
        tryDiv.innerHTML = `<span> Try ${i} </span>`

        if(i !== 1){
            tryDiv.classList.add("disabled-input")
        }

        for(let j = 1 ; j<= numOfLetters; j++){
            const input = document.createElement("input")
            input.setAttribute("type", "text");
            input.id = `guess-${i}-letter-${j}`
            input.classList.add("input-letter")
            input.setAttribute("maxlength" , "1")
            tryDiv.appendChild(input)
        }

        inputContainer.appendChild(tryDiv)
    }
    inputContainer.children[0].children[1].focus();
}

window.onload = () =>{
    generateInpute()
}