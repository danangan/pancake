(function() {
  class PancakeButton extends HTMLElement {
    constructor() {
      super();
      const content = this.innerHTML;
      const shadow = this.attachShadow({ mode: "open" });

      const wrapper = document.createElement("span");
      wrapper.innerHTML = content;

      shadow.appendChild(wrapper);
    }
  }

  customElements.define("pancake-button", PancakeButton);
})();
