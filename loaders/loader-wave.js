customElements.define('loader-wave',

  class extends HTMLElement {

    constructor() {

      super();
      this.gridTiles  = 5;
      this.gridBorder = 8;
      this.tileSize   = 10;
      [this.tileElems, this.tileStyles] = this.createTiles();

    }

    connectedCallback() {

      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(this.style());
      shadowRoot.innerHTML += this.render();

    }

    style() {

      const style = document.createElement('style');
      style.textContent = `
        @keyframes basic {
          0% {
            /* transform: scale(0.1) rotateY(90deg) rotateX(90deg); */
            transform: scale3D(1, 1, 1);
          }
          100% {
            /* transform: scale(1) rotateY(0deg) rotateX(0deg); */
            transform: scale3D(0, 0, 1);
          }
        }
        rect {
          fill: #1f1e1e;
          stroke: none;
          opacity: 0.7;
          animation: basic 2s ease infinite;
        }
        ${this.tileStyles}
      `;

      return style;

    }

    createTiles() {

      let tiles = '';
      let tileStyles = '';

      for (let i = 0; i < this.gridTiles; i++) {
        for (let j = 0; j < this.gridTiles; j++) {

          tileStyles +=
            `#${'rect_'+i+j} {animation-delay: ${i * -1 * .1}s;}`;

          tiles +=
            `<rect id="${'rect_'+i+j}" x="${this.gridBorder + this.tileSize * j}" y="${this.gridBorder + this.tileSize * i}" width="${this.tileSize}" height="${this.tileSize}" style="transform-origin: ${(this.gridBorder + this.tileSize * j) + 5}px ${(this.gridBorder + this.tileSize * i) + 5}px" />`;

        }
      }

      return [tiles, tileStyles];

    }

    render() {

      return `
        <svg width="66" height="66" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          ${this.tileElems}
        </svg>
      `;

    }

  }

);
