class LoadingIndicator extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="loading-overlay">
        <div id="loading-spinner"></div>
        <img src="https://res.cloudinary.com/dwxoqt0ra/image/upload/v1711983326/gTeEe8Gpc_zj81e4.gif" alt="Animasi Hewan Lucu">
      </div>
    `;
  }
}

customElements.define("loading-indicator", LoadingIndicator);

export { LoadingIndicator };
