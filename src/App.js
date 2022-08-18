import React from 'react';

import { Route , Switch } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/Shop';
import SignPage from './pages/SignPage/SignPage';
import Header from './components/Header/Header';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
