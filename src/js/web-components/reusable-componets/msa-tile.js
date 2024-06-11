import { LitElement, html } from "lit";

class MSATile extends LitElement {
  static get properties() {
    return {
      step: { type: Object },
    };
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
      <div
        class="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl"
        data-aos="fade-down"
        data-aos-anchor="[data-aos-id-stats]"
        data-aos-delay="100"
      >
        <div
          class="font-red-hat-display max-lg:text-2xl text-3xl font-black tracking-tighter mb-1"
        >
          ${this.step.title}
        </div>
        <div class="text-gray-600 dark:text-gray-400">
          ${this.step.description}
        </div>
      </div>
    `;
  }
}
customElements.define("msa-tile", MSATile);
