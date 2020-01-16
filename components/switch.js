(function() {
  class Switch extends HTMLElement {
    static get observedAttributes() {
      return ["on"];
    }

    constructor() {
      super();
      const button = document.createElement("div");
      button.classList.add("button");

      this.addEventListener("click", this.clickHandler);

      this.appendChild(button);
    }

    disconnectedCallback() {
      this.removeEventListener("click", this.clickHandler);
    }

    clickHandler() {
      if (this.hasAttribute("on")) {
        this.removeAttribute("on");
        return;
      }

      this.setAttribute("on", "");
    }
  }

  customElements.define("pancake-switch", Switch);
})();
