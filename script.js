document.addEventListener('DOMContentLoaded', function() {
    const scratchButton = document.getElementById('scratch-button');
    const resultDiv = document.getElementById('result');

    scratchButton.addEventListener('click', function() {
        const outcomes = ["Você ganhou!", "Tente novamente!", "Você perdeu!"];
        const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
        resultDiv.textContent = randomOutcome;
    });
});
