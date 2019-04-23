import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './Header';
import Landing from './Landing';
import SignUp from './SignUp';
import SignIn from './SignIn';
import SignOut from './SignOut';

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