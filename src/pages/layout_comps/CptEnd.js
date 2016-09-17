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
						<form className="form-inline" onSubmit={this._handleSubmit.bind(this)}>
							<div className='row row-spacing'>
								<div className='col-xs-12'>
									<input className='form-control' placeholder="First Name" ref={c => this._fname = c} />
									<input className='form-control' placeholder="Last Name" ref={c => this._lname = c} />
									<input className='form-control' placeholder="Email Address" ref={c => this._email = c} />
								</div>
							</div>
							<div className='row'>
								<div className='col-xs-offset-4 col-xs-4'>
									<Button bsStyle='success' bsSize="large" type='submit' block active>Submit</Button>
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
		            		<h2>Must enter First Name, Last Name and Email address.</h2>
		            	</div>
		            </div>
		          </Modal.Body>
		          <Modal.Footer>
		            <Button bsStyle='success' bsSize="large" onClick={this._close.bind(this)}>Close</Button>
		          </Modal.Footer>
		        </Modal>
			</div>
		);
	}

	_handleSubmit(event) {
		event.preventDefault();
		if (this._fname.value && this._lname.value && this._email.value) {
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
              url: 'http://registration.etbe.org/cpt_cert',
              data: { FirstName: this._fname.value, LastName: this._lname.value, Score: this.props.score, Email: this._email.value },
              dataType: 'json',
              success: () => {alert("Cert Saved")}
            });
			globalData.certList.push(newCert);
			hashHistory.push('/Cert/0');
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