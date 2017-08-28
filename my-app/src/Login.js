import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User.js';

class Login extends Component {
	propTypes: {

	}

	constructor(props) {
		super(props);
		this.state = {
			patata : 'Hola'
		}
	}

	ola(e) {
		this.state.patata = "he canviat";
		
	}

	render() {
		return (
			<div id="formLogin">
				<form onSubmit={this.ola}>
					<label>First name:<input type="text" name="firstname" /></label>
					<label>Last name:
					<input type="text" name="lastname"/></label>
					<input type="submit" value={this.state.patata}/>
				</form> 

				<User id="asd" password={this.state.patata}/>
			</div>
		);
	}
}

export default Login;