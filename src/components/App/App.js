
import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';
import styles from './styles.css';

function App({ children }) {
  return (
    <div>
      <h1 className={styles.header}>React Kyt!</h1>
      <ul className={styles.links}>
        <li className={styles.link}><Link to="/">Home</Link></li>
        <li className={styles.link}><Link to="/about">About</Link></li>
      </ul>
      {children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
