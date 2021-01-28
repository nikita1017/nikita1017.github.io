let checkButton = document.getElementById("checkButton");
let Again = document.getElementById("Again");
let h1 = document.getElementById("h1");
let p = document.getElementById("p")
let secret = getRandom(10,50);
let userInput = document.getElementById("userInput");
let hearts = document.getElementById("hearts");
let lives = 6;
userInput.select();
hearts.innerHTML = '&#128156;'.repeat(lives);

function getRandom(min,max) {
return Math.floor(Math.random() *(max-min+1) + min)
}

checkButton.onclick = function (event) {
    // 11 строка для того чтобы страница не обнавлялась
    event.preventDefault();
    if (userInput.value == secret) {
        h1.innerHTML = "Ты угадал!";
        checkButton.disabled = true;
    }
        
    else {
        lives = lives - 1;
        hearts.innerHTML = '&#128156;'.repeat(lives);

        if (secret > userInput.value) {
            p.innerHTML = "Секретное число больше"
        }

        else {
            p.innerHTML = "Секретное число меньше";
        }

    }
    if (lives == 0) {
        hearts.innerHTML = '&#128128;'.repeat(6);
        h1.innerHTML = "Ты проиграл навсегда!";
       checkButton.disabled = true;
    } 
}
againButton.onclick = function (event) {
    event.preventDefault();
    h1.innerHTML = "Угадай число!";
    p.innerHTML = "Введи число и нажми проверить";
    lives = 6;
    hearts.innerHTML = '&#128156;'.repeat(lives);
    checkButton.disabled = false;
    userInput.select();
    secret = getRandom(10,50);


}
hearts.onclick = function (event) {
    event.preventDefault();
    hearts = 1;
    p.innerHTML = '&#128156;'.repeat(1);
    p.select();


}

// Again.onclick=function(event){
//     event.preventDefault();
//     Again.innerHTML= "Заново"+(Number(Again.value),Number(Again.value));
// }