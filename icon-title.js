class CustomIconTitleCard extends HTMLElement {
    setConfig(config) {
      if (!config.icon || !config.title) {
        throw new Error("Icon and title are required");
      }
      
      this.config = config;
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <style>
          .card {
            display: flex;
            align-items: center;
            padding: 24px 16px 16px;
            margin-top: 10px
          }
          .icon {
            margin-right: 24px;
            transform: scale(1.5) translateY(-03px);

            font-size: var(--ha-card-header-font-size,24px);
            line-height: 32px;
          }
          .title {
            margin: 0;

            color: var(--ha-card-header-color,--primary-text-color);
            font-family: var(--ha-card-header-font-family,);
            font-size: var(--ha-card-header-font-size,24px);
            font-weight: 400;

            margin-block: 0px;
            letter-spacing: -0.012em;
            line-height: 32px;
          }
        </style>
        <div class="card">
          <ha-icon class="icon" icon="${this.config.icon}"></ha-icon>
          <h1 class="title">${this.config.title}</h1>
        </div>
      `;
    }
  
    set hass(hass) {
      // Update the card if needed when Home Assistant state changes
    }
  }
  
  customElements.define("icon-title", CustomIconTitleCard);
  