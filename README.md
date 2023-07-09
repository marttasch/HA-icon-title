# HA-icon-title
A Custom Lovelace Card for Home Assistant wich displays an icon next to a title.

![preview-icon-title-card](preview-icon-title-card.png)


## Usage
```yaml	
type: 'custom:icon-title'
title: Title
icon: mdi:icon
```

## Installation
### Manual
1. Download `icon-title.js` from the latest release.
2. Place the file in your `config/www` folder.
3. Add a reference to `icon-title.js` in Dashboard. There are two ways to do this:
    - **Using UI:** _Settings_ → _Dashboards_ → _More Options icon_ → _Resources_ → _Add Resource_ → Set _Url_ as `/local/icon-title.js` → Set _Resource type_ as `JavaScript Module`.
      **Note:** If you do not see the Resources menu, you will need to enable _Advanced Mode_ in your _User Profile_
    - **Using YAML:** Add following code to `lovelace` section.
        ```yaml
        resources:
            - url: /local/icon-title.js
              type: module
        ```