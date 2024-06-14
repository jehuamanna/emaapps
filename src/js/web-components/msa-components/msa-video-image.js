import { LitElement, html } from "lit";
import "./msa-video-modal.js";
class MSAVideoImage extends LitElement {
  static get properties() {
    return {
      isPlaying: { type: Boolean },
      handlePlaying: { attribute: false },
    };
  }

  constructor() {
    super();
    this.isPlaying = false;
  }
  updated(changedProperties) {
    console.log("Parent updated:", changedProperties);
  }

  handleModalClick() {
    this.handlePlaying();
  }

  createRenderRoot() {
    return this;
  }
  render() {
    console.log("ppp", this.isPlaying);
    return html`<div
        class="md:col-span-5 lg:col-span-5 text-center md:text-right"
        data-aos="fade-up"
        data-aos-delay="450"
      >
        <div class="inline-flex relative justify-center items-center">
          <!-- Glow illustration -->
          <svg
            class="absolute mr-12 mt-32 pointer-events-none -z-1 dark:opacity-40"
            aria-hidden="true"
            width="678"
            height="634"
            viewBox="0 0 678 634"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="240"
              cy="394"
              r="240"
              fill="url(#piphoneill_paint0_radial)"
              fill-opacity=".4"
            />
            <circle
              cx="438"
              cy="240"
              r="240"
              fill="url(#piphoneill_paint1_radial)"
              fill-opacity=".6"
            />
            <defs>
              <radialGradient
                id="piphoneill_paint0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="rotate(90 -77 317) scale(189.054)"
              >
                <stop stop-color="#667EEA" />
                <stop offset="1" stop-color="#667EEA" stop-opacity=".01" />
              </radialGradient>
              <radialGradient
                id="piphoneill_paint1_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="rotate(90 99 339) scale(189.054)"
              >
                <stop stop-color="#9F7AEA" />
                <stop offset="1" stop-color="#9F7AEA" stop-opacity=".01" />
              </radialGradient>
            </defs>
          </svg>
          <!-- Image inside mockup size: 290x624px (or 580x1248px for Retina devices) -->
          <img
            class="absolute"
            src="./images/Home_page_image.jpg"
            width="290"
            height="624"
            style="max-width: 84.33%"
            alt="Features illustration"
          />
          <!-- iPhone mockup -->
          <img
            class="relative max-w-full mx-auto md:mr-0 md:max-w-none h-auto pointer-events-none"
            src="./images/iphone-mockup.png"
            width="344"
            height="674"
            alt="iPhone mockup"
            aria-hidden="true"
          />
          <!-- Play button -->
          <a
            class="absolute top-24 hover:opacity-75 transition duration-150 ease-in-out"
            href="#0"
            @click=${this.handlePlaying}
            aria-controls="modal"
          >
            <img
              src="./images/play-button.svg"
              width="96"
              height="96"
              alt="Play"
            />
          </a>
        </div>
      </div>

      <div
        @click=${this.handleModalClick}
        class="fixed inset-0 z-50 ${this.isPlaying
          ? "visible"
          : "invisible"} bg-black bg-opacity-75 transition-opacity"
      ></div>

      <msa-video-modal
        class=" ${this.isPlaying
          ? "visible"
          : "invisible"} h-fit  fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
      ></msa-video-modal> `;
  }
}

customElements.define("msa-video-image", MSAVideoImage);
