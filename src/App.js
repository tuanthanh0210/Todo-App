import React from 'react';
import './App.scss';
import TodoList from './components/TodoList';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';

function App() {

  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/todo" exact component={TodoList} />
      </Router>
    </div>
  );
}

export default App;
