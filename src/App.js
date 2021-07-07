import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import RentPage from './pages/rent/rent.components.jsx';
import Header from './components/header/header.components';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path = '/' component = {HomePage} />
        <Route path = '/rent' component = {RentPage} />
      </Switch>
    </div>
  );   
}
export default App;
