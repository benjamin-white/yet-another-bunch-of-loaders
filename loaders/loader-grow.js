customElements.define('loader-grow',

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
        @keyframes pulse-in {
          from {
            transform: scale(0.01);
            stroke-opacity: 1;
            stroke-width: 7px;
          }
          to {
            transform: scale(1);
            stroke-opacity: 0;
            stroke-width: 1px;
          }
        }
        circle {
          transform-origin: center;
          animation: pulse-in 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        circle:last-of-type {
          /* transform-origin: center;
          animation: pulse-in 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite; */
          animation-delay: -0.6s;
        }
      `;

      return style;

    }

    render() {

      return `
        <svg width="66" height="66" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd" stroke="#1f1e1e">
            <circle cx="33" cy="33" r="30"></circle>
            <circle cx="33" cy="33" r="30"></circle>
          </g>
        </svg>
      `;

    }

  }

);
