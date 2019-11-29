class ToastComponent extends HTMLElement {
    constructor() {
        super();

        var shadow = this.attachShadow({ mode: 'closed' });

        var wrapper = document.createElement("div");
        wrapper.setAttribute("class", "wrapper")

        var style = document.createElement("style")
        style.textContent = `
            .wrapper {
                color: #c0c0c0;
                background-color: black;
                padding: 10px 20px ;
                border-radius: 10px;
            }
        `

        var defaultChild = document.createElement("span")
        var text = this.getAttribute('message');

        defaultChild.innerText = text || "Hi there";

        shadow.appendChild(wrapper)
        shadow.appendChild(style)
        wrapper.appendChild(defaultChild)



    }
}

customElements.define('toast-me', ToastComponent);