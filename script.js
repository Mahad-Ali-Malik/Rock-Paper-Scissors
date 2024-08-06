
// Accessing all elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#compscore");

// Initializing/declaring User/comp score
let userScore = 0;
let compScore = 0;

//Generate Comp choice function
const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

// Draw game function
const drawGame = ()=>{
    msg.innerText = "Game was a draw! Play again";
    msg.style.backgroundColor = "#081b31";
}

// Showwinner function
const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

// Playgame function (Throughout game logic)
const playGame = (userChoice)=>{
    const compChoice = genCompChoice();
    if(userChoice==compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice=="rock"){
            userWin = compChoice == "paper" ? false : true;
        }else if (userChoice=="paper"){
            userWin = compChoice == "scissors" ? false : true;
        }else{
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice)
    }
}

// User choice for each method
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})