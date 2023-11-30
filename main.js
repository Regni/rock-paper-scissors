const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const resetbtn = document.getElementById("reset")
const feedback = document.querySelector(".feedback")
const user = document.getElementById("userContainer")
//score object to track and update score elements
const score ={
  win : 0,
  loss: 0,
  tied: 0,
  ele: document.getElementById("scoreboard"),
  init: function(){
    this.ele.textContent = `${this.win} games won - ${this.loss} games lost - ${this.tied} games tied`
  }, 

  update: function(){
    this.ele.textContent = `${this.win} games won - ${this.loss} games lost - ${this.tied} games tied`
},
  resetting: function(){
    this.win = 0;
    this.tied = 0;
    this.loss = 0;
    this.init();
  }

}
//object to put names to numbers for feedback
const outcome = {
  1 : "Rock",
  2 : "Paper",
  3 : "Scissors"
}
//creating the scoreboard element
score.init()
//check userinput
user.addEventListener("click", function(evt){

  if(evt.target == rock||evt.target ==scissor|| evt.target ==paper){
    
  winCheck(evt.target)
  }
 
})
//reset the scoreboard for a new game
resetbtn.addEventListener("click", function(){
  score.resetting()
})

//returns a computer value
function setComputerGuess(){
//rock = 1 - paper = 2 - scissor = 3
let computerGuess = Math.floor(Math.random() *3 + 1)

return computerGuess
}
//game logic
function winCheck(user){
  computer = setComputerGuess()
  user = convertUser(user)
  if(user == computer){
    feedback.textContent= `You picked ${outcome[user]} and the computer picked ${outcome[computer]}, you tied!`
    score.tied++
  }else if(user < computer && computer-user == 1 || user ==3 && computer == 1){
    score.loss++
  feedback.textContent= `You picked ${outcome[user]} and the computer picked ${outcome[computer]}, you lost!`
  }else{
    score.win++
    feedback.textContent=`You picked ${outcome[user]} and the computer picked ${outcome[computer]}, you won!!!!`
    console.log("winner!")
  }
  score.update()
}

//function to make the userinput as the computers input
function convertUser(userInput){
  switch (userInput) {
    case rock:
      return 1;
      break;
    case paper: 
      return 2;
      break
    case scissor: 
      return 3;
      break
    }
}




