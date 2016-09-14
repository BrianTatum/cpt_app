import React from 'react';
import {PanelGroup, Panel, ListGroup} from 'react-bootstrap';
import jQuery from 'jquery';

import ScorePanel from './layout_comps/ScorePanel';
import globalData from './layout_comps/globalData';
import TestQuestion from './layout_comps/TestQuestion'

export default class CptClass extends React.Component {
	constructor() {
	    super();
	    this.state = {
	      activeKey: '1',
	      cptClass: globalData.cptClass,
	    };
	  }

	handleSelect(activeKey) {
    	this.setState({ activeKey });
	}

	componentWillMount() {
		this._fetchCptClass();
	    this.setState({	curentSection: 0,
	    				cptScore: 0,
	      				correctAnswers: 0,
	      				totalQuestion: 0,});
	  }

	render(){
		const questions = this._getQuestions(this.state.cptClass[this.state.curentSection].questionList, this.state.curentSection);
		const displaySubmitButton = this._displaySubmitButton();
		const displayNextButton = this._displayNextButton();
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-md-3 col-xs-12'>
						<h1 className='text-md-right text-xs-center'>
							Section {this.state.curentSection + 1}:
						</h1>
					</div>
					<div className='col-md-9 col-xs-12'>
						<h2 className='text-md-left text-xs-center'>
							{this.state.cptClass[this.state.curentSection].title}
						</h2>
					</div>
				</div>		
				<div className='row'>
					<div className='col-md-9'>
						<PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)} accordion>
					        <Panel header="Section Video" eventKey="1">Panel 1 content</Panel>
					    	<Panel header="Test Questions" eventKey="2">
					    		<h3 className='text-justify'>Please answer all test questions and then submit answers to contenue.</h3>
					    		<form id="testForm" className="" onSubmit={this._handleSubmit.bind(this)}>
					    			<ListGroup>
    									{questions}
    								</ListGroup>
    								{displaySubmitButton}
					    		</form>
					    		{displayNextButton}
					    	</Panel>
					    </PanelGroup>
					</div>
					<div className='col-md-3'>
						<ScorePanel section={this.state.curentSection + 1} score={this.state.cptScore} totalSections={this.state.cptClass.length}  />
					</div>
				</div>
			</div>
		);
	}

	_getQuestions(questions, section) {
		return questions.map((quest,i) => {
			return <TestQuestion question={quest.questText}
								 choices={quest.answers}
								 answerName={section+'question'+i}
							 	 answer={this._recordAnswer.bind(this)}
							 	 arrayIndex={i}
							 	 responce={quest.responce}
							 	 mark={quest.markCorrect}
							 	 graded={this.state.cptClass[this.state.curentSection].graded}
								 key={i} />
		}
		);
	}
	
	_recordAnswer(question,answer){
		const stateCopy = Object.assign({}, this.state);
		stateCopy.cptClass[this.state.curentSection].questionList[question].responce=answer;
		this.setState(stateCopy);
		//this.setState({cptClass[this.state.curentSection].questionList[question].responce: answer});
	}

	_displaySubmitButton() {
		if (this.state.cptClass[this.state.curentSection].graded) {
			return <span />
		} else {
			return <button className='btn btn-success btn-lg active pull-right' type="submit">Submit</button>
		}
	}
	_displayNextButton() {
		if (this.state.cptClass[this.state.curentSection].graded) {
			return <button className='btn btn-success btn-lg active pull-right' onClick={this._changeSection.bind(this)}>Next Section</button>
		} else {
			return <span />
		}
	}

	_handleSubmit(event) {
		event.preventDefault();
		const stateCopy = Object.assign({}, this.state);
		stateCopy.cptClass[this.state.curentSection].questionList.forEach ((q) => {
			if (q.correct == q.responce) {
				q.markCorrect = true;
				stateCopy.correctAnswers += 1;
			}
			stateCopy.totalQuestion += 1;
		});
		stateCopy.cptScore= Math.round((stateCopy.correctAnswers/stateCopy.totalQuestion)*100);
		stateCopy.cptClass[this.state.curentSection].graded=true;
		this.setState(stateCopy);
	}

	_changeSection() {
		if (this.state.curentSection < this.state.cptClass.length - 1) {
			const nextSection = this.state.curentSection + 1;
		    this.setState({	curentSection: nextSection,
		    				activeKey: '1'});
		    jQuery('#testForm').trigger('reset');;
		} else {
			alert ('End of CPT Class');
		}
	}

	_fetchCptClass() {
		jQuery.ajax({
	      method: 'GET',
	      url: 'cptclass.json',
	      dataType: 'json',
	      success: (cptClass) => {
	      	this.setState({cptClass});
	      },
	      error: () => {alert('Data Fetching Failed.')}
	    });
	}
}