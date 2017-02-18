import React from 'react';
import $ from "jquery";
import { hashHistory } from 'react-router';
import {Modal, Button} from 'react-bootstrap';

import CorrectMark from './CorrectMark';
import WrongMark from './WrongMark';
import globalData from './globalData';

export default class CptEnd extends React.Component {
	constructor() {
	    super();
	    this.state = {
	      showModal: false,
	      errorMsg: "",
	      fnameField: 'form-group',
	      fnameIcon: 'hidden',
	      lnameField: 'form-group',
	      lnameIcon: 'hidden',
	      emailField: 'form-group',
	      emailIcon: 'hidden'
	    };
	}

	render(){
		const correctStyling = {
					color: 'green',
				  	fontSize: '80px'
				};
		const errorStyling = {
					color: 'red',
				  	fontSize: '100px'
				};		
		return (
			<div>
				<div className='row'>
					<div className='col-sm-offset-2 col-sm-2'>
						<CorrectMark styling={correctStyling}/>
					</div>
					<div className='col-sm-6'>
						<h1>							
							<strong>Congratulations!!</strong>
						</h1>
					</div>
				</div>
				<div className='row'>
					<div className='col-sm-offset-2 col-sm-8'>
						<p className='text-justify'>The Child Protection Training class has been successfully completed with a score of {this.props.score}. Please use the form below to enter your name and email address to print a copy of your certificate and record your certification in the database. Your certificate may be reprinted at any time for the next two years.</p>
						<form className='form-horizontal' onSubmit={this._handleSubmit.bind(this)}>
							<div className='row row-spacing'>
								<div className={this.state.fnameField}>
									<label className='col-xs-4 control-label' for='firstName'>First Name:</label>
									<div className='col-xs-8'>
										<input id='firstName' className='form-control' placeholder="First Name" ref={c => this._fname = c} />
										<span class={this.state.fnameIcon} aria-hidden="true"></span>
									</div>
								</div>
							</div>
							<div className='row row-spacing'>
								<div className={this.state.lnameField}>
									<label className='col-xs-4 control-label' for="lastName">Last Name:</label>
									<div className='col-xs-8'>
										<input id='lastName' className='form-control' placeholder="Last Name" ref={c => this._lname = c} />
										<span class={this.state.lnameIcon} aria-hidden="true"></span>
									</div>
								</div>
							</div>
							<div className='row row-spacing'>
								<div className={this.state.emailField}>
									<label className='col-xs-4 control-label'>Email Address:</label>
									<div className='col-xs-8'>
										<input className='form-control' placeholder="Email Address" ref={c => this._email = c} />
										<span class={this.state.emailIcon} aria-hidden="true"></span>
									</div>
								</div>
							</div>
							<div className='row'>
								<div className='col-xs-offset-4 col-xs-4'>
									<Button bsStyle='primary' bsSize="large" type='submit' block active>Submit</Button>
								</div>
							</div>
						</form>
					</div>
				</div>
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
		            		{this.state.errorMsg}
		            	</div>
		            </div>
		          </Modal.Body>
		          <Modal.Footer>
		            <Button bsStyle='primary' bsSize="large" onClick={this._close.bind(this)}>Close</Button>
		          </Modal.Footer>
		        </Modal>
			</div>
		);
	}

	_handleSubmit(event) {
		event.preventDefault();
		if (/^[a-zA-Z]+$/.test(this._fname.value) && /^[a-zA-Z]+$/.test(this._lname.value)
			 && /^[a-zA-Z0-9\-_\.]+@[a-zA-Z0-9]+\.(org|net|com)$/.test(this._email.value)) {
			globalData.certList = [];
			const certDate = new Date();
			const newCert= {
				FirstName: 	this._fname.value,
				LastName: 	this._lname.value,
				created_at: certDate, 
				Email: 		this._email.value,
				id: 		1
			}
			$.ajax({
              type: "POST",
              crossDomain: true,
              url: 'https://registration.etbe.org/cpt_cert',
              data: { FirstName: this._fname.value, LastName: this._lname.value, Score: this.props.score, Email: this._email.value },
              dataType: 'json',
              success: () => {alert("Cert Saved")}
            });
			globalData.certList.push(newCert);
			hashHistory.push('/Cert/0');
		} else {
			let errorList = [];
			if (!this._fname.value || !this._lname.value || !this._email.value) {
				errorList.push('Must enter First Name, Last Name and Email address.');
				if (!this._fname.value) {
					this.setState({	fnameField: 'form-group has-error has-feedback',
									fnameIcon: 'glyphicon glyphicon-remove form-control-feedback'});
				} else {
					this.setState({	fnameField: 'form-group has-success has-feedback',
									fnameIcon: 'glyphicon glyphicon-ok form-control-feedback'});
				}
				if (!this._lname.value) {
					this.setState({	lnameField: 'form-group has-error has-feedback',
									lnameIcon: 'glyphicon glyphicon-remove form-control-feedback'});
				} else {
					this.setState({	lnameField: 'form-group has-success has-feedback',
									lnameIcon: 'glyphicon glyphicon-ok form-control-feedback'});
				}
				if (!this._email.value) {
					this.setState({	emailField: 'form-group has-error has-feedback',
									emailIcon: 'glyphicon glyphicon-remove form-control-feedback'});
				} else {
					this.setState({	emailField: 'form-group has-success has-feedback',
									emailIcon: 'glyphicon glyphicon-ok form-control-feedback'});
				}
			} else {				
				if (!/^[a-zA-Z]+$/.test(this._fname.value)) {
					this.setState({	fnameField: 'form-group has-error has-feedback',
									fnameIcon: 'glyphicon glyphicon-remove form-control-feedback'});
					errorList.push('Invalid character in First Name field.');
				} else {
					this.setState({	fnameField: 'form-group has-success has-feedback',
									fnameIcon: 'glyphicon glyphicon-ok form-control-feedback'});
				}
				if (!/^[a-zA-Z]+$/.test(this._lname.value)) {
					this.setState({	lnameField: 'form-group has-error has-feedback',
									lnameIcon: 'glyphicon glyphicon-remove form-control-feedback'});
					errorList.push('Invalid character in Last Name field.');
				} else {
					this.setState({	lnameField: 'form-group has-success has-feedback',
									lnameIcon: 'glyphicon glyphicon-ok form-control-feedback'});
				}
				if (!/^[a-zA-Z0-9\-_\.]+@[a-zA-Z0-9]+\.(org|net|com)$/.test(this._email.value)) {
					this.setState({	emailField: 'form-group has-error has-feedback',
									emailIcon: 'glyphicon glyphicon-remove form-control-feedback'});
					errorList.push('Invalid character in Email field or invalid email format.');
				} else {
					this.setState({	emailField: 'form-group has-success has-feedback',
									emailIcon: 'glyphicon glyphicon-ok form-control-feedback'});
				}
			}
			this._open(errorList);
		}
	}

	_close() {
	    this.setState({ showModal: false });
	}

	_open(msgs) {
	    this.setState({ showModal: true,
	    				errorMsg: this._formatErrors(msgs) });
	}

	_formatErrors(errList) {
		return errList.map((err,i) => {
			return (<h2 key={i}>{err}</h2>);
		});
	}
}