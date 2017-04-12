import React  from 'react';
import styles from './App.css';
const stallman = require('../static/stallman.jpg')

const App = () => (
  <div className={styles.app}>
    <h2>Hello</h2>
    <img src={stallman} alt="richie stallman" />
  </div>
);

export default App;
