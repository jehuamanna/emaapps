import { LitElement, html } from "lit";

class MSAFourEasySteps extends LitElement {
  static properties = {
    steps: {
      title: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  };
  constructor() {
    super();
    this.steps = [
      {
        title: "Audit",
        description: "We conduct an audit of all MSK patients",
      },
      {
        title: "Analysis",
        description: "We study and report MSK patient trends",
      },
      {
        title: "Implement",
        description: "We begin the integration and plugin process",
      },
      {
        title: "Manage",
        description: "We care for and monitor yellow flag patients remotely",
      },
    ];
  }

  createRenderRoot() {
    return this;
  }
  render() {
    return html`
      <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
        <p
          class="text-xl mb-8 text-gray-600 dark:text-gray-400"
          data-aos="fade-down"
          data-aos-delay="150"
        >
          Easy 4-Step Process:
        </p>
        <div class="pb-12 md:pb-20">
          <div
            class="grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-4 text-center"
            data-aos-id-stats
          >
            <!-- 1st item -->
            ${this.steps.map(
              (step) => html` <msa-tile .step="${step}"></msa-tile> `
            )}

            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("msa-four-easy-steps", MSAFourEasySteps);
