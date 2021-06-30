import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.components';

const SignInPage = () => (
  <div>
    <h1> Sign in Page </h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path = '/' component = {HomePage} />
        <Route exact path = '/signin' component = {SignInPage} />
      </Switch>
    </div>
  );   
}
export default App;
