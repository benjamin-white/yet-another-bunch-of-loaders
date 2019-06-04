customElements.define('loader-ripple',

  class extends HTMLElement {

    constructor() {

      super();
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(this.style());
      shadowRoot.innerHTML += this.render();

    }

    style() {

      const style = document.createElement('style');
      style.textContent = `
        @keyframes ripple {
          from {
            transform: scale(0.01);
            opacity: 1;
          }
          to {
            transform: scale(1);
            opacity: 0;
          }
        }
        circle {
          transform-origin: center;
          animation: ripple 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        circle:nth-child(1) {
          animation-delay: -1s;
        }
        circle:nth-child(3) {
          animation-delay: 1s;
        }
      `;
      return style;

    }

    render() {

      return `
        <svg width="66" height="66" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <g fill="#1f1e1e" fill-rule="evenodd" stroke="none">
            ${[...Array(3)].map(n => '<circle cx="33" cy="33" r="30" opacity="0"></circle>').join('')}
          </g>
        </svg>
      `;

    }

  }

);
