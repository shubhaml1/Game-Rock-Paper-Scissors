   /* Store and update the score */
   const score = JSON.parse(localStorage.getItem('savedScore')) ||
   {
       wins: 0,
       losses: 0,
       ties: 0
   };

   /* Function for game */
   function playGame(playerMove) {
       document.querySelector('.play-game').play();
       let pMove = '';
       let result = '';
       let computerMoveData = pickComputerMove();
       let computerMove = computerMoveData[0];
       let compMove = computerMoveData[1];
       //to store html of computer move
      
       if (playerMove === 'scissors') {
           pMove += '<i data-option="scissors" class="icon-option fa fa-hand-scissors-o" aria-hidden="true"></i>';
           if (computerMove === 'rock') {
               result = 'You lose :(';
           } else if (computerMove === 'paper') {
               result = 'Hurray!! You win!';
           } else if (computerMove === 'scissors') {
               result = 'Draw';
       }
       } else if (playerMove === 'paper') {
           pMove += '<i data-option="paper" class="icon-option fa fa-hand-paper-o" aria-hidden="true"></i>';

       if (computerMove === 'rock') {
               result = 'Hurray!! You win!';
       } else if (computerMove === 'paper') {
               result = 'Draw';
       } else if (computerMove === 'scissors') {
               result = 'You lose :(';
       }
       } else if (playerMove === 'rock') {
           pMove += '<i data-option="rock" class="icon-option fa fa-hand-rock-o" aria-hidden="true"></i>';

       if (computerMove === 'rock') {
               result = 'Draw';
       } else if (computerMove === 'paper') {
               result = 'You lose :(';
       } else if (computerMove === 'scissors') {
               result = 'Hurray!! You win!';
       }
   }
   let gameStatusEle = document.querySelector('.js-result-final');

       // Update the score object based on the match 
       if (result === 'Hurray!! You win!')  {
           score.wins += 1;
           
           if(score.wins === 5) {
               gameStatusEle.innerHTML = 'You Win!! Game Over';
               // document.querySelector('.reset-button').innerHTML = 'Restart Game';
               document.querySelector('.win-game').play();
           }
       }    
       else if (result === 'You lose :(') {
           score.losses += 1;
           if(score.losses === 5) {
               gameStatusEle.innerHTML = 'You Lost Bro!! Game Over';
               // document.querySelector('.reset-button').innerHTML = 'Restart Game';
               document.querySelector('.lose-game').play();
           }
       } 
       else score.ties += 1;
       localStorage.setItem('savedScore', JSON.stringify(score));
       document.querySelector('.js-result').innerHTML = result;

       // document.querySelector('.js-moves').innerHTML = `You picked: ${playerMove} Computer picked: ${computerMove}.`;
       document.querySelector('.js-moves').innerHTML = `You picked: ${ pMove} Computer picked: ${ compMove}`;
       document.querySelector('.js-status').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties} .`;


   
   // localStorage.setItem('savedScore', 'score');

   // Pop-up the result of the match
   //alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}\n\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

   // Function for Computer Move
function pickComputerMove() {
   const randomNumber = Math.floor(Math.random() * 3);
       let computerMove = '';
       let compMove = '';
   if (randomNumber === 0) {
           computerMove = 'rock';
           compMove += '<i data-option="rock" class="icon-option fa fa-hand-rock-o" aria-hidden="true"></i>';
   } else if (randomNumber === 1) {
           computerMove = 'paper';
           compMove +='<i data-option="paper" class="icon-option fa fa-hand-paper-o" aria-hidden="true"></i>';
   } else if (randomNumber === 2) {
           computerMove = 'scissors';
           compMove +='<i data-option="scissors" class="icon-option fa fa-hand-scissors-o" aria-hidden="true"></i>';
   }
   let computerMoveData = [computerMove,compMove];
   return computerMoveData;
}

   // Function to reset scores
   function resetScores() {
       score.wins = 0;
       score.losses = 0;
       score.ties = 0;
       localStorage.removeItem('savedScore');
       document.querySelector('.js-status').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties} .`;
       document.querySelector('.js-result-final').innerHTML = 'First 5 scorer will win.';
   }