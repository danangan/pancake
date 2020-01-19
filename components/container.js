(function() {
  class Container extends HTMLElement {}

  customElements.define("pancake-input", Container, { extends: "div" });
})();
