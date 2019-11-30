class ToastComponent extends HTMLElement {
    constructor() {
        super();
        var shadow = this.attachShadow({ mode: 'open' });


        // material icon
        var matrialIconsStyle = document.createElement("link")
        matrialIconsStyle.setAttribute("rel", "stylesheet")
        matrialIconsStyle.setAttribute("href", "https://fonts.googleapis.com/icon?family=Material+Icons")
        matrialIconsStyle.setAttribute("async", true)

        // background
        var color = "#F1F1F1"
        var background = '#202020'

        if (this.hasAttribute("type")) {
            switch (this.getAttribute("type")) {
                case "success":
                    background = '#009000'
                    break;
                case "error":
                    background = '#900000'
                    break;
                case "warn":
                    background = '#BF8E02'
                    break;
                case "light":
                    color = "#505050"
                    background = '#F0F0F0'
                    break;
                default:
                    break;
            }

        }

        // Styles
        var style = document.createElement("style")
        style.textContent = `
            :host{
                padding: 10px;
                position: absolute;
                // left: 0;
                // right: 0;
                // margin: auto;
                min-width: 200px;
                max-width: 500px;
            }
            .wrapper {
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: ${color};
                background-color: ${background};
                padding: 10px 10px;
                border-radius: 10px;
                width: fit-content;
            }
            .icon:hover {
                background-color: #c0c0c055;
                cursor: pointer;
                border-radius: 5px;
            }
            .message {
                display:flex;
                align-items: center;
                padding: 0 10px;

            }
            // * {
            // }
            `


        // Wrapper
        var wrapper = document.createElement("div");
        wrapper.setAttribute("class", "wrapper")

        // Icon 
        var icon = document.createElement("i")

        icon.addEventListener("click", () => {
            this.hidden = true
        })

        icon.setAttribute("class", "material-icons icon")
        icon.innerText = "close"

        // Message element
        var message = document.createElement("span")
        message.setAttribute("class", "message")
        var text = this.getAttribute('message');

        var emoji = `✨`

        message.innerText = `${emoji} ${text}` || "Hi there";



        shadow.appendChild(matrialIconsStyle)
        shadow.appendChild(style)

        shadow.appendChild(wrapper)
        wrapper.appendChild(message)
        wrapper.appendChild(icon)

    }
}

// Added for compatability with chrome
var matrialIconsStyle = document.createElement("link")
matrialIconsStyle.setAttribute("rel", "stylesheet")
matrialIconsStyle.setAttribute("href", "https://fonts.googleapis.com/icon?family=Material+Icons")
document.querySelector("head").appendChild(matrialIconsStyle)

customElements.define('toast-me', ToastComponent);
