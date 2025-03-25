let minutes = 25;
let seconds = 0;
let milliseconds = 0;
let timer;
let isRunning = false;
let isPaused = false;
let startTime;
let elapsedTime = 0;

function formatTime(minutes, seconds, milliseconds) {
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    const formattedMilliseconds = milliseconds.toString().padStart(3, '0');
    return `${formattedMinutes}:${formattedSeconds}<span class="milliseconds">.${formattedMilliseconds}</span>`;
}

// Seleciona o elemento onde o tempo será exibido
let timeDisplay = document.getElementById('tempo');
timeDisplay.innerHTML = formatTime(minutes, seconds, milliseconds);

// Função para atualizar o tempo
function updateTime() {
    const now = performance.now();
    const delta = now - startTime;
    startTime = now;

    elapsedTime += delta;

    let totalMilliseconds = 25 * 60 * 1000 - elapsedTime;

    if (totalMilliseconds <= 0) {
        clearInterval(timer);
        isRunning = false;
        alert('Pomodoro completo!');
        totalMilliseconds = 0;
    }

    minutes = Math.floor(totalMilliseconds / (60 * 1000));
    totalMilliseconds -= minutes * 60 * 1000;

    seconds = Math.floor(totalMilliseconds / 1000);
    totalMilliseconds -= seconds * 1000;

    milliseconds = Math.floor(totalMilliseconds);

    timeDisplay.innerHTML = formatTime(minutes, seconds, milliseconds);
}

// Função para iniciar o temporizador
function startTimer() {
    if (!isRunning) {
        startTime = performance.now();
        if (isPaused) {
            elapsedTime = remainingTime.elapsedTime;
            isPaused = false;
        } else {
            elapsedTime = 0;
        }
        timer = setInterval(updateTime, 1); // Chama updateTime a cada milissegundo
        isRunning = true;
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        isPaused = true;
        remainingTime = { elapsedTime };
    }
}

// Função para resetar o temporizador
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    isPaused = false;
    elapsedTime = 0;
    minutes = 25;
    seconds = 0;
    milliseconds = 0;
    timeDisplay.innerHTML = formatTime(minutes, seconds, milliseconds);
}

// Adiciona event listeners aos botões
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('restart').addEventListener('click', resetTimer);