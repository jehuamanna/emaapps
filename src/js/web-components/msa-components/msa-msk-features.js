import { LitElement, html } from "lit";
import "./msa-msk-feature.js";

class MSAMSKFeatures extends LitElement {
  static properties = {
    features: [
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
    this.features = [
      {
        text: "Advanced Triage.",
      },
      {
        text: "Remote Patient Progress Monitoring.",
      },
      {
        text: "Efficient Trend Analysis.",
      },
      {
        text: "Cost-Effective Solutions.",
      },
    ];
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
      <ul data-aos="fade-down" data-aos-delay="450">
        ${this.features.map(
          (feature) =>
            html`<msa-msk-feature .text=${feature.text}></msa-msk-feature>`
        )}
      </ul>
    `;
  }
}

customElements.define("msa-msk-features", MSAMSKFeatures);
