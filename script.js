/*----- constants -----*/
let movArray = ["SALT", "VENOM", "ELF"];
let aniArray = ["BISON", "LION"];
let eveArray = ["CAR", "PHONE"];


/*----- app's state (variables) -----*/
//let basicSecretWord = "FIRE"
let secretWord = ""
let progress = "-".repeat(secretWord.length)
let wrongGuess = 0;
let rightGuess = 0;

/* 
let progress = "-".repeat(5) to put 5 blanks, or 
let progress = "-".repeat(6) to put 6 blanks, or
let progress = "-".repeat(secretWord.length) to put the correct blanks
*/

// when animal is clicked, the secret word should store the value from the string. 
// update secretWord to hold new random variable. set one at a time, dont do random yet.

/*----- cached element references -----*/

// Alphabet List:
let mySpan = document.getElementById("mySpan");
let ltrA = document.getElementById("ltrA");
let ltrB = document.getElementById("ltrB");
let ltrC = document.getElementById("ltrC");
let ltrD = document.getElementById("ltrD");
let ltrE = document.getElementById("ltrE");
let ltrF = document.getElementById("ltrF");
let ltrG = document.getElementById("ltrG");
let ltrH = document.getElementById("ltrH");
let ltrI = document.getElementById("ltrI");
let ltrJ = document.getElementById("ltrJ");
let ltrK = document.getElementById("ltrK");
let ltrL = document.getElementById("ltrL");
let ltrM = document.getElementById("ltrM");
let ltrN = document.getElementById("ltrN");
let ltrO = document.getElementById("ltrO");
let ltrP = document.getElementById("ltrP");
let ltrQ = document.getElementById("ltrQ");
let ltrR = document.getElementById("ltrR");
let ltrS = document.getElementById("ltrS");
let ltrT = document.getElementById("ltrT");
let ltrU = document.getElementById("ltrU");
let ltrV = document.getElementById("ltrV");
let ltrW = document.getElementById("ltrW");
let ltrX = document.getElementById("ltrX");
let ltrY = document.getElementById("ltrY");
let ltrZ = document.getElementById("ltrZ");

// Game Categories:
const movieBtn1 = document.getElementById("btn1");
console.log(movieBtn1.outerHTML);
const animalBtn2 = document.getElementById("btn2");
const everydayBtn3 = document.getElementById("btn3");

/*----- event listeners -----*/

// Basic Secret Word:
/*ltrF.addEventListener("click", function(){
    // 1. Find the indec for "f" in the secretWord
    let pos = basicSecretWord.indexOf("F")
    progress = progress.split('');
    progress.splice(pos,1,"F");
    progress = progress.join('');
    mySpan.innerHTML = progress
})

ltrI.addEventListener("click", function(){
    // 1. Find the indec for "I" in the secretWord
    let pos = basicSecretWord.indexOf("I")
    progress = progress.split('');
    progress.splice(pos,1,"I");
    progress = progress.join('');
    mySpan.innerHTML = progress
})

ltrR.addEventListener("click", function(){
    // 1. Find the indec for "R" in the secretWord
    let pos = basicSecretWord.indexOf("R")
    progress = progress.split('');
    progress.splice(pos,1,"R");
    progress = progress.join('');
    mySpan.innerHTML = progress
})

ltrE.addEventListener("click", function(){
    // 1. Find the indec for "E" in the secretWord
    let pos = basicSecretWord.indexOf("E")
    progress = progress.split('');
    progress.splice(pos,1,"E");
    progress = progress.join('');
    mySpan.innerHTML = progress
})*/

// MOVIE CATEGORY CODE:

movieBtn1.addEventListener("click", function (){
    let randomIndex = Math.floor(Math.random() * Math.floor(3))
    secretWord = movArray[randomIndex];
    alert(movArray[randomIndex]);
    if (secretWord == movArray[randomIndex]){
        mySpan.innerHTML = progress;
    }
});

