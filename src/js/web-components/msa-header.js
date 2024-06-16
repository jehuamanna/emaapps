import { LitElement, html, css } from 'lit';
import './reusable-componets/msa-button.js';
export class Header extends LitElement {
  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-20">
          <!-- Site branding -->
          <div class="shrink-0 mr-5">
            <!-- Logo -->
            <a class="block" href="index.html" aria-label="Cruip">
              <svg
                class="w-8 h-8"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    x1="26%"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    id="logo_a"
                  >
                    <stop stop-color="#3ABAB4" offset="0%" />
                    <stop stop-color="#7F9CF5" offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="26%"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    id="logo_b"
                  >
                    <stop stop-color="#3ABAB4" offset="0%" />
                    <stop stop-color="#3ABAB4" stop-opacity="0" offset="100%" />
                  </linearGradient>
                </defs>
                <path
                  d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z"
                  fill="url(#logo_a)"
                />
                <path
                  d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z"
                  fill="url(#logo_b)"
                />
              </svg>
            </a>
          </div>

          <!-- Desktop navigation -->
          <nav class="hidden md:flex justify-end md:grow">
            <!-- Desktop menu links -->

            <!-- Desktop lights switch -->
            <div class="form-switch flex flex-col justify-center ml-3">
              <input
                type="checkbox"
                name="light-switch"
                id="light-switch-desktop"
                class="light-switch sr-only"
              />
              <label class="relative" for="light-switch-desktop">
                <span
                  class="relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10"
                  aria-hidden="true"
                ></span>
                <svg
                  class="absolute inset-0"
                  width="44"
                  height="24"
                  viewBox="0 0 44 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    class="fill-current text-white"
                    fill-rule="nonzero"
                    opacity=".88"
                  >
                    <path
                      d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z"
                    />
                    <circle cx="32" cy="12" r="3" />
                    <circle fill-opacity=".4" cx="12" cy="12" r="6" />
                    <circle fill-opacity=".88" cx="12" cy="12" r="3" />
                  </g>
                </svg>
                <span class="sr-only">Switch to light / dark version</span>
              </label>
            </div>

            <!-- Desktop CTA on the right -->
            <ul class="flex justify-end flex-wrap items-center">
              <li>
                <a
                  class="btn-sm text-white bg-teal-500 hover:bg-teal-400 ml-6"
                  href="contact.html"
                  >Request code</a
                >
              </li>
            </ul>
          </nav>

          <!-- Mobile menu -->
          <div class="inline-flex md:hidden" x-data="{ expanded: false }">
            <!-- Mobile lights switch -->
            <div class="form-switch flex flex-col justify-center mr-6">
              <input
                type="checkbox"
                name="light-switch"
                id="light-switch-mobile"
                class="light-switch sr-only"
              />
              <label class="relative" for="light-switch-mobile">
                <span
                  class="relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10"
                  aria-hidden="true"
                ></span>
                <svg
                  class="absolute inset-0"
                  width="44"
                  height="24"
                  viewBox="0 0 44 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    class="fill-current text-white"
                    fill-rule="nonzero"
                    opacity=".88"
                  >
                    <path
                      d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z"
                    />
                    <circle cx="32" cy="12" r="3" />
                    <circle fill-opacity=".4" cx="12" cy="12" r="6" />
                    <circle fill-opacity=".88" cx="12" cy="12" r="3" />
                  </g>
                </svg>
                <span class="sr-only">Switch to light / dark version</span>
              </label>
            </div>

            <!-- Hamburger button -->
            <button
              class="hamburger"
              :class="{ 'active': expanded }"
              aria-controls="mobile-nav"
              :aria-expanded="expanded"
            >
              <span class="sr-only">Menu</span>
              <svg
                class="w-6 h-6 fill-current text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            <!-- Mobile navigation -->
            <nav
              id="mobile-nav"
              class="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg no-scrollbar"
              x-show="expanded"
              x-transition:enter="transition ease-out duration-200 transform"
              x-transition:enter-start="opacity-0 -translate-x-full"
              x-transition:enter-end="opacity-100 translate-x-0"
              x-transition:leave="transition ease-out duration-200"
              x-transition:leave-start="opacity-100"
              x-transition:leave-end="opacity-0"
              x-cloak
            >
              <div class="py-6 pr-4 pl-20">
                <!-- Logo -->
                <a
                  class="inline-block mb-4"
                  href="index.html"
                  aria-label="Cruip"
                >
                  <svg
                    class="w-8 h-8"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        x1="26%"
                        y1="100%"
                        x2="100%"
                        y2="100%"
                        id="menulogo_a"
                      >
                        <stop stop-color="#3ABAB4" offset="0%" />
                        <stop stop-color="#7F9CF5" offset="100%" />
                      </linearGradient>
                      <linearGradient
                        x1="26%"
                        y1="100%"
                        x2="100%"
                        y2="100%"
                        id="menulogo_b"
                      >
                        <stop stop-color="#3ABAB4" offset="0%" />
                        <stop
                          stop-color="#3ABAB4"
                          stop-opacity="0"
                          offset="100%"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z"
                      fill="url(#menulogo_a)"
                    />
                    <path
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z"
                      fill="url(#menulogo_b)"
                    />
                  </svg>
                </a>
                <!-- Links -->
                <ul>
                  <li>
                    <a
                      class="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2"
                      href="about.html"
                      >About</a
                    >
                  </li>
                  <li>
                    <a
                      class="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2"
                      href="blog.html"
                      >Blog</a
                    >
                  </li>
                  <li>
                    <a
                      class="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2"
                      href="testimonials.html"
                      >Testimonials</a
                    >
                  </li>
                  <li
                    class="py-2 my-2 border-t border-b border-gray-200 dark:border-gray-800"
                  >
                    <span class="flex text-gray-600 dark:text-gray-400 py-2"
                      >Resources</span
                    >
                    <ul class="pl-4">
                      <li>
                        <a
                          class="text-sm flex font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 py-2"
                          href="help.html"
                          >Help center</a
                        >
                      </li>
                      <li>
                        <a
                          class="text-sm flex font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 py-2"
                          href="404.html"
                          >404</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      class="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out"
                      href="contact.html"
                      >Request code</a
                    >
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('msa-header', Header);
