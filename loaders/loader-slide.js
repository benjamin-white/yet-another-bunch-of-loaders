customElements.define('loader-slide',

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
        @keyframes swipe {
          0% {
            transform: scale(0);
          }
          49% {
            transform-origin: 0px 0px;
          }
          50% {
            transform-origin: 33px 33px;
            transform: scale(1);
          }
          100% {
            transform-origin: 33px 33px;
            transform: scale(0);
          }
        }
        polygon {
          fill: #1f1e1e;
          opacity: 0.7;
          stroke: #fff;
          stroke-linejoin: round;
          stroke-width: 1px;
          animation: swipe 2s ease infinite;
        }
      `;

      return style;

    }

    render() {

      return `
        <svg width="66" height="66" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,0 0,33, 33,33, 33,0"/>
        </svg>
      `;

    }

  }

);
