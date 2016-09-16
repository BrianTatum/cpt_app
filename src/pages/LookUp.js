import React from 'react';
import $ from "jquery";
import{ Modal, Button } from 'react-bootstrap';

import AdultReq from './layout_comps/AdultReq';
import CertList from './layout_comps/CertList';
import LookUpForm from './layout_comps/LookUpForm';
import globalData from './layout_comps/globalData';
import WrongMark from './layout_comps/WrongMark';
import CreditSign from './layout_comps/CreditSign';

export default class LookUp extends React.Component {
	constructor() {
	    super();
	    this._getCerts = this._getCerts.bind(this)
	    this.state = {
	    	cptCerts: globalData.certList,
	    	showModal: false
	    }
	}

	componentWillUnmount() {
		globalData.certList = this.state.cptCerts;
	}

	render(){
		const errorStyling = {
					color: 'red',
				  	fontSize: '100px'
				};
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-md-8 col-xs-12'>
						<LookUpForm getCerts={this._getCerts.bind()} />
						<CertList cptCerts={this.state.cptCerts} />
					</div>
					<div className='col-md-4 col-xs-12'>
			        	<AdultReq />
			        	<CreditSign />
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
		            		<h2>No CPT Certifications found in database. Please try again.</h2>
		            		<p>The certification may have expired. If this is the case this person will need to retake the CPT class.</p>
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

	_getCerts(name, email){
		const urlString = "http://registration.etbe.org/cptcert?LastName=" + name + "&Email=" + email + "&JsonOnly=true&callback=?";
		$.ajax({
	      method: 'GET',
	      url: urlString,
	      dataType: 'jsonp',
	      crossDomain: true,
	      success: (data) => { 	
	      		if (!data.cert || data.cert.length < 1) {this._open();}
	      		this.setState({ cptCerts: data.cert })}
		});
	}

	_close() {
	    this.setState({ showModal: false });
	}

	_open() {
	    this.setState({ showModal: true });
	}
}