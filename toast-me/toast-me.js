class ToastComponent extends HTMLElement {
    constructor() {
        super();

        var shadow = this.attachShadow({ mode: 'open' });

        var wrapper = document.createElement("div");
        wrapper.setAttribute("class", "wrapper")
        {/* <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"> */}

        var matrialIconsStyle = document.createElement("link")
        matrialIconsStyle.setAttribute("rel", "stylesheet")
        matrialIconsStyle.setAttribute("href", "https://fonts.googleapis.com/icon?family=Material+Icons")
        // matrialIconsStyle.setAttribute("defer", true)

        var style = document.createElement("style")
        style.textContent = `

            .wrapper {
                display: flex;
                justify-content: space-between;
                color: #c0c0c0;
                background-color: black;
                padding: 10px 20px ;
                border-radius: 10px;
                width: fit-content;
                min-width: 200px;
                max-width: 500px;
            }
            .icon {
            }
            `
        // <i class="material-icons">face</i>
        var icon = document.createElement("i")
        icon.setAttribute("class", "material-icons")


        icon.innerText = "face"

        var message = document.createElement("span")
        var text = this.getAttribute('message');

        message.innerText = text || "Hi there";

        shadow.appendChild(wrapper)
        shadow.appendChild(matrialIconsStyle)
        shadow.appendChild(style)
        wrapper.appendChild(message)
        wrapper.appendChild(icon)



    }
}

customElements.define('toast-me', ToastComponent);