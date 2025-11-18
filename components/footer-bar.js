class FooterBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="container">
        <p>${this.getAttribute("footer-title")}</p>
      </div>
    `;
  }
}

customElements.define("footer-bar", FooterBar);

export { FooterBar };
