/**
 * Created by skynetsaa on 29.01.18.
 */
import React, { Component } from 'react';
import SubmitForm from './SubmitForm'
import SuccessMessage from './SuccessMessage'

class SimpleFrom extends Component {
	state = {
		value: 'Marina',
		sent: false
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log('Form was submitted with name: ', this.state.value);
		this.setState({
			sent: !this.state.sent
		});
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		});

	}

	handleBtnOnceAgain(e) {
		this.setState({
			sent: !this.state.sent
		})
	}

	render() {
		const body = !this.state.sent ? <SubmitForm girl={this.state.value}
			  handleChange={this.handleChange.bind(this)}
			  handleSubmit={this.handleSubmit.bind(this)} />
			: <SuccessMessage handleBtnOnceAgain={this.handleBtnOnceAgain.bind(this)} />

		return (
			<div>
				<div>Girl Name: {this.state.value}</div>
				{body}
			</div>
		)
	}
}

export default SimpleFrom