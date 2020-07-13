import React from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './components/Index';
import CreateUser from './components/User/CreateUser';
import Login from './components/User/Login';

function App() {
  return (
    <div>
      <Index />
      <CreateUser />
      <Login />
      Hello World!
    </div>
  );
}

export default App;
