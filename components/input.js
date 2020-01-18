(function() {
  class Input extends HTMLElement {
    constructor() {
      super();
      const input = document.createElement("input");
      const inputPlaceholder = this.getAttribute("placeholder");

      input.setAttribute("placeholder", inputPlaceholder);

      const label = document.createElement("label");
      const labelText = this.getAttribute("label");
      label.innerText = labelText;

      this.appendChild(label);
      this.appendChild(input);
    }
  }

  customElements.define("pancake-input", Input);
})();
