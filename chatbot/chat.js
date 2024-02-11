
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

const questionsAndAnswers = [
    {
        question: 'What is the capital of France?',
        answer: 'The capital of France is Paris.'
    },
    {
        question: 'What is 2 + 2?',
        answer: '2 + 2 equals 4.'
    },
    {
        question: 'Who is the author of "Romeo and Juliet"?',
        answer: 'William Shakespeare is the author of "Romeo and Juliet."'
    },
    
];

function sendMessage1() {
    const userMessage = userInput.value.trim();
    if (userMessage !== '') {
        displayUserMessage(userMessage);
        processUserInput(userMessage);
        userInput.value = '';
    }
}

function displayUserMessage(message) {
    const userDiv = document.createElement('div');
    userDiv.className = 'user-message';
    userDiv.textContent = 'You: ' + message;
    chatMessages.appendChild(userDiv);
}

function displayBotMessage(message) {
    setTimeout(() => {
        const botDiv = document.createElement('div');
        botDiv.className = 'bot-message';
        botDiv.textContent = 'Bot: ' + message;
        chatMessages.appendChild(botDiv);
    }, 1000); // Delay of 1000 milliseconds (1 second) before showing bot's message
}

        function processUserInput(userMessage) {
            for (const { question, answer } of questionsAndAnswers) {
                if (userMessage.toLowerCase().includes(question.toLowerCase())) {
                    displayBotMessage(answer);
                    return;
                }
            }

            displayBotMessage('Sorry, I cannot understand your query.');
        }

        function redirectToNewPage() {
            window.location.href = 'gptbot.html';
        }

        let chatbotVisible = false;

        function toggleChatbot() {
            const chatContainer = document.getElementById("chat-container");
            chatbotVisible = !chatbotVisible;
            chatContainer.style.visibility = chatbotVisible ? "visible" : "hidden";
        }

        function sendMessage() {
            const inputField = document.querySelector(".input-field");
            const message = inputField.value.trim();
            if (message !== "") {
                addMessage("user", message);
                inputField.value = "";
            }
        }

        function addMessage(sender, content) {
            const chatMessages = document.querySelector(".chat-messages");
            const messageDiv = document.createElement("div");
            messageDiv.textContent = content;
            messageDiv.classList.add(`${sender}-message`);
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function closeChatbot() {
        }
  