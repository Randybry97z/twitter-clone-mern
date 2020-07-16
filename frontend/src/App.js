import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Index from './components/Index';
import CreateUser from './components/User/CreateUser';
import Login from './components/User/Login';
import CreateTweet from './components/Tweet/CreateTweet';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Index} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/users/create" component={CreateUser} />
      <Route exact path="/tweet/create" component={CreateTweet} />
    </Router>
  );
}

export default App;
