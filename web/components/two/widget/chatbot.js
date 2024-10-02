fetch("http://172.17.142.50:8001/chatbot.widget.html")
    .then((response) => {
        return response.text();
    })
    .then((html) => {
        console.log(html);

        const template = document.createElement("template");
        template.innerHTML = html;
        class ChatBot extends HTMLElement {
            constructor() {
                super();
                this.attachShadow({ mode: "open" });
                this.shadowRoot.appendChild(template.content.cloneNode(true));
                console.log("ChatBot created!");
            }

        }
        window.customElements.define("chatbot-widget", ChatBot);
    })
    .catch((error) => {
        console.error(error);
    });

function widgetChatbotDoSend() {
    console.log("widgetChatbotDoSend");
    const chatbotWidget = document.querySelector("chatbot-widget");
    const shadowRoot = chatbotWidget.shadowRoot;
    const textArea = shadowRoot.querySelector(".chatbot-textarea") || { value: "no element found" };
    const message = textArea.value || "no input specified";

    if (message.trim() === "") {
        return;
    }

    const chat = shadowRoot.querySelector(".transcript");
    console.log("chat", chat);
    const messageElement = document.createElement("div");
    messageElement.innerHTML = `<div class="chatbot-message chatbot-message-user">${message}</div>`;
    chat.appendChild(messageElement);
    textArea.value = "";
    widgetChatbotDoReply();
}

function widgetChatbotDoReply() {
    console.log("widgetChatbotDoReply");
    const chatbotWidget = document.querySelector("chatbot-widget");
    const shadowRoot = chatbotWidget.shadowRoot;
    const chat = shadowRoot.querySelector(".transcript");
    const messageElement = document.createElement("div");
    messageElement.innerHTML = `<div class="chatbot-message chatbot-message-bot">This is a reply from the bot.</div>`;
    chat.appendChild(messageElement);
}
