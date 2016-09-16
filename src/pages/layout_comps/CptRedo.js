import React from 'react';
import {Button} from 'react-bootstrap';

import WrongMark from './WrongMark';

const wrongStyling = {
					color: 'red',
				  	fontSize: '80px'
				};

const CptRedo = ({path}) => 
	<div>
		<div className='row'>
			<div className='col-sm-offset-2 col-sm-2'>
				<WrongMark styling={wrongStyling}/>
			</div>
			<div className='col-sm-6'>
				<h1>							
					<strong>Sorry. Please try again.</strong>
				</h1>
			</div>
		</div>
		<div className='row'>
			<div className='col-sm-offset-2 col-sm-8'>
				<p className='text-justify'>A passing grade of at least 70% is required for successful completion of the training class. You may retake the class as many times as needed to reach a passing score.</p>
			</div>
		</div>
		<div className='row'>
			<div className='col-sm-offset-4 col-sm-4'>
				<Button bsStyle="success" bsSize="large" active block onClick={path}>Reset Training</Button>
			</div>
		</div>
	</div>

export default CptRedo;