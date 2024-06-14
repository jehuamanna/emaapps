import { LitElement, html } from "lit";

class MSAButton extends LitElement {
  static get properties() {
    return {
      style: { type: String },
      text: { type: String },
      href: { type: String },
    };
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return html` <a href=${this.href}>${this.text}</a> `;
  }
}
customElements.define("msa-button", MSAButton);
