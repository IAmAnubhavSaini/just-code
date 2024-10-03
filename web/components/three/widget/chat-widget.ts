class ChatWidget extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot!.innerHTML = `
    <style>
        .chat-widget {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
            margin: 10px;
        }
    </style>
    <div class="chat-widget container">
        <div>
            <h1>Chat Widget</h1>
        </div>
        <div>Content</div>
        <div>Footer</div>
    </div>
    `;
    }
}

customElements.define("chat-widget", ChatWidget);
