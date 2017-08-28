import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import propTypes from 'prop-types';
//Id can be a number, or a string, but it needs to be defined!
class User extends Component {

	propTypes= {
		id : propTypes.string.isRequired,
		password : propTypes.oneOfType([
			propTypes.number,
			propTypes.string
		]).isRequired,
		name : propTypes.string.isRequired,
		email : propTypes.string.isRequired,
		telf : propTypes.string,
		web : propTypes.string.isRequired,
	}
	render() {
		return (
			<div>
				{this.props.password}
			</div> 
			);
		
	}
}
export default User;