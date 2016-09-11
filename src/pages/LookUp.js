import React from 'react';
import $ from "jquery";

import AdultReq from './layout_comps/AdultReq';
import CertList from './layout_comps/CertList';
import LookUpForm from './layout_comps/LookUpForm';
import globalData from './layout_comps/globalData';

export default class LookUp extends React.Component {
	constructor() {
	    super();
	    this._getCerts = this._getCerts.bind(this)
	    this.state = {
	    	cptCerts: globalData.certList
	    }
	}
	
	componentWillUnmount() {
		globalData.certList = this.state.cptCerts;
	}

	render(){
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-md-8 col-xs-12'>
						<LookUpForm getCerts={this._getCerts.bind()} />
						<CertList cptCerts={this.state.cptCerts} />
					</div>
					<div className='col-md-4 col-xs-12'>
			        	<AdultReq />
			        	<div className='row'>
			              <div className='col-xs-12'>
			                <h3 className='text-center'>
			                  <strong>Training Curriculum and Test Material Produced by</strong>
			                </h3>
			                <h3 className='text-center'>
			                  <strong>Texas Baptist Camp Managers Association</strong>
			                </h3>
			              </div>
			            </div>
			        </div>
				</div>
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
	      success: (data) => { 	this.setState({ cptCerts: data.cert })}
		});
	}
}