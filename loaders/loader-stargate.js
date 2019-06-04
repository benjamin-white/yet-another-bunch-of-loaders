customElements.define('loader-stargate',

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
        @keyframes jot {
          from {
            transform: scale(-1);
          }
          to {
            transform: scale(1);
          }
        }
        @keyframes rot {
          0% {
            transform: scale(-1) rotate(0deg);
          }
          25% {
            transform: scale(1) rotate(90deg);
          }
          50% {
            transform: scale(-1) rotate(180deg);
          }
          100% {
            transform: scale(1) rotate(359deg);
          }
        }
        polygon {
          fill: #1f1e1e;
          opacity: 0.7;
          stroke: #fff;
          stroke-linejoin: round;
          stroke-width: 1px;
          transform-origin: center;
          animation: rot 8s linear infinite;
        }
        polygon:nth-of-type(even) {
          animation-delay: -4s;
        }
      `;

      return style;

    }

    render() {

      return `
        <svg width="66" height="66" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,0 0,33, 33,33, 33,0"/>
          <polygon points="33,0 66,0, 66,33, 33,33"/>
          <polygon points="33,33 66,33, 66,66, 33,66"/>
          <polygon points="0,33 33,33, 33,66, 0,66"/>
        </svg>
      `;

    }

  }

);
