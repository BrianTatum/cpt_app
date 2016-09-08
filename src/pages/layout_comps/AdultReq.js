import React from 'react';
import{ Panel } from 'react-bootstrap';

const AdultReq = () => 
	<Panel header={(<strong>Adult Requirements</strong>)} className='text-center nopadding-xs'>
        <ol className='RegList'>
            <li className='text-justify'>Submit printed copies of results from criminal and sex offender background checks for the current year.</li>
            <li className='text-justify'>Complete a state-approved training and examination program on sexual abuse and child molestation and submit a valid certificate of completion.</li>
        </ol>
    </Panel>

export default AdultReq;