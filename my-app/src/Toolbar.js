import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './general.css';
import Caixa from './Caixa.js';

class Toolbar extends Component {

	constructor(props) {
		super(props);
	}
/*
ComponentWillMount() {
	let data = this.state.data;
}
*/
  render() {
    return (
        <div className="toolbar">
	        <ul className="toolbarList">
	        	<li><Caixa value="1"/></li>
	        	<li>{this.props.data.title} asd</li>
	        	<li><Caixa value="2"/></li>
	        	<li><Caixa value="3"/></li>
	        	<li><Caixa value="4"/></li>
	        </ul>
        </div>

   );
  }
}

export default Toolbar;
