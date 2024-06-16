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
        header: "ENHANCED PATIENT ENGAGEMENT",
        body: "Engage patients actively during their treatment journey with real-time feedback and personalized exercise plans.",
      },
      {
        header: "LOWER MEDICATION COSTS",
        body: "Encourage non-pharmacological treatment methods, reducing the reliance on costly medications.",
      },
      {
        header: "DECREASED CLINICIAN WORKLOAD",
        body: "Automate routine monitoring and follow-ups, allowing clinicians to focus on more complex cases.",
      },
      {
        header: "IMPROVED PATIENT OUTCOMES",
        body: "Provide consistent, high-quality care that adapts to patient progress, enhancing recovery rates.",
      },
      {
        header: "DATA-DRIVEN INSIGHTS",
        body: "Utilize collected data to refine treatment plans and improve overall care strategies.",
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
          <h1 class="h2  font-red-hat-display mb-32">Benefits to Clinics</h1>
          ${this.titles.map(
            (tile) =>
              html`<mas-description-tile .tile=${tile}></mas-description-tile>`
          )}
        </div>
      </section`;
  }
}

customElements.define("msa-benefits-to-clinics", MSABenifitsOfClinics);
