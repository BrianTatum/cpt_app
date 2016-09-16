import React from 'react';
import {Panel, Modal, Button} from 'react-bootstrap';

import WrongMark from './WrongMark';

export default class LookUpForm extends React.Component {
	constructor() {
	    super();
	    this.state = {
	      showModal: false,
	    };
	}

	render(){
		const panelTitle = (<strong>Certification Look-Up</strong>);
		const errorStyling = {
					color: 'red',
				  	fontSize: '100px'
				};
		return (
			<Panel header={panelTitle} className='text-center'>
				<p className='text-justify'>Please enter the last name or email of the person to search the current CPT list. Both fields may be used to narrow down the list.</p>
				<form className="form-inline" onSubmit={this._handleSubmit.bind(this)}>
					<input className='form-control' placeholder="Last Name" ref={c => this._name = c} />
					<input className='form-control' placeholder="Email Address" ref={c => this._email = c} />
					<button className='btn btn-success active' type="submit">Submit</button>
				</form>
				<Modal show={this.state.showModal} onHide={this._close.bind(this)}>
		          <Modal.Header>
		          	<Modal.Title></Modal.Title>
		          </Modal.Header>
		          <Modal.Body>
		          	<div className='row'>
		          		<div className='col-sm-3'>
		          			<WrongMark styling={errorStyling} />
		          		</div>
		          		<div className='col-sm-9'>
		            		<h2>Must enter Last Name or Email address to search database for CPT Certification.</h2>
		            	</div>
		            </div>
		          </Modal.Body>
		          <Modal.Footer>
		            <Button bsStyle='success' bsSize="large" onClick={this._close.bind(this)}>Close</Button>
		          </Modal.Footer>
		        </Modal>
			</Panel>
		);
	}

	_handleSubmit(event) {
		event.preventDefault();
		if (this._name.value || this._email.value) {
			this.props.getCerts(this._name.value, this._email.value);
		} else {
			this._open();
		}
	}

	_close() {
	    this.setState({ showModal: false });
	}

	_open() {
	    this.setState({ showModal: true });
	}
}