(function() {
  class Switch extends HTMLElement {
    static get observedAttributes() {
      return ["on"];
    }

    constructor() {
      super();
      const button = document.createElement("div");
      this.button = button;
      button.classList.add("button");

      if (this.hasAttribute("on")) {
        button.innerText = "on";
      }

      this.addEventListener("click", this.clickHandler);

      this.appendChild(button);
    }

    disconnectedCallback() {
      this.removeEventListener("click", this.clickHandler);
    }

    clickHandler() {
      if (this.hasAttribute("on")) {
        this.removeAttribute("on");
        this.button.innerText = "off";
        return;
      }

      this.setAttribute("on", "");
      this.button.innerText = "on";
    }
  }

  customElements.define("pancake-switch", Switch);
})();
