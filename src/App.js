import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeSection from './components/HomeSection/HomeSection';
import Auth from './components/Header/Authentication/Auth';
import About from './components/About/About';
import Update from './components/Update/Update';
import UserLinks from './components/UserLinks/UserLinks';
import Logout from './components/Logout/Logout';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={HomeSection} />
          <Route exact path="/about" component={About} />
          <Route exact path="/update" component={Update} />
          <Route exact path="/authenticate" component={Auth} />
          <Route exact path="/delete" component={UserLinks} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
