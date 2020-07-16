import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Components
import Index from './components/Index';
import Signup from './components/User/Signup';
import Login from './components/User/Login';
import CreateTweet from './components/Tweet/CreateTweet';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Index} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/tweet/create" component={CreateTweet} />
    </Router>
  );
}

export default App;
