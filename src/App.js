import React from 'react';
import styles from './App.module.css';

import Authentication from './containers/Authentication/Authentication';

function App() {
  return (
    <div className={styles.App}>
      <Authentication/>
    </div>
  );
}

export default App;
