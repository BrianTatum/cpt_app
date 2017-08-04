import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import {renderIntoDocument} from 'react-addons-test-utils';
import Welcome from '../pages/Welcome.js';

describe('Welcome Component', () => {
	it('should render', () => {
		const item = renderIntoDocument(
			<Welcome />
		);
		//Assertions
		expect(item).toExist();
	})
});