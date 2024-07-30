let guessbtn=document.querySelector(".userinput button");
let val= document.querySelector(".userinput input");
let response=document.querySelector(".result");
let counter=document.querySelector(".guess-count span");
let alreadyguessed=document.querySelector(".choices span");


function randomInt(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
let rndomint=randomInt(1,50);
let ct=0
guessbtn.addEventListener("click",()=>{
    let guessednum=val.value;
    console.log(rndomint);
    response.style.color="#343434d6";

    if(ct==0){
        guessbtn.innerHTML="GUESS"
        alreadyguessed.innerHTML="";
        response.style.color="#343434d6";
        alreadyguessed.innerHTML +=guessednum;
    }
    else{
        alreadyguessed.innerHTML +=`, ${guessednum}`;
    }
    ct+=1;
    counter.innerHTML=ct;

    if (rndomint==guessednum){
        response.innerHTML=`You Guesses it! ${rndomint}`;
        response.style.color="#00A4E2";
        guessbtn.innerHTML="Play Again";
        rndomint=randomInt(1,50);
        ct=0;

    }
    else if(guessednum<rndomint && guessednum>0){
        response.innerHTML=`Guess Higher`;
    }
    else if(guessednum>rndomint && guessednum<=50){
        response.innerHTML=`Guess Lower`;
    }
    else{
        response.innerHTML="Invalid!?";
        response.style.color="rgba(255, 32, 32, 0.705)";
    }
})