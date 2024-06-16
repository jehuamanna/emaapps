import { LitElement, html } from 'lit';
import '../reusable-componets/msa-description-tile.js';
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
        header: 'ADVANCED TRIAGE',
        body: 'Advanced technology to provide an accurate working diagnosis, helping healthcare providers make informed decisions quickly and efficiently.',
      },
      {
        header: 'REMOTE PATIENT MONITORING',
        body: 'Continuous monitoring of patient progress through the use of smart device cameras, ensuring adherence to prescribed exercise regimens and providing real-time feedback.',
      },
      {
        header: 'EFFICIENT TREND ANALYSIS',
        body: 'Designed specifically for the UK’s healthcare system, EMA ensures a smooth and effective implementation process.',
      },
      {
        header: 'COST-EFFECTIVE SOLUTIONS',
        body: 'By reducing the need for frequent in-person visits and streamlining care pathways, EMA delivers significant cost savings for healthcare providers.',
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
        <!-- <div
             class="absolute inset-0 h-128 dark:opacity-25 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 pointer-events-none"
             aria-hidden="true"
             ></div> -->
        <div class="mt-32  max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 class="h2  font-red-hat-display mb-32">Key Features</h1>
          ${this.titles.map(
            (tile) =>
              html`<mas-description-tile .tile=${tile}></mas-description-tile>`,
          )}
        </div>
      </section>
    `;
  }
}

customElements.define('msa-key-features', MSABenifitsOfClinics);
