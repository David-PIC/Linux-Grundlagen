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

    for (let i = 0; i < taskCount; i++) {
        const input = tasks[i].querySelector(".input-field");
        const taskId = input.getAttribute("id");
        const prefix = taskId.substring(0, 2);
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

function resetSolutionsWithDataPrefix() {
    const button = document.querySelector('button[data-prefix]');
    const prefix = button.getAttribute('data-prefix');

    for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key.startsWith(prefix)) {
            localStorage.removeItem(key);
        }
    }
    location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".button");
    const prefix = button.dataset.prefix;
    loadSolutions(prefix);
});

window.addEventListener("load", () => {
    const button = document.querySelector(".button");
    const prefix = button.dataset.prefix;
    loadSolutions(prefix);
});

