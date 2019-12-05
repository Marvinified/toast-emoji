const template = document.createElement("template");

template.innerHTML = `
<style>
@import "//fonts.googleapis.com/icon?family=Material+Icons";

:host {
  padding: 10px;
  position: absolute;
  width: fit-content;
  height: fit-content;
  text-align: left;
  animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  -moz-animation: fadeIn ease 1s;
  -o-animation: fadeIn ease 1s;
  -ms-animation: fadeIn ease 1s;
}

:host(.top-left) {
  top: 0;
  left: 0;
}

:host(.top-right) {
  top: 0;
  right: 0;
}

:host(.top-center) {
  top: 0;
  right: 0;
  left: 0;
  margin: auto;
}

:host(.center) {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
}

:host(.left) {
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

:host(.bottom-left) {
  bottom: 0;
  left: 0;

}

:host(.bottom-right) {
  bottom: 0;
  right: 0;
}

:host(.bottom-center) {
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
}

:host(.right) {
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #F1F1F1;
  background-color: #202020;
  padding: 10px 10px;
  border-radius: 10px;
  width: fit-content;
  min-width: 200px;
  max-width: 500px;
}

.wrapper.success {
  background-color: #009000;
}

.wrapper.error {
  background-color: #900000;
}

.wrapper.warn {
  background-color: #BF8E02;
}

.wrapper.light {
  color: #505050;
  background-color: #F0F0F0;
}


.icon:hover {
  background-color: #c0c0c055;
  cursor: pointer;
  border-radius: 5px;
}

.message {
  display: flex;
  align-items: center;
  padding: 0 10px;

}

:host(.fade-in) {
  animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  -moz-animation: fadeIn ease 1s;
  -o-animation: fadeIn ease 1s;
  -ms-animation: fadeIn ease 1s;
}

:host(.fade-out) {
  animation: fadeOut ease 1s;
  -webkit-animation: fadeOut ease 1s;
  -moz-animation: fadeOut ease 1s;
  -o-animation: fadeOut ease 1s;
  -ms-animation: fadeOut ease 1s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@-moz-keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@-o-keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@-ms-keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
<div class="wrapper">
<span class="message">
</span>
<i class="material-icons icon close">
  close
  <i>
</div>
`;

/**
 * The
 */

class ToastEmoji extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this._messageView = this._shadowRoot.querySelector("span.message");
    this._closeIcon = this._shadowRoot.querySelector("i.close");
    this._wrapper = this._shadowRoot.querySelector("div.wrapper");
    this._host = this._shadowRoot.host;
    this._render = this._render.bind(this);
    this._pickAnEmoji = this._pickAnEmoji.bind(this);
    this._hide = this._hide.bind(this);
  }

  disconnectedCallback() {
    console.log("unmounted");
  }

  connectedCallback() {
    if (!this.hasAttribute("message")) {
      this._message = "Hey there!";
    }

    if (!this.hasAttribute("type")) {
      this._type = "default";
    }

    if (!this.hasAttribute("position")) {
      this._position = "top-center";
    }

    this._closeIcon.addEventListener("click", e => {
      this.setAttribute("hidden", "");
      this.dispatchEvent(new Event("closed"));
    });

    this._render();
  }

  _hide() {
    this.setAttribute("hidden", "");
  }

  _pickAnEmoji(type) {
    let emojis = [];
    switch (type) {
      case "success":
        emojis = [
          "✨",
          "😁",
          "🥳",
          "😍",
          "🎉",
          "👍",
          "💪🏻",
          "💃🕺",
          "🙊",
          "🔥",
          "🏆",
          "🤓",
          "🤗"
        ];
        break;
      case "error":
        emojis = ["😕", "😟", "😟", "😦", "‼️", "🚩", "🥶"];
        break;
      case "warn":
        emojis = ["🥺", "🤔", "☠️", "🗣", "🚫", "👨🏻‍✈️"];
        break;
      case "light":
        emojis = ["🎊", "🌝", "🥳", "🛸", "🤗", "🥰", "🏖"];
        break;
      default:
        emojis = [
          "✨",
          "🧐",
          "🥳",
          "🚀",
          "🎉",
          "🧙🏻‍♂️",
          "🧐",
          "🧞‍♂️",
          "🚀",
          "🎉",
          "🤓",
          "🤗"
        ];
        break;
    }

    let index = Math.floor(Math.random() * (emojis.length - 1)) + 0;
    return emojis[index];
  }

  _render() {
    this._messageView.textContent =
      this._pickAnEmoji(this._type) + " " + this._message;

    this._wrapper.className = "wrapper " + this._type;

    const hostClass = this._host.className
      ? this._host.className
          .replace("top-left", "")
          .replace("top-center", "")
          .replace("top-right", "")
          .replace("left", "")
          .replace("center", "")
          .replace("right", "")
          .replace("bottom-left", "")
          .replace("bottom-center", "")
          .replace("undefined", "")
          .replace("bottom-right", "")
      : "";
    const className = hostClass + " " + this._position;
    this._host.className = className;

    if (this._timeout) {
      this.removeAttribute("hidden");
      console.log(this._timer);
      clearTimeout(this._timer);
      this._timer = setTimeout(this._hide, this._timeout);
    }
  }

  static get observedAttributes() {
    return ["message", "type", "position", "timeout", "hidden"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      switch (name) {
        case "message":
          this._message = newValue;
          this._render();
          break;

        case "type":
          this._type = newValue;
          this._render();
          break;

        case "position":
          this._position = newValue;
          this._render();
          break;

        case "timeout":
          this._timeout = parseInt(newValue, 10);
          this._render();
          break;

        case "hidden":
          this.hidden =
            this.hasAttribute("hidden") &&
            this.getAttribute("hidden") !== "false";
          break;
        default:
          break;
      }
    }
  }

  get hidden() {
    return (
      this.hasAttribute("hidden") && this.getAttribute("hidden") !== "false"
    );
  }

  set hidden(val) {
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

if (!customElements.get("toast-emoji")) {
  customElements.define("toast-emoji", ToastEmoji);
}
