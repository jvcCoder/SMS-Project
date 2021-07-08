import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import RentPage from './pages/rent/rent.components.jsx';
import Header from './components/header/header.components';
import SignInPage from './pages/sign-in/sign-in.components';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser = { this.state.currentUser }/>
        <Switch>
          <Route exact path = '/' component = {HomePage} />
          <Route path = '/rent' component = {RentPage} />
          <Route path = '/signin' component = {SignInPage} />
        </Switch>
      </div>
    );   
  }
}

export default App;
