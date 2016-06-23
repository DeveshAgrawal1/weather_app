import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/index';

class SearchBar extends Component{

	constructor(props){
		super(props);

		this.state={
			term : ''
		};

		this.onInputChange = this.onInputChange.bind(this); //(this keyword problem in js) stmt used because onInoputChange was out of context during the callback
															//also because, we didn't use fat arrow function. 
															//It gives another way of binding a function than the fat arrow method.
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		
		this.setState( { term : event.target.value } );
	}

	onFormSubmit(event){
		event.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({term : ''});
	}

	render() {
		return(
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					className="form-control"
					placeholder="Enter the city name along with the country, for e.g. New Delhi, India or Paris, France"
					value={this.state.term}
					onChange={this.onInputChange} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button> 
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchWeather},dispatch);

}	

export default connect(null, mapDispatchToProps)(SearchBar);