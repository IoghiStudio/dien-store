import React from 'react';

import { Route , Link } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage/HomePage';

const Buci = () => (
  <div>
    <Link to='/buci2'>Buci2!!!!!</Link>
    <h1>Nuci mere etc</h1>
  </div>
)

const Buci2 = () => (
  <div>
    <Link to='/buci'>Buci</Link>
    <h1>Nuci2 mere2 etc2</h1>
  </div>
)

function App() {
  return (
    <div>
      <Route path='/' component={HomePage} />
      <Route path='/buci' component={Buci} />
      <Route path='/buci2' component={Buci2} />
    </div>
  );
}

export default App;
