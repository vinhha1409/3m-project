import React from 'react';
import './App.css';
import Home from './views/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
