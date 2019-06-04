customElements.define('loader-step',

  class extends HTMLElement {

    constructor() {
      super();
    }

    connectedCallback() {

      this.points = this.placePoints(this.getAttribute('points') || 8, 24, {x: 33, y: 33});
      this.playBackSpeed = 7;
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(this.style());
      shadowRoot.innerHTML += this.render();

    }

    style() {

      const style = document.createElement('style');
      style.textContent = `
        @keyframes grow {
          0% {
            opacity: 0;
            transform: scale(0.01);
          }
          70% {
            opacity: 0.7;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.01);
          }
        }
        ${this.points.map((loc, index) => `
          .growCircle-${index} {
            animation-delay: ${(this.points.length - index) / this.playBackSpeed}s;
            transform-origin: ${loc.x}px ${loc.y}px;
          }`
        ).join('')}
        circle {
          animation: grow ${this.points.length / this.playBackSpeed}s ease infinite;
        }
      `;
      return style;

    }

    placePoints(numPoints, radius, origin) {

      const angle = Math.PI * 2 / numPoints;
      const locations = [];

      for (let i = 1; i <= numPoints; i++) {
        locations.push({
          x: radius * Math.cos(i * angle) + origin.x,
          y: radius * Math.sin(i * angle) + origin.y
        });
      }

      return locations;

    }

    render() {

      return `
        <svg width="66" height="66" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          ${this.points
                 .map((loc, index) => `<circle cx="${loc.x}" cy="${loc.y}" r="8" class="growCircle-${index}" fill="#1f1e1e" opacity="0"/>`)
                 .join('')}
        </svg>
      `;

    }

  }

);
