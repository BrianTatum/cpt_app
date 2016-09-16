import React from 'react';
import {ListGroupItem} from 'react-bootstrap';

import AnswerChoice from './AnswerChoice';
import CorrectMark from './CorrectMark';
import WrongMark from './WrongMark';

export default class TestQuestion extends React.Component {
	render(){
		const choices = this._buildChoices(this.props.choices);
		const mark = this._chooseMark();
		return (
			<ListGroupItem>
				<lable><strong>{this.props.question}</strong></lable>
				<div className='row'>
				<div className='col-xs-1'>
					{mark}
				</div>
				<div className='col-xs-11'>
					{choices}
				</div>
				</div>
			</ListGroupItem>
		);
	}

	_buildChoices(choices) {
		return choices.map((choice,i) => {
			return <AnswerChoice text={choice}
								 change={this._change.bind(this)}
								 number={i}
								 name={this.props.answerName}
								 key={i}/>
		}
		);
	}

	_change(e){
        const val = e.target.value;
        this.props.answer(this.props.arrayIndex,val);
    }

    _chooseMark() {
    	if (this.props.graded){
    		if (this.props.mark) {
    			const styling = {
					color: 'green',
				  	fontSize: '45px'
				}
    			return (<CorrectMark styling={styling}/>);
    		} else {
    			const styling = {
					color: 'red',
				  	fontSize: '45px'
				}
				return (<WrongMark styling={styling}/>);
			}
		} else {
			return (<span />);
		}
    }
}