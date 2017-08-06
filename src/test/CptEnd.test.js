import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import {renderIntoDocument} from 'react-addons-test-utils';
import CptEnd from '../pages/layout_comps/CptEnd';

describe('CptEnd component:', () => {
	//Render tests for display components with state.
	it('should render CptEnd', () => {
		const item = renderIntoDocument(
			<CptEnd />
		);
		//Assertions
		expect(item).toExist();
	});
});