import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import AdultReq from '../pages/layout_comps/AdultReq';
import AnswerChoice from '../pages/layout_comps/AnswerChoice';
import CorrectMark from '../pages/layout_comps/CorrectMark';
import CptRedo from '../pages/layout_comps/CptRedo';
import CreditSign from '../pages/layout_comps/creditSign';
import NavHeader from '../pages/layout_comps/NavHeader';
import PageFooter from '../pages/layout_comps/PageFooter';
import ScorePanel from '../pages/layout_comps/ScorePanel';
import WrongMark from '../pages/layout_comps/WrongMark';

describe('Display Components', () => {
	//Render tests for all statless and functionless comppnents
	it('should render AdultReq', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render( <AdultReq />);
		const output = renderer.getRenderOutput();
		//Assertions
		expect(output).toExist();
	});

	it('should render AnswerChoice', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render( <AnswerChoice	text = {'Answer choice text'}
										change = { () => {return true;}}
										number = {1}
										name = {'Answer Name'} />);
		const output = renderer.getRenderOutput();
		//Assertions
		expect(output).toExist();
	});

	it('should render CorrectMark', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render( <CorrectMark  />);
		const output = renderer.getRenderOutput();
		//Assertions
		expect(output).toExist();
	});

	it('should render CptRedo', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render( <CptRedo path={() => {return true;}} />);
		const output = renderer.getRenderOutput();
		//Assertions
		expect(output).toExist();
	});

	it('should render CreditSign', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render( <CreditSign />);
		const output = renderer.getRenderOutput();
		//Assertions
		expect(output).toExist();
	});

	it('should render NavHeader', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render( <NavHeader />);
		const output = renderer.getRenderOutput();
		//Assertions
		expect(output).toExist();
	});

	it('should render PageFooter', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render( <PageFooter />);
		const output = renderer.getRenderOutput();
		//Assertions
		expect(output).toExist();
	});

	it('should render ScorePanel', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render( <PageFooter	score = {95}
										section = {1}
										totalSections = {4}
										time = {'3:00'} />);
		const output = renderer.getRenderOutput();
		//Assertions
		expect(output).toExist();
	});

	it('should render WrongMark', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render( <WrongMark  />);
		const output = renderer.getRenderOutput();
		//Assertions
		expect(output).toExist();
	});
});