import React from 'react';

const radioSize = {width: '25px', height: '25px', marginTop: '0'};
const noPaddingLeft = {paddingLeft: '0'};

const AnswerChoice = ({text, change, number, name}) =>
	<div className='row'>
	<div className="form-group">
		<div className='col-xs-2 col-sm-1'>
			<input style={radioSize} type="radio" onChange={change} value={number} name={name}/>
		</div>
		<div className='col-xs-10 col-sm-11' style={noPaddingLeft}>
			<lable className='text-justify'>{text}</lable>
		</div>
	</div>
	</div>

export default AnswerChoice;