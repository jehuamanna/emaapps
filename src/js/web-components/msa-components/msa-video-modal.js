import { LitElement, html } from "lit";

class MSAVideoModal extends LitElement {
  static get properties() {
    return {
      handleModalClick: { attribute: false },
    };
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return html` <!-- Modal dialog -->

      <div
        class="bg-white overflow-auto max-w-6xl w-full max-h-full"
        id="video-div"
        style="position: relative"
      >
        <video
          id="webcam"
          autoplay
          playsinline
          style="position: absolute; bottom: 0; right: 0"
        ></video>

        <canvas
          id="canvas"
          style="position: absolute; top: 0; left: 0; z-index: 10"
        ></canvas>
        <canvas
          id="dashboard-canvas"
          style="position: absolute; top: 0; left: 0; z-index: 10"
        ></canvas>
        <div
          id="dashboard"
          style="position: absolute; top: 0; left: 0; z-index: 20"
        ></div>
        <!-- <audio id="snapSound" src="audio/snap.wav" preload="auto"></audio> -->
      </div>`;
  }
}

customElements.define("msa-video-modal", MSAVideoModal);
