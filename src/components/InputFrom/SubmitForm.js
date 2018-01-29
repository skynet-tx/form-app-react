/**
 * Created by skynetsaa on 29.01.18.
 */
import React, { Component } from 'react';

class SubmitForm extends Component {


	render() {
		const {girl, handleChange, handleSubmit} = this.props

		return (
			<form onSubmit={handleSubmit}>
				<label>Type new girl name:</label>
				<input type="text" name="name" onChange={handleChange} value={ girl } />
				<button type="submit">Submit</button>
			</form>
		)
	}
}

export default SubmitForm