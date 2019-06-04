customElements.define('loader-spin',

  class extends HTMLElement {

    constructor() {
      super();
      this.radius = 22;
      this.quarterTurn = Math.PI * this.radius / 2;
    }

    connectedCallback() {

      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(this.style());
      shadowRoot.innerHTML += this.render();

    }

    style() {

      const style = document.createElement('style');
      style.textContent = `

        @keyframes spin {
          0% {
            opacity: 0;
            stroke-dasharray: 0, ${this.quarterTurn};
            stroke-width: 10px;
            transform: rotate(0);
          }
          50% {
            opacity: 0.8;
            stroke-dasharray: ${this.quarterTurn}, 0;
            stroke-width: 10px;
            transform: rotate(90deg);
          }
          70% {
            opacity: 0.8;
            stroke-dasharray: ${this.quarterTurn}, 0;
            stroke-width: 10px;
            transform: rotate(90deg);
          }
          100% {
            opacity: 0;
            stroke-dasharray: 0, ${this.quarterTurn};
            stroke-width: 3px;
            transform: rotate(180deg);

          }
        }

        circle {
          stroke: #1f1e1e;
          stroke-width: 5px;
          transform-origin: 50%;
          animation: spin ${this.getAttribute('speed') || 3}s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

      `;

      return style;

    }

    render() {

      return `
        <svg width="66" height="66" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle cx="33" cy="33" r="${this.radius}" fill="none"></circle>
        </svg>
      `;

    }

  }

);
