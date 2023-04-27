function checkAnswer(task, inputId) {
    const inputElement = document.getElementById(inputId);
    const answer = inputElement.value.trim();
    const resultElement = document.getElementById(`${inputId}-result`);


    if (correctAnswers[task].includes(answer)) {
        resultElement.innerHTML = "Richtig! Andere mögliche Lösungen: " + correctAnswers[task].join(", ");
    } else {
        resultElement.innerHTML = "Falsch. Versuchen Sie es noch einmal.";
    }
}