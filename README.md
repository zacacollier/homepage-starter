# Webpack 2 + React + HTTPS
- Webpack 2
- `webpack-dev-server` + Hot Module Replacement
- Minimal React boilerplate
- Optional HTTPS
- PostCSS
- Asset optimization (WIP sorta)

### Installation & Usage
```
  git clone git@github.com:zacacollier/webpack2-react-https-start.git myNewProject
  cd myNewProject
  yarn install
  yarn start
```

### Options

#### With `yarn`:
You can quickly install yarn with
```bash
curl -o- -L https://yarnpkg.com/install.sh | bash
```

- `yarn start`  ~ serve over HTTP
  - `yarn dev`    ~ same, but with more verbose output
- `yarn secure` ~ serve over HTTPS

Or just use `npm`.

### `src` structure
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
- Static assets can be inlined in React elements:
```jsx
const stallman = require('../static/stallman.jpg')

const App = () => (
  <div className={styles.app}>
    <h2>Hello</h2>
    <img src={stallman} alt="richie stallman" />
  </div>
);
```

