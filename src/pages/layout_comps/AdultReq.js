import React from 'react';
import{ Panel } from 'react-bootstrap';

export default class AdultReq extends React.Component {
	render(){
		const panelTitle = (<strong>Adult Requirements</strong>);
		return (
			<Panel header={panelTitle} className='text-center'>
              <ol>
                <li className='text-justify'>Submit printed copies of results from criminal and sex offender background checks for the current year.</li>
                <li className='text-justify'>Complete a state-approved training and examination program on sexual abuse and child molestation and submit a valid certificate of completion.</li>
              </ol>
            </Panel>
		);
	}
}