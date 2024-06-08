import { LitElement, html } from "lit";
import "./msa-header.js";
import "./msa-main.js";
import "./msa-footer.js";
class MainPage extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
      <msa-header class="absolute w-full z-30"></msa-header>
      <msa-main class="grow"></msa-main>
      <msa-footer class="relative"></msa-footer>
    `;
  }
}

customElements.define("msa-page", MainPage);
