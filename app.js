let userScore = 0;
let CopmScore = 0;

const choises = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = ()=>{
    let choice = ["rock","paper","scissor"];
    const randomIndx = Math.floor(Math.random()*3);
    return choice[randomIndx];
}
showWinner=(userwin,userchoice,compChoices)=>{
    let compChoicess= compChoices;
    if(userwin){
        userScore++;
        console.log("you win");
        userScorePara.innerText =userScore;
        msg.innerText = `You win! your ${userchoice} beats ${compChoicess}`;
        msg.style.backgroundcolor ="green";
    }else{
        CopmScore++;
        console.log("you lose");
        compScorePara.innerText = CopmScore;
        msg.innerText = `You lose! ${compChoicess} beats your ${userchoice}`;
        msg.style.backgroundcolor = "red";
    }
}
const playgame= (userchoice)=>{
        console.log("user choice is ",userchoice );
        let compChoice = genCompChoice();
        console.log("computer choice is ",compChoice);
        if(compChoice===userchoice){
            console.log("It's a draw");
            msg.innerText = `This was Draw! of ${userchoice} and ${compChoice}`;
        }else{
            let userwin = true;
            if(userchoice === "rock"){
                userwin = (compChoice==="paper")?false : true; 
            }
            else if(userchoice==="paper"){
                userwin = (compChoice==="rock")?true:false;
            }
            else{
                userwin = (compChoice==="paper")?true:false;
            }
            showWinner(userwin,userchoice,compChoice);
        }
}


choises.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
       playgame(userchoice);
    })
})