// Alphabets assigned to "SALT"
ltrS.addEventListener("click", function(){
    pos = secretWord.indexOf("S")
    progress = progress.split('');
    progress.splice(pos,1,"S");
    progress = progress.join('');
    mySpan.innerHTML = progress;
})
ltrA.addEventListener("click", function(){
    pos = secretWord.indexOf("A")
    progress = progress.split('');
    progress.splice(pos,1,"A");
    progress = progress.join('');
    mySpan.innerHTML = progress;
})
ltrL.addEventListener("click", function(){
    pos = secretWord.indexOf("L")
    progress = progress.split('');
    progress.splice(pos,1,"L");
    progress = progress.join('');
    mySpan.innerHTML = progress;
})
ltrT.addEventListener("click", function(){
    pos = secretWord.indexOf("T")
    progress = progress.split('');
    progress.splice(pos,1,"T");
    progress = progress.join('');
    mySpan.innerHTML = progress;
})

// Right letters for "VENOM"
ltrV.addEventListener("click", function(){
    pos = secretWord.indexOf("V")
    progress = progress.split('');
    progress.splice(pos,1,"V");
    progress = progress.join('');
    mySpan.innerHTML = progress;
})
ltrE.addEventListener("click", function(){
    pos = secretWord.indexOf("E")
    progress = progress.split('');
    progress.splice(pos,1,"E");
    progress = progress.join('');
    mySpan.innerHTML = progress;
})
ltrN.addEventListener("click", function(){
    pos = secretWord.indexOf("N")
    progress = progress.split('');
    progress.splice(pos,1,"N");
    progress = progress.join('');
    mySpan.innerHTML = progress;
})
ltrO.addEventListener("click", function(){
    pos = secretWord.indexOf("O")
    progress = progress.split('');
    progress.splice(pos,1,"O");
    progress = progress.join('');
    mySpan.innerHTML = progress;
})
ltrM.addEventListener("click", function(){
    pos = secretWord.indexOf("M")
    progress = progress.split('');
    progress.splice(pos,1,"M");
    progress = progress.join('');
    mySpan.innerHTML = progress;
});
//Alphabets for "ELF"
ltrF.addEventListener("click", function(){
    pos = secretWord.indexOf("F")
    progress = progress.split('');
    progress.splice(pos,1,"F");
    progress = progress.join('');
    mySpan.innerHTML = progress;
});

//ANIMAL CATEGORY CODE:

animalBtn2.addEventListener("click", function(){
// when animalBtn2 clicked, generate random number b/w 0-3
// save value in a variable like: index
// when button clicked, pull out random value and save in 
// secret word variable 
    randomIndex = Math.floor(Math.random() * Math.floor(2))
    secretWord = aniArray[randomIndex]
    alert(aniArray[randomIndex]);
    if (secretWord === aniArray[randomIndex]){
        mySpan.innerHTML = progress;
    }
});

// Alphabets Assigned to "LION"
ltrI.addEventListener("click", function(){
    pos = secretWord.indexOf("I")
    progress = progress.split('');
    progress.splice(pos,1,"I");
    progress = progress.join('');
    mySpan.innerHTML = progress;
})

//Alphabets Assigned to "BISON"
ltrB.addEventListener("click", function(){
    pos = secretWord.indexOf("B")
    progress = progress.split('');
    progress.splice(pos,1,"B");
    progress = progress.join('');
    mySpan.innerHTML = progress;
});


//EVERYDAY ITEMS CATEGORY CODE:

everydayBtn3.addEventListener("click", function(){
    randomIndex = Math.floor(Math.random() * Math.floor(2))
    secretWord = eveArray[randomIndex]
    alert(eveArray[randomIndex]);
    if (secretWord === eveArray[randomIndex]){
        mySpan.innerHTML = progress;
    } 
})

//Alphabets assigned to "CAR"
ltrC.addEventListener("click", function(){
    pos = secretWord.indexOf("C")
    progress = progress.split('');
    progress.splice(pos,1,"C");
    progress = progress.join('');
    mySpan.innerHTML = progress;
});

ltrR.addEventListener("click", function(){
    pos = secretWord.indexOf("R")
    progress = progress.split('');
    progress.splice(pos,1,"R");
    progress = progress.join('');
    mySpan.innerHTML = progress;
});

//Alphabets assigned to "PHONE"
ltrP.addEventListener("click", function(){
    pos = secretWord.indexOf("P")
    progress = progress.split('');
    progress.splice(pos,1,"P");
    progress = progress.join('');
    mySpan.innerHTML = progress;
});
ltrH.addEventListener("click", function(){
    pos = secretWord.indexOf("H")
    progress = progress.split('');
    progress.splice(pos,1,"H");
    progress = progress.join('');
    mySpan.innerHTML = progress;
});



