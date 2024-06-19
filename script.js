document.addEventListener('DOMContentLoaded', function() {
    const scratchCards = document.querySelectorAll('.scratch-card');
    const resultDiv = document.getElementById('result');
    const timerSpan = document.getElementById('timer');
    
    let timeLeft = 300; // 5 minutes in seconds
    const outcomes = ["🎉", "😢", "👍"];
    
    function updateTimer() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerSpan.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timeLeft > 0) {
            timeLeft--;
        } else {
            clearInterval(timerInterval);
            resultDiv.textContent = "Tempo esgotado!";
        }
    }
    
    const timerInterval = setInterval(updateTimer, 1000);
    
    scratchCards.forEach(card => {
        card.addEventListener('click', function() {
            if (!card.textContent.includes("🎉") && !card.textContent.includes("😢") && !card.textContent.includes("👍")) {
                const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
                card.textContent = randomOutcome;
                checkWinCondition();
            }
        });
    });
    
    function checkWinCondition() {
        let winCount = 0;
        scratchCards.forEach(card => {
            if (card.textContent === "🎉") {
                winCount++;
            }
        });
        if (winCount >= 3) {
            resultDiv.textContent = "Você ganhou!";
            clearInterval(timerInterval);
        }
    }
});
