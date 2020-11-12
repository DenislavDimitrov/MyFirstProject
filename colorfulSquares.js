function colorfulSquares() {
    let dicebtn = document.getElementById('diceBtn');
    let cons1 = document.getElementById('player1console')
    let cons2 = document.getElementById('player2console')
    let player1 = document.getElementById('player1')
    let player2 = document.getElementById('player2')
    let player1login = document.getElementById('p1')
    let player2login = document.getElementById('p2')
    let loginBtn = document.getElementById('log')
    let player1result = 1;
    let player2result = 1;
    let currentPlayer = player1;
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault()
        let p1 = '';
        let p2 = ''; 
        if (player2login.value != '' && player1login.value != ''){
          p1 = player1login.value;
          p2 = player2login.value;  
          player1login.value = '';
          player2login.value = '';
          alert(`${p1} vs ${p2}\nGO`)
    dicebtn.addEventListener('click', () => {

        let firstDice = Math.random().toFixed(1) * 10
        let secondDice = Math.random().toFixed(1) * 10
        if (firstDice == 0) {
            firstDice = 1;
        } else if (firstDice == 7) {
            firstDice = 2;
        }
        else if (firstDice == 8) {
            firstDice = 3;
        }
        else if (firstDice == 9) {
            firstDice = 4;
        }
        else if (firstDice == 10) {
            firstDice = 5;
        }

        if (secondDice == 0) {
            secondDice = 1;
        } else if (secondDice == 7) {
            secondDice = 2;
        }
        else if (secondDice == 8) {
            secondDice = 3;
        }
        else if (secondDice == 9) {
            secondDice = 4;
        }
        else if (secondDice == 10) {
            secondDice = 5;
        }


        let diceResult = firstDice + secondDice;

        if (currentPlayer == player1) {
            player1result += diceResult;
            cons1.textContent = `${p1} got ${diceResult}`
            cons2.textContent = `Awaiting...`
            dice1.textContent = firstDice;
            dice2.textContent = secondDice;
            if (player1result < 116) {
                document.getElementById(`${player1result}`).appendChild(player1)
            } else if (player1result == 116) {
                alert(`${p1} win`)
            } else {
                player1result -= diceResult
            }
        } else {
            player2result += diceResult;
            cons2.textContent = `${p2} got ${diceResult}`
            cons1.textContent = `Awaiting...`
            dice1.textContent = firstDice;
            dice2.textContent = secondDice;
            if (player2result < 116) {
                document.getElementById(`${player2result}`).appendChild(player2)
            } else if (player2result == 116) {
                alert(`${p2} 2 win`)
            } else {
                player2result -= diceResult
            }
        }

        if (currentPlayer.parentElement.classList.contains('red')) {
            if (currentPlayer == player1) {
                player1result -= 6
                document.getElementById(`${player1result}`).appendChild(player1)
                currentPlayer = player2
                dicebtn.style.backgroundColor = 'red'
            } else {
                player2result -= 6
                document.getElementById(`${player2result}`).appendChild(player2)
                currentPlayer = player1
                dicebtn.style.backgroundColor = 'pink'
            }
        }
        else if (currentPlayer.parentElement.classList.contains('blue') || diceResult == 12) {
           
        }

        else if (currentPlayer.parentElement.classList.contains('yellow')) {
            if (currentPlayer == player1) {
                player2result = 1;
                document.getElementById(`${player2result}`).appendChild(player2)
            }
            else {
                player1result = 1;
                document.getElementById(`${player1result}`).appendChild(player1) 
            }
        }
        else if (currentPlayer.parentElement.classList.contains('black')) {
            if (currentPlayer == player1) {
                player1result = 1;
                document.getElementById(`${player1result}`).appendChild(player1)
                currentPlayer = player2
                dicebtn.style.backgroundColor = 'red'
            }
            else {
                player2result = 1;
                document.getElementById(`${player2result}`).appendChild(player2)
                currentPlayer = player1
                dicebtn.style.backgroundColor = 'pink'
            }
        } else {
            if (currentPlayer == player1) {
                currentPlayer = player2
                dicebtn.style.backgroundColor = 'red'

            } else {
                currentPlayer = player1
                dicebtn.style.backgroundColor = 'pink'
            }
        }
    })
}
})
}

