customElements.define('loader-woof',

  class extends HTMLElement {

    constructor() {
      super();
    }

    connectedCallback() {

      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(this.style());
      shadowRoot.innerHTML += this.render();

    }

    style() {

      const style = document.createElement('style');
      style.textContent = `
        @keyframes expand-stroke {
          0% {
            stroke-width: 4;
          }
          100% {
            stroke-width: 0;
          }
        }
        @keyframes expand {
          0% {
            transform: scale(0.4);
          }
          100% {
            transform: scale(1);
          }
        }
        circle {
          animation: expand-stroke 2s ease infinite;
          transform-origin: center;
        }
        circle:nth-child(2) {
          animation: expand-stroke 2s ease infinite, expand 2s ease infinite;

        }
        circle:nth-child(3) {
          animation: expand-stroke 2s ease infinite, expand 2s ease infinite;

        }
      `;

      return style;

    }

    render() {

      return `
        <svg width="66" height="66" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle cx="33" cy="33" r="6" fill="none" stroke-width="4" stroke="#1f1e1e" opacity="0.6"></circle>
          <circle cx="33" cy="33" r="14" fill="none" stroke-width="4" stroke="#1f1e1e" opacity="0.6"></circle>
          <circle cx="33" cy="33" r="22" fill="none" stroke-width="4" stroke="#1f1e1e" opacity="0.6"></circle>
        </svg>
      `;

    }

  }

);
