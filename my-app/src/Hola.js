import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hola extends Component {
  render() {
  	const patata = this.props.patataPasada;
  	const returnn = "Variable passada per props";
    return (

    	<div>{returnn} :{patata}</div>
        
    );
  }
}

export default Hola;
