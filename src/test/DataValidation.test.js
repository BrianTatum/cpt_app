import expect from 'expect';
import * as dataValidation from '../pages/modules/DataValidation';

describe ('Data vilation module:', () => {
	it('Should vilidate regular email', () => {
		const goodEmail = dataValidation.emailValid('brianttatum@gmail.com');
		const badEmail = dataValidation.emailValid('dfsadfas@fdsa.ert');
		
		expect(goodEmail).toEqual(true);
		expect(badEmail).toEqual(false);
	});

	it('Should vilidate subdomain email', () => {
		const goodEmail = dataValidation.emailValid('gyoung1@gt.rr.com');
		const badEmail = dataValidation.emailValid('dfsadfas@fdsa.ert');
		
		expect(goodEmail).toEqual(true);
		expect(badEmail).toEqual(false);
	});
});