customElements.define('loader-xxx',

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

      `;

      return style;

    }

    render() {

      return `
        <svg width="66" height="66" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">

        </svg>
      `;

    }

  }

);
