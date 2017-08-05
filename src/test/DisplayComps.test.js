import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import {renderIntoDocument} from 'react-addons-test-utils';
import Welcome from '../pages/Welcome.js';
import CertRows from '../pages/layout_comps/CertRows';
import Cert from '../pages/Cert'

describe('Display Components:', () => {
	//Render tests for display components with state.
	it('should render Welcome', () => {
		const item = renderIntoDocument(
			<Welcome />
		);
		//Assertions
		expect(item).toExist();
	});

	it('should render CertRows', () => {
		const item = renderIntoDocument(
			<table>
				<tbody>
					<CertRows  fName= {'Brian'}
				               lName= {'Tatum'}
				               date= {'2015/1/15'}
				               email= {'brian@etbe.org'}
				               arrayIndex= {1}
				               key= {1} />
				</tbody>
			</table>
		);
		//Assertions
		expect(item).toExist();
	});

});