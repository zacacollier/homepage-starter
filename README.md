# Homepage Starter
- Webpack 2
- `webpack-dev-server` + Hot Module Replacement
- Minimal React boilerplate
- Optional HTTPS
- PostCSS
- Asset optimization (WIP sorta)

### Installation
```
  git clone git@github.com:zacacollier/homepage-starter.git
  cd homepage-starter
  yarn install
  yarn start
```

#### With `yarn`:
You can quickly install yarn with
```bash
curl -o- -L https://yarnpkg.com/install.sh | bash
```

### Options

- `yarn start`  ~ serve over HTTP
  - `yarn dev`    ~ same, but with more verbose output
- `yarn secure` ~ serve over HTTPS


### `src` structure:
```bash
  src
  ├── components
  │   ├── App.css
  │   └── App.js
  ├── index.js
  └── static
      └── stallman.jpg
```
#### N.B.
- CSS naming and location corresponds to Component name (for now)
- Static assets (other than `index.html`) can be inlined in React elements from `src`:
```jsx
const stallman = require('../static/stallman.jpg')

// src/components/App.js

const App = () => (
  <div className={styles.app}>
    <h2>Hello</h2>
    <img src={stallman} alt="richie stallman" />
  </div>
);
```

...or gathered from `public` at the project root.
