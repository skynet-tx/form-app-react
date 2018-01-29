/**
 * Created by skynetsaa on 29.01.18.
 */
import React, { Component } from 'react';

class SuccessMessage extends Component {

	render() {
		const {handleBtnOnceAgain} = this.props

		return (
			<div>
				<div>Form was sent</div>
				<button onClick={handleBtnOnceAgain}>once again</button>
			</div>
		)
	}
}

export default SuccessMessage