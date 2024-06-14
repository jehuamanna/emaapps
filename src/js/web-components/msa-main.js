import { LitElement, html } from "lit";
import { ref, createRef } from "lit/directives/ref.js";
import "@vanillawc/wc-carousel-lite";

import "./reusable-componets/msa-tile.js";
import "./msa-components/msa-four-easy-step-process.js";
import "./msa-components/msa-benifits-to-clinic.js";
import "./msa-components/msa-benifits-to-patients.js";
import "./msa-components/msa-key-features.js";
import "./reusable-componets/msa-button.js";
import "./msa-components/msa-msk-features.js";
class MSAMain extends LitElement {
  static get properties() {
    return {
      isPlaying: { type: Boolean },
      isOpen: { type: Boolean },
    };
  }
  videoRef = createRef();
  carouselRef = createRef();
  constructor() {
    super();
    this.isOpen = false;
    this.isPlaying = false;
  }

  handlePlaying() {
    this.isPlaying = !this.isPlaying;
    console.log(this.isPlaying);
  }

  updateComplete() {
    this.carouselRef.value.play();
  }

  play() {
    this.isOpen = !this.isOpen;
    this.videoRef.value.play();
  }

  shiftRight() {
    this.carouselRef.value.next(1);
  }
  shiftLeft() {
    this.carouselRef.value.prev(1);
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div>
        <div
          class="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
          aria-hidden="true"
        >
          <svg
            class="absolute top-0 right-0 transform translate-x-1/2 -mr-16 dark:opacity-40"
            width="800"
            height="502"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="400"
              cy="102"
              r="400"
              fill="url(#heroglow_paint0_radial)"
              fill-opacity=".6"
            />
            <circle
              cx="209"
              cy="289"
              r="170"
              fill="url(#heroglow_paint1_radial)"
              fill-opacity=".4"
            />
            <defs>
              <radialGradient
                id="heroglow_paint0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="rotate(90 149 251) scale(315.089)"
              >
                <stop stop-color="#3ABAB4" />
                <stop offset="1" stop-color="#3ABAB4" stop-opacity=".01" />
              </radialGradient>
              <radialGradient
                id="heroglow_paint1_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="rotate(90 -40 249) scale(133.913)"
              >
                <stop stop-color="#667EEA" />
                <stop offset="1" stop-color="#667EEA" stop-opacity=".01" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <!-- Hero -->
        <section>
          <div class="max-w-6xl mx-auto px-4 sm:px-6">
            <div class="pt-32 pb-10 md:pt-40 md:pb-16">
              <!-- Hero content -->
              <div
                class="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center"
              >
                <!-- Content -->
                <div
                  class="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left"
                >
                  <h1
                    class="h1 break-words lg:text-4xl max-lg:text-3xl mb-4 font-red-hat-display font-black"
                    data-aos="fade-down"
                  >
                    Revolutionising MSK Care
                  </h1>
                  <p
                    class="text-xl text-gray-600 dark:text-gray-400"
                    data-aos="fade-down"
                    data-aos-delay="150"
                  >
                    Transforming musculoskeletal disorder management with
                    cutting-edge technology
                  </p>
                  <!-- CTA form -->
                  <form class="mt-8" data-aos="fade-down" data-aos-delay="300">
                    <div
                      class="flex flex-col sm:flex-row justify-start max-w-sm mx-auto sm:max-w-md md:mx-0"
                    >
                      <!-- <input
                        type="tel"
                        class="form-input w-full mb-2 sm:mb-0 sm:mr-2"
                        placeholder="Phone number"
                        aria-label="Phone number"
                      /> -->
                      <msa-button
                        href="#"
                        class="btn text-white bg-teal-500 hover:bg-teal-400 shrink-0"
                        text="Book a Call"
                      ></msa-button>
                    </div>
                    <!-- Success message -->
                    <!-- <p class="text-center md:text-left mt-2 opacity-75 text-sm">Thanks for subscribing!</p> -->
                  </form>
                  <msa-msk-features
                    class="max-w-sm sm:max-w-md mx-auto md:max-w-none flex flex-col sm:flex-row text-gray-600 justify-between dark:text-gray-400 mt-8 -mb-2"
                  ></msa-msk-features>

                  <div
                    class="mt-20 w-full max-lg:flex-wrap flex flex-col sm:flex-row justify-between max-w-sm mx-auto sm:max-w-md md:mx-0"
                  >
                    <!-- <input
                        type="tel"
                        class="form-input w-full mb-2 sm:mb-0 sm:mr-2"
                        placeholder="Phone number"
                        aria-label="Phone number"
                      /> -->
                    <msa-button
                      @click=${(e) => {
                        e.preventDefault();
                        this.handlePlaying();
                      }}
                      href="#"
                      class="btn w-64 max-lg:w-full mr-10 mb-10 text-white bg-teal-500 hover:bg-teal-400 shrink-0"
                      text="Try Patient Experience in Real-Time"
                    ></msa-button>
                    <msa-button
                      href="#video-play"
                      class="btn w-64 max-lg:w-full mr-10 mb-10 text-white bg-teal-500 hover:bg-teal-400 shrink-0"
                      text="See How EMA Works"
                    ></msa-button>
                  </div>
                </div>

                <!-- Mobile mockup -->

                <msa-video-image
                  .handlePlaying=${this.handlePlaying}
                  .isplaying=${this.isPlaying}
                ></msa-video-image>
                <!-- Modal backdrop -->
              </div>
            </div>
          </div>
        </section>
        <msa-four-easy-steps></msa-four-easy-steps>
        <!-- Stats -->
        <section class="relative">
          <!-- Background gradient (light version only) -->

          <div
            class="absolute bottom-0 left-0 right-0 h-128 bg-gradient-to-t from-gray-100 to-white pointer-events-none -z-10 dark:hidden"
            aria-hidden="true"
          ></div>
          <!-- End background gradient (light version only) -->
        </section>

        <msa-key-features></msa-key-features>

        <!-- Carousel -->
        <section class="border-t border-transparent dark:border-gray-800">
          <div class="py-12 md:py-20">
            <!-- Carousel built with Swiper.js [https://swiperjs.com/] -->
            <!-- * Initialized in src/js/main.js -->
            <!-- * Custom styles in src/css/additional-styles/theme.scss -->
            <wc-carousel-lite ${ref(this.carouselRef)}>
              <img
                src="./images/carousel-item-01.jpg"
                class="item"
                width="100%"
              />
              <img
                src="./images/carousel-item-02.jpg"
                class="item"
                width="100%"
              />
              <img
                src="./images/carousel-item-03.jpg"
                class="item"
                width="100%"
              />
            </wc-carousel-lite>
            <!-- Arrows -->
            <div class="max-w-6xl mx-auto px-4 sm:px-6">
              <div class="flex items-center justify-between mt-12 md:mt-16">
                <button
                  @click=${this.shiftLeft}
                  class="carousel-prev relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500 dark:hover:bg-opacity-25 shadow-xl transition duration-150 ease-in-out"
                >
                  <span class="sr-only">Previous</span>
                  <svg
                    class="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z"
                    />
                  </svg>
                </button>
                <button
                  @click=${this.shiftRight}
                  class="carousel-next relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500 dark:hover:bg-opacity-25 shadow-xl transition duration-150 ease-in-out"
                >
                  <span class="sr-only">Next</span>
                  <svg
                    class="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div id="video-play" class="max-w-6xl mx-auto px-4 sm:px-6">
              <!-- Section header -->
              <div class="max-w-3xl mt-24 mx-auto text-center pb-12 md:pb-16">
                <h1 class="h2 font-red-hat-display mb-4">How EMA Works</h1>
                <p class="text-xl text-gray-600 dark:text-gray-400">
                  EMA is the only triage service your clinic needs. This video
                  explains how.
                </p>
                <div
                  class="mt-36 h-fit lg:col-span-2 max-w-sm mx-auto md:max-w-3xl lg:max-w-none"
                >
                  <div>
                    <div
                      @click=${() => {
                        this.isOpen = false;
                        this.videoRef.value.pause();
                      }}
                      class="${this.isOpen ? "visible" : "invisible"} 
                        fixed inset-0 z-50 bg-black bg-opacity-75 transition-opacity"
                      aria-hidden="true"
                    ></div>

                    <!-- Modal dialog -->
                    <div
                      id="modal"
                      class="${this.isOpen
                        ? "visible"
                        : "invisible"}                         h-fit  fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
 inset-0 z-50 overflow-hidden flex max-w-6xl w-full max-h-full items-center justify-center transform px-4 sm:px-6"
                      role="dialog"
                      aria-modal="true"
                      aria-labelledby="modal-headline"
                    >
                      <div
                        class="bg-white overflow-auto max-w-6xl w-full max-h-full"
                      >
                        <div class="relative pb-9/16">
                          <video
                            ${ref(this.videoRef)}
                            class="absolute w-full h-full"
                            width="1920"
                            height="1080"
                            controls
                          >
                            <source src="./videos/ema.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    </div>
                    <div class="relative">
                      <img
                        class="w-full"
                        src="./images/video-thumb.jpg"
                        width="352"
                        height="264"
                        alt="Video thumbnail 01"
                      />
                      <div class="absolute inset-0 flex flex-col">
                        <div
                          @click=${this.play}
                          class="grow flex justify-center items-center"
                        >
                          <a
                            class="hover:opacity-75 transition duration-150 ease-in-out"
                            href="#0"
                          >
                            <img
                              src="./images/play-button.svg"
                              width="72"
                              height="72"
                              alt="Play icon"
                            />
                          </a>
                        </div>
                        <div
                          class="w-full bottom-0 px-6 py-3 bg-white opacity-90 dark:bg-gray-900 flex justify-between items-center"
                        >
                          <a
                            class="text-gray-900 dark:text-gray-400 font-medium"
                            href="#0"
                            >Using index pages</a
                          >
                          <div
                            class="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25 rounded-full"
                          >
                            2 Min
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Tabs -->

        <msa-benefits-to-patients></msa-benefits-to-patients>
        <msa-benefits-to-clinics></msa-benefits-to-clinics>
        <section>
          <div class="max-w-6xl mx-auto px-4 sm:px-6">
            <!-- CTA box -->
            <div class="dark relative bg-gray-800 py-10 px-8 md:py-16 md:px-12">
              <!-- Background illustration -->
              <div
                class="absolute inset-0 left-auto pointer-events-none"
                aria-hidden="true"
              >
                <svg
                  class="h-full"
                  width="400"
                  height="232"
                  viewBox="0 0 400 232"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient
                      cx="50%"
                      cy="50%"
                      fx="50%"
                      fy="50%"
                      r="39.386%"
                      id="box-gr-a"
                    >
                      <stop stop-color="#667EEA" offset="0%" />
                      <stop
                        stop-color="#667EEA"
                        stop-opacity="0"
                        offset="100%"
                      />
                    </radialGradient>
                    <radialGradient
                      cx="50%"
                      cy="50%"
                      fx="50%"
                      fy="50%"
                      r="39.386%"
                      id="box-gr-b"
                    >
                      <stop stop-color="#3ABAB4" offset="0%" />
                      <stop
                        stop-color="#3ABAB4"
                        stop-opacity="0"
                        offset="100%"
                      />
                    </radialGradient>
                  </defs>
                  <g
                    transform="translate(-85 -369)"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <circle
                      fill-opacity=".16"
                      fill="url(#box-gr-a)"
                      cx="413"
                      cy="688"
                      r="240"
                    />
                    <circle
                      fill-opacity=".24"
                      fill="url(#box-gr-b)"
                      cx="400"
                      cy="400"
                      r="400"
                    />
                  </g>
                </svg>
              </div>

              <div
                class="relative flex flex-col lg:flex-row justify-between items-center"
              >
                <!-- CTA content -->
                <div
                  class="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2"
                >
                  <h3 class="h3 font-red-hat-display text-gray-100">
                    Sign up now and avail one-month for free
                  </h3>
                </div>

                <!-- CTA form -->
                <form class="w-full lg:w-1/2">
                  <div
                    class="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none"
                  >
                    <input
                      type="tel"
                      class="form-input text-gray-100 w-full mb-2 sm:mb-0 sm:mr-2"
                      placeholder="Email"
                      aria-label="Email"
                    />
                    <a
                      class="btn text-white bg-teal-500 hover:bg-teal-400 shrink-0"
                      href="#0"
                      >Book A call</a
                    >
                  </div>
                  <!-- Success message -->
                  <!-- <p class="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> -->
                </form>
              </div>
            </div>
            <!-- Success message -->
            <!-- <p class="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> -->
          </div>
          <!-- End background gradient -->
        </section>
      </div>
    `;
  }
}

customElements.define("msa-main", MSAMain);
