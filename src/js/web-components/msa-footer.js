import { LitElement, html } from "lit";

class MSAFooter extends LitElement {
  constructor() {
    super();
  }
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div>
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            class="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800 -mt-px"
          >
            <!-- Footer illustration -->
            <div class="pointer-events-none -z-1" aria-hidden="true">
              <svg
                class="absolute bottom-0 left-0 transform -translate-x-1/2 ml-24 dark:opacity-40"
                width="800"
                height="264"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="400"
                  cy="400"
                  r="400"
                  fill="url(#footerglow_paint0_radial)"
                  fill-opacity=".4"
                />
                <defs>
                  <radialGradient
                    id="footerglow_paint0_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(90 0 400) scale(315.089)"
                  >
                    <stop stop-color="#3ABAB4" />
                    <stop offset="1" stop-color="#3ABAB4" stop-opacity=".01" />
                  </radialGradient>
                </defs>
              </svg>
            </div>

            <!-- Top area: Blocks -->

            <!-- Bottom area -->
            <div class="md:flex md:items-center md:justify-between">
              <!-- Social links -->
              <ul class="flex mb-4 md:order-2 md:ml-4 md:mb-0">
                <li>
                  <a
                    class="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
                    href="#0"
                    aria-label="Twitter"
                  >
                    <svg
                      class="w-8 h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"
                      />
                    </svg>
                  </a>
                </li>

                <li class="ml-4">
                  <a
                    class="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
                    href="#0"
                    aria-label="Facebook"
                  >
                    <svg
                      class="w-8 h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"
                      />
                    </svg>
                  </a>
                </li>
                <li class="ml-4">
                  <a
                    class="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
                    href="#0"
                    aria-label="Instagram"
                  >
                    <svg
                      class="w-8 h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="20.145" cy="11.892" r="1" />
                      <path
                        d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"
                      />
                      <path
                        d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z"
                      />
                    </svg>
                  </a>
                </li>
                <li class="ml-4">
                  <a
                    class="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
                    href="#0"
                    aria-label="Linkedin"
                  >
                    <svg
                      class="w-8 h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>

              <!-- Middle links -->
              <div class="text-sm md:order-1 text-gray-700 mb-2 md:mb-0">
                <a
                  class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                  href="#0"
                  >Privacy Policy
                </a>
                ·
                <a
                  class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                  href="#0"
                  >Terms
                </a>
              </div>

              <!-- Copyrights note -->
              <div class="text-gray-600 dark:text-gray-400 text-sm mr-4">
                © 2024 EMA. All rights reserved by Parallel Reality Ltd.
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("msa-footer", MSAFooter);