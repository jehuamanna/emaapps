import { LitElement, html } from "lit";
import "./reusable-componets/msa-tile.js";
import "./msa-components/msa-four-easy-step-process.js";
import "./msa-components/msa-benifits-to-clinic.js";
import "./msa-components/msa-benifits-to-patients.js";
import "./msa-components/msa-key-features.js";

class MSAMain extends LitElement {
  constructor() {
    super();
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
                      <a
                        class="btn text-white bg-teal-500 hover:bg-teal-400 shrink-0"
                        href="#0"
                        >Book a Call</a
                      >
                    </div>
                    <!-- Success message -->
                    <!-- <p class="text-center md:text-left mt-2 opacity-75 text-sm">Thanks for subscribing!</p> -->
                  </form>
                  <ul
                    class="max-w-sm sm:max-w-md mx-auto md:max-w-none text-gray-600 dark:text-gray-400 mt-8 -mb-2"
                    data-aos="fade-down"
                    data-aos-delay="450"
                  >
                    <li class="flex items-center mb-2">
                      <svg
                        class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                        />
                      </svg>
                      <span>Advanced Triage.</span>
                    </li>
                    <li class="flex items-center mb-2">
                      <svg
                        class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                        />
                      </svg>
                      <span>Remote Patient Progress Monitoring.</span>
                    </li>
                    <li class="flex items-center mb-2">
                      <svg
                        class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                        />
                      </svg>
                      <span>Efficient Trend Analysis.</span>
                    </li>
                    <li class="flex items-center mb-2">
                      <svg
                        class="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                        />
                      </svg>
                      <span>Cost-Effective Solutions.</span>
                    </li>
                  </ul>
                  <div
                    class="mt-20 w-full max-lg:flex-wrap flex flex-col sm:flex-row  justify-between max-w-sm mx-auto sm:max-w-md md:mx-0"
                  >
                    <!-- <input
                        type="tel"
                        class="form-input w-full mb-2 sm:mb-0 sm:mr-2"
                        placeholder="Phone number"
                        aria-label="Phone number"
                      /> -->
                    <a
                      class="btn w-64 max-lg:w-full mr-10 mb-10 text-white bg-teal-500 hover:bg-teal-400 shrink-0"
                      href="#0"
                      >Try Patient Experience in Real-Time</a
                    >
                    <a
                      class="btn w-64 max-lg:w-full mr-10 mb-10 text-white bg-teal-500 hover:bg-teal-400 shrink-0"
                      href="#0"
                      >See How EMA Works</a
                    >
                  </div>
                </div>

                <!-- Mobile mockup -->
                <div
                  class="md:col-span-5 lg:col-span-5 text-center md:text-right"
                  x-data="{ modalExpanded: false }"
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
                          <stop
                            offset="1"
                            stop-color="#667EEA"
                            stop-opacity=".01"
                          />
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
                          <stop
                            offset="1"
                            stop-color="#9F7AEA"
                            stop-opacity=".01"
                          />
                        </radialGradient>
                      </defs>
                    </svg>
                    <!-- Image inside mockup size: 290x624px (or 580x1248px for Retina devices) -->
                    <img
                      class="absolute"
                      src="./images/mockup-image-01.jpg"
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
                      class="absolute hover:opacity-75 transition duration-150 ease-in-out"
                      href="#0"
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

                  <!-- Modal backdrop -->
                  <div
                    class="fixed inset-0 z-50 bg-black bg-opacity-75 transition-opacity"
                    x-show="modalExpanded"
                    x-transition:enter="transition ease-out duration-200"
                    x-transition:enter-start="opacity-0"
                    x-transition:enter-end="opacity-100"
                    x-transition:leave="transition ease-out duration-100"
                    x-transition:leave-start="opacity-100"
                    x-transition:leave-end="opacity-0"
                    aria-hidden="true"
                    x-cloak
                  ></div>

                  <!-- Modal dialog -->
                  <div
                    id="modal"
                    class="fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                    x-show="modalExpanded"
                    x-transition:enter="transition ease-in-out duration-200"
                    x-transition:enter-start="opacity-0 translate-y-8"
                    x-transition:enter-end="opacity-100 translate-y-0"
                    x-transition:leave="transition ease-in-out duration-200"
                    x-transition:leave-start="opacity-100 translate-y-0"
                    x-transition:leave-end="opacity-0 translate-y-8"
                    x-cloak
                  >
                    <div
                      class="bg-white overflow-auto max-w-6xl w-full max-h-full"
                    >
                      <div class="relative pb-9/16">
                        <video
                          x-init="$watch('modalExpanded', value => value ? $el.play() : $el.pause())"
                          class="absolute w-full h-full"
                          width="1920"
                          height="1080"
                          loop
                          controls
                        >
                          <source src="./videos/video.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
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
            <div class="carousel swiper-container">
              <div class="swiper-wrapper">
                <!-- Carousel items -->
                <div class="swiper-slide max-w-lg">
                  <img
                    class="transition-opacity duration-300"
                    src="./images/carousel-item-01.jpg"
                    width="540"
                    height="460"
                    alt="Carousel item 01"
                  />
                  <div
                    class="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0"
                  >
                    <div class="flex grow">
                      <a
                        class="inline-flex btn-sm text-white bg-teal-500 hover:bg-teal-400 mx-auto self-center"
                        href="#0"
                        >Learn more</a
                      >
                    </div>
                    <div class="absolute bottom-0 right-0 p-6">
                      <a
                        class="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out"
                        href="#0"
                        >Creative Services</a
                      >
                    </div>
                  </div>
                </div>
                <div class="swiper-slide max-w-lg">
                  <img
                    class="transition-opacity duration-300"
                    src="./images/carousel-item-02.jpg"
                    width="540"
                    height="460"
                    alt="Carousel item 02"
                  />
                  <div
                    class="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0"
                  >
                    <div class="flex grow">
                      <a
                        class="inline-flex btn-sm text-white bg-teal-500 hover:bg-teal-400 mx-auto self-center"
                        href="#0"
                        >Learn more</a
                      >
                    </div>
                    <div class="absolute bottom-0 right-0 p-6">
                      <a
                        class="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out"
                        href="#0"
                        >Creative Services</a
                      >
                    </div>
                  </div>
                </div>
                <div class="swiper-slide max-w-lg">
                  <img
                    class="transition-opacity duration-300"
                    src="./images/carousel-item-03.jpg"
                    width="540"
                    height="460"
                    alt="Carousel item 03"
                  />
                  <div
                    class="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0"
                  >
                    <div class="flex grow">
                      <a
                        class="inline-flex btn-sm text-white bg-teal-500 hover:bg-teal-400 mx-auto self-center"
                        href="#0"
                        >Learn more</a
                      >
                    </div>
                    <div class="absolute bottom-0 right-0 p-6">
                      <a
                        class="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out"
                        href="#0"
                        >Creative Services</a
                      >
                    </div>
                  </div>
                </div>
                <div class="swiper-slide max-w-lg">
                  <img
                    class="transition-opacity duration-300"
                    src="./images/carousel-item-04.jpg"
                    width="540"
                    height="460"
                    alt="Carousel item 04"
                  />
                  <div
                    class="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0"
                  >
                    <div class="flex grow">
                      <a
                        class="inline-flex btn-sm text-white bg-teal-500 hover:bg-teal-400 mx-auto self-center"
                        href="#0"
                        >Learn more</a
                      >
                    </div>
                    <div class="absolute bottom-0 right-0 p-6">
                      <a
                        class="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out"
                        href="#0"
                        >Creative Services</a
                      >
                    </div>
                  </div>
                </div>
                <div class="swiper-slide max-w-lg">
                  <img
                    class="transition-opacity duration-300"
                    src="./images/carousel-item-05.jpg"
                    width="540"
                    height="460"
                    alt="Carousel item 05"
                  />
                  <div
                    class="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0"
                  >
                    <div class="flex grow">
                      <a
                        class="inline-flex btn-sm text-white bg-teal-500 hover:bg-teal-400 mx-auto self-center"
                        href="#0"
                        >Learn more</a
                      >
                    </div>
                    <div class="absolute bottom-0 right-0 p-6">
                      <a
                        class="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out"
                        href="#0"
                        >Creative Services</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Arrows -->
            <div class="max-w-6xl mx-auto px-4 sm:px-6">
              <div class="flex items-center justify-between mt-12 md:mt-16">
                <button
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
            <div class="max-w-6xl mx-auto px-4 sm:px-6">
              <!-- Section header -->
              <div class="max-w-3xl mt-24 mx-auto text-center pb-12 md:pb-16">
                <h1 class="h2 font-red-hat-display mb-4">How EMA Works</h1>
                <p class="text-xl text-gray-600 dark:text-gray-400">
                  EMA is the only triage service your clinic needs. This video
                  explains how.
                </p>
                <div
                  class="mt-36 lg:col-span-2 max-w-sm mx-auto md:max-w-3xl lg:max-w-none"
                >
                  <div>
                    <div class="relative">
                      <img
                        class="w-full"
                        src="./images/video-thumb.jpg"
                        width="352"
                        height="264"
                        alt="Video thumbnail 01"
                      />
                      <div class="absolute inset-0 flex flex-col">
                        <div class="grow flex justify-center items-center">
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
                  Sign up now and avail one-month for free                  </h3>
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
          </div>
        </section>
              <!-- Success message -->
              <!-- <p class="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> -->
            </form>
          </div>
          <!-- End background gradient -->
        </section>
      </div>
    `;
  }
}

customElements.define("msa-main", MSAMain);
