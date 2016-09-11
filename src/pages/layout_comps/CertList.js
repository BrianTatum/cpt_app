import React from 'react';
import{ Panel } from 'react-bootstrap';

import CertRows from './CertRows';

export default class CertList extends React.Component {
	render() {
		const RowStyle = {marginLeft: '0px'};
		const panelTitle = (<strong>Certification List</strong>);
		const certs = this._getCerts();
		return (
			<Panel header={panelTitle} className='text-center nopadding-xs'>
				<table className='table table-hover table-fixed'>
					<thead>
						<tr className='row' style={RowStyle}>
							<th className='col-md-4 col-xs-3'>Name</th>
							<th className='col-md-3 col-xs-3'>Date</th>
							<th className='col-md-3 col-xs-3'>Email</th>
							<th className='col-md-2 col-xs-3'></th>
						</tr>
					</thead>
					<tbody>
						{certs}
					</tbody>
				</table>
			</Panel>
		);
	}

	_getCerts(){
		return this.props.cptCerts.map((certs, i) => {
	      return <CertRows
	               fName={certs.FirstName}
	               lName={certs.LastName}
	               date={certs.created_at}
	               email={certs.Email}
	               arrayIndex={i}
	               key={certs.id} />
	    });
	}
}
