const chatInput = document.querySelector(".chat-input textarea");
const sendChatbtn = document.querySelector(".chat-input #send-btn");
const chatbox = document.querySelector(".chatbox");

let userMessage;
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}
// const API_KEY = "";
// const generateResponse = () => {
//     const API_URL = "";
//     const requestOptions = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${API_KEY}`
//         },
//         body: JSON.stringify({
//             model: "gpt-3.5-turbo",
//             messages: [{ "role": "user", "content": userMessage }]

//         })

//     }
//     fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
//         console.log(data);
//     }).catch((error) => {
//         console.log(error);
//     })
// }

const handleChat = () => {

    userMessage = chatInput.value.trim();
    if (!userMessage) return;
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatInput.value = '';

    setTimeout(() => {
        chatbox.appendChild(createChatLi("Generating Response...", "incoming"));
        //generateResponse();
    }, 600);

}
sendChatbtn.addEventListener("click", handleChat);
function voice() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.onresult = function (event) {
        console.log(event);
        document.getElementById("text").value =
            event.results[0][0].transcript;
    }
    recognition.start();
}
function voiceAssistent() {

    var text = document.getElementById("speak").textContent;
    var speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}
const box = document.querySelector('.chatbot');
function openBot() {
    
    voiceAssistent();
    box.classList.add('animateForOpen');
    const cls= document.getElementById("close-icon");
    cls.style.display='inline';
    const jump=document.getElementById('close-btn');
    jump.style.animation='none';
}
function closeBot() {
    
    box.classList.add('animateForClose');

    const cls= document.getElementById("close-icon");
    cls.style.display='none';
    const jump=document.getElementById('close-btn');
    jump.style.animation='jump 1s infinite';

}
let areOpen = false;

function toggleChatBot() {
    const chatBotButton = document.getElementById('close-btn');

    if (areOpen) {
        chatBotButton.classList.remove('opened');
        chatBotButton.classList.add('closed');
        box.classList.remove('animateForOpen');
        closeBot();
        // Code to close the chatbot
    } else {
        chatBotButton.classList.remove('closed');
        chatBotButton.classList.add('opened');
        box.classList.remove('animateForClose');
        // Code to open the chatbot
        openBot();
    }

    areOpen = !areOpen;
}