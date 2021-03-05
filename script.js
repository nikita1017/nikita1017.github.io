import {ruswords} from "./words.js"
let imgNumber = 7;
let cartinca = document.getElementById("cartinca")
let newGame = document.getElementById("newGame");
let h1 = document.getElementById("h1");
let cypher = document.getElementById("cypher")
let okButton = document.getElementById("okButton");
let words = ruswords;
// let words = ["приветствие","крот","ананас","троллейбус","квадрокоптер","сметана","диван"];
let secretWord = words[Math.floor(Math.random()*words.length)];
let p = document.getElementById("p");
let userLatter = document.getElementById("userLetter");
let Nikitastar = 0;
let myLetters = []; 


cypher.innerHTML = "*".repeat(secretWord.length)
okButton.onclick = function (event) {
    event.preventDefault();
    if(!myLetters.includes(userLetter.value)){
    myLetters.push(userLetter.value);
    }
    p.innerHTML = myLetters;
    //value - значение инпута
    console.log(userLetter.value);
    let letter = userLatter.value;
    if (secretWord.includes(letter)) {
        console.log("Yes");
        let newCypher = "";
        // i-nomer bykva
        for (let i = 0; i < secretWord.length; i++) {
            // console.log(i random);

            if (secretWord[i] == letter) {
            newCypher=newCypher+letter;
            
            }
            
            else{
                newCypher=newCypher+cypher.innerHTML[i];
            }
        }
        cypher.innerHTML = newCypher;
    }
    else {
        console.log("No");
        imgNumber = imgNumber -1;
        if (imgNumber == 0) {
        okButton.disabled = true;
        }
        cartinca.src = "img/snowman"+imgNumber+".jpg";


    }

    if(cypher.innerHTML == secretWord){
    h1.innerHTML = "Снеговик. Ты победил!";
    okButton.disabled = true;
    }

}
newGame.onclick = function (event) {
    okButton.disabled = false;
    event.preventDefault();
    secretWord = words[Math.floor(Math.random()*words.length)];
    cypher.innerHTML = "*".repeat(secretWord.length)
    // Nikitastar = Nikitastar + 10;
    // h1.innerHTML = "*".repeat(Nikitastar);
}
