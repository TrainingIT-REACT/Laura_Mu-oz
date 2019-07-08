import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Login';
import Home from './Home';
// Componentes
//import Home from './App/Home';
//import Login from './App/Login';

class App extends Component {
  constructor(props) {
    super(props);

    // Bind de los métodos
    this.updateLoged = this.updateLoged.bind(this);

    this.state = {
      loged: false,
      updateLoged: this.updateLoged
    }
  }

  updateLoged(loged) {
    this.setState(state => ({ loged }));
  }

  render() {
    return (
      <Router>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
      </Router>
    );
  }
}

export default App;

