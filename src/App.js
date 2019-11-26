import React from 'react';
import styles from './App.module.css';

import Main from './containers/Authentication/Authentication';

function App() {
  return (
    <div className={styles.App}>
      <Authentication/>
    </div>
  );
}

export default App;
