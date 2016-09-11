import React from 'react';
import {Panel} from 'react-bootstrap';

export default class LookUpForm extends React.Component {
	render(){
		const panelTitle = (<strong>Certification Look-Up</strong>);
		return (
			<Panel header={panelTitle} className='text-center'>
				<p className='text-justify'>Please enter the last name or email of the person to search the current CPT list. Both fields may be used to narrow down the list.</p>
				<form className="form-inline" onSubmit={this._handleSubmit.bind(this)}>
					<input className='form-control' placeholder="Last Name" ref={c => this._name = c} />
					<input className='form-control' placeholder="Email Address" ref={c => this._email = c} />
					<button className='btn btn-success active' type="submit">Submit</button>
				</form>
			</Panel>
		);
	}

	_handleSubmit(event) {
		event.preventDefault();
		if (this._name.value || this._email.value) {
			this.props.getCerts(this._name.value, this._email.value);
		} else {
			alert ('Please enter Name or email to search.');
		}
	}
}