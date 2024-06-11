import { LitElement, html } from "lit";

class MSAButton extends LitElement {
  static get properties() {
    return {
      style: { type: String },
      text: { type: String },
    };
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return html` <a href="#0">${this.text}</a> `;
  }
}
customElements.define("msa-button", MSAButton);
