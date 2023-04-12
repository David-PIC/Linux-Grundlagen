function checkAnswer(taskId, correctAnswers) {
    const input = document.getElementById(taskId);
    const result = document.getElementById(`${taskId}-result`);
    const button = document.getElementById(`${taskId}-button`);

    if (correctAnswers.includes(input.value.trim())) {
        result.innerHTML = "Richtige Lösung!";
        result.style.color = "green";
        saveSolution(taskId, input.value.trim());
        input.disabled = true;
        button.disabled = true;
    } else {
        result.innerHTML = "Falsche Lösung. Versuchen Sie es noch einmal.";
        result.style.color = "red";
    }
}

function saveSolution(taskId, correctAnswer) {
    localStorage.setItem(taskId, correctAnswer);
}

function loadSolutions() {
    const tasks = document.getElementsByClassName("task");
    const taskCount = tasks.length;

    for (let i = 1; i <= taskCount; i++) {
        const taskId = `task${i}`;
        const solution = localStorage.getItem(taskId);
        if (solution) {
            const input = document.getElementById(taskId);
            const button = document.getElementById(`${taskId}-button`);
            input.value = solution;
            input.disabled = true;
            button.disabled = true;
            const result = document.getElementById(`${taskId}-result`);
            result.innerHTML = "Richtige Lösung!";
            result.style.color = "green";
        }
    }
}

function resetSolutions() {
    localStorage.clear();
    location.reload();
}

document.addEventListener("DOMContentLoaded", loadSolutions);