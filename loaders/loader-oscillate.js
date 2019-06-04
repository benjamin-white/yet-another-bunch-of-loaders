customElements.define('loader-oscillate',

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
        @keyframes expand {
          0% {
            transform: scale(1);
            stroke-width: 3px;
          }
          50% {
            transform: scale(0.1);
            stroke-width: 1px;
          }
          100% {
            transform: scale(1);
            stroke-width: 3px;
          }
        }
        @keyframes contract {
          0% {
            transform: scale(0.1);
            stroke-width: 1px;
          }
          50% {
            transform: scale(1);
            stroke-width: 3px;
          }
          100% {
            transform: scale(0.1);
            stroke-width: 1px;
          }
        }
        circle {
          opacity: .6;
          transform-origin: center;
          animation: expand 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        circle:last-of-type {
          animation: contract 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `;

      return style;

    }

    render() {

      return `
        <svg width="66" height="66" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <g fill="rgb(222, 222, 222)" fill-rule="evenodd" stroke="#1f1e1e">
            <circle cx="33" cy="33" r="20"></circle>
            <circle cx="33" cy="33" r="20"></circle>
          </g>
        </svg>
      `;

    }

  }

);
