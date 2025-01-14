# XpresserJs Bcrypt Plugin

A library to help you hash passwords using Bcrypt.

This plugin makes use of [bcrypt](https://www.npmjs.com/package/bcrypt).

**MENU**
- [Installation](#installation)
- [Add to plugins.json](#add-to-pluginsjson)
- [Add Config](#add-to-your-project-config)
- [Usage](#usage)

### Installation

```sh
npm i @techie_oriname/xpresser-bcrypt

# OR
yarn add @techie_oriname/xpresser-bcrypt

```


### Add to plugins.json

```json
{
  "npm://@techie_oriname/xpresser-bcrypt": true
}
```

### Add to your project config.

```javascript
({
  // ... Other Configs
    "bcrypt": {
        salt: 10,
    },
  
})
```


### Usage

In your controller or anywhere in your project.

```javascript
const { compare, hash } = require("@techie_oriname/xpresser-bcrypt");

const password = "password"

// hash password
const hashed = hash(password)

// compare password and hash
compare(password, hashed) // return true

```

### Typescript support
```typescript
import { compare, hash } from "@techie_oriname/xpresser-bcrypt";

const password: string = "password"

// hash password
const hashed = hash(password)

//compare password and hash
compare(password, hashed)
```
