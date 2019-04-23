import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './Header';
import Landing from './Landing';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import SignOut from './auth/SignOut';

const App = () => {
  return (
    <div className="app container">
      <Header />
      <Route path="/" exact component={ Landing } />
      <Route path="/signin" component={ SignIn } />
      <Route path="/signup" component={ SignUp } />
      <Route path="/signout" component={ SignOut } />
      {/* <Route path="/feature" component={ Feature } /> */}
    </div>
  );
}
export default App;