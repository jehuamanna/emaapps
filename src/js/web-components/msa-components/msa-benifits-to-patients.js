import { LitElement, html } from "lit";
import "../reusable-componets/msa-description-tile.js";
class MSABenifitsOfClinics extends LitElement {
  static properties = {
    titles: [
      {
        header: {
          type: String,
        },
        body: {
          type: String,
        },
      },
    ],
  };
  constructor() {
    super();
    this.titles = [
      {
        header: "Simple and Easy Navigation",
        body: "EMA is a user-friendly app with a straightforward, simple design..",
      },
      {
        header: "Motion Detection Technology",
        body: "EM Utilises the front camera of smart devices to monitor and analyse patient movements, ensuring proper exercise techniques and enhancing rehabilitation outcomes.",
      },
      {
        header: "Personalised Exercise Plans",
        body: "Tailored exercise programs to individual patient needs, with adaptive adjustments based on progress and feedback.",
      },
    ];
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
      <section
        class="relative border-t border-transparent dark:border-gray-800"
      >
        <!-- Background gradient -->
        <div
          class="absolute inset-0 h-128 dark:opacity-25 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 pointer-events-none"
          aria-hidden="true"
        ></div>
        <div class="mt-32  max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 class="h2  font-red-hat-display mb-32">Benefits to patients</h1>
          ${this.titles.map(
            (tile) =>
              html`<mas-description-tile .tile=${tile}></mas-description-tile>`
          )}
        </div>
      </section>
    `;
  }
}

customElements.define("msa-benefits-to-patients", MSABenifitsOfClinics);
