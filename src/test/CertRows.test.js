import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import {renderIntoDocument} from 'react-addons-test-utils';
import CertRows from '../pages/layout_comps/CertRows';

describe('CertRows Component', () => {
	it('should render', () => {
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
	})
});