import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './general.css';
import propTypes from 'prop-types';

var id ;
class Caixa extends Component {

	/*
	static propTypes= {
		id : propTypes.string.isRequired,
	}
*/
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div className="caixaa">
      	{this.props.value} -> dfsdf
      </div>
    );
  }
}

export default Caixa;
