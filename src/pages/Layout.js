import React from 'react';

import NavHeader from './layout_comps/NavHeader';
import PageFooter from './layout_comps/PageFooter';

export default class Layout extends React.Component {
	render(){
		return (
			<div className='bodyDown'>
				<NavHeader />
								
				{this.props.children}

				<PageFooter />
			</div>
		);
	}
}