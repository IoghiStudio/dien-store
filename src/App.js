import React from 'react';

import { Route , Switch } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/Shop';
import SignPage from './pages/SignPage/SignPage';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignPage} />
      </Switch>
    </div>
  );
}

export default App;
