import { LitElement, html } from "lit";

class MSADescriptionTile extends LitElement {
  static get properties() {
    return {
      tile: {
        header: {
          type: String,
        },
        body: {
          type: String,
        },
      },
    };
  }

  createRenderRoot() {
    return this;
  }
  render() {
    return html`
      <h4 class="uppercase font-bold	 text-xl text-gray-600 dark:text-gray-400">
        ${this.tile.header}
      </h4>
      <p class="text-xl mb-16 text-gray-600 dark:text-gray-400">
        ${this.tile.body}
      </p>
    `;
  }
}

customElements.define("mas-description-tile", MSADescriptionTile);
