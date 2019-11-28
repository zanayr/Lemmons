import React from 'react';
import { Route } from 'react-router-dom';

import styles from './App.module.css';

import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';

function App() {
  return (
    <div className={styles.App}>
      <Route path='/auth' component={SignIn} />
      <Route path='/signup' component={SignUp} />
    </div>
  );
}

export default App;
