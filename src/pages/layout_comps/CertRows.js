import React from 'react';

export default class CertRows extends React.Component {
	render() {
		const RowStyle = {marginLeft: '0px'};
		const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt', 'Oct', 'Nov', 'Dec'];
		const certDate = new Date(this.props.date);
		return (
			<tr className='row' style={RowStyle}>
				<td className='col-md-4 col-xs-3 text-left'>{this.props.Name}</td>
				<td className='col-md-3 col-xs-3 text-left'>{months[certDate.getMonth()]}, {certDate.getFullYear()}</td>
				<td className='col-md-3 col-xs-3 text-left truncate'>{this.props.email}</td>
				<td className='col-md-2 col-xs-3'><a href='#' className='btn btn-success'>Print</a></td>
			</tr>
		);
	}
}