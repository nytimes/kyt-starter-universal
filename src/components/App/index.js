
import React from 'react';
import { Link, Match, Miss } from 'react-router';
import NoMatch from '../NoMatch';
import styles from './styles.scss';
import routes from './routes';

function App() {
  return (
    <div>
      <i className={styles.logo} />
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Link className={styles.link} to="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.link} to="/tools">Tools</Link>
        </li>
      </ul>
      <div className={styles.content}>
        {routes.map((route, i) => (
          <Match key={i} {...route} />
        ))}
        <Miss component={NoMatch} />
      </div>
    </div>
  );
}

export default App;
