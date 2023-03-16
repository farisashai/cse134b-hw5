class ButtonCount extends HTMLElement {
  clickCount = 0;

  constructor() {
    super();
    this.clickCount = 0;

    const shadow = this.attachShadow({ mode: "open" });

    const button = document.createElement("button");
    button.innerText = "Times clicked: 0";
    button.addEventListener("click", () => {
      this.clickCount++;
      button.innerText = `Times clicked: ${this.clickCount}`;
    });

    shadow.appendChild(button);
  }
}

customElements.define("button-count", ButtonCount);
