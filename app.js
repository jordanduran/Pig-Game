let scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('#current-' + activePlayer).textContent = dice;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {
  // Calculate a random number
  let dice = Math.floor(Math.random() * 6) + 1;

  // Display the results
  let diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = './images/dice-' + dice + '.png';

  // Update the round score IF the rolled number was NOT a 1

  if (dice !== 1) {
    // Add score

    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    // Next player

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // Set round score back to 0

    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '1';

    // Toggle active class --add/remove--

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // Remove dice when player rolls a 1

    document.querySelector('.dice').style.display = 'none';
  }
});
1;
