import { LitElement, html } from "lit";
import "./web-components/msa-header.js";
import "./web-components/msa-main.js";
import "./web-components/msa-footer.js";
import "./web-components/msa-components/msa-video-image.js";

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
