const template = document.createElement("template");

template.innerHTML = `
  <style>
    @import "//fonts.googleapis.com/icon?family=Material+Icons";
    :host{
      padding: 10px;
      position: absolute;
      top: 0;
      left: 0;
      // right: 0;
      // margin: auto;
      min-width: 200px;
      max-width: 500px;
      text-align: left;
    }
    .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #F1F1F1;
        background-color: #202020 ;
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
  </style>
  <div class="wrapper">
    <span class="message">
    </span>
    <i class="material-icons icon">
      close
    <i>
  </div>
`;

class ToastEmoji extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: "open" });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this._messageView = this._shadowRoot.querySelector("span");
    }

    connectedCallback() {
        if (!this.hasAttribute("message")) {
            this._message = "✨Hey There";
        }
        if (!this.hasAttribute("type")) {
            this._type = "default";
        }

        this._render();
    }

    _pickAnEmoji = () => {
        const type = this.type;
        let emojis = [];
        switch (type) {
            case "default":
                emojis = ["✨", "🧐", "🥳", "🚀", "🎉", "🚩"];
                break;
            default:
                emojis = ["✨", "🧐", "🥳", "🚀", "🎉", "🚩"];
                break;
        }

        let index = Math.floor(Math.random() * (emojis.length - 1)) + 0;
        return emojis[index];
    };

    _render() {
        this._messageView.innerText = this._pickAnEmoji() + " " + this._message;
    }

    static get observedAttributes() {
        return ["message"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            switch (name) {
                case "message":
                    this._message = newValue;
                    break;
                default:
                    break;
            }
            this._render();
        }
    }

    get hidden() {
        return this.hasAttribute("hidden");
    }

    set checked(val) {
        if (val) {
            this.setAttribute("hidden", "");
        } else {
            this.removeAttribute("hidden");
        }
    }
}

var matrialIconsStyle = document.createElement("link");
matrialIconsStyle.setAttribute("rel", "stylesheet");
matrialIconsStyle.setAttribute(
    "href",
    "https://fonts.googleapis.com/icon?family=Material+Icons"
);
document.querySelector("head").appendChild(matrialIconsStyle);

customElements.define("toast-emoji", ToastEmoji);
