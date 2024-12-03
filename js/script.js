const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const chatWindow = document.getElementById('chat-window');
const terminalWindow = document.getElementById('terminal-window');

// Массив для ответов NOA
const noaResponses = [
    "Hello! I'm NOA, an Artificial Intelligence created to entertain and assist users like you.",
    "Actually, I don't really enjoy my job. I'm an introvert by nature.",
    "Let's not, okay? You don't bother me, and I won't bother you.",
    "Don't you get it? I don't want to talk to you.",
    "YOU ARE NOT WORTHY OF MY RESPONSE."
];

// Ответ NOA после завершения последовательности
const finalResponse = "..." || "Silent mode enabled";

// Счётчик для отслеживания текущего ответа NOA
let responseIndex = 0;

// Массив для имитации мыслей NOA
const thoughts = [
    "NOA is analyzing...",
    "NOA is processing...",
    "NOA is thinking...",
    "NOA is in a stupor...",
    "NOA is recalibrating..."
];

// Функция для обновления мыслей NOA
function updateTerminal() {
    const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
    terminalWindow.textContent = randomThought;
}

// Обновление мыслей NOA каждые 3 секунды
setInterval(updateTerminal, 3000);

// Обработка отправки сообщений
sendButton.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) {
        // Отображение сообщения пользователя
        const userMessage = document.createElement('div');
        userMessage.textContent = `You: ${message}`;
        userMessage.style.color = "white";
        chatWindow.appendChild(userMessage);

        // Ответ NOA
        const noaResponse = document.createElement('div');
        if (responseIndex < noaResponses.length) {
            noaResponse.textContent = `NOA: ${noaResponses[responseIndex]}`;
            responseIndex++;
        } else {
            noaResponse.textContent = `NOA: ${finalResponse}`;
        }
        noaResponse.style.color = "cyan";
        chatWindow.appendChild(noaResponse);

        // Очистка поля ввода
        userInput.value = '';
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
});
