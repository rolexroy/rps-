
function getRandomInt(num){
    return Math.floor(Math.random()*Math.floor(num))
}

function playgame(choice){
    const choices = ['rock','paper','scissors'];
    const score = [0,0];
    let playerOneMove = choices[getRandomInt(3)];//computer
    let playerTwoMove = choice.toLowerCase();
    if((playerOneMove === "rock"  && playerTwoMove === "scissors")||(playerOneMove === "scissors" && playerTwoMove=== "paper")||(playerOneMove ==="paper" && playerTwoMove === "rock")){
        score[0] = 1;
        console.log('player one won');
    } else if((playerOneMove === "rock" && playerTwoMove  === "paper")||(playerOneMove === "paper"&& playerTwoMove=== "scissors")||(playerOneMove === "scissors"&& playerTwoMove=== "rock")){
        score[1] = 1;
        console.log('player two won');
    } else{
        score[0] = score[1] = 0;  
        console.log('Draw');        
    }
    
    console.log(`player one : ${playerOneMove} \nplayer two : ${playerTwoMove} \nscore : ${score}`);
  
}
playgame('rock')
playgame('paper')
playgame('scissors')
playgame('rock')
playgame('paper')
playgame('scissors')
