import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import ToolbarLeft from './Toolbar.js';
import Detail from './Detail.js';
import * as GeneralActions from './GeneralActions.js';


class App extends Component {

  propTypes: {
    data : propTypes.object.isRequired,
    
  }
  constructor(props) {
    super(props);
    var s = GeneralActions.fetchPokemons();
    this.state = { arrayData: "A"};

  }
  render() {
    var dataa = [
      {id: '1', title: 'Hello World', content: 'Welcome to learning React!'},
      {id: '2', title: 'Installation', content: 'You can install React from npm.'},
      {id: '3', title: 'Installation', content: 'You can install React from npm.'}
    ];
    
    

    console.log("->"+this.state.arrayData)

    return (
      <div className="App">
        <ToolbarLeft data={dataa[0]} />
        <Detail />
      </div>
    );
  }
}

export default App;
