import React from 'react';

const AnswerChoice = ({text, change, number, name}) =>
	<div className="form-group">
		<input type="radio" onChange={change} value={number} name={name}/>
		<lable>{text}</lable>
	</div>

export default AnswerChoice;