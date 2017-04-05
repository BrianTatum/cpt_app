import React from 'react';
import {Panel, Modal, Button} from 'react-bootstrap';

import WrongMark from './WrongMark';

export default class LookUpForm extends React.Component {
	constructor() {
	    super();
	    this.state = {
	    	showModal: false,
			errorMsg: "",
			lnameField: 'form-group',
	      	lnameIcon: 'hidden',
	      	emailField: 'form-group',
	      	emailIcon: 'hidden'
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
				<form onSubmit={this._handleSubmit.bind(this)}>
					<div className='row'>
						<div className='col-sm-6'>
							<div className={this.state.lnameField} >
								<label className='control-label col-xs-12 nopadding-xs text-left' for="lastName">Last Name:</label>
								<input id='lastName' className='form-control' placeholder="Last Name" ref={c => this._name = c} />
								<span class={this.state.lnameIcon} aria-hidden="true"></span>
							</div>
						</div>
						<div className='col-sm-6'>
							<div className={this.state.emailField} >
								<label className='control-label col-xs-12 nopadding-xs text-left' for="email">Email Address:</label>
								<input id='email' className='form-control' placeholder="Email Address" ref={c => this._email = c} />
								<span class={this.state.emailIcon} aria-hidden="true"></span>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-xs-offset-0 col-sm-6 col-sm-offset-3' >
							<button className='btn btn-success btn-lg active' style={{width: '100%'}} type="submit">Submit</button>
						</div>
					</div>
				</form>
				<Modal show={this.state.showModal} onHide={this._closeError.bind(this)}>
		          <Modal.Header>
		          	<Modal.Title></Modal.Title>
		          </Modal.Header>
		          <Modal.Body>
		          	<div className='row'>
		          		<div className='col-sm-3'>
		          			<WrongMark styling={errorStyling} />
		          		</div>
		          		<div className='col-sm-9'>
		            		<h2>{this.state.errorMsg}</h2>
		            	</div>
		            </div>
		          </Modal.Body>
		          <Modal.Footer>
		            <Button bsStyle='success' bsSize="large" onClick={this._closeError.bind(this)}>Close</Button>
		          </Modal.Footer>
		        </Modal>
			</Panel>
		);
	}

	_handleSubmit(event) {
		event.preventDefault();
		if ((this._name.value && /^[a-zA-Z]+$/.test(this._name.value)) || (this._email.value && /^[a-zA-Z0-9\-_\.]+@[a-zA-Z0-9]+\.(org|net|com)$/.test(this._email.value))) {
			this.props.getCerts(this._name.value, this._email.value);
			this.setState({	lnameField: 'form-group has-success has-feedback',
							lnameIcon: 'glyphicon glyphicon-ok form-control-feedback',
							emailField: 'form-group has-success has-feedback',
							emailIcon: 'glyphicon glyphicon-ok form-control-feedback'});
		} else {
			if (!this._name.value && !this._email.value){
				this._openError('Must enter Last Name or Email address to search database for CPT Certification.');
				this.setState({	lnameField: 'form-group has-error has-feedback',
								lnameIcon: 'glyphicon glyphicon-remove form-control-feedback',
								emailField: 'form-group has-error has-feedback',
								emailIcon: 'glyphicon glyphicon-remove form-control-feedback'});
			} else {
				if (this._name.value && !/^[a-zA-Z]+$/.test(this._name.value)) {
					this._openError('Invalid character in Last Name search field.');
					this.setState({	lnameField: 'form-group has-error has-feedback',
									lnameIcon: 'glyphicon glyphicon-remove form-control-feedback'});
				} else {
					this.setState({	lnameField: 'form-group',
									lnameIcon: 'hidden'});
				}
				if (this._email.value && !/^[a-zA-Z0-9\-_\.]+@[a-zA-Z0-9]+\.(org|net|com)$/.test(this._email.value)) {
					this._openError('Invalid character in email search field or incomplete address.');
					this.setState({	emailField: 'form-group has-error has-feedback',
									emailIcon: 'glyphicon glyphicon-remove form-control-feedback'});
				} else {
					this.setState({	emailField: 'form-group',
									emailIcon: 'hidden'});
				}
			}
		}
	}

	_closeError() {
	    this.setState({ showModal: false });
	}

	_openError(msg) {
	    this.setState({ showModal: true,
	    				errorMsg: msg });
	}
}