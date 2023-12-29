const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector("#send-btn");

const inputInitHeight = chatInput.scrollHeight;
let userMessage = null;

let intentsData; // Store the intents data

// Load intents data from intents.json
fetch('intents.json')
  .then(response => response.json())
  .then(data => {
    intentsData = data.intents;
  });

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<pre></pre>` : `<pre></pre>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("pre").textContent = message;
    return chatLi;
}

const generateResponse = (userMessage) => {
    const matchedIntent = intentsData.find(intent => {
        return intent.patterns.some(pattern => userMessage.toLowerCase().includes(pattern.toLowerCase()));
    });

    if (matchedIntent) {
        const randomResponse = matchedIntent.responses[Math.floor(Math.random() * matchedIntent.responses.length)];
        return randomResponse;
    } else {
        return "I can't assist with that.";
    }
};

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
    setTimeout(() => {
        const response = generateResponse(userMessage);
        const incomingChatLi = createChatLi(response,"incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }, 600);
}

chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));


