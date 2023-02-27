import { LitElement, html, css } from 'lit';
import "professor-card-2/src/professor-card.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CardList extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--card-list-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      
        <professor-card-2 
        title = "Chad"
        subtitle = "Chad of Cyber IST"
        chadLabel = "Details"
        top = "Giacobe"
        bottom = "Overlaid"
        pic = "https://cdn.discordapp.com/attachments/703281782111338586/1076698279712137346/unknown.png"
        changeBackground = false
        toggleOpening = false
        ></professor-card-2>
      
    `;
  }
}

customElements.define('card-list', CardList);