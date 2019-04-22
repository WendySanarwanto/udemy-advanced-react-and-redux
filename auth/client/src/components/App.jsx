import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './Header';
import Landing from './Landing';

const App = () => {
  return (
    <div className="app container">
      <Header />
      <Route path="/" component={ Landing } />
    </div>
  );
}
export default App;