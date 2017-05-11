import React from 'react';
import {Link} from 'react-router';

import globalData from './layout_comps/globalData';

export default class Cert extends React.Component {
	render(){
		const cptCert = globalData.certList[this.props.params.arrayIndex];
		const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
		const certMargins0 = {margin: '0'};
		const certNameHead = {margin: '35px 0 0 0'};
		const certDateHead = {margin: '10px 0 0 0'};
		const firstSignLine = {margin: '35px 25px 0 25px', fontSize: '11px'};
		const signLines = {margin: '10px 25px 0 25px', fontSize: '11px'};
		const filingInto = {margin: '25px 50px 0 50px'};
		const curriculum = {margin: '25px 0 0 0'};
		const texasCampManagers = {margin: '0 0 25px 0'};
		if (cptCert) {
			const certDate = new Date(cptCert.created_at);
			return (
				<div className='container'>
					<div className='row hidden-print'>
						<div className='col-xs-12'>
							<h2 className='text-justify'>Use browser print function to print out certificate and then click the "Return" button below.</h2>
							<Link to='/LookUp' className='btn btn-success btn-lg'>Return</Link>
						</div>
					</div>
					<section id="cert-sec" className="cpt-cert">
						<section className="cert-fraim">
							<h1 className='text-center'>CERTIFICATE OF COMPLETION</h1>
							<h3 className='text-center' style={certMargins0}>Course Title: Child Protection Training</h3>
							<h3 className='text-center' style={certMargins0}>Training Course Approval Number: YC06-0001</h3>
							<h3 className="text-center" style={certNameHead}>This certificate certifies that</h3>
							<h1 id="cert-name" className='text-center' style={certMargins0}><strong>{cptCert.FirstName} {cptCert.LastName}</strong></h1>
							<h3 className="text-center" style={certMargins0}>has completing the training class</h3>
							<h3 className="text-center" style={certMargins0}>with a score above 70%.</h3>
							<h4 className="text-center" style={certDateHead}>Date of Completion:</h4>
							<h3 id="cert-date" className="text-center" style={certMargins0}>{months[certDate.getMonth()]} {certDate.getDate()}, {certDate.getFullYear()}</h3>
							<p className="text-justify" style={firstSignLine}>This is to certify that I have completed the Child Protection Training online class by watching all four of the video sections of the course and personally answering all questions of the exam. I also understand that a criminal and sex offender background check will be attached with this certificate.</p>
							<p className="text-left" style={signLines}>Sponsor Signature ____________________________________________________ Date: _________________</p>
							<p className="text-justify" style={signLines}>This is to certify that I have screened the above named person and verify they are of good Christian character, free from illegal, immoral, improper behavior, and have the integrity to work with minors. We assume full responsibility for each person named above serving as an adult supervisor working with minors. We understand that our church is legally responsible for the proper selection of adult supervisors and for their actions in this capacity. To our knowledge the above named person has never been convicted of crimes committed against minors. We are confident that each will reflect the love of Christ to others who are participating in the camp experience. I also certify that the person named above has participated in the one hour Child Protection Training class and passed the test. I have obtained a criminal and sex offender background check on the person listed above, and attached the results to this certificate.</p>
							<p className="text-left" style={signLines}>Minister Signature ____________________________________________________ Date: _________________</p>
							<h3 className="text-center" style={filingInto} >This certificate is to be kept on file at the Camp or Conference Center you are attending for the duration of your stay.</h3>
							<h3 className="text-center" style={curriculum}>Training Curriculum and Test Material Produced by</h3>
							<h3 className="text-center" style={texasCampManagers}>Texas Baptist Camp Managers Association</h3>
						</section>
					</section>
				</div>
			);
		} else {
			return (
				<div className='container'>
					<div className='row hidden-print'>
						<div className='col-xs-12'>
							<h2 className='text-justify'>No record found. Return to Look Up.</h2>
							<Link to='/LookUp' className='btn btn-success btn-lg'>Return</Link>
						</div>
					</div>
				</div>
			);
		}
	}
}